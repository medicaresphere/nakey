'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { Plus, X, Send, CheckCircle, Clock, Star } from 'lucide-react';
import { CATEGORIES, PRICING_TYPES } from '@/lib/database.types';

const submitSchema = z.object({
  name: z.string().min(2, 'Tool name must be at least 2 characters'),
  url: z.string().url('Please enter a valid URL'),
  description: z.string().min(50, 'Description must be at least 50 characters'),
  category: z.string().min(1, 'Please select a category'),
  pricing: z.enum(['free', 'freemium', 'paid', 'subscription']),
  isNsfw: z.boolean(),
  features: z.array(z.string()).min(1, 'Please add at least one feature'),
  tags: z.array(z.string()).min(1, 'Please add at least one tag'),
  screenshotUrl: z.string().url().optional().or(z.literal('')),
  contactEmail: z.string().email('Please enter a valid email address')
});

type SubmitForm = z.infer<typeof submitSchema>;

export function SubmitToolPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newFeature, setNewFeature] = useState('');
  const [newTag, setNewTag] = useState('');

  const form = useForm<SubmitForm>({
    resolver: zodResolver(submitSchema),
    defaultValues: {
      name: '',
      url: '',
      description: '',
      category: '',
      pricing: 'freemium',
      isNsfw: false,
      features: [],
      tags: [],
      screenshotUrl: '',
      contactEmail: ''
    }
  });

  const { handleSubmit, formState: { errors }, watch, setValue } = form;
  const features = watch('features') || [];
  const tags = watch('tags') || [];

  const addFeature = () => {
    if (newFeature.trim() && !features.includes(newFeature.trim())) {
      setValue('features', [...features, newFeature.trim()]);
      setNewFeature('');
    }
  };

  const removeFeature = (feature: string) => {
    setValue('features', features.filter(f => f !== feature));
  };

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim().toLowerCase())) {
      setValue('tags', [...tags, newTag.trim().toLowerCase()]);
      setNewTag('');
    }
  };

  const removeTag = (tag: string) => {
    setValue('tags', tags.filter(t => t !== tag));
  };

  const onSubmit = async (data: SubmitForm) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success('Tool submitted successfully! We\'ll review it within 24-48 hours.');
      form.reset();
    } catch (error) {
      toast.error('Failed to submit tool. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      title: 'Increased Visibility',
      description: 'Get discovered by thousands of users actively searching for AI tools',
      icon: Star
    },
    {
      title: 'Quality Traffic',
      description: 'Reach users who are specifically interested in your tool category',
      icon: CheckCircle
    },
    {
      title: 'Fast Review',
      description: 'Our team reviews submissions within 24-48 hours',
      icon: Clock
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-12">
        <div className="space-y-4">
          <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30 px-4 py-2">
            <Plus className="w-4 h-4 mr-2" />
            Submit Your Tool
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold gradient-text leading-tight">
            Get Your AI Tool
            <br />
            <span className="text-green-400">Discovered</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Submit your AI tool to our directory and reach thousands of users looking for innovative AI solutions.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <Card key={index} className="glass-card border-white/10 text-center">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-green-400" />
                  </div>
                </div>
                <h3 className="font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-zinc-400">{benefit.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Submission Form */}
        <div className="lg:col-span-2">
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Submit Your AI Tool</CardTitle>
              <p className="text-zinc-400">Fill out the form below to submit your tool for review.</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Basic Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Basic Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">Tool Name *</Label>
                      <Input
                        id="name"
                        {...form.register('name')}
                        placeholder="Enter your tool name"
                        className="glass-card border-white/10 bg-white/5 text-white placeholder:text-zinc-500"
                      />
                      {errors.name && (
                        <p className="text-sm text-red-400">{errors.name.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="url" className="text-white">Website URL *</Label>
                      <Input
                        id="url"
                        {...form.register('url')}
                        placeholder="https://yourtool.com"
                        className="glass-card border-white/10 bg-white/5 text-white placeholder:text-zinc-500"
                      />
                      {errors.url && (
                        <p className="text-sm text-red-400">{errors.url.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-white">Description *</Label>
                    <Textarea
                      id="description"
                      {...form.register('description')}
                      placeholder="Describe your AI tool, its features, and what makes it unique..."
                      rows={4}
                      className="glass-card border-white/10 bg-white/5 text-white placeholder:text-zinc-500 resize-none"
                    />
                    {errors.description && (
                      <p className="text-sm text-red-400">{errors.description.message}</p>
                    )}
                  </div>
                </div>

                {/* Categorization */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Categorization</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-white">Category *</Label>
                      <Select onValueChange={(value) => setValue('category', value)}>
                        <SelectTrigger className="glass-card border-white/10 bg-white/5 text-white">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent className="glass-card border-white/10 bg-zinc-900">
                          {CATEGORIES.map((category) => (
                            <SelectItem key={category} value={category} className="text-white">
                              {category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.category && (
                        <p className="text-sm text-red-400">{errors.category.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label className="text-white">Pricing Model *</Label>
                      <Select onValueChange={(value) => setValue('pricing', value as any)}>
                        <SelectTrigger className="glass-card border-white/10 bg-white/5 text-white">
                          <SelectValue placeholder="Select pricing" />
                        </SelectTrigger>
                        <SelectContent className="glass-card border-white/10 bg-zinc-900">
                          {PRICING_TYPES.map((pricing) => (
                            <SelectItem key={pricing} value={pricing} className="text-white capitalize">
                              {pricing}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-white">Content Rating</Label>
                    <div className="flex items-center space-x-3">
                      <Switch
                        checked={watch('isNsfw')}
                        onCheckedChange={(checked) => setValue('isNsfw', checked)}
                        className="data-[state=checked]:bg-red-600"
                      />
                      <span className="text-sm text-zinc-300">
                        {watch('isNsfw') ? '18+ NSFW Content' : 'Safe for Work'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Features</h3>
                  
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <Input
                        value={newFeature}
                        onChange={(e) => setNewFeature(e.target.value)}
                        placeholder="Add a key feature"
                        className="glass-card border-white/10 bg-white/5 text-white placeholder:text-zinc-500"
                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addFeature())}
                      />
                      <Button type="button" onClick={addFeature} size="sm" variant="outline">
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    {features.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {features.map((feature, index) => (
                          <Badge key={index} variant="secondary" className="bg-blue-500/20 text-blue-400">
                            {feature}
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => removeFeature(feature)}
                              className="ml-1 h-auto p-0 hover:bg-transparent"
                            >
                              <X className="w-3 h-3" />
                            </Button>
                          </Badge>
                        ))}
                      </div>
                    )}
                    {errors.features && (
                      <p className="text-sm text-red-400">{errors.features.message}</p>
                    )}
                  </div>
                </div>

                {/* Tags */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Tags</h3>
                  
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <Input
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        placeholder="Add a tag"
                        className="glass-card border-white/10 bg-white/5 text-white placeholder:text-zinc-500"
                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                      />
                      <Button type="button" onClick={addTag} size="sm" variant="outline">
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    {tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="bg-purple-500/20 text-purple-400">
                            #{tag}
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => removeTag(tag)}
                              className="ml-1 h-auto p-0 hover:bg-transparent"
                            >
                              <X className="w-3 h-3" />
                            </Button>
                          </Badge>
                        ))}
                      </div>
                    )}
                    {errors.tags && (
                      <p className="text-sm text-red-400">{errors.tags.message}</p>
                    )}
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Additional Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="screenshotUrl" className="text-white">Screenshot URL (Optional)</Label>
                      <Input
                        id="screenshotUrl"
                        {...form.register('screenshotUrl')}
                        placeholder="https://example.com/screenshot.jpg"
                        className="glass-card border-white/10 bg-white/5 text-white placeholder:text-zinc-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contactEmail" className="text-white">Contact Email *</Label>
                      <Input
                        id="contactEmail"
                        type="email"
                        {...form.register('contactEmail')}
                        placeholder="your@email.com"
                        className="glass-card border-white/10 bg-white/5 text-white placeholder:text-zinc-500"
                      />
                      {errors.contactEmail && (
                        <p className="text-sm text-red-400">{errors.contactEmail.message}</p>
                      )}
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Submitting...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Submit Tool for Review
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Submission Guidelines */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Submission Guidelines</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-white text-sm">Quality Tools Only</h4>
                    <p className="text-xs text-zinc-400">We only accept functional, high-quality AI tools</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-white text-sm">Accurate Information</h4>
                    <p className="text-xs text-zinc-400">Provide accurate and detailed descriptions</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-white text-sm">Working Links</h4>
                    <p className="text-xs text-zinc-400">Ensure all URLs are functional and accessible</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Review Process */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Review Process</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                  <span className="text-sm text-zinc-300">Submission received</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                  <span className="text-sm text-zinc-300">Quality review (24-48h)</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
                  <span className="text-sm text-zinc-300">Published to directory</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}