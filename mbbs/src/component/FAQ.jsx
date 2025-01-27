import React, { useState } from "react";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        { question: "Can I get more information about a product?", answer: "Yes, you can contact our support team to get detailed information about our products." },
        { question: "Are your products covered by a warranty?", answer: "Yes, all our products come with a standard 1-year warranty." },
        { question: "Can I track my order?", answer: "Absolutely! You will receive a tracking link via email once your order has been shipped." },
        { question: "What are your shipping options?", answer: "We offer standard, expedited, and overnight shipping options." },
        { question: "How long does shipping take?", answer: "Shipping times vary by location, but standard shipping typically takes 5-7 business days." },
        { question: "What payment methods do you accept?", answer: "We accept credit cards, debit cards, PayPal, and Apple Pay." },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="flex flex-col items-center py-10 px-4 md:px-16">
            <div className="w-full max-w-6xl bg-gray-50 rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-4">Our Frequently Asked Questions</h2>
                <p className="text-gray-600 mb-6">Have a question? Find answers to common queries about our products and services.</p>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                        <img
                            src="https://via.placeholder.com/300"
                            alt="FAQ illustration"
                            className="rounded-lg"
                        />
                    </div>
                    <div className="flex-1">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border-b border-gray-300 py-3 cursor-pointer"
                                onClick={() => toggleFAQ(index)}
                            >
                                <div className="flex justify-between items-center">
                                    <h3 className="text-gray-700 font-medium">{faq.question}</h3>
                                    <span>{activeIndex === index ? "-" : "+"}</span>
                                </div>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? "max-h-40" : "max-h-0"
                                        }`}
                                >
                                    <p className="mt-2 text-gray-600">{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
