import React from 'react';
import Image from 'next/image';
export const Footer = () => {
  return (
    //  bg-[#E5E7EB] p-20px text-center  bottom-0 left-0 w-full
    // <div className='bg-gray-800 text-white text-center p-4 '>
    //   <p>© 2024 YourCompanyName. All rights reserved.</p>
    // </div>
    <footer class="bg-gray-100 ">
      
  <div class="container mx-auto py-6 px-4">
    <div class="flex flex-col md:flex-row md:justify-evenly space-y-4 md:space-y-0">
     
      <div class="space-y-4">
        <h2 class="font-semibold text-lg">FOLLOW US</h2>
        <div className="flex space-x-4">
  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
    <Image src="/facebook.png" alt="facebook" width={30} height={30} className="cursor-pointer hover:scale-110 duration-150" />
  </a>
  <a href="https://x.com" target="_blank" rel="noopener noreferrer">
    <Image src="/twitter.png" alt="twitter" width={30} height={30} className="cursor-pointer hover:scale-110 duration-150" />
  </a>  
  <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
    <Image src="/video.png" alt="video" width={30} height={30} className="cursor-pointer hover:scale-110 duration-150" />
  </a>
  <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
    <Image src="/instagram.png" alt="instagram" width={30} height={30} className="cursor-pointer hover:scale-110 duration-150" />
  </a>
</div>
      </div>

    
      <div>
        <h2 class="font-semibold text-lg">EXPRESS GROUP</h2>
        <ul class="space-y-2 ">
          <li><a href="https://news.google.com/ "target="_blank" class="hover:underline ">The Indian Express</a></li>
          <li><a href="https://news.google.com/"target="_blank" class="hover:underline ">The Financial Express</a></li>
          <li><a href="https://news.google.com/"target="_blank" class="hover:underline ">Jansatta</a></li>
          <li><a href="https://news.google.com/"target="_blank" class="hover:underline ">inUth</a></li>
          <li><a href="https://news.google.com/"target="_blank" class="hover:underline ">LokSatta</a></li>
        </ul>
      </div>

   
      <div>
        <h2 class="font-semibold text-lg">QUICK LINKS</h2>
        <ul class="space-y-2">
          <li><a href="#" class="hover:underline hover:scale-105 duration-150">T&C</a></li>
          <li><a href="#" class="hover:underline hover:scale-105 duration-150">Privacy Policy</a></li>
          <li><a href="#" class="hover:underline hover:scale-105 duration-150">Advertise with Us</a></li>
          <li><a href="#" class="hover:underline hover:scale-105 duration-150">Brand Solutions</a></li>
          <li><a href="#" class="hover:underline hover:scale-105 duration-150">Contact Us</a></li>
        </ul>
      </div>
    </div>

    
    <div class="mt-8 border-t border-gray-700 pt-4 flex justify-center items-center">
      <p class="text-sm">&copy; 2024 The News Express [P] Ltd. All Rights Reserved</p>
     
    </div>
  </div>
</footer>

  );
};

