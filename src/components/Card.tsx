import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function Card({ icon: Icon, title, description }: CardProps) {
  return (
    <div className="h-full bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
      <Icon className="h-12 w-12 text-primary-600 mb-4 flex-shrink-0" />
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
    </div>
  );
}