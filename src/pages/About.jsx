function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 ">
        <div className="flex flex-col md:flex-row items-center gap-12 mt-10">
          {/* Image Side */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25"></div>
              <img
                src="/images/newgb.jpg"
                alt="AWS Community"
                className="relative w-full h-[330px] object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              AWS Cloud Club MJCET
            </h1>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Welcome to the AWS User Group at MJCET! We are a community of cloud enthusiasts, 
              developers, and future architects passionate about Amazon Web Services technology.
            </p>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-purple-400">Our Mission</h2>
              <p className="text-gray-400">
                To foster learning, collaboration, and innovation in cloud computing through:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                  </svg>
                  Hands-on workshops and training sessions
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                  </svg>
                  Technical discussions and knowledge sharing
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                  </svg>
                  Networking opportunities with industry experts
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
