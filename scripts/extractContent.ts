import fs from 'fs';
import path from 'path';
import { contentService } from '../src/services/contentService';
import { Language, LANGUAGES } from '../src/types/content';

interface FileInfo {
  path: string;
  content: string;
  language: Language;
  type: 'blog' | 'page' | 'rto-qualification';
}

class ContentExtractionManager {
  private baseDir = path.join(process.cwd(), 'multilingual');
  private processedFiles: string[] = [];
  private errors: Array<{ file: string; error: string }> = [];

  async extractAllContent(): Promise<void> {
    console.log('🚀 Starting comprehensive content extraction for OponMeta...');
    
    try {
      // Extract content from all language folders
      await this.extractLanguageContent();
      
      // Extract RTO materials
      await this.extractRTOMaterials();
      
      // Generate statistics
      await this.generateStats();
      
      // Create translation mappings
      await this.createTranslationMappings();
      
      console.log('✅ Content extraction completed successfully!');
      console.log(`📊 Processed ${this.processedFiles.length} files`);
      
      if (this.errors.length > 0) {
        console.log(`⚠️  ${this.errors.length} files had errors:`);
        this.errors.forEach(error => {
          console.log(`   - ${error.file}: ${error.error}`);
        });
      }
      
    } catch (error) {
      console.error('❌ Content extraction failed:', error);
      throw error;
    }
  }

  private async extractLanguageContent(): Promise<void> {
    console.log('📚 Extracting content from language folders...');
    
    for (const [langCode, langInfo] of Object.entries(LANGUAGES)) {
      const language = langCode as Language;
      const langDir = path.join(this.baseDir, langCode);
      
      if (!fs.existsSync(langDir)) {
        console.log(`⚠️  Language directory not found: ${langDir}`);
        continue;
      }
      
      console.log(`🌍 Processing ${langInfo.name} (${langCode})...`);
      
      const files = await this.getHtmlFiles(langDir);
      let processedCount = 0;
      
      for (const filePath of files) {
        try {
          const content = fs.readFileSync(filePath, 'utf-8');
          const relativePath = path.relative(this.baseDir, filePath);
          
          // Determine content type based on filename
          const contentType = this.determineContentType(filePath);
          
          // Process the file
          await contentService.processHtmlFile(relativePath, content);
          
          this.processedFiles.push(relativePath);
          processedCount++;
          
        } catch (error) {
          this.errors.push({
            file: filePath,
            error: error instanceof Error ? error.message : 'Unknown error'
          });
        }
      }
      
      console.log(`   ✅ Processed ${processedCount} files for ${langInfo.name}`);
    }
  }

  private async extractRTOMaterials(): Promise<void> {
    console.log('🏭 Extracting RTO materials...');
    
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
        
        // Process RTO qualification
        await contentService.processHtmlFile(relativePath, content);
        
        this.processedFiles.push(relativePath);
        processedCount++;
        
      } catch (error) {
        this.errors.push({
          file: filePath,
          error: error instanceof Error ? error.message : 'Unknown error'
        });
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
        // Recursively get files from subdirectories
        const subFiles = await this.getHtmlFiles(fullPath);
        files.push(...subFiles);
      } else if (item.isFile() && item.name.endsWith('.html')) {
        // Skip .orig files
        if (!item.name.endsWith('.orig')) {
          files.push(fullPath);
        }
      }
    }
    
    return files;
  }

  private determineContentType(filePath: string): 'blog' | 'page' | 'rto-qualification' {
    const filename = path.basename(filePath, '.html');
    
    if (filePath.includes('rto-materials')) {
      return 'rto-qualification';
    }
    
    if (filename === 'blog' || filename.includes('blog')) {
      return 'blog';
    }
    
    return 'page';
  }

  private async generateStats(): Promise<void> {
    console.log('📊 Generating content statistics...');
    
    const stats = await contentService.getStats();
    
    console.log('\n📈 Content Statistics:');
    console.log(`   Total content: ${stats.total}`);
    console.log('\n   By Type:');
    Object.entries(stats.byType).forEach(([type, count]) => {
      if (count > 0) {
        console.log(`     ${type}: ${count}`);
      }
    });
    
    console.log('\n   By Language:');
    Object.entries(stats.byLanguage).forEach(([lang, count]) => {
      if (count > 0) {
        const langInfo = LANGUAGES[lang as Language];
        console.log(`     ${langInfo.name} (${lang}): ${count}`);
      }
    });
    
    console.log('\n   By Status:');
    Object.entries(stats.byStatus).forEach(([status, count]) => {
      console.log(`     ${status}: ${count}`);
    });
    
    console.log('\n   By Category:');
    Object.entries(stats.byCategory).forEach(([category, count]) => {
      console.log(`     ${category}: ${count}`);
    });
  }

  private async createTranslationMappings(): Promise<void> {
    console.log('🔗 Creating translation mappings...');
    
    // Get all content
    const allContent = await contentService.find();
    
    // Group by slug to find translations
    const contentBySlug = new Map<string, MultilingualContent[]>();
    
    allContent.forEach(content => {
      const key = content.slug;
      if (!contentBySlug.has(key)) {
        contentBySlug.set(key, []);
      }
      contentBySlug.get(key)!.push(content);
    });
    
    // Create translation mappings
    let mappingCount = 0;
    
    for (const [slug, contents] of contentBySlug.entries()) {
      if (contents.length > 1) {
        // Multiple languages for the same content
        const primaryContent = contents[0];
        
        for (let i = 1; i < contents.length; i++) {
          const translatedContent = contents[i];
          await contentService.setTranslation(
            primaryContent.id,
            translatedContent.language,
            translatedContent.id
          );
          mappingCount++;
        }
      }
    }
    
    console.log(`   ✅ Created ${mappingCount} translation mappings`);
  }

  async exportContentData(): Promise<void> {
    console.log('💾 Exporting content data...');
    
    const allContent = await contentService.find();
    const stats = await contentService.getStats();
    
    const exportData = {
      metadata: {
        exportedAt: new Date().toISOString(),
        totalContent: allContent.length,
        stats
      },
      content: allContent
    };
    
    const exportPath = path.join(process.cwd(), 'data', 'exported-content.json');
    
    // Ensure data directory exists
    const dataDir = path.dirname(exportPath);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    fs.writeFileSync(exportPath, JSON.stringify(exportData, null, 2));
    
    console.log(`   ✅ Content exported to ${exportPath}`);
  }

  async generateSitemap(): Promise<void> {
    console.log('🗺️  Generating sitemap...');
    
    const allContent = await contentService.find({ status: 'published' });
    
    const sitemapEntries = allContent.map(content => ({
      url: `/${content.language}/${content.type}/${content.slug}`,
      lastmod: content.updatedAt,
      changefreq: content.type === 'blog' ? 'weekly' : 'monthly',
      priority: content.type === 'page' ? 0.8 : 0.6
    }));
    
    const sitemap = {
      urlset: {
        $: {
          xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9'
        },
        url: sitemapEntries.map(entry => ({
          loc: entry.url,
          lastmod: entry.lastmod,
          changefreq: entry.changefreq,
          priority: entry.priority
        }))
      }
    };
    
    const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
    
    // Ensure public directory exists
    const publicDir = path.dirname(sitemapPath);
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    
    // Convert to XML (simplified)
    const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries.map(entry => `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
    
    fs.writeFileSync(sitemapPath, xmlContent);
    
    console.log(`   ✅ Sitemap generated at ${sitemapPath}`);
  }
}

// Main execution
async function main() {
  const manager = new ContentExtractionManager();
  
  try {
    // Initialize content service
    await contentService.initialize();
    
    // Extract all content
    await manager.extractAllContent();
    
    // Export data
    await manager.exportContentData();
    
    // Generate sitemap
    await manager.generateSitemap();
    
    console.log('\n🎉 Content extraction and processing completed successfully!');
    console.log('\n📋 Next steps:');
    console.log('   1. Review the extracted content in the data/exported-content.json file');
    console.log('   2. Update the React components to use the new content service');
    console.log('   3. Test the multilingual functionality');
    console.log('   4. Deploy the updated platform');
    
  } catch (error) {
    console.error('❌ Script execution failed:', error);
    process.exit(1);
  }
}

// Run the script if called directly
if (process.argv[1] === new URL(import.meta.url).pathname) {
  main();
}

export { ContentExtractionManager }; 