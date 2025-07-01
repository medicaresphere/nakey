import React from 'react';
import { Metadata } from 'next';
import { Navigation } from '@/components/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Shield, Info, ExternalLink } from 'lucide-react';
import { ClientDate } from '@/components/client-date';

export const metadata: Metadata = {
  title: 'Disclaimer - NakedifyAI.com',
  description: 'Important disclaimer and legal information for NakedifyAI.com users.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Header */}
        <section className="text-center space-y-4 py-8">
          <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 px-4 py-2">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Legal Notice
          </Badge>
          <h1 className="text-4xl font-bold gradient-text">Disclaimer</h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Important legal information and disclaimers for users of NakedifyAI.com.
          </p>
        </section>

        {/* Content */}
        <div className="space-y-8">
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Info className="w-5 h-5 text-blue-400" />
                General Disclaimer
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-zinc-300">
              <p>
                The information contained on NakedifyAI.com website is for general information purposes only. 
                The information is provided by NakedifyAI.com and while we endeavor to keep the information 
                up to date and correct, we make no representations or warranties of any kind, express or implied, 
                about the completeness, accuracy, reliability, suitability or availability with respect to the website 
                or the information, products, services, or related graphics contained on the website for any purpose.
              </p>
              <p>
                Any reliance you place on such information is therefore strictly at your own risk. In no event will 
                we be liable for any loss or damage including without limitation, indirect or consequential loss or 
                damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in 
                connection with, the use of this website.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <ExternalLink className="w-5 h-5 text-green-400" />
                External Links Disclaimer
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-zinc-300">
              <p>
                Through this website you are able to link to other websites which are not under the control of 
                NakedifyAI.com. We have no control over the nature, content and availability of those sites. 
                The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
              </p>
              <p>
                Every effort is made to keep the website up and running smoothly. However, NakedifyAI.com 
                takes no responsibility for, and will not be liable for, the website being temporarily unavailable 
                due to technical issues beyond our control.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Shield className="w-5 h-5 text-red-400" />
                Content Disclaimer
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-zinc-300">
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                <h4 className="font-semibold text-red-400 mb-2">Adult Content Warning</h4>
                <p className="text-sm">
                  This website contains information about adult-oriented AI tools and services. 
                  Users must be 18 years or older to access this content. We do not endorse or 
                  guarantee the safety, legality, or appropriateness of any third-party tools or services listed.
                </p>
              </div>
              
              <h4 className="font-semibold text-white">Tool Reviews and Ratings</h4>
              <p>
                All reviews, ratings, and descriptions of AI tools are provided for informational purposes only. 
                We do not guarantee the accuracy of user reviews or the continued availability of listed services. 
                Users should conduct their own research before using any AI tool or service.
              </p>

              <h4 className="font-semibold text-white">No Warranty</h4>
              <p>
                We provide no warranties, express or implied, regarding the functionality, safety, or legality 
                of any AI tools listed in our directory. Use of any third-party AI tool is at your own risk.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Privacy and Data</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-zinc-300">
              <p>
                We are committed to protecting your privacy. Any personal information collected through our 
                website is handled in accordance with our Privacy Policy. We do not share personal information 
                with third parties without explicit consent, except as required by law.
              </p>
              <p>
                When you click on links to external AI tools or services, you leave our website and are subject 
                to the privacy policies and terms of service of those external sites. We encourage you to read 
                the privacy policies of any website you visit.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-zinc-300">
              <p>
                In no event shall NakedifyAI.com, nor its directors, employees, partners, agents, 
                suppliers, or affiliates, be liable for any indirect, incidental, punitive, consequential, 
                or similar damages whatsoever arising out of or in any way related to your use of the service.
              </p>
              <p>
                This limitation of liability applies whether the alleged liability is based on contract, tort, 
                negligence, strict liability, or any other basis, even if we have been advised of the possibility 
                of such damage.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Changes to Disclaimer</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-zinc-300">
              <p>
                We reserve the right to modify this disclaimer at any time. Changes will be effective immediately 
                upon posting to this page. Your continued use of our website following any changes constitutes 
                acceptance of the new disclaimer.
              </p>
              <p className="text-sm text-zinc-500">
                Last updated: <ClientDate />
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}