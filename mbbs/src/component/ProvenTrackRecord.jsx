import React from "react";

const ProvenTrackRecord = () => {
    return (
        <section className="bg-white py-12 px-5 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8">
                {/* Left Section */}
                <div className="lg:w-[80%] flex flex-col md:flex-row items-center md:items-start md:justify-between gap-8">
                    <div className="w-full md:w-1/2">
                        <p className="text-sm text-blue-600 font-semibold mb-2">Milestones</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4">
                            Our Proven Track <span className="text-red-600 font-bold">Record</span>
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Join Our Growing Community of Future Doctors
                        </p>
                        <div className="bg-gray-100/50 text-center rounded-lg p-6 shadow-md">
                            <h3 className="text-3xl font-normal mb-2">10000+</h3>
                            <p className="text-gray-600 text-lg">Successful Counselling Sessions</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="rounded-lg w-full h-64 md:h-96 lg:h-[550px] overflow-hidden shadow-md">
                            <img
                                src="https://plus.unsplash.com/premium_photo-1689629870780-5d0e655383e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Healthcare professionals"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                <div className="lg:w-[20%] flex flex-col space-y-5">
                    <div className="bg-gray-100/50 text-center rounded-2xl p-6">
                        <h3 className="text-3xl font-normal mb-2">8000+</h3>
                        <p className="text-gray-600 text-lg">Successful Admissions</p>
                    </div>
                    <div className="bg-gray-100/50 text-center rounded-2xl p-6">
                        <h3 className="text-3xl font-normal mb-2">700+</h3>
                        <p className="text-gray-600 text-lg">Top College Tie-Ups</p>
                    </div>
                    <div className="bg-gray-100/50 text-center rounded-2xl p-6">
                        <h3 className="text-3xl font-normal mb-2">1000+</h3>
                        <p className="text-gray-600 text-lg">Scholarships Secured</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProvenTrackRecord;
