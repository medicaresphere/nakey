import React from 'react';
import { Metadata } from 'next';
import { Navigation } from '@/components/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Eye, Cookie, Database, Mail, Lock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy - NSFW AI Tools Directory',
  description: 'Privacy policy and data protection information for NSFW AI Tools Directory users.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Header */}
        <section className="text-center space-y-4 py-8">
          <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border-blue-500/30 px-4 py-2">
            <Shield className="w-4 h-4 mr-2" />
            Privacy Protection
          </Badge>
          <h1 className="text-4xl font-bold gradient-text">Privacy Policy</h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your personal information.
          </p>
        </section>

        {/* Content */}
        <div className="space-y-8">
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Eye className="w-5 h-5 text-blue-400" />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-zinc-300">
              <h4 className="font-semibold text-white">Information You Provide</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2" />
                  <span>Contact information when you reach out to us</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2" />
                  <span>Tool submission details when you submit an AI tool</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2" />
                  <span>Age verification confirmation (18+ status)</span>
                </li>
              </ul>

              <h4 className="font-semibold text-white">Information We Automatically Collect</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2" />
                  <span>Browser type and version</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2" />
                  <span>Device information and screen resolution</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2" />
                  <span>Pages visited and time spent on site</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2" />
                  <span>Referring websites and search terms</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Database className="w-5 h-5 text-green-400" />
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-zinc-300">
              <p>We use the information we collect for the following purposes:</p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-xs font-bold text-blue-400">1</span>
                  </div>
                  <div>
                    <h5 className="font-medium text-white">Service Provision</h5>
                    <p className="text-sm">To provide and maintain our AI tools directory service</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-xs font-bold text-green-400">2</span>
                  </div>
                  <div>
                    <h5 className="font-medium text-white">Communication</h5>
                    <p className="text-sm">To respond to your inquiries and provide customer support</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-xs font-bold text-purple-400">3</span>
                  </div>
                  <div>
                    <h5 className="font-medium text-white">Improvement</h5>
                    <p className="text-sm">To analyze usage patterns and improve our website</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-yellow-500/20 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-xs font-bold text-yellow-400">4</span>
                  </div>
                  <div>
                    <h5 className="font-medium text-white">Legal Compliance</h5>
                    <p className="text-sm">To comply with legal obligations and protect our rights</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Cookie className="w-5 h-5 text-yellow-400" />
                Cookies and Tracking
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-zinc-300">
              <p>
                We use cookies and similar tracking technologies to enhance your browsing experience 
                and analyze website traffic.
              </p>

              <h4 className="font-semibold text-white">Types of Cookies We Use</h4>
              <div className="space-y-3">
                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-3">
                  <h5 className="font-medium text-blue-400 mb-1">Essential Cookies</h5>
                  <p className="text-sm">Required for basic website functionality and age verification</p>
                </div>
                
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-3">
                  <h5 className="font-medium text-green-400 mb-1">Analytics Cookies</h5>
                  <p className="text-sm">Help us understand how visitors interact with our website</p>
                </div>
                
                <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-3">
                  <h5 className="font-medium text-purple-400 mb-1">Preference Cookies</h5>
                  <p className="text-sm">Remember your settings and preferences for future visits</p>
                </div>
              </div>

              <p className="text-sm">
                You can control cookies through your browser settings, but disabling certain cookies 
                may affect website functionality.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Lock className="w-5 h-5 text-red-400" />
                Data Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-zinc-300">
              <p>
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h4 className="font-semibold text-white">Security Measures</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2" />
                  <span>SSL encryption for data transmission</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2" />
                  <span>Secure hosting infrastructure</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2" />
                  <span>Regular security audits and updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2" />
                  <span>Limited access to personal information</span>
                </li>
              </ul>

              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                <h5 className="font-medium text-red-400 mb-1">Important Note</h5>
                <p className="text-sm">
                  While we strive to protect your information, no method of transmission over the internet 
                  is 100% secure. We cannot guarantee absolute security.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Information Sharing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-zinc-300">
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except in the following circumstances:
              </p>

              <h4 className="font-semibold text-white">When We May Share Information</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2" />
                  <span>With service providers who assist in operating our website</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2" />
                  <span>When required by law or to protect our rights</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2" />
                  <span>In connection with a business transfer or merger</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2" />
                  <span>With your explicit consent</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Your Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-zinc-300">
              <p>You have the following rights regarding your personal information:</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h5 className="font-medium text-white">Access</h5>
                  <p className="text-sm">Request access to your personal information</p>
                </div>
                
                <div className="space-y-2">
                  <h5 className="font-medium text-white">Correction</h5>
                  <p className="text-sm">Request correction of inaccurate information</p>
                </div>
                
                <div className="space-y-2">
                  <h5 className="font-medium text-white">Deletion</h5>
                  <p className="text-sm">Request deletion of your personal information</p>
                </div>
                
                <div className="space-y-2">
                  <h5 className="font-medium text-white">Portability</h5>
                  <p className="text-sm">Request transfer of your data to another service</p>
                </div>
              </div>

              <p className="text-sm">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-zinc-300">
              <p>
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <h5 className="font-medium text-blue-400">Privacy Contact</h5>
                </div>
                <p className="text-sm">Email: privacy@nsfwaitools.com</p>
                <p className="text-sm">Response time: Within 48 hours</p>
              </div>

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