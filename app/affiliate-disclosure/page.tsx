import React from 'react';
import { Metadata } from 'next';
import { Navigation } from '@/components/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DollarSign, ExternalLink, Info, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure - NSFW AI Tools Directory',
  description: 'Transparency about affiliate relationships and monetization on NSFW AI Tools Directory.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Header */}
        <section className="text-center space-y-4 py-8">
          <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30 px-4 py-2">
            <DollarSign className="w-4 h-4 mr-2" />
            Transparency
          </Badge>
          <h1 className="text-4xl font-bold gradient-text">Affiliate Disclosure</h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            We believe in transparency. Here's how we monetize our platform and maintain editorial independence.
          </p>
        </section>

        {/* Content */}
        <div className="space-y-8">
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Info className="w-5 h-5 text-blue-400" />
                What Are Affiliate Links?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-zinc-300">
              <p>
                NSFW AI Tools Directory participates in various affiliate marketing programs. This means that 
                when you click on certain links to AI tools and services on our website and make a purchase 
                or sign up, we may receive a commission at no additional cost to you.
              </p>
              <p>
                These affiliate relationships help us maintain and improve our platform, allowing us to continue 
                providing free access to our comprehensive directory of AI tools and detailed reviews.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Shield className="w-5 h-5 text-green-400" />
                Our Editorial Independence
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-zinc-300">
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                <h4 className="font-semibold text-green-400 mb-2">Editorial Promise</h4>
                <p className="text-sm">
                  Our reviews, ratings, and recommendations are based on our genuine assessment of each AI tool's 
                  quality, features, and user experience. Affiliate relationships do not influence our editorial content.
                </p>
              </div>
              
              <h4 className="font-semibold text-white">How We Maintain Objectivity</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2" />
                  <span>We test and evaluate tools based on predetermined criteria</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2" />
                  <span>Our team writes honest reviews regardless of affiliate status</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2" />
                  <span>We include both affiliate and non-affiliate tools in our directory</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2" />
                  <span>Negative reviews are published when warranted</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <ExternalLink className="w-5 h-5 text-purple-400" />
                Types of Affiliate Relationships
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-zinc-300">
              <h4 className="font-semibold text-white">Direct Affiliate Programs</h4>
              <p>
                We participate in affiliate programs directly with AI tool providers. When you sign up for 
                these services through our links, we may receive a commission.
              </p>

              <h4 className="font-semibold text-white">Third-Party Affiliate Networks</h4>
              <p>
                We also work with affiliate networks that manage relationships with multiple AI tool providers. 
                These networks track referrals and handle commission payments.
              </p>

              <h4 className="font-semibold text-white">Sponsored Content</h4>
              <p>
                Occasionally, we may publish sponsored content or reviews. These are clearly marked as 
                "Sponsored" or "Paid Partnership" and follow the same editorial standards as our regular content.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="text-white">How Commissions Work</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-zinc-300">
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                <h4 className="font-semibold text-blue-400 mb-2">No Extra Cost to You</h4>
                <p className="text-sm">
                  When you use our affiliate links, you pay the same price you would pay going directly to the 
                  AI tool's website. The commission comes from the tool provider, not from any additional charge to you.
                </p>
              </div>

              <h4 className="font-semibold text-white">Commission Structure</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2" />
                  <span>One-time commissions for purchases or sign-ups</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2" />
                  <span>Recurring commissions for subscription services</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2" />
                  <span>Performance-based bonuses for high-quality referrals</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Identifying Affiliate Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-zinc-300">
              <p>
                We strive to be transparent about our affiliate relationships. Here's how you can identify 
                affiliate content on our website:
              </p>
              
              <h4 className="font-semibold text-white">Visual Indicators</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2" />
                  <span>Affiliate links may be marked with special badges or indicators</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2" />
                  <span>Sponsored content is clearly labeled as such</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2" />
                  <span>This disclosure page is linked in our footer and relevant pages</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Your Rights and Choices</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-zinc-300">
              <p>
                You are never obligated to use our affiliate links. You can always navigate directly to any 
                AI tool's website to sign up or make purchases. Our directory and reviews remain valuable 
                regardless of whether you use our affiliate links.
              </p>
              
              <h4 className="font-semibold text-white">Supporting Our Work</h4>
              <p>
                If you find our reviews and directory helpful, using our affiliate links is one way to support 
                our work at no extra cost to you. This helps us continue providing free, comprehensive information 
                about AI tools and services.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Questions and Contact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-zinc-300">
              <p>
                If you have any questions about our affiliate relationships or this disclosure, please don't 
                hesitate to contact us. We're committed to transparency and are happy to provide additional 
                information about our monetization practices.
              </p>
              <p className="text-sm text-zinc-500">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}