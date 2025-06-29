'use client';

import React from 'react';
import Link from 'next/link';
import { AITool } from '@/lib/database.types';
import { useAgeVerification } from '@/components/providers/age-verification-provider';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ToolInterface } from '@/components/tool-interface';
import { 
  ExternalLink, 
  Eye, 
  Star, 
  Crown, 
  Zap, 
  Heart,
  ChevronLeft,
  Calendar,
  Tag,
  Globe,
  CheckCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { ToolCard } from '@/components/tool-card';

interface ToolDetailPageProps {
  tool: AITool;
  alternativeTools: AITool[];
}

export function ToolDetailPage({ tool, alternativeTools }: ToolDetailPageProps) {
  const { showNSFW } = useAgeVerification();
  const shouldBlur = tool.is_nsfw && !showNSFW;

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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Back Navigation */}
      <div className="flex items-center gap-4">
        <Button asChild variant="ghost" size="sm" className="text-zinc-400 hover:text-white">
          <Link href="/">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Directory
          </Link>
        </Button>
        <Button asChild variant="ghost" size="sm" className="text-zinc-400 hover:text-white">
          <Link href={`/category/${tool.category}`}>
            View {tool.category.replace('-', ' ')} tools
          </Link>
        </Button>
      </div>

      {/* Sleek Tool Interface */}
      <ToolInterface 
        tool={tool} 
        similarTools={alternativeTools}
        className={shouldBlur ? 'blur-md' : ''}
      />

      {/* NSFW Blur Overlay */}
      {shouldBlur && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="text-center text-white">
            <Eye className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p className="text-lg font-medium">NSFW Content Hidden</p>
            <p className="text-sm opacity-75">Enable NSFW content to view</p>
          </div>
        </div>
      )}
    </div>
  );
}