"use client";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { TbMenu2, TbUser } from "react-icons/tb";
import Image from "next/image";
import { MdOutlineClose } from "react-icons/md";

const ShoppingBag = () => {
  
  return (
    

   <div className="px-[3%]">
 <div className=" py-[20px] bg-[#FFFFFF] w-full sticky top-0 z-50">
            <div className="w-full flex items-center justify-between">
                <div className="flex flex-col ">
                    <Link href={"/"} className="flex z-[500] space-x-[5px] items-center">
                        <Image
                            width={50}
                            className="h-auto"
                            height={50}
                            src="/navbar/LOGO_OUTFIT.svg"
                            alt="logo"
                        />
                        <span className="text-[40px] font-[600]">Outfit Fashions</span>
                    </Link>
                    <ul className="flex space-x-[35px] ps-[60px] z-[500]">
                        <Link className="cursor-pointer text-[14px] font-[700]" href={"/"}>HOME</Link>
                        <Link className="cursor-pointer text-[14px] font-[700]" href={"/about"}>ABOUT</Link>
                        <Link className="cursor-pointer text-[14px] font-[700]" href={"/contact"}>CONTACT US</Link>
                        <Link className="cursor-pointer text-[14px] font-[700]" href={"/join"}>JOIN US</Link>
                    </ul>
                </div>
                <div className="flex space-x-[15px] z-[500]">
                <Link href={"/"}
                >
                <TbUser  className="text-[20px] cursor-pointer"/>
                </Link>
                <Link href={"/"} className="relative"
                
                >
                <FiShoppingBag  className="text-[20px] cursor-pointer"/>
                <p className="absolute bg-[#024E82] text-[#ffff] top-[-2px] rounded-[100%] p-[2px] right-[-2px] text-[8px]">10</p>
                </Link>
                <Link href={"/"}>
                <TbMenu2 className="text-[20px] cursor-pointer" />
                </Link>
                </div>
            </div>
                      
        </div>
   
   <div className="mt-[30px]">
    <div className="flex space-x-[5px] ps-[60px]">
        <Link className="text-[#888888] cursor-pointer" href={"/"}>HOME /</Link>
        <Link href={"/Shoppingbag"} className="cursor-pointer font-[700]">SHOPPING CART</Link>
        
    </div>

    <div className="flex flex-col mt-[30px]">
        <div className="flex justify-center space-x-[150px] align-middle text-center">
            <p className="font-[700] text-[20px]">Product</p>
            <p className="font-[700] text-[20px]">Price</p>
            <p className="font-[700] text-[20px]">Quantity</p>
            <p className="font-[700] text-[20px]">Total</p>
        </div>
        <div className="border-b border-[#EBEBEB] my-[30px]"></div>
        <div className="flex px-[150px]">
            <div className="">
            <MdOutlineClose className="text-[16px]" />
            </div>
        <div className="flex w-[85%] justify-center space-x-[120px] align-middle text-start">
            <p className="font-[700] text-[16px]">Plain White Shirt</p>
            <p className="font-[700] text-[16px]">₹59.00</p>
            <p className="font-[700] text-[16px] border border-[#EBEBEB]">1</p>
            <p className="font-[700] text-[16px]">₹59.00</p>
        </div>
        </div>
        <div className="border-b border-[#EBEBEB] my-[30px]"></div>
    </div>
   </div>
   </div>
    
  );
};

export default ShoppingBag;