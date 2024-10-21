import Link from "next/link";
import React from "react";

const InfoBoard = () => {
  return (
    <div className="w-[80%] mx-auto border-t-2 border-black pt-4 flex flex-wrap justify-center items-center">
      <div className="flex flex-wrap justify-center w-full">
        <Link href="/DynamicPage" className="para1 w-full sm:w-[50%] md:w-[33.33%] lg:w-[16%] px-5 mb-4">
          <a href="">
            <p>Editors Pick | Politics</p>
          </a>
          <h1>The Frightening Affect of Climate Change on Government</h1>
        </Link>
        <Link href="/DynamicPage" className="para2 w-full sm:w-[50%] md:w-[33.33%] lg:w-[16%] px-5 mb-4">
          <a href="">
            <p>Editors Pick | Politics</p>
          </a>
          <h1>The Ultimate Guide to Stock Market</h1>
        </Link>
        <Link href="/DynamicPage" className="para3 w-full sm:w-[50%] md:w-[33.33%] lg:w-[16%] px-5 mb-4">
          <a href="">
            <p>Editors Pick | Politics</p>
          </a>
          <h1>Don’t Share This Politics Insider Secret</h1>
        </Link>
        <Link href="/DynamicPage" className="para4 w-full sm:w-[50%] md:w-[33.33%] lg:w-[16%] px-5 mb-4">
          <a href="">
            <p>Editors Pick | Politics</p>
          </a>
          <h1>All Your Burning Technology Questions, Answered</h1>
        </Link>
        <Link href="/DynamicPage" className="para5 w-full sm:w-[50%] md:w-[33.33%] lg:w-[16%] px-5 mb-4">
          <a href="">
            <p>Editors Pick | Politics</p>
          </a>
          <h1>Automobile: All the Stats, Facts, and Data You’ll Ever Need to Know</h1>
        </Link>
        <Link href="/DynamicPage" className="para6 w-full sm:w-[50%] md:w-[33.33%] lg:w-[16%] px-5 mb-4">
          <a href="">
            <p>Automobile | Editors Pick</p>
          </a>
          <h1>Automobile: All the Stats, Facts, and Data You’ll Ever Need to Know</h1>
        </Link>
      </div>
    </div>
  );
};

export default InfoBoard;
