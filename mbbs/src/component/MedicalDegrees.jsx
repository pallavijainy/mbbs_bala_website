import React from "react";

const MedicalDegrees = () => {
    const programs = [
        {
            id: 1,
            badge: "Basic",
            levelColor: "text-red-500",
            title: "MBBS",
            description: "Demo demo demo demo demo demo demo demo demo demo.",
            time: "01 hr 12 mins",
            rating: "4.3",
            reviews: "(1,253)",
            teacher: "Jane Cooper",
            teacherimage: "https://plus.unsplash.com/premium_vector-1731922571914-9d0161b5e7b7?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            image:
                "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 2,
            badge: "Intermediate",
            levelColor: "text-yellow-500",
            title: "MBBS",
            description: "Demo demo demo demo demo demo demo demo demo demo.",
            time: "01 hr 12 mins",
            rating: "3.9",
            reviews: "(823)",
            teacher: "Jenny Wilson",
            teacherimage: "https://plus.unsplash.com/premium_vector-1731922571914-9d0161b5e7b7?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            image:
                "https://images.unsplash.com/photo-1592930954854-7d00c87d0cf4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 3,
            badge: "Advanced",
            levelColor: "text-green-500",
            title: "MBBS",
            description: "Demo demo demo demo demo demo demo demo demo demo.",
            time: "01 hr 12 mins",
            rating: "4.2",
            reviews: "(1,251)",
            teacher: "Esther Howard",
            teacherimage: "https://plus.unsplash.com/premium_vector-1731922571914-9d0161b5e7b7?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            image:
                "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 4,
            badge: "Basic",
            levelColor: "text-red-500",
            title: "MBBS",
            description: "Demo demo demo demo demo demo demo demo demo demo.",
            time: "01 hr 12 mins",
            rating: "4.2",
            reviews: "(1,253)",
            teacher: "Esther Howard",
            teacherimage: "https://plus.unsplash.com/premium_vector-1731922571914-9d0161b5e7b7?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            image:
                "https://images.unsplash.com/photo-1617135042790-7f8c4ea4d4d8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];

    return (
        <section className="py-12 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
                <div className=" mb-10">
                    <h2 className="text-lg font-semibold uppercase text-gray-500">
                        Explore Programs
                    </h2>
                    <h1 className="text-3xl font-bold">
                        Our Most <span className="text-red-500">Popular</span> Medical Degrees
                    </h1>
                    <p className="text-gray-600 mt-2">
                        Let’s join our famous class, the knowledge provided will definitely
                        be useful for you.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {programs.map((program) => (
                        <div
                            key={program.id}
                            className="bg-white rounded-lg shadow-md space-y-3 overflow-hidden p-4"
                        >
                            <div className="relative">
                                <img
                                    src={program.image}
                                    alt={program.title}
                                    className="w-full h-52 object-cover"
                                />
                                <span className="absolute top-2 right-2 bg-white text-xs font-bold px-2 py-1 rounded">
                                    {program.time}
                                </span>
                            </div>


                            <span
                                className={`block text-sm font-semibold ${program.levelColor}`}
                            >
                                {program.badge}
                            </span>
                            <h3 className="text-lg font-bold">{program.title}</h3>
                            <p className="text-gray-600 text-sm">
                                {program.description}
                            </p>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div>
                                        <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
                                            <img
                                                    src={program.teacherimage}
                                                    alt={program.teacher}
                                                    className=" w-full h-full object-cover"
                                                />
                                        </div>
                                    </div>
                                    <span className="ml-2 text-sm text-gray-600">
                                        {program.teacher}
                                    </span>
                                </div>
                                <button className="bg-red-500 text-white text-sm px-4 py-2 rounded-md hover:bg-red-600">
                                    Know More
                                </button>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    );
};

export default MedicalDegrees;
