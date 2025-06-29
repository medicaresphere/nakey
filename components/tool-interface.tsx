'use client';

import React from 'react';
import Link from 'next/link';
import { AITool } from '@/lib/database.types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { 
  ExternalLink, 
  Star, 
  Eye,
  Smartphone,
  Monitor,
  Github,
  Apple,
  CheckCircle,
  Crown,
  Zap,
  Heart
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface ToolInterfaceProps {
  tool: AITool;
  similarTools?: AITool[];
  className?: string;
}

export function ToolInterface({ tool, similarTools = [], className }: ToolInterfaceProps) {
  const getPricingColor = (pricing: string) => {
    switch (pricing.toLowerCase()) {
      case 'free':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'freemium':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'paid':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'subscription':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default:
        return 'bg-zinc-500/20 text-zinc-400 border-zinc-500/30';
    }
  };

  const getPricingIcon = (pricing: string) => {
    switch (pricing.toLowerCase()) {
      case 'free':
        return <Heart className="w-4 h-4" />;
      case 'freemium':
        return <Zap className="w-4 h-4" />;
      case 'paid':
        return <Crown className="w-4 h-4" />;
      case 'subscription':
        return <Crown className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const formatPrice = (pricing: string) => {
    switch (pricing.toLowerCase()) {
      case 'free':
        return 'Free';
      case 'freemium':
        return 'Free + Premium';
      case 'paid':
        return '$19.99';
      case 'subscription':
        return '$5.99/month';
      default:
        return 'Contact for pricing';
    }
  };

  return (
    <div className={cn('max-w-6xl mx-auto space-y-8', className)}>
      {/* Main Tool Card */}
      <Card className="glass-card border-white/10 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Tool Image */}
          <div className="relative">
            {tool.screenshot_url && (
              <div className="aspect-video bg-gradient-to-br from-zinc-800 to-zinc-900 overflow-hidden rounded-lg">
                <img
                  src={tool.screenshot_url}
                  alt={tool.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                {/* Overlay with tool logo */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-4xl font-bold text-white mb-2">{tool.name}</h2>
                    <div className="flex items-center justify-center gap-2">
                      {tool.is_nsfw && (
                        <>
                          <Badge className="bg-pink-500 text-white">Editor's Pick</Badge>
                          <Badge className="bg-purple-500 text-white">Personalized</Badge>
                          <Badge className="bg-blue-500 text-white">Realistic</Badge>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Side - Tool Information */}
          <CardContent className="p-8 space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">{tool.name}</h1>
              <p className="text-zinc-400 text-sm uppercase tracking-wider">{tool.url.replace('https://', '').replace('http://', '')}</p>
            </div>

            {/* Platform Compatibility */}
            <div>
              <h3 className="text-white font-semibold mb-3">Platform Compatibility:</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-zinc-400">
                  <div className="w-6 h-6 bg-zinc-700 rounded flex items-center justify-center">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <span className="text-sm">Android</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-400">
                  <div className="w-6 h-6 bg-zinc-700 rounded flex items-center justify-center">
                    <Apple className="w-4 h-4" />
                  </div>
                  <span className="text-sm">iOS</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-400">
                  <div className="w-6 h-6 bg-zinc-700 rounded flex items-center justify-center">
                    <Monitor className="w-4 h-4" />
                  </div>
                  <span className="text-sm">Windows PC</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-400">
                  <div className="w-6 h-6 bg-zinc-700 rounded flex items-center justify-center">
                    <Github className="w-4 h-4" />
                  </div>
                  <span className="text-sm">GitHub</span>
                </div>
              </div>
            </div>

            {/* Quick Overview */}
            <div>
              <h3 className="text-white font-semibold mb-3">Quick Overview:</h3>
              <p className="text-zinc-300 leading-relaxed">
                {tool.description}
              </p>
            </div>

            {/* Pricing */}
            <div>
              <h3 className="text-white font-semibold mb-3">Pricing:</h3>
              <div className="text-2xl font-bold text-white">
                {formatPrice(tool.pricing)}
              </div>
              {tool.pricing === 'freemium' && (
                <div className="mt-2 p-3 bg-pink-500/20 border border-pink-500/30 rounded-lg">
                  <p className="text-pink-400 text-sm">
                    Enjoy <span className="font-bold">100 Free Tokens</span> with Every New Subscription!
                  </p>
                </div>
              )}
              <div className="mt-2 space-y-1 text-sm text-zinc-400">
                <div><span className="text-purple-400">SUBSCRIPTION TYPE:</span> FREEMIUM AND PAID</div>
                <div><span className="text-purple-400">BILLING OPTIONS:</span> MONTHLY, ANNUALLY, AND ONE-TIME PAYMENT</div>
              </div>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-white font-semibold mb-3">Categories:</h3>
              <Link href={`/category/${tool.category}`}>
                <Badge 
                  variant="secondary" 
                  className="bg-blue-500/20 text-blue-400 border-blue-500/30 hover:bg-blue-500/30 cursor-pointer"
                >
                  {tool.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </Badge>
              </Link>
            </div>

            {/* Tags */}
            {tool.tags && tool.tags.length > 0 && (
              <div>
                <h3 className="text-white font-semibold mb-3">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {tool.tags.map((tag) => (
                    <Link key={tag} href={`/search?tag=${tag}`}>
                      <span className="text-purple-400 hover:text-purple-300 cursor-pointer text-sm">
                        #{tag}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                asChild 
                className="w-full bg-white text-black hover:bg-gray-100 font-semibold py-3 text-lg"
              >
                <a href={tool.url} target="_blank" rel="noopener noreferrer">
                  Try Now
                </a>
              </Button>
            </div>
          </CardContent>
        </div>
      </Card>

      {/* Detailed Information */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <h2 className="text-2xl font-bold text-white">Detailed Information</h2>
        </CardHeader>
        <CardContent className="space-y-4">
          {tool.features && tool.features.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Features:</h3>
              <ul className="space-y-2">
                {tool.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-zinc-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Benefits:</h3>
              <ul className="space-y-2 text-zinc-300">
                <li>• Advanced AI technology for realistic interactions</li>
                <li>• Customizable personalities and appearances</li>
                <li>• Privacy-focused with secure conversations</li>
                <li>• Regular updates and new features</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Technical Specifications:</h3>
              <ul className="space-y-2 text-zinc-300">
                <li>• Cloud-based processing</li>
                <li>• Real-time response generation</li>
                <li>• Multi-language support</li>
                <li>• Cross-platform compatibility</li>
              </ul>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-4 text-sm text-zinc-400">
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>{(tool.views || 0).toLocaleString()} views</span>
            </div>
            {tool.rating && (
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>{tool.rating.toFixed(1)} ({tool.review_count || 0} reviews)</span>
              </div>
            )}
            <Badge 
              variant="secondary" 
              className={cn('text-xs font-medium border', getPricingColor(tool.pricing))}
            >
              <div className="flex items-center gap-1">
                {getPricingIcon(tool.pricing)}
                {tool.pricing}
              </div>
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Similar Tools */}
      {similarTools.length > 0 && (
        <Card className="glass-card border-white/10">
          <CardHeader>
            <h2 className="text-2xl font-bold text-white">Similar Tools</h2>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {similarTools.slice(0, 4).map((similarTool) => (
                <Link key={similarTool.id} href={`/ai/${similarTool.slug}`}>
                  <Card className="glass-card glass-hover cursor-pointer h-full">
                    <div className="aspect-video bg-gradient-to-br from-zinc-800 to-zinc-900 overflow-hidden rounded-t-lg">
                      {similarTool.screenshot_url && (
                        <img
                          src={similarTool.screenshot_url}
                          alt={similarTool.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      )}
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-white text-sm mb-2 line-clamp-1">
                        {similarTool.name}
                      </h3>
                      <p className="text-xs text-zinc-400 line-clamp-3 mb-3">
                        {similarTool.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-white">
                          {formatPrice(similarTool.pricing)}
                        </span>
                        <Button size="sm" variant="outline" className="text-xs">
                          <ExternalLink className="w-3 h-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}