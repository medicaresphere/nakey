import React from 'react';
import { Metadata } from 'next';
import { Navigation } from '@/components/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, AlertTriangle, Ban, Mail, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blacklisted Sites - NakedifyAI.com',
  description: 'List of blacklisted sites and our content moderation policies for NakedifyAI.com.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function BlacklistedPage() {
  const blacklistedSites = [
    {
      domain: 'scam-ai-tool.com',
      reason: 'Fraudulent billing practices',
      dateAdded: '2024-01-15',
      category: 'Fraud'
    },
    {
      domain: 'fake-ai-generator.net',
      reason: 'Malware distribution',
      dateAdded: '2024-02-03',
      category: 'Security'
    },
    {
      domain: 'illegal-content-ai.org',
      reason: 'Illegal content generation',
      dateAdded: '2024-02-20',
      category: 'Legal'
    }
  ];

  const moderationCriteria = [
    {
      title: 'Security Threats',
      description: 'Sites that distribute malware, viruses, or engage in phishing',
      icon: Shield,
      color: 'text-red-400'
    },
    {
      title: 'Fraudulent Practices',
      description: 'Services with deceptive billing, fake reviews, or scam operations',
      icon: AlertTriangle,
      color: 'text-yellow-400'
    },
    {
      title: 'Illegal Content',
      description: 'Platforms generating illegal or harmful content',
      icon: Ban,
      color: 'text-red-400'
    },
    {
      title: 'Privacy Violations',
      description: 'Services that misuse personal data or violate privacy laws',
      icon: Shield,
      color: 'text-blue-400'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Header */}
        <section className="text-center space-y-4 py-8">
          <Badge variant="secondary" className="bg-red-500/20 text-red-400 border-red-500/30 px-4 py-2">
            <Ban className="w-4 h-4 mr-2" />
            Content Moderation
          </Badge>
          <h1 className="text-4xl font-bold gradient-text">Blacklisted Sites</h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Our commitment to user safety through active content moderation and blacklisting of harmful sites.
          </p>
        </section>

        {/* Moderation Policy */}
        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Shield className="w-5 h-5 text-green-400" />
              Our Moderation Policy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-zinc-300">
            <p>
              We maintain a strict moderation policy to ensure the safety and security of our users. 
              Sites are blacklisted based on verified reports of harmful, illegal, or deceptive practices.
            </p>
            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
              <h4 className="font-semibold text-green-400 mb-2">Our Commitment</h4>
              <p className="text-sm">
                We continuously monitor listed AI tools and remove any that violate our community standards 
                or pose risks to user safety and security.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Blacklisting Criteria */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white text-center">Blacklisting Criteria</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {moderationCriteria.map((criteria, index) => {
              const Icon = criteria.icon;
              return (
                <Card key={index} className="glass-card border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                        <Icon className={`w-6 h-6 ${criteria.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-white mb-2">{criteria.title}</h3>
                        <p className="text-sm text-zinc-400">{criteria.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Blacklisted Sites List */}
        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Ban className="w-5 h-5 text-red-400" />
              Currently Blacklisted Sites
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {blacklistedSites.map((site, index) => (
                <div key={index} className="glass-card p-4 border border-red-500/20">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-white mb-1">{site.domain}</h3>
                      <p className="text-sm text-zinc-400 mb-2">{site.reason}</p>
                      <div className="flex items-center gap-2">
                        <Badge variant="destructive" className="text-xs">
                          {site.category}
                        </Badge>
                        <span className="text-xs text-zinc-500">
                          Blacklisted: {new Date(site.dateAdded).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Ban className="w-5 h-5 text-red-400" />
                      <span className="text-sm font-medium text-red-400">BLOCKED</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-yellow-900/20 border border-yellow-500/30 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-yellow-400 mb-1">Important Notice</h4>
                  <p className="text-sm text-zinc-300">
                    This list is updated regularly. If you encounter a blacklisted site through external means, 
                    please avoid using it and report it to us immediately.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Reporting Process */}
        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Report a Harmful Site</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-zinc-300">
              Help us keep the community safe by reporting AI tools or sites that engage in harmful practices.
            </p>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-white">What to Include in Your Report:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-zinc-300">Website URL and name</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-zinc-300">Detailed description of the harmful behavior</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-zinc-300">Screenshots or evidence (if available)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-zinc-300">Date and time of the incident</span>
                </li>
              </ul>
            </div>

            <div className="pt-4">
              <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
                <a href="/contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Report a Site
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Appeal Process */}
        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Appeal a Blacklisting</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-zinc-300">
            <p>
              If you believe a site has been wrongfully blacklisted, you can submit an appeal. 
              We review all appeals thoroughly and will remove sites from the blacklist if the 
              issues have been resolved.
            </p>
            
            <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
              <h4 className="font-semibold text-blue-400 mb-2">Appeal Requirements</h4>
              <ul className="text-sm space-y-1">
                <li>• Proof that the reported issues have been fixed</li>
                <li>• Documentation of security improvements</li>
                <li>• Commitment to ongoing compliance</li>
                <li>• Contact information for ongoing monitoring</li>
              </ul>
            </div>

            <p className="text-sm text-zinc-500">
              Appeals are typically processed within 5-7 business days. We may request additional 
              information during the review process.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}