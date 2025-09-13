import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Events() {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingEvents = [
    {
      id: 1,
      title: "AWS Cloud Practitioner Workshop",
      date: "October 15, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "MJCET Main Auditorium",
      type: "Workshop",
      description: "Comprehensive hands-on workshop covering AWS fundamentals, EC2, S3, and basic cloud architecture patterns.",
      registrationLink: "#",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=1000&auto=format&fit=crop",
      tags: ["Beginner", "Certification", "Hands-on"]
    },
    {
      id: 2,
      title: "Serverless Architecture Deep Dive",
      date: "October 22, 2025",
      time: "2:00 PM - 6:00 PM",
      location: "Computer Lab - Block A",
      type: "Technical Session",
      description: "Advanced session on AWS Lambda, API Gateway, and building scalable serverless applications.",
      registrationLink: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      tags: ["Advanced", "Lambda", "API Gateway"]
    },
    {
      id: 3,
      title: "AWS Industry Expert Talk",
      date: "November 5, 2025",
      time: "3:00 PM - 5:00 PM",
      location: "Virtual (Teams)",
      type: "Guest Lecture",
      description: "Industry expert from AWS will share insights on cloud career opportunities and emerging technologies.",
      registrationLink: "#",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1000&auto=format&fit=crop",
      tags: ["Career", "Industry", "Virtual"]
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: "AWS Solutions Architect Workshop",
      date: "September 10, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "MJCET Main Auditorium",
      type: "Workshop",
      description: "Intensive workshop on AWS Solutions Architect concepts with hands-on labs and real-world scenarios.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop",
      tags: ["Architecture", "Solutions", "Advanced"],
      attendees: 85,
      feedback: 4.8
    },
    {
      id: 5,
      title: "Cloud Security Fundamentals",
      date: "August 28, 2025",
      time: "2:00 PM - 6:00 PM",
      location: "Computer Lab - Block B",
      type: "Technical Session",
      description: "Comprehensive session on AWS security best practices, IAM, and compliance frameworks.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
      tags: ["Security", "IAM", "Compliance"],
      attendees: 67,
      feedback: 4.9
    },
    {
      id: 6,
      title: "AWS Student Club Launch Event",
      date: "August 15, 2025",
      time: "4:00 PM - 7:00 PM",
      location: "MJCET Main Auditorium",
      type: "Launch Event",
      description: "Grand launch of MJCET's AWS Cloud Club with introduction to cloud computing and club activities.",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1000&auto=format&fit=crop",
      tags: ["Launch", "Networking", "Introduction"],
      attendees: 120,
      feedback: 4.7
    }
  ];

  const currentEvents = activeTab === 'upcoming' ? upcomingEvents : pastEvents;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-purple-900/20 to-black py-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-36 h-36 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-300"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <span className="text-white">Cloud </span>
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Events</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Join us for exciting workshops, technical sessions, and networking events designed to enhance your cloud computing skills and career prospects.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Event Tabs */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-1 border border-gray-700">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-6 py-3 rounded-md transition-all duration-300 font-medium ${
                activeTab === 'upcoming'
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`px-6 py-3 rounded-md transition-all duration-300 font-medium ${
                activeTab === 'past'
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Past Events
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {currentEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 group"
            >
              {/* Event Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {event.type}
                  </span>
                </div>
                {event.attendees && (
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                    {event.attendees} attendees
                  </div>
                )}
              </div>

              {/* Event Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                  {event.title}
                </h3>
                
                <div className="space-y-2 mb-4 text-gray-400 text-sm">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {event.date}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {event.time}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.location}
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {event.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {event.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-md text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Button or Feedback */}
                {activeTab === 'upcoming' ? (
                  <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300">
                    Register Now
                  </button>
                ) : (
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-yellow-400">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm font-medium">{event.feedback}</span>
                    </div>
                    <button className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                      View Details →
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Don't Miss Our Next Event!
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Stay updated with our latest workshops, technical sessions, and networking events. 
            Join our community to receive exclusive invitations and early bird discounts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300">
              Join Our Community
            </button>
            <button className="border border-purple-500 text-purple-400 hover:bg-purple-500/10 font-medium py-3 px-8 rounded-lg transition-all duration-300">
              View Event Calendar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events
