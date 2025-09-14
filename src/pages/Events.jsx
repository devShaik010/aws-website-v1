import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Events() {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingEvents = [
    {
      id: 1,
      title: "Amazon Q",
      date: "September 17, 2025",
      time: "10:30 AM - 2:00 PM",
      location: "Seminar Hall, MJCET",
      type: "Workshop",
      description: "Join us for an exciting workshop on Amazon Q - AWS's new generative AI powered assistant. Learn how Amazon Q revolutionizes developer productivity with AI-powered code suggestions, documentation assistance, and security insights.",
      registrationLink: "https://www.meetup.com/aws-cloud-club-mjcet/events/311011732/",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
      tags: ["Linux", "Amazon Q", "Generative AI", "AWS"]
    }
  ];

  const pastEvents = [
    {
      id: 1,
      title: "CloudX",
      date: "October 15, 2023",
      time: "10:00 AM - 4:00 PM",
      location: "Seminar Hall, MJCET",
      type: "Workshop",
      description: "Comprehensive hands-on workshop covering AWS fundamentals, EC2, S3, and basic cloud architecture patterns.",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=1000&auto=format&fit=crop",
      tags: ["Intel", "AI", "Hands-on"],
      feedback: 4.7
    },
    {
      id: 2,
      title: "Infrastructure Camp",
      date: "October 22, 2023",
      time: "2:00 PM - 6:00 PM",
      location: "Seminar Hall, MJCET",
      type: "Workshop",
      description: "Advanced session on AWS Lambda, API Gateway, and building scalable serverless applications.",
      registrationLink: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      tags: ["AWS S3", "IAM", "AWS VPC"],
      feedback: 4.6
    },
    {
      id: 3,
      title: "Datanyx ",
      date: "November 23, 2025",
      time: "08:30 AM(23 Nov) - 08:30 AM(24 Nov)",
      location: "Ghulam Ahmed Hall, MJCET",
      type: "Hackathon",
      description: "Industry expert from AWS will share insights on cloud career opportunities and emerging technologies.",
      registrationLink: "#",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1000&auto=format&fit=crop",
      tags: ["Career", "Industry", "Hacathon"]
    },
    {
      id: 4,
      title: "Imagify 2.0",
      date: "26th July 2024",
      time: "9:00 AM - 4:00 PM",
      location: "Seminar Hall, MJCET",
      type: "Workshop",
      description: "Intensive workshop on AWS Solutions Architect concepts with hands-on labs and real-world scenarios.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop",
      tags: ["Architecture", "Solutions", "Advanced"],
      attendees: 85,
      feedback: 4.8
    },
    {
      id: 5,
      title: "Orientation Day",
      date: "August 17, 2024",
      time: "11:00 AM - 12:00 PM",
      location: "Seminar Hall, SU knowledge Hub",
      type: "Meetup",
      description: "Comprehensive session on AWS security best practices, IAM, and compliance frameworks.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
      tags: ["Security", "IAM", "Compliance"],
      attendees: 100,
      feedback: 4.9
    },
    {
      id: 6,
      title: "Inauguration Ceremony",
      date: "June 28, 2024",
      time: "10:00 AM - 12:00 PM",
      location: "Seminar Hall, MJCET",
      type: "Launch Event",
      description: "On 28th June 2024, we hosted an engaging event from 10:00AM to 12:00PM at the Block 4 Seminar Hall. Attendees had the opportunity to connect, learn, and collaborate on various topics related to cloud computing and Amazon Web Services (AWS). The inauguration of our club featured the esteemed presence of Mr. Faizal Khan, Community Lead of the AWS User Group and AWS Community Hero, as the distinguished Chief Guest.",
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

      {/* Featured Upcoming Event */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="relative">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Poster Image Side */}
            <div className="w-full lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition-all duration-300"></div>
                <img
                  src={currentEvents[0].image}
                  alt={currentEvents[0].title}
                  className="relative rounded-xl w-full object-cover shadow-2xl"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Featured Event
                  </span>
                </div>
              </div>
            </div>

            {/* Event Details Side */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {currentEvents[0].title}
                </h2>
                <p className="text-gray-400 text-lg">Next Upcoming Event</p>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed">
                {currentEvents[0].description}
              </p>

              <div className="space-y-4 py-4">
                <div className="flex items-center text-gray-300">
                  <svg className="w-6 h-6 mr-3 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{currentEvents[0].date}</span>
                </div>

                <div className="flex items-center text-gray-300">
                  <svg className="w-6 h-6 mr-3 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{currentEvents[0].time}</span>
                </div>

                <div className="flex items-center text-gray-300">
                  <svg className="w-6 h-6 mr-3 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{currentEvents[0].location}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {currentEvents[0].tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-4">
                <button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300" onClick={() => window.open(currentEvents[0].registrationLink, "_blank")}>
                  Register Now
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Event Tabs */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Timeline Events */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative max-w-5xl mx-auto px-4"
        >
          {/* Center Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-600 to-blue-600" />

          {pastEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex items-center justify-between mb-8 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-gray-900" />

              {/* Event Card */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 group">
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
                  </div>
                  
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
                </div>
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
