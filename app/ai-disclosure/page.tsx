import React from 'react';
import { Metadata } from 'next';
import { Navigation } from '@/components/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bot, Brain, Eye, Shield, Zap, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Usage Disclosure - NSFW AI Tools Directory',
  description: 'Transparency about how we use AI technology in our content creation and platform operations.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function AIDisclosurePage() {
  const aiUseCases = [
    {
      title: 'Content Enhancement',
      description: 'AI assists in improving grammar, clarity, and readability of reviews',
      icon: Brain,
      color: 'text-blue-400',
      humanOversight: 'High'
    },
    {
      title: 'Research Assistance',
      description: 'AI helps gather initial information about new AI tools and services',
      icon: Eye,
      color: 'text-green-400',
      humanOversight: 'High'
    },
    {
      title: 'Content Moderation',
      description: 'AI helps identify potentially harmful or inappropriate content',
      icon: Shield,
      color: 'text-red-400',
      humanOversight: 'Medium'
    },
    {
      title: 'SEO Optimization',
      description: 'AI assists in optimizing content for search engines',
      icon: Zap,
      color: 'text-yellow-400',
      humanOversight: 'Medium'
    }
  ];

  const principles = [
    'Human oversight is maintained for all AI-generated content',
    'AI is used to enhance, not replace, human expertise',
    'All final editorial decisions are made by humans',
    'AI-generated content is clearly identified when used',
    'We maintain transparency about our AI usage'
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Header */}
        <section className="text-center space-y-4 py-8">
          <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border-blue-500/30 px-4 py-2">
            <Bot className="w-4 h-4 mr-2" />
            AI Transparency
          </Badge>
          <h1 className="text-4xl font-bold gradient-text">AI Usage Disclosure</h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            We believe in transparency about how artificial intelligence is used in our content creation and platform operations.
          </p>
        </section>

        {/* Our Approach */}
        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Brain className="w-5 h-5 text-purple-400" />
              Our Approach to AI
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-zinc-300">
            <p>
              At NSFW AI Tools Directory, we use artificial intelligence as a tool to enhance our content 
              and improve user experience, while maintaining human oversight and editorial control over all 
              published content.
            </p>
            <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
              <h4 className="font-semibold text-purple-400 mb-2">Core Principle</h4>
              <p className="text-sm">
                AI augments human capabilities but never replaces human judgment, expertise, or final 
                editorial decisions. Every piece of content is reviewed and approved by our human team.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* AI Use Cases */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white text-center">How We Use AI</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aiUseCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <Card key={index} className="glass-card border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                        <Icon className={`w-6 h-6 ${useCase.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-white">{useCase.title}</h3>
                          <Badge 
                            variant="outline" 
                            className={`text-xs ${
                              useCase.humanOversight === 'High' 
                                ? 'border-green-500/30 text-green-400' 
                                : 'border-yellow-500/30 text-yellow-400'
                            }`}
                          >
                            {useCase.humanOversight} Human Oversight
                          </Badge>
                        </div>
                        <p className="text-sm text-zinc-400">{useCase.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* What AI Does NOT Do */}
        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle className="text-white">What AI Does NOT Do</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-zinc-300">
            <p>
              To maintain transparency, here's what AI does NOT do on our platform:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-white">Content Creation</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2" />
                    <span className="text-sm">Write complete reviews without human input</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2" />
                    <span className="text-sm">Make final editorial decisions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2" />
                    <span className="text-sm">Assign ratings or scores to tools</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-white">Decision Making</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2" />
                    <span className="text-sm">Determine which tools to include</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2" />
                    <span className="text-sm">Make business or editorial policy decisions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2" />
                    <span className="text-sm">Handle user data or privacy decisions</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Human Oversight Process */}
        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Human Oversight Process</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-zinc-300">
            <p>
              Every piece of content goes through our human review process:
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-blue-400">1</span>
                </div>
                <div>
                  <h4 className="font-medium text-white">Initial Research</h4>
                  <p className="text-sm text-zinc-400">Human researchers identify and test AI tools</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-green-400">2</span>
                </div>
                <div>
                  <h4 className="font-medium text-white">Content Creation</h4>
                  <p className="text-sm text-zinc-400">Humans write reviews with optional AI assistance for enhancement</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-purple-400">3</span>
                </div>
                <div>
                  <h4 className="font-medium text-white">Editorial Review</h4>
                  <p className="text-sm text-zinc-400">Senior editors review and approve all content before publication</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-yellow-400">4</span>
                </div>
                <div>
                  <h4 className="font-medium text-white">Quality Assurance</h4>
                  <p className="text-sm text-zinc-400">Final quality check ensures accuracy and adherence to standards</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Our Principles */}
        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <CheckCircle className="w-5 h-5 text-green-400" />
              Our AI Principles
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-zinc-300">
            <p>
              We follow these principles when using AI technology:
            </p>
            
            <div className="space-y-3">
              {principles.map((principle, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>{principle}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* AI Tools We Use */}
        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle className="text-white">AI Tools We Use</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-zinc-300">
            <p>
              In the interest of transparency, here are some of the AI tools we use internally:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                <h4 className="font-medium text-blue-400 mb-2">Writing Assistance</h4>
                <ul className="text-sm space-y-1">
                  <li>• Grammar and style checking tools</li>
                  <li>• Content enhancement suggestions</li>
                  <li>• SEO optimization assistance</li>
                </ul>
              </div>
              
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                <h4 className="font-medium text-green-400 mb-2">Research Tools</h4>
                <ul className="text-sm space-y-1">
                  <li>• Information gathering assistance</li>
                  <li>• Fact-checking support</li>
                  <li>• Trend analysis tools</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Future of AI Usage */}
        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Future AI Usage</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-zinc-300">
            <p>
              As AI technology evolves, we may explore new ways to enhance our platform while 
              maintaining our commitment to human oversight and transparency.
            </p>
            
            <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
              <h4 className="font-semibold text-purple-400 mb-2">Our Commitment</h4>
              <p className="text-sm">
                Any new AI implementations will be disclosed here, and we will always maintain 
                human control over editorial decisions and content quality.
              </p>
            </div>

            <p className="text-sm text-zinc-500">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}