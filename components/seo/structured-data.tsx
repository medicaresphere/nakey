import React from 'react';
import { StructuredData } from '@/lib/structured-data';

interface StructuredDataProps {
  data: StructuredData | StructuredData[];
}

export function StructuredDataComponent({ data }: StructuredDataProps) {
  const jsonLd = Array.isArray(data) ? data : [data];
  
  return (
    <>
      {jsonLd.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(item, null, 2)
          }}
        />
      ))}
    </>
  );
}