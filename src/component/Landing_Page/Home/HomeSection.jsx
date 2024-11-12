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

            {/* Discover New Arrivals Section */}
            <div className="flex flex-col justify-center text-center py-[40px]">
                <p className="text-[40px] font-[700]">Discover NEW Arrivals</p>
                <p className="text-[25px] text-[#d3d3d3]">Recently added Shirts!</p>
            </div>
            <div className="flex flex-col gap-[50px] px-[5%]">
                <div className="flex space-x-[20px]">
                    <Link href="/homeimage">
                        <div>
                            <Image src={"/hero/unsplash_KjRkxQ2NNXA.svg"} height={400} width={400} alt="plainshirt" />
                            <div className="flex flex-col mt-[10px] justify-center text-center">
                                <p className="font-[700]">Plain White Shirt</p>
                                <p className="text-[#024E82]">₹290.0</p>
                            </div>
                        </div>
                    </Link>
                    <Link href="/homeimage">
                        <div>
                            <Image src={"/hero/Rectangle 1.svg"} height={400} width={400} alt="jacket"/>
                            <div className="flex flex-col mt-[10px] justify-center text-center">
                                <p className="font-[700]">Denim Jacket</p>
                                <p className="text-[#024E82]">₹690.0</p>
                            </div>
                        </div>
                    </Link>
                    <Link href="/homeimage">
                        <div>
                            <Image src={"/hero/Rectangle 1 (1).svg"} height={400} width={400} alt="polo"/>
                            <div className="flex flex-col mt-[10px] justify-center text-center">
                                <p className="font-[700]">Black Polo Shirt</p>
                                <p className="text-[#024E82]">₹490.0</p>
                            </div>
                        </div>
                    </Link>
                    <Link href="/homeimage">
                        <div>
                            <Image src={"/hero/Rectangle 1 (2).svg"} height={400} width={400} alt="sweatshirt"/>
                            <div className="flex flex-col mt-[10px] justify-center text-center">
                                <p className="font-[700]">Blue Sweatshirt</p>
                                <p className="text-[#024E82]">₹790.0</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

            {/* Weekly Picks Section */}
            <div className="flex flex-col justify-center text-center py-[40px]">
                <p className="text-[40px] font-[700]">Weekly Picks</p>
            </div>
            <div className="flex flex-col px-[5%]">
                <div className="flex space-x-[20px]">
                    <Link href="/homeimage">
                        <Image src={"/hero/Rectangle 1 (8).svg"} height={400} width={400} alt="clothmen"/>
                    </Link>
                    <Link href="/homeimage">
                        <Image src={"/hero/Rectangle 3 (1).svg"} height={400} width={400} alt="clothkid"/>
                    </Link>
                    <Link href="/homeimage">
                        <Image src={"/hero/Rectangle 4 (1).svg"} height={400} width={400} alt="clothchild"/>
                    </Link>
                    <Link href="/homeimage">
                        <Image src={"/hero/Rectangle 2 (2).svg"} height={400} width={400} alt="clothlady"/>
                    </Link>
                </div>
            </div>

            {/* Top Sellers Section */}
            <div className="flex flex-col justify-center text-center py-[40px]">
                <p className="text-[40px] font-[700]">Top Sellers</p>
                <p className="text-[25px] text-[#d3d3d3]">Browse our top-selling products</p>
            </div>
            <div className="flex flex-col px-[5%]">
                <div className="flex space-x-[20px]">
                    <Link href="/homeimage">
                        <div>
                            <Image src={"/hero/Rectangle 1 (9).svg"} height={400} width={400} alt="grey"/>
                            <div className="flex flex-col mt-[10px] justify-center text-center">
                                <p className="font-[700]">Gray Polo Shirt</p>
                                <p className="text-[#024E82]">₹490.0</p>
                            </div>
                        </div>
                    </Link>
                    <Link href="/homeimage">
                        <div>
                            <Image src={"/hero/Rectangle 1 (10).svg"} height={400} width={400} alt="redshirt"/>
                            <div className="flex flex-col mt-[10px] justify-center text-center">
                                <p className="font-[700]">Red Shirt</p>
                                <p className="text-[#024E82]">₹690.0</p>
                            </div>
                        </div>
                    </Link>
                    <Link href="/homeimage">
                        <div>
                            <Image src={"/hero/Rectangle 1 (11).svg"} height={400} width={400} alt="whiteshirt"/>
                            <div className="flex flex-col mt-[10px] justify-center text-center">
                                <p className="font-[700]">Polo White Shirt</p>
                                <p className="text-[#024E82]">₹290.0</p>
                            </div>
                        </div>
                    </Link>
                    <Link href="/homeimage">
                        <div>
                            <Image src={"/hero/Rectangle 1 (12).svg"} height={400} width={400} alt="casual"/>
                            <div className="flex flex-col mt-[10px] justify-center text-center">
                                <p className="font-[700]">Pink Casual Shirt</p>
                                <p className="text-[#024E82]">₹390.0</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

            {/* Bottom Button */}
            <div className="flex justify-center my-[50px] text-center">
                <Link href={"/"} className="text-[18px] bg-[#111113] font-[700] py-[15px] px-[25px] rounded-[7px] cursor-pointer text-[#C8BCF6]">SHOP NOW</Link>
            </div>
        </>
    );
}
