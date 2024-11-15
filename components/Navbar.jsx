'use client'
import React, { useState, useContext } from "react";
import { KeywordContext } from "./KeywordContext.js";

const topic = [
    
    "India",
    "Technology",
    "Gadgets",
    "Research",
    "Movie",
    "Business",
    "Entertainment",
    "Sports",
    "Politics",
    "Global",
    "Music",
    "Education",
    "Video",
    
]
const Navbar = () => {
  const { setKeyword } = useContext(KeywordContext);
  const [searchInput, setSearchInput] = useState('');
  console.log(setKeyword);
  const handleTopicClick = (topic) => {
    setKeyword(topic);
  };
  const handleSearch = () => {
    setKeyword(searchInput);
  };

  const handleHomeClick = () => {
    setKeyword('');
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const today = new Date();
  const options = { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', options);
  return (
    <div className="font-sans">
      {/* Top Navbar */}
    
        <div className="w-[100%] flex items-center justify-between md:px-4 lg:px-8 space-x-2 bg-gray-100 p-2 text-sm ">
          <div className=" flex items-center gap-[10px] bg-gray-200 p-2 rounded-sm font-medium cursor-pointer">
            <p>☰</p>
            <h1 className="hidden lg:block">Section</h1>
          </div>
          <div className="block md:hidden">
            <img src="/logo.png" alt="logo" className="w-[200px] h-[50px]" />
        </div>
          <div className="md:flex space-x-2 hidden ">
            <p className="cursor-pointer  text-xs text-red-500  font-semibold ">ENGLISH |</p>
            <p className="cursor-pointer  text-xs hover:text-red-500 ">தமிழ் |</p>
            <p className="cursor-pointer  text-xs hover:text-red-500">বাংলা |</p>
            <p className="cursor-pointer  text-xs hover:text-red-500">മലയാളം |</p>
            <p className="cursor-pointer  text-xs hover:text-red-500">ગુજરાતી |</p>
            <p className="cursor-pointer  text-xs hover:text-red-500">हिंदी |</p>
            <p className="cursor-pointer  text-xs hover:text-red-500">मराठी |</p>
           
          </div>
          <div className="flex  justify-center items-center gap-[10px]">
            <div className="flex text-white justify-center items-center gap-[10px] p-2 bg-blue-600 rounded-md cursor-pointer">
              <h1>Newsletter</h1>
              <img src="/newspaper.png" alt="newspaper" className="w-[20px]" />
            </div>

            <div className="hidden justify-center items-center gap-[10px] cursor-pointer lg:flex">
              <span>
                <img src="/facebook.png" alt="facebook" className="w-[20px] cursor-pointer" />
              </span>
              <span>
                <img src="/video.png" alt="video" className="w-[20px] cursor-pointer" />
              </span>
              <span>
                <img src="/twitter.png" alt="twitter" className="w-[20px] cursor-pointer" />
              </span>
              <span>
                <img
                  src="/instagram.png"
                  alt="instagram"
                  className="w-[20px]"
                />
              </span>
            </div>
          </div>
          {/* <div className="flex items-center space-x-1">
        <img src="path/to/flag-icon.png" alt="India Flag" className="w-4 h-4" />
        <span>INDIA</span>
        </div> */}
        </div>

        
      <div className=" flex flex-col lg:flex-row justify-center lg:justify-between   items-center px-8 py-2 bg-gray-100 ">
        <div className="hidden lg:flex justify-center items-center gap-2 ">
            <h1 className="text-sm">EDITION</h1>
            <img src="/india.png" alt="flag" className="w-[20px] h-[20px] " />
            
        </div>
        <div>
            <img src="/logo.png" alt="logo" className="w-[200px] h-[50px] hidden md:flex" />
        </div>
        <div className="hidden lg:block text-xs lg-text-sm ">
            <span className="hover:text-blue-600 font-semibold">{formattedDate}</span>
         <div className=" hidden lg:flex gap-[5px] justify-center">
         <span className="hover:text-blue-600 ">EPAPER |</span>
         <span className="hover:text-blue-600 " >TODAY&apos;S PAPER</span>
         </div>
          
        </div>
      </div>

      {/* Bottom Navbar */}
      {/* <div className="flex flex-col lg:flex-row justify-between items-center border-y border-gray-300 p-2 px-4">
        <nav className="flex flex-wrap justify-center items-center space-x-4 text-xs md:text-sm overflow-x-scroll">
        <a
            href="/"
            onClick={handleHomeClick}
            className="text-red-500 font-bold cursor-pointer"
          >
            HOME
          </a>
        {topic.map((topic) => (
        <a
        key={topic}
        onClick={() => handleTopicClick(topic)}
        className="font-semibold text-gray-500 cursor-pointer hover:scale-105 duration-300 hover:text-red-500"
      >
        {topic}
      </a>
      ))}
       
        </nav>
        <div className="flex   items-center mt-2 md:mt-0">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={handleKeyPress}
            className="w-full md:w-56 p-1 rounded-md border border-gray-300 text-gray-500 test-sm "
            placeholder="Search by keyword..."
          />
          <button
            onClick={handleSearch}
            className="ml-2 bg-blue-600 text-white px-4 py-1 rounded-md text-sm"
          >
            Search
          </button>
        </div>
      </div> */}
      
      <div className="flex flex-col extralarge:flex-row justify-between items-center border-y border-gray-300 p-2 px-4">
  <nav className="flex flex-wrap justify-center items-center space-x-4 text-xs md:text-sm overflow-x-scroll">
    <a
      href="/"
      onClick={handleHomeClick}
      className="text-red-500 font-bold cursor-pointer"
    >
      HOME
    </a>
    {topic.map((topic) => (
      <a
        key={topic}
        onClick={() => handleTopicClick(topic)}
        className="font-semibold text-gray-500 cursor-pointer hover:scale-105 duration-300 hover:text-red-500"
      >
        {topic}
      </a>
    ))}
  </nav>
  <div className="flex flex-col md:flex-row md:items-end md:justify-end mt-2 md:mt-0 w-full md:w-auto">
    <div className="flex w-full md:w-auto">
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyDown={handleKeyPress}
        className="w-full md:w-56 p-1 rounded-md border border-gray-300 text-gray-500 text-sm"
        placeholder="Search by keyword..."
      />
      <button
        onClick={handleSearch}
        className="ml-2 bg-blue-600 text-white px-4 py-1 rounded-md text-sm"
      >
        Search
      </button>
    </div>
  </div>
</div>




    </div>
  );
};

export default Navbar;
