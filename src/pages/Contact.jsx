import React from 'react';

// --- Card Data ---
// Note: We use the structure of the provided Flowbite card as a template.

const socialCards = [
    { 
        name: "Meetup Page", 
        url: "https://www.meetup.com/aws-sbg-mjcet/", 
        imageSrc: "/images/meetup.avif", 
        description: "Join our community events and gatherings. RSVP for our next session!",
        buttonText: "Go to Meetup",
        buttonColor: "bg-red-600 hover:bg-red-700 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800",
    },
    { 
        name: "LinkedIn Page", 
        url: "https://www.linkedin.com/company/aws-cloud-club-mjcet/", 
        imageSrc: "/images/linkedinimg.png", 
        description: "Connect professionally and see our business updates and job postings.",
        buttonText: "Connect on LinkedIn",
        buttonColor: "bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    },
    { 
        name: "Instagram Page", 
        url: "https://www.instagram.com/awsclub.mjcet/", 
        imageSrc: "/images/insta.png", 
        description: "Follow our visual journey, behind-the-scenes content, and latest highlights.",
        buttonText: "Follow on Instagram",
        buttonColor: "bg-pink-600 hover:bg-pink-700 focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800",
    },
];

// Reusable Card Component based on the provided HTML structure
const Card = ({ title, description, imageUrl, linkUrl, buttonText, buttonColor }) => (
    <div className="max-w-sm border border-gray-200 rounded-lg shadow-xl bg-gray-800 border-gray-700 transition duration-300 transform hover:scale-[1.03] flex flex-col">
        <a href={linkUrl} target="_blank" rel="noopener noreferrer">
            {/* Image section: we use object-cover to fit image in place of rounded-t-lg */}
            <img 
                className="rounded-t-lg w-full h-48 object-cover" 
                src={imageUrl} 
                alt={`${title} image`} 
            />
        </a>
        <div className="p-5 flex flex-col justify-between flex-grow">
            <a href={linkUrl} target="_blank" rel="noopener noreferrer">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-white">
                    {title}
                </h5>
            </a>
            <p className="mb-4 font-normal text-gray-400 flex-grow">
                {description}
            </p>
            <a 
                href={linkUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white rounded-lg ${buttonColor} focus:ring-4 focus:outline-none`}
            >
                {buttonText}
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>
);


const ContactFormSection = () => (
    <div className="py-20 " id='contact'> {/* Add ample padding before the form section */}
        <div className="mx-auto max-w-7xl px-4 md:px-8 border border-gray-700 rounded-xl shadow-2xl bg-gray-900">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 rounded-xl ">
                
                {/* Left Side: Text and Contact Info */}
                <div className="text-white">
                    <h2 className="text-5xl font-extrabold mb-6">
                        Get in touch
                    </h2>
                    <p className="text-lg text-gray-400 mb-12 max-w-md">
                        {/* Placeholder text removed, can be re-added here if needed */}
                    </p>

                    <div className="space-y-6 text-gray-400">
                        <div className="flex items-start space-x-3"> {/* Changed items-center to items-start for multi-line address */}
                            {/* Location Icon */}
                            <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            <div>
                                Mount Pleasant, 8-2-249 to 267<br/> 
                                Road No. 3, Banjara Hills<br/> 
                                Hyderabad - 500 034, Telangana State, India
                            </div>
                        </div>

                        <div className="flex items-center space-x-3">
                            {/* Phone Icon */}
                            <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            <a href="tel:+918897022603" className="hover:text-white transition duration-150">
                                +91 88970 22603
                            </a>
                        </div>

                        <div className="flex items-center space-x-3">
                            {/* Email Icon */}
                            <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            <a 
                                href="mailto:awscc@mjcollege.ac.in" 
                                className="hover:text-white transition duration-150"
                            >
                                awscc@mjcollege.ac.in
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form Fields */}
                <form className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* First Name */}
                        <div>
                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-300">First name</label>
                            <input type="text" id="first-name" name="first-name" className="mt-1 block w-full bg-transparent border-b border-gray-600 focus:border-purple-500 focus:ring-0 text-white p-2" />
                        </div>
                        {/* Last Name */}
                        <div>
                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-300">Last name</label>
                            <input type="text" id="last-name" name="last-name" className="mt-1 block w-full bg-transparent border-b border-gray-600 focus:border-purple-500 focus:ring-0 text-white p-2" />
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                        <input type="email" id="email" name="email" className="mt-1 block w-full bg-transparent border-b border-gray-600 focus:border-purple-500 focus:ring-0 text-white p-2" />
                    </div>

                    {/* Phone Number */}
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300">Phone number</label>
                        <input type="tel" id="phone" name="phone" className="mt-1 block w-full bg-transparent border-b border-gray-600 focus:border-purple-500 focus:ring-0 text-white p-2" />
                    </div>

                    {/* Message */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                        <textarea id="message" name="message" rows="4" className="mt-1 block w-full bg-transparent border border-gray-600 focus:border-purple-500 focus:ring-0 text-white p-2 resize-none"></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end">
                        <button 
                            type="submit" 
                            className="px-6 py-3 text-white font-medium rounded-lg bg-purple-600 hover:bg-purple-700 transition duration-150 shadow-lg"
                        >
                            Send message
                        </button>
                    </div>
                </form>

            </div>
        </div>
    </div>
);


function Contact() {
    return (
        <div className=" dark:bg-gray-900/80 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
                        Our Communication Hub
                    </h1>
                    <p className="mt-4 text-xl text-gray-500">
                        Connect with us through social channels or reach our directory directly.
                    </p>
                </div>

                {/* --- 1. Outreach Directory Card (First, spanning full width) --- */}
                <div className="pb-20"> {/* Increased padding to visually separate */}
                        <div className="bg-indigo-900 p-10 rounded-xl shadow-2xl transition duration-300 transform hover:scale-[1.01] border-b-4 "> {/* Increased padding */}
                            <div className="flex flex-col sm:flex-row sm:items-center space-y-6 sm:space-y-0 sm:space-x-8">
                                
                                {/* Enlarged Photo Section */}
                                <div className="flex-shrink-0">
                                    <img 
                                        src="/images/profiles/musab.jpg" 
                                        alt="Outreach Director Contact" 
                                        className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-md" // Increased w- and h-
                                    />
                                </div>
                                
                                <div>
                                    <h2 className="text-3xl font-bold text-white">
                                        Outreach Directory
                                    </h2>
                                    <p className="mt-2 text-indigo-100">
                                        Reach out directly with our **Outreach Director** for contacts, partnerships, and important community matters.
                                    </p>
                                    <a 
                                        href="#contact" 
                                        className="mt-4 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-indigo-600 bg-white hover:bg-gray-100 transition duration-150 shadow-lg"
                                    >
                                        Contact Us Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                
                {/* --- 2. Social Cards (Three in a row) --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-7 justify-items-center">
                    {socialCards.map((card, index) => (
                        <Card
                            key={index}
                            title={card.name}
                            description={card.description}
                            imageUrl={card.imageSrc}
                            linkUrl={card.url}
                            buttonText={card.buttonText}
                            buttonColor={card.buttonColor}
                        />
                    ))}
                </div>
              <ContactFormSection/>
            </div>
        </div>
    );
}

export default Contact;