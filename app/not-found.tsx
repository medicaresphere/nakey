import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Navigation } from '@/components/navigation';
import { Home, Search, ArrowLeft, Brain } from 'lucide-react';

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for could not be found. Return to our AI tools directory.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="glass-card border-white/10 text-center">
          <CardHeader className="space-y-6">
            <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto">
              <Brain className="w-12 h-12 text-white" />
            </div>
            <div>
              <CardTitle className="text-4xl font-bold text-white mb-4">
                404 - Page Not Found
              </CardTitle>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                Oops! The AI tool or page you're looking for seems to have vanished into the digital void.
              </p>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-8">
            <div className="text-zinc-300">
              <p className="mb-4">Don't worry, here are some helpful options:</p>
              <ul className="text-left max-w-md mx-auto space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  Check the URL for any typos
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  Browse our AI tools directory
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full" />
                  Search for specific tools
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                  Explore different categories
                </li>
              </ul>
            </div>

            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
                <Link href="/">
                  <Home className="w-4 h-4 mr-2" />
                  Go Home
                </Link>
              </Button>
              
              <Button asChild variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                <Link href="/categories">
                  <Search className="w-4 h-4 mr-2" />
                  Browse Categories
                </Link>
              </Button>
              
              <Button asChild variant="ghost" className="text-zinc-400 hover:text-white">
                <Link href="javascript:history.back()">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Go Back
                </Link>
              </Button>
            </div>

            {/* Popular Tools Section */}
            <div className="pt-8 border-t border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">
                Popular AI Tools
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { name: 'ChatGPT Plus', category: 'Chatbots', href: '/ai/chatgpt-plus' },
                  { name: 'DALL-E 3', category: 'Image Generators', href: '/ai/dall-e-3' },
                  { name: 'Character AI', category: 'Character AI', href: '/category/character-ai' },
                ].map((tool) => (
                  <Link key={tool.name} href={tool.href}>
                    <Card className="glass-card glass-hover cursor-pointer">
                      <CardContent className="p-4 text-center">
                        <h4 className="font-medium text-white mb-1">{tool.name}</h4>
                        <p className="text-sm text-zinc-400">{tool.category}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}