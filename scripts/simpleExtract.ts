import fs from 'fs';
import path from 'path';

interface ExtractedContent {
  id: string;
  language: string;
  title: string;
  description: string;
  content: string;
  slug: string;
  type: 'page' | 'blog' | 'rto-qualification';
  filePath: string;
}

class SimpleContentExtractor {
  private baseDir = path.join(process.cwd(), 'multilingual');
  private extractedContent: ExtractedContent[] = [];

  private cleanHtml(html: string): string {
    return html
      .replace(/<script[^>]*>.*?<\/script>/gs, '')
      .replace(/<style[^>]*>.*?<\/style>/gs, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  private extractTitle(html: string): string {
    const titleMatch = html.match(/<title[^>]*>(.*?)<\/title>/i);
    return titleMatch ? this.cleanHtml(titleMatch[1]) : '';
  }

  private extractDescription(html: string): string {
    const descMatch = html.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"/i);
    return descMatch ? descMatch[1] : '';
  }

  private extractContent(html: string): string {
    const bodyMatch = html.match(/<body[^>]*>(.*?)<\/body>/is);
    if (!bodyMatch) return '';

    let content = bodyMatch[1];
    content = content.replace(/<nav[^>]*>.*?<\/nav>/gis, '');
    content = content.replace(/<header[^>]*>.*?<\/header>/gis, '');
    content = content.replace(/<footer[^>]*>.*?<\/footer>/gis, '');
    
    return this.cleanHtml(content);
  }

  private generateSlug(title: string): string {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }

  private rebrandContent(content: string): string {
    return content
      .replace(/Coursebox/g, 'OponMeta')
      .replace(/coursebox/g, 'OponMeta')
      .replace(/COURSEBOX/g, 'OPONMETA');
  }

  private detectLanguage(filePath: string): string {
    const pathParts = filePath.split(path.sep);
    const langDir = pathParts[pathParts.length - 2]; // Get parent directory name
    return langDir;
  }

  private detectContentType(filePath: string): 'page' | 'blog' | 'rto-qualification' {
    if (filePath.includes('rto-materials')) {
      return 'rto-qualification';
    }
    
    const filename = path.basename(filePath, '.html');
    if (filename === 'blog' || filename.includes('blog')) {
      return 'blog';
    }
    
    return 'page';
  }

  async extractAllContent(): Promise<void> {
    console.log('🚀 Starting content extraction from multilingual folder...');
    
    const languageDirs = ['de', 'es', 'fr', 'it', 'ja', 'ko', 'nl', 'pt', 'zh'];
    
    for (const langDir of languageDirs) {
      const fullPath = path.join(this.baseDir, langDir);
      
      if (!fs.existsSync(fullPath)) {
        console.log(`⚠️  Language directory not found: ${langDir}`);
        continue;
      }
      
      console.log(`🌍 Processing ${langDir}...`);
      
      const files = await this.getHtmlFiles(fullPath);
      let processedCount = 0;
      
      for (const filePath of files) {
        try {
          const content = fs.readFileSync(filePath, 'utf-8');
          const relativePath = path.relative(this.baseDir, filePath);
          
          const extracted: ExtractedContent = {
            id: `${langDir}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            language: langDir,
            title: this.rebrandContent(this.extractTitle(content)),
            description: this.rebrandContent(this.extractDescription(content)),
            content: this.rebrandContent(this.extractContent(content)),
            slug: this.generateSlug(this.extractTitle(content)),
            type: this.detectContentType(filePath),
            filePath: relativePath
          };
          
          this.extractedContent.push(extracted);
          processedCount++;
          
        } catch (error) {
          console.error(`❌ Error processing ${filePath}:`, error);
        }
      }
      
      console.log(`   ✅ Processed ${processedCount} files for ${langDir}`);
    }
    
    // Process RTO materials
    await this.extractRTOMaterials();
    
    // Save extracted content
    await this.saveExtractedContent();
    
    console.log(`✅ Extraction completed! Processed ${this.extractedContent.length} files total.`);
  }

  private async extractRTOMaterials(): Promise<void> {
    console.log('🏭 Processing RTO materials...');
    
    const rtoDir = path.join(this.baseDir, 'rto-materials');
    if (!fs.existsSync(rtoDir)) {
      console.log('⚠️  RTO materials directory not found');
      return;
    }
    
    const files = await this.getHtmlFiles(rtoDir);
    let processedCount = 0;
    
    for (const filePath of files) {
      try {
        const content = fs.readFileSync(filePath, 'utf-8');
        const relativePath = path.relative(this.baseDir, filePath);
        
        const extracted: ExtractedContent = {
          id: `rto-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          language: 'en', // RTO materials are typically in English
          title: this.rebrandContent(this.extractTitle(content)),
          description: this.rebrandContent(this.extractDescription(content)),
          content: this.rebrandContent(this.extractContent(content)),
          slug: this.generateSlug(this.extractTitle(content)),
          type: 'rto-qualification',
          filePath: relativePath
        };
        
        this.extractedContent.push(extracted);
        processedCount++;
        
      } catch (error) {
        console.error(`❌ Error processing RTO file ${filePath}:`, error);
      }
    }
    
    console.log(`   ✅ Processed ${processedCount} RTO qualification files`);
  }

  private async getHtmlFiles(dir: string): Promise<string[]> {
    const files: string[] = [];
    
    const items = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const item of items) {
      const fullPath = path.join(dir, item.name);
      
      if (item.isDirectory()) {
        const subFiles = await this.getHtmlFiles(fullPath);
        files.push(...subFiles);
      } else if (item.isFile() && item.name.endsWith('.html')) {
        if (!item.name.endsWith('.orig')) {
          files.push(fullPath);
        }
      }
    }
    
    return files;
  }

  private async saveExtractedContent(): Promise<void> {
    const outputPath = path.join(process.cwd(), 'data', 'extracted-content.json');
    
    // Ensure data directory exists
    const dataDir = path.dirname(outputPath);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    const output = {
      metadata: {
        extractedAt: new Date().toISOString(),
        totalFiles: this.extractedContent.length,
        languages: [...new Set(this.extractedContent.map(c => c.language))],
        types: [...new Set(this.extractedContent.map(c => c.type))]
      },
      content: this.extractedContent
    };
    
    fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
    console.log(`💾 Saved extracted content to ${outputPath}`);
  }
}

// Run the extraction
async function main() {
  const extractor = new SimpleContentExtractor();
  await extractor.extractAllContent();
}

main().catch(console.error); 