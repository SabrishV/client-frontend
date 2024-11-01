import Image from "next/image";
import Link from "next/link";

export default function HomeSection() {
    return (
        <>
            <div className="bg-[url('/hero/img_1.svg')] w-full bg-no-repeat bg-cover align-middle h-[90vh]">
                <div className="h-[65vh] flex flex-col justify-end w-[95%] items-end">
                    <div className="px-[20px] text-center">
                        <p className="text-[#ffff] text-[50px] text-center font-[700]">STYLIST PICKS BEAT</p>
                        <p className="text-[#ffff] text-[50px] font-[700] mt-[-30px] mb-[50px] text-center">THE HEAT</p>
                        <Link className="text-[#ffff] text-[25px] font-[700] text-center py-[10px] px-[20px] border-2 border-[#ffff]" href={"/"}>Shop Now</Link>

                    </div>
                </div>


            </div>
            <div className="flex flex-col justify-center text-center py-[40px]">
                <p className="text-[40px] font-[700]">Discover NEW Arrivals</p>
                <p className="text-[25px] text-[#d3d3d3]">Recently added Shirts!</p>
            </div>

            <div className="flex flex-col gap-[50px] px-[5%]">
                <div className="flex space-x-[20px]">
                    <div>
                        <Image src={"/hero/unsplash_KjRkxQ2NNXA.svg"} height={400} width={400} alt="plainshirt" />
                        <div className="flex flex-col mt-[10px] justify-center text-center">
                            <p className="font-[700]">Plain White Shirt</p>
                            <p className="text-[#024E82]">₹290.0</p>
                        </div>
                    </div>
                    <div>
                        <Image src={"/hero/Rectangle 1.svg"} height={400} width={400} alt="jacket"/>
                        <div className="flex flex-col mt-[10px] justify-center text-center">
                            <p className="font-[700]">Denim Jacket</p>
                            <p className="text-[#024E82]">₹690.0</p>
                        </div>
                    </div>
                    <div>
                        <Image src={"/hero/Rectangle 1 (1).svg"} height={400} width={400} alt="polo"/>
                        <div className="flex flex-col mt-[10px] justify-center text-center">
                            <p className="font-[700]">Black Polo Shirt</p>
                            <p className="text-[#024E82]">₹490.0</p>
                        </div>
                    </div>
                    <div>
                        <Image src={"/hero/Rectangle 1 (2).svg"} height={400} width={400} alt="sweatshirt"/>
                        <div className="flex flex-col mt-[10px] justify-center text-center">
                            <p className="font-[700]">Blue Sweatshirt</p>
                            <p className="text-[#024E82]">₹790.0</p>
                        </div>
                    </div>

                </div>
                <div className="flex space-x-[20px]">
                    <div>
                        <Image src={"/hero/Rectangle 1 (3).svg"} height={400} width={400} alt="blue"/>
                        <div className="flex flex-col mt-[10px] justify-center text-center">
                            <p className="font-[700]">Blue Plain Shirt</p>
                            <p className="text-[#024E82]">₹490.0</p>
                        </div>
                    </div>
                    <div>
                        <Image src={"/hero/Rectangle 1 (4).svg"} height={400} width={400} alt="dakblue"/>
                        <div className="flex flex-col mt-[10px] justify-center text-center">
                            <p className="font-[700]">Dark Blue Shirt</p>
                            <p className="text-[#024E82]">₹890.0</p>
                        </div>
                    </div>
                    <div>
                        <Image src={"/hero/Rectangle 1 (5).svg"} height={400} width={400} alt="outcast"/>
                        <div className="flex flex-col mt-[10px] justify-center text-center">
                            <p className="font-[700]">Outcast T Shirt</p>
                            <p className="text-[#024E82]">₹190.0</p>
                        </div>
                    </div>
                    <div>
                        <Image src={"/hero/Rectangle 1 (6).svg"} height={400} width={400} alt="polo"/>
                        <div className="flex flex-col mt-[10px] justify-center text-center">
                            <p className="font-[700]">Polo Plain Shirt</p>
                            <p className="text-[#024E82]">₹790.0</p>
                        </div>
                    </div>

                </div>

            </div>

            <div className="flex space-x-[60px] my-[60px] px-[5%]">
                <div>
                    <div className="flex space-x-2">
                        <Image src={"/hero/icon.svg"} height={30} width={30} alt="shipping"/>
                        <p className="font-[700] text-[16px]">FREE SHIPPING</p>
                    </div>
                    <p className="px-[40px] w-[250px] text-[12px]">Enjoy free shipping on all orders above ₹100</p>
                </div>
                <div>
                    <div className="flex space-x-2">
                        <Image src={"/hero/icon (1).svg"} height={30} width={30} alt="support"/>
                        <p className="font-[700] text-[16px]">SUPPORT 24/7</p>
                    </div>
                    <p className="px-[40px] w-[250px] text-[14px]">Our support team is there to help you for queries</p>
                </div>
                <div>
                    <div className="flex space-x-2">
                        <Image src={"/hero/icon (2).svg"} height={30} width={30} alt="payment"/>
                        <p className="font-[700] text-[16px]">30 DAYS RETURN</p>
                    </div>
                    <p className="px-[40px] w-[250px] text-[14px]">Simply return it within 30 days for an exchange.</p>
                </div>
                <div>
                    <div className="flex space-x-2">
                        <Image src={"/hero/icon (3).svg"} height={30} width={30} alt="secure"/>
                        <p className="font-[700] text-[16px]">100% PAYMENT SECURE</p>
                    </div>
                    <p className="px-[40px] w-[250px] text-[14px]">Our payments are secured with 256 bit encryption</p>
                </div>
            </div>

            <div className="flex flex-col justify-center text-center py-[40px]">
                <p className="text-[40px] font-[700]">Weekly Picks</p>
            </div>


            <div className="flex flex-col px-[5%]">
                <div className="flex space-x-[20px]">
                    <div>
                        <Image src={"/hero/Rectangle 1 (8).svg"} height={400} width={400} alt="clothmen"/>

                    </div>
                    <div>
                        <Image src={"/hero/Rectangle 3 (1).svg"} height={400} width={400} alt="clothkid"/>

                    </div>
                    <div>
                        <Image src={"/hero/Rectangle 4 (1).svg"} height={400} width={400} alt="clothchild"/>

                    </div>
                    <div>
                        <Image src={"/hero/Rectangle 2 (2).svg"} height={400} width={400} alt="clothlady"/>

                    </div>

                </div>

            </div>

            <div className="flex flex-col justify-center text-center py-[40px]">
                <p className="text-[40px] font-[700]">Top Sellers</p>
                <p className="text-[25px] text-[#d3d3d3]">Browse our top-selling products</p>
            </div>

            <div className="flex flex-col px-[5%]">
                <div className="flex space-x-[20px]">
                    <div>
                        <Image src={"/hero/Rectangle 1 (9).svg"} height={400} width={400} alt="grey"/>
                        <div className="flex flex-col mt-[10px] justify-center text-center">
                            <p className="font-[700]">Gray Polo Shirt</p>
                            <p className="text-[#024E82]">₹490.0</p>
                        </div>
                    </div>
                    <div>
                        <Image src={"/hero/Rectangle 1 (10).svg"} height={400} width={400} alt="redshirt"/>
                        <div className="flex flex-col mt-[10px] justify-center text-center">
                            <p className="font-[700]">Red Shirt</p>
                            <p className="text-[#024E82]">₹690.0</p>
                        </div>
                    </div>
                    <div>
                        <Image src={"/hero/Rectangle 1 (11).svg"} height={400} width={400} alt="whiteshirt"/>
                        <div className="flex flex-col mt-[10px] justify-center text-center">
                            <p className="font-[700]">Polo White Shirt</p>
                            <p className="text-[#024E82]">₹290.0</p>
                        </div>
                    </div>
                    <div>
                        <Image src={"/hero/Rectangle 1 (12).svg"} height={400} width={400} alt="casual"/>
                        <div className="flex flex-col mt-[10px] justify-center text-center">
                            <p className="font-[700]">Pink Casual Shirt</p>
                            <p className="text-[#024E82]">₹390.0</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="flex justify-center my-[50px] text-center">
                <div>
                <Link href={"/"} className="text-[18px] bg-[#111113] font-[700] py-[15px] px-[25px] rounded-[7px] cursor-pointer text-[#C8BCF6]">SHOP NOW</Link>
                </div>
            </div>
        </>
    )
}