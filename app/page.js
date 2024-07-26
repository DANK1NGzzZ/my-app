import Image from "next/image";
import { Button } from 'antd';
import Link from 'next/link'
import Build from "@/svg/build";
import Share from "@/svg/share";
import Get from "@/svg/get";
export default function Home() {
  return (
<div class="flex">
  <div class="flex-1"></div>
  <div class="flex-8">
    <div class="flex flex-col">
      <div class="font-serif text-6xl font-bold flex-1">
        <h1 class="text-center">Build your best</h1>
      </div>
      <div class="font-serif text-6xl font-bold flex-1">
        <h1 class="text-center">community</h1>
      </div>
      <div class="font-serif text-6xl font-bold flex-1">
        <h1 class="text-center">starting from here</h1>
      </div>
      <div class="font-serif text-lg flex-1 mb-10">
        <h1 class="text-center">Meet and communicate with the best people to run projects, events or other activities in a more effective and fun way</h1>
      </div>
      
      <div class="flex flex-1 mb-20">
        <div class="flex-1 mr-4">
          <button class="bg-pink-600 text-white h-16 w-64 rounded-bl-lg">Get Started</button>
        </div>
        <div class="flex-1">
          <div class="flex items-center h-full">
            <a href="./" class="flex items-center no-underline">
              <h1 class="m-0 mr-2">Learn More</h1>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="flex flex-1 justify-center">
        <div class="flex-1 text-center">
          <Build />
        </div>
        <div class="flex-1 text-center">
          <Share />
        </div>
        <div class="flex-1 text-center">
          <Get />
        </div>
      </div>
    </div>
  </div>
  <div class="flex-1"></div>
  <div class="flex-8 flex">
    <div class="flex flex-col justify-between flex-1 mb-32 mr-8">
      <Image src="/image1.png" alt="Description of your image" width={240} height={509} />
      <Image src="/image3.png" alt="Description of your image" width={240} height={200} />
    </div>
    <div class="flex flex-col justify-between flex-1 mb-32 mr-8">
      <Image src="/image2.png" alt="Description of your image" width={240} height={509} class="mb-28" />
      <Image src="/image4.png" alt="Description of your image" width={240} height={509} />
    </div>
    <div class="flex justify-center items-center flex-1">
      <Image src="/image5.png" alt="Description of your image" width={240} height={509} />
    </div>
  </div>
</div>

  );
}
