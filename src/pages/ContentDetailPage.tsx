import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { multilingualContentService } from '../utils/multilingualContent';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { ArrowLeft, Globe, FileText, BookOpen, GraduationCap, Share2, Bookmark } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function ContentDetailPage() {
  const { language, type, slug } = useParams();
  const navigate = useNavigate();

  // Find the content item
  const content = multilingualContentService.getContentBySlug(slug!, language!, type as any);

  useEffect(() => {
    if (!content) {
      navigate('/multilingual-content', { replace: true });
    }
  }, [content, navigate]);

  if (!content) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Content Not Found</h1>
          <p className="text-gray-600 mb-6">The requested content could not be found.</p>
          <Link to="/multilingual-content">
            <Button>Back to Content Library</Button>
          </Link>
        </div>
      </div>
    );
  }

  const getTypeIcon = (contentType: string) => {
    switch (contentType) {
      case 'page': return <FileText className="w-4 h-4" />;
      case 'blog': return <BookOpen className="w-4 h-4" />;
      case 'rto-qualification': return <GraduationCap className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const getTypeColor = (contentType: string) => {
    switch (contentType) {
      case 'page': return 'bg-blue-100 text-blue-800';
      case 'blog': return 'bg-green-100 text-green-800';
      case 'rto-qualification': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getLanguageName = (lang: string) => {
    const languageNames: Record<string, string> = {
      'en': 'English',
      'de': 'German',
      'fr': 'French',
      'es': 'Spanish',
      'it': 'Italian',
      'pt': 'Portuguese',
      'zh': 'Chinese',
      'ja': 'Japanese',
      'ko': 'Korean',
      'nl': 'Dutch'
    };
    return languageNames[lang] || lang.toUpperCase();
  };

  const formatReadingTime = (contentLength: number) => {
    const wordsPerMinute = 200;
    const words = contentLength / 5; // Rough estimate
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  return (
    <>
      <Helmet>
        <title>{content.title} | Our Platform</title>
        <meta name="description" content={content.description} />
        <meta property="og:title" content={content.title} />
        <meta property="og:description" content={content.description} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content={content.language} />
        <meta property="og:locale:alternate" content={content.language} />
        <link rel="alternate" hrefLang={content.language} href={window.location.href} />
        <meta name="language" content={content.language} />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto p-6">
          {/* Back Button */}
          <div className="mb-6">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
          </div>

          {/* Content Header */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className={getTypeColor(content.type)}>
                      <div className="flex items-center gap-1">
                        {getTypeIcon(content.type)}
                        {content.type.replace('-', ' ')}
                      </div>
                    </Badge>
                    <Badge variant="outline">
                      <div className="flex items-center gap-1">
                        <Globe className="w-3 h-3" />
                        {getLanguageName(content.language)}
                      </div>
                    </Badge>
                  </div>
                  <CardTitle className="text-3xl font-bold text-gray-900 mb-3">
                    {content.title}
                  </CardTitle>
                  {content.description && (
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {content.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Content Meta */}
              <div className="flex items-center justify-between pt-4 border-t">
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <span>{formatReadingTime(content.content.length)}</span>
                  <span>•</span>
                  <span>Content ID: {content.id}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Bookmark className="w-4 h-4 mr-2" />
                    Save
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Content Body */}
          <Card>
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                <div 
                  className="whitespace-pre-wrap leading-relaxed text-gray-800"
                  dangerouslySetInnerHTML={{ 
                    __html: content.content
                      .replace(/\n/g, '<br>')
                      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                      .replace(/\*(.*?)\*/g, '<em>$1</em>')
                  }}
                />
              </div>
            </CardContent>
          </Card>

          {/* Related Content */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Related Content
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {multilingualContentService.getRelatedContent(content, 4).map((related) => (
                <Card key={related.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className={getTypeColor(related.type)}>
                        {related.type.replace('-', ' ')}
                      </Badge>
                      <Badge variant="outline">
                        {related.language.toUpperCase()}
                      </Badge>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {related.title}
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                      {related.description}
                    </p>
                    <Link 
                      to={`/content/${related.language}/${related.type}/${related.slug}`}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Read More →
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 