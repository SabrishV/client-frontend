import { useState } from "react";
import Image from "next/image";

export default function Home_img() {
    const [selectedTab, setSelectedTab] = useState("description");

    return (
        <div className="px-8 py-10 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
            {/* Product Header */}
            <div className="flex flex-col md:flex-row md:space-x-8">
                {/* Product Image */}
                <div className="md:w-1/2 mb-6 md:mb-0">
                    <Image
                        src="/home_image/img_1.svg" // Replace with actual image path
                        alt="Product Image"
                        width={1200}
                        height={1200}
                        className="rounded-md object-cover"
                    />
                </div>
                
                {/* Product Details */}
                <div className="md:w-1/2 space-y-4">
                    <p className="text-gray-500 uppercase tracking-wider text-xs">Home / Shop / Women / Shop</p>
                    <h1 className="text-3xl font-bold text-gray-800">Plain White Shirt</h1>
                    
                    <div className="flex items-center space-x-2">
                        <p className="text-lg text-gray-400 line-through">₹690.0</p>
                        <p className="text-2xl font-semibold text-blue-600">₹590.0</p>
                    </div>
                    
                    <p className="text-sm text-gray-500 leading-relaxed">
                        A classic t-shirt that never goes out of style. This is our most premium collection of shirts, made of pure cotton with a premium finish.
                    </p>
                    
                    {/* Size Selector */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Select Size</label>
                        <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600">
                            <option>Select Size</option>
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                        </select>
                    </div>
                    
                    {/* Add to Cart Button */}
                    <button className="w-full py-3 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300">ADD TO CART</button>
                    
                    {/* Category and Tags */}
                    <div className="text-sm text-gray-500 mt-2">
                        <p>Category: <span className="font-medium">Women, Polo, Casual</span></p>
                        <p>Tags: <span className="font-medium">Modern, Design, Cotton</span></p>
                    </div>
                </div>
            </div>

            {/* Tabs for Description and Reviews */}
            <div className="mt-10 border-t">
                <div className="flex justify-center space-x-8 py-4">
                    <button
                        onClick={() => setSelectedTab("description")}
                        className={`text-lg pb-2 ${selectedTab === "description" ? "font-semibold text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
                    >
                        Description
                    </button>
                    <button
                        onClick={() => setSelectedTab("reviews")}
                        className={`text-lg pb-2 ${selectedTab === "reviews" ? "font-semibold text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
                    >
                        Reviews (0)
                    </button>
                </div>
                
                {/* Tab Content */}
                <div className="py-4">
                    {selectedTab === "description" ? (
                        <p className="text-gray-600 text-sm leading-relaxed">
                            A key objective is engaging digital marketing customers and allowing them to interact with the brand through servicing and delivery of digital media. Information is easy to access at a fast rate through the use of digital communications.
                            Users with access to the internet can use many digital mediums, such as Facebook, YouTube, Forums, and Email etc. Through digital communications it creates a multi-communication channel where information can be quickly exchanged around the world by anyone without any regard to whom they are.[28] Social segregation plays no part through social mediums due to lack of face to face communication and information being widely spread instead to a selective audience.
                        </p>
                    ) : (
                        <p className="text-gray-600 text-sm">There are no reviews yet.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
