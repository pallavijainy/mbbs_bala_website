import React from "react";

const Gallery = () => {
    return (
        <section className="bg-white py-12 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Featured <span className="text-red-600">Gallery</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <div className=" col-span-2 grid gap-5 sm:grid-cols-2 grid-cols-1">
                        <div className="w-full h-44 border rounded-2xl"></div>
                        <div className="w-full h-44 border rounded-2xl"></div>
                        <div className="w-full h-44 border rounded-2xl"></div>
                        <div className="w-full h-44 border rounded-2xl"></div>
                    </div>
                    <div className="border w-full md:h-60 h-44 lg:h-full rounded-2xl">
                    </div>
                    <div className=" grid gap-5 grid-cols-1">
                        <div className="w-full h-44 border rounded-2xl"></div>
                        <div className="w-full h-44 border rounded-2xl"></div>
                    </div>
                    <div className="md:h-60 h-44 md:col-span-2 border shadow-md rounded-2xl">
                    </div>
                    <div className="md:h-60 h-44 md:col-span-2 border shadow-md rounded-2xl">
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
