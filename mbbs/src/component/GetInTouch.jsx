import React from "react";

const GetInTouch = () => {
    return (
        <section className="py-12 px-5 md:px-8 lg:px-16">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
                <div className="text-center lg:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Get in touch</h2>
                    <p className="text-gray-600 mb-6">
                        Our friendly team would love to hear from you!
                    </p>

                    <div className="flex items-center gap-4 mb-6">
                        <div>
                            <div className="w-12 h-12 bg-gray-100 rounded-full overflow-hidden">
                                <img
                                    src="https://plus.unsplash.com/premium_vector-1727952230626-26e0abea2eed?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Ritesh Sir"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Ritesh Sir</h3>
                            <p className="text-gray-500 text-sm">Admission Counselor</p>
                        </div>
                    </div>

                    <hr className="border-gray-200 mb-6" />

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <span className="text-red-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 12h2a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6a2 2 0 012-2h2m4-6v6m0 0L9 9m3 3l3-3"
                                    />
                                </svg>
                            </span>
                            <a
                                href="mailto:info@mbbswala.in"
                                className="text-gray-700 hover:underline"
                            >
                                info@mbbswala.in
                            </a>
                        </div>

                        <div className="flex items-center gap-4">
                            <span className="text-green-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 7.89a2 2 0 002.83 0L21 8m-9 4v8m0-8H7m2 0H3m18 0h-4"
                                    />
                                </svg>
                            </span>
                            <a
                                href="tel:+916266636705"
                                className="text-gray-700 hover:underline"
                            >
                                +91-6266636705
                            </a>
                        </div>

                        <div className="flex items-center gap-4">
                            <span className="text-blue-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 4h16v16H4V4zm4 4v8h8V8H8z"
                                    />
                                </svg>
                            </span>
                            <p className="text-gray-700">
                                Sf 17, Aakriti Business Centre, Salaiya, Bhopal, (MP), 462026
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center lg:justify-end">
                    <div className="bg-white border rounded-lg p-4 w-full max-w-sm shadow-lg">
                        <div className="">
                            <img
                                src="https://plus.unsplash.com/premium_vector-1731582099245-317607c8e57b?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                                alt="Counselor"
                                className=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetInTouch;
