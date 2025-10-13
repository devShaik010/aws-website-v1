import React, { useState } from 'react'; 

const getPhotoList = () => {
    return [
        "1.jpg", 
        "2.jpeg", 
        "3.jpeg", 
        "4.jpeg", 
        "5.jpg", 
        "6.jpg", 
        "annualday.jpg",
        "annualday2.jpg",
        "annualday3.jpg",
        "annualday4.jpg",
        "8.png",

    ];
}


function Gallery() {
    // 2. State to manage the currently selected image's path for the modal
    const [selectedImage, setSelectedImage] = useState(null); 

    const imageFilenames = getPhotoList();
    const tags = [];

    // 3. Handler function to open the modal
    const openModal = (srcPath) => {
        setSelectedImage(srcPath);
    };

    // 4. Handler function to close the modal
    const closeModal = () => {
        setSelectedImage(null);
    };

    // --- Modal Component Definition ---
    const ImageModal = () => {
        if (!selectedImage) return null; // Don't render if no image is selected

        return (
            // Backdrop (covers the entire screen)
            <div 
                className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-90 backdrop-blur-sm"
                onClick={closeModal} // Close on clicking the backdrop
            >
                {/* Modal Content container */}
                <div 
                    className="relative max-w-5xl max-h-screen p-4" 
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image/content
                >
                    {/* Close Button */}
                    <button 
                        onClick={closeModal}
                        className="absolute top-4 right-4 z-50 text-white text-3xl font-bold transition duration-200 hover:text-red-500"
                        aria-label="Close modal"
                    >
                        &times;
                    </button>

                    {/* Full-size Image */}
                    <img 
                        src={selectedImage} 
                        alt="Enlarged gallery view" 
                        className="max-h-[90vh] max-w-full rounded-lg shadow-2xl object-contain"
                    />
                </div>
            </div>
        );
    };
    // ------------------------------------


    return (
        <div className=" py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="mb-8 md:mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-800 sm:text-4xl dark:text-white">
                        Our Memories
                    </h2>
                    <p className="text-gray-500 mt-2">A collection of moments.</p>
                </div>

                <div className="columns-2 gap-4 sm:columns-3 md:columns-4 md:gap-6 xl:gap-8">
                    {imageFilenames.map((filename, index) => {
                        const srcPath = `/images/${filename}`;
                        const randomTag = tags[Math.floor(Math.random() * tags.length)];

                        return (
                            <div
                                key={index} 
                                // Change <a> to <div> and add onClick handler
                                onClick={() => openModal(srcPath)} 
                                className="group relative mb-4 inline-block w-full overflow-hidden rounded-lg bg-gray-100 shadow-lg transition duration-300 hover:shadow-xl break-inside-avoid cursor-pointer"
                            >
                                <img 
                                    src={srcPath} 
                                    loading="lazy" 
                                    alt={`Gallery photo ${index + 1}`} 
                                    className="h-auto max-w-full object-cover object-center transition duration-500 group-hover:scale-105" 
                                />

                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-60"
                                ></div>
                                <span className="absolute bottom-4 left-4 text-sm text-white opacity-0 transition duration-300 group-hover:opacity-100 md:text-lg">
                                    {randomTag}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
            
            {/* 5. Render the Modal component */}
            <ImageModal /> 
        </div>
    );
}

export default Gallery;