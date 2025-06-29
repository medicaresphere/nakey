'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  name: string;
  href: string;
  current?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const allItems = [
    { name: 'Home', href: '/' },
    ...items
  ];

  return (
    <nav aria-label="Breadcrumb" className={cn('flex items-center space-x-2 text-sm', className)}>
      <ol className="flex items-center space-x-2">
        {allItems.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="w-4 h-4 text-zinc-500 mx-2" aria-hidden="true" />
            )}
            {item.current ? (
              <span className="text-zinc-400 font-medium" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link
                href={item.href}
                className="text-zinc-300 hover:text-white transition-colors"
              >
                {index === 0 ? (
                  <Home className="w-4 h-4" aria-label="Home" />
                ) : (
                  item.name
                )}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}