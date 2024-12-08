import React from 'react';
import { Briefcase, TrendingUp, Handshake, LineChart } from 'lucide-react';
import { Card } from './Card';

const services = [
  {
    icon: Briefcase,
    title: "M&A Advisory",
    description: "Expert guidance through mergers, acquisitions, and divestitures, ensuring optimal outcomes for all stakeholders."
  },
  {
    icon: TrendingUp,
    title: "Strategic Planning",
    description: "Data-driven strategic planning and analysis to identify growth opportunities and maximize business value."
  },
  {
    icon: Handshake,
    title: "Transaction Support",
    description: "Comprehensive support throughout the entire transaction process, from initial valuation to deal closure."
  },
  {
    icon: LineChart,
    title: "Business Intelligence",
    description: "Advanced analytics and market insights to drive informed decision-making and strategic growth."
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive M&A and strategic advisory services powered by data-driven insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.title} className="h-full">
              <Card
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}