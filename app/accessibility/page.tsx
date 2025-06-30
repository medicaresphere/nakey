import React from 'react';
import { Metadata } from 'next';
import { Navigation } from '@/components/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye, Keyboard, Volume2, MousePointer, Smartphone, Mail, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Accessibility Statement - NSFW AI Tools Directory',
  description: 'Our commitment to accessibility and inclusive design for all users of NSFW AI Tools Directory.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function AccessibilityPage() {
  const accessibilityFeatures = [
    {
      title: 'Keyboard Navigation',
      description: 'Full keyboard navigation support for all interactive elements',
      icon: Keyboard,
      color: 'text-blue-400'
    },
    {
      title: 'Screen Reader Support',
      description: 'Semantic HTML and ARIA labels for screen reader compatibility',
      icon: Volume2,
      color: 'text-green-400'
    },
    {
      title: 'Visual Accessibility',
      description: 'High contrast colors and scalable text for better visibility',
      icon: Eye,
      color: 'text-purple-400'
    },
    {
      title: 'Touch-Friendly',
      description: 'Large touch targets and mobile-optimized interactions',
      icon: Smartphone,
      color: 'text-yellow-400'
    },
    {
      title: 'Mouse Alternatives',
      description: 'Support for various pointing devices and assistive technologies',
      icon: MousePointer,
      color: 'text-red-400'
    }
  ];

  const wcagCompliance = [
    {
      level: 'A',
      description: 'Basic accessibility features',
      status: 'Compliant',
      color: 'bg-green-500/20 text-green-400 border-green-500/30'
    },
    {
      level: 'AA',
      description: 'Enhanced accessibility features',
      status: 'Mostly Compliant',
      color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
    },
    {
      level: 'AAA',
      description: 'Advanced accessibility features',
      status: 'Partially Compliant',
      color: 'bg-blue-500/20 text-blue-400 border-blue-500/30'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Header */}
        <section className="text-center space-y-4 py-8">
          <Badge variant="secondary" className="bg-purple-500/20 text-purple-400 border-purple-500/30 px-4 py-2">
            <Heart className="w-4 h-4 mr-2" />
            Inclusive Design
          </Badge>
          <h1 className="text-4xl font-bold gradient-text">Accessibility Statement</h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            We're committed to making our AI tools directory accessible to everyone, regardless of ability or technology used.
          </p>
        </section>

        {/* Our Commitment */}
        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Heart className="w-5 h-5 text-red-400" />
              Our Commitment to Accessibility
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-zinc-300">
            <p>
              NSFW AI Tools Directory is committed to ensuring digital accessibility for people with disabilities. 
              We are continually improving the user experience for everyone and applying the relevant accessibility standards.
            </p>
            <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
              <h4 className="font-semibold text-purple-400 mb-2">Our Promise</h4>
              <p className="text-sm">
                We believe that everyone should have equal access to information about AI tools and services. 
                Accessibility is not just a feature—it's a fundamental right.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Accessibility Features */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white text-center">Accessibility Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accessibilityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="glass-card border-white/10">
                  <CardContent className="p-6 text-center">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                        <Icon className={`w-6 h-6 ${feature.color}`} />
                      </div>
                    </div>
                    <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-sm text-zinc-400">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* WCAG Compliance */}
        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle className="text-white">WCAG 2.1 Compliance Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-zinc-300">
              We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at the AA level. 
              Here's our current compliance status:
            </p>
            
            <div className="space-y-4">
              {wcagCompliance.map((level, index) => (
                <div key={index} className="flex items-center justify-between p-4 glass-card">
                  <div className="flex items-center gap-4">
                    <Badge className={level.color}>
                      Level {level.level}
                    </Badge>
                    <div>
                      <h4 className="font-medium text-white">WCAG 2.1 Level {level.level}</h4>
                      <p className="text-sm text-zinc-400">{level.description}</p>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-white">{level.status}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Technical Specifications */}
        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Technical Specifications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-zinc-300">
            <h4 className="font-semibold text-white">Supported Technologies</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-white mb-2">Screen Readers</h5>
                <ul className="text-sm space-y-1">
                  <li>• NVDA (Windows)</li>
                  <li>• JAWS (Windows)</li>
                  <li>• VoiceOver (macOS/iOS)</li>
                  <li>• TalkBack (Android)</li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-medium text-white mb-2">Browsers</h5>
                <ul className="text-sm space-y-1">
                  <li>• Chrome (latest 2 versions)</li>
                  <li>• Firefox (latest 2 versions)</li>
                  <li>• Safari (latest 2 versions)</li>
                  <li>• Edge (latest 2 versions)</li>
                </ul>
              </div>
            </div>

            <h4 className="font-semibold text-white">Accessibility Standards</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2" />
                <span>Semantic HTML5 markup</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2" />
                <span>ARIA labels and landmarks</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2" />
                <span>Keyboard navigation support</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2" />
                <span>Color contrast ratios of 4.5:1 or higher</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2" />
                <span>Scalable text up to 200%</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Known Issues */}
        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Known Issues & Improvements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-zinc-300">
            <p>
              We're continuously working to improve accessibility. Here are some areas we're actively addressing:
            </p>
            
            <div className="space-y-3">
              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-3">
                <h5 className="font-medium text-yellow-400 mb-1">In Progress</h5>
                <ul className="text-sm space-y-1">
                  <li>• Enhanced focus indicators for all interactive elements</li>
                  <li>• Improved screen reader announcements for dynamic content</li>
                  <li>• Better keyboard shortcuts for navigation</li>
                </ul>
              </div>
              
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-3">
                <h5 className="font-medium text-blue-400 mb-1">Planned</h5>
                <ul className="text-sm space-y-1">
                  <li>• High contrast mode toggle</li>
                  <li>• Reduced motion preferences</li>
                  <li>• Voice navigation support</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Feedback */}
        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Mail className="w-5 h-5 text-blue-400" />
              Accessibility Feedback
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-zinc-300">
            <p>
              We welcome your feedback on the accessibility of NSFW AI Tools Directory. 
              If you encounter any accessibility barriers, please let us know.
            </p>
            
            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
              <h4 className="font-semibold text-green-400 mb-2">How to Report Issues</h4>
              <ul className="text-sm space-y-1">
                <li>• Email us at accessibility@nsfwaitools.com</li>
                <li>• Describe the specific issue you encountered</li>
                <li>• Include your browser and assistive technology details</li>
                <li>• We aim to respond within 2 business days</li>
              </ul>
            </div>

            <div className="pt-4">
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                <a href="/contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Us About Accessibility
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Alternative Formats */}
        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Alternative Formats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-zinc-300">
            <p>
              If you need information from our website in an alternative format, we're happy to help. 
              We can provide content in:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2" />
                  <span>Large print format</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2" />
                  <span>Plain text format</span>
                </li>
              </ul>
              
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2" />
                  <span>Audio description</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2" />
                  <span>Simplified language</span>
                </li>
              </ul>
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