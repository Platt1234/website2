import React from 'react';

const team = [
  {
    name: "Joseph Mann",
    title: "Co-Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    expertise: "M&A Strategy & Business Intelligence"
  },
  {
    name: "Daniel Ewart",
    title: "Co-Founder",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80",
    expertise: "Strategic Planning & Analytics"
  }
];

export function Team() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-900">Our Leadership Team</h2>
          <p className="mt-4 text-xl text-gray-600">
            Experienced professionals combining strategic insight with technical expertise
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto object-cover"
                />
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-navy-600 font-medium">{member.title}</p>
                <p className="mt-2 text-gray-600">{member.expertise}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}