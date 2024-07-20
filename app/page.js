import Image from "next/image";
import { Button } from 'antd';
import Link from 'next/link'
import Build from "@/svg/build";
import Share from "@/svg/share";
import Get from "@/svg/get";
export default function Home() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: "1" }}></div>
      <div style={{ flex: "8" }} >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
  <div style={{fontFamily: 'Merriweather, serif',  fontSize: '80px',flex: "1", fontWeight: 'bold'  }}><h1>Build your best</h1></div>
  <div style={{fontFamily: 'Merriweather, serif',  fontSize: '80px',flex: "1", fontWeight: 'bold' }}><h1>community</h1></div>
  <div style={{fontFamily: 'Merriweather, serif',  fontSize: '80px',flex: "1", fontWeight: 'bold' }}><h1>starting from here</h1></div>
  <div style={{fontFamily: 'Poppins, serif',  fontSize: '24px',flex: "1" , marginBottom: '50px' }}><h1>Meet and communicate with the best people to run projects,events or other activities in a more effective and fun way</h1></div>
  
  <div style={{ display: 'flex',flex: "1" , marginBottom: '80px'}}>
    <div style={{ flex: 1, marginRight: '10px' }}>
      <Button type="primary" style={{ height: '60px', width: '240px', borderBottomLeftRadius: '0', backgroundColor: '#DB2A6B' }}>Get Started</Button>
    </div>
    <div style={{ flex: 1 }}>
    <div style={{ display: 'flex', alignItems: 'center',height:"100%" }}>
  <Link style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }} href="./">
    <h1 style={{ margin: 0, marginRight: '5px' }}>Learn More</h1>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
    </svg>
  </Link>
</div>


    </div>
  </div>

  <div style={{ display: 'flex',flex: "1", justifyContent: 'center'}}>
    <div style={{ flex: 1,  textAlign: 'center' }}>
     <Build /> </div>
    <div style={{ flex: 1,  textAlign: 'center' }}> <Share /> </div>
    <div style={{ flex: 1, textAlign: 'center' }}> <Get /> </div>
  </div>
</div>


      </div>
      <div style={{ flex: "1" }}></div>
      <div style={{ flex: "8", display:"flex"}} >
      <div  style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: "1", marginBottom: '150px', marginRight: '30px'}}>  <Image
      src="/image1.png" 
      alt="Description of your image"
      width={240} 
      height={509}
     />
      <Image
      src="/image3.png" 
      alt="Description of your image"
      width={240} 
      height={200} 
    />
    </div>
    <div style={{  display: 'flex', flexDirection: 'column', justifyContent: 'space-between',flex: "1", marginBottom: '150px', marginRight: '30px'}}><Image
      src="/image2.png" 
      alt="Description of your image"
      width={240} 
      height={509} 
      style={{  marginBottom: '28px' }}
    />
    <Image
      src="/image4.png" 
      alt="Description of your image"
      width={240} 
      height={509} 
    />
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',flex: "1"}}>
    <Image
      src="/image5.png" 
      alt="Description of your image"
      width={240} 
      height={509} 
    />
    </div>
      </div>
  
    </div>

  );
}
