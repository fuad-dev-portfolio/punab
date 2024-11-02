"use client";
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Newsfeed = () => {
  const router = useRouter();

  const handleSignout = async () => {
    await fetch('http://localhost:5000/auth/signout', { method: 'GET', credentials: 'include' });
    router.push('/');
  };
  const logos = [
    'logo1.png',
    'logo2.png',
    'logo3.png',
    'logo4.png',
    'logo5.png',
    'logo6.jfif',
    'logo7.png',
    'logo8.png',
    'logo9.png',
    'logo10.png',
    'logo11.png',
    'logo12.jpeg',
    'logo13.png',
    'logo14.png',
    'logo15.png',
    'logo16.png',
    'logo17.jfif',
    'logo18.jpg',
    'logo19.jfif',
    'logo20.png',
    'logo21.png',
    'logo22.png',
    'logo23.jfif',
    'logo24.png',
    'logo25.png',
    'logo26.png',
    'logo27.png',
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-sky-500 text-black p-5 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <Image src="/logo.png" alt="Punab Logo" width={100} height={100} className="w-24 h-24 mr-3" />
          <h1 className="text-2xl md:text-3xl text-center">Private University National Association of Bangladesh</h1>
        </div>
        <button onClick={handleSignout} className="bg-green-500 text-white px-4 py-2 rounded">Sign Out</button>
      </header>

      <main className="flex-grow p-5">
        <section id="about-us" className="mb-8">
          <h2 className="text-white font-bold mb-2 bg-sky-500 text-center p-4 rounded-lg shadow-lg border border-gray-300 w-1/2 max-w-md mx-auto">About Us</h2>
          <p className="text-lg text-gray-700 p-4 bg-white rounded shadow-md">
            Private University National Association of Bangladesh (PUNAB) is a transformative organization founded in the spirit of unity, sacrifice, and vision inspired by the historic 2024 revolution in Bangladesh. PUNAB seeks to unite students, teachers, and alumni from all private universities across the nation under one banner, with a commitment to fostering collaboration, improving educational quality, and shaping the future of Bangladesh.<br />
            The 2024 revolution demonstrated the power of collective action and the vital role the academic community plays in societal progress. Recognizing that education was among the most impacted sectors by the previous regime, PUNAB is determined to restore, enhance, and revolutionize private university education in Bangladesh. We are dedicated to nurturing a spirit of unity, advocating for educational reform, and ensuring that education contributes meaningfully to national development.
          </p>
        </section>

        <section id="our-mission" className="mb-8">
          <h2 className="text-white font-bold mb-2 bg-sky-500 text-center p-4 rounded-lg shadow-lg border border-gray-300 w-1/2 max-w-md mx-auto">Our Mission</h2>
          <p className="text-lg text-gray-700 p-4 bg-white rounded shadow-md">
            <strong className="text-red-600">Our mission is to create a robust, interconnected community of private university stakeholders who work together to:</strong><br /><br />
            Uphold the Spirit of 2024: PUNAB is committed to preserving the values and aspirations of the 2024 revolution, ensuring that these principles guide our efforts in promoting national interests and safeguarding the rule of law, constitutional integrity, and good governance.
            Elevate Educational Standards: By increasing collaboration between private universities, PUNAB aims to drive innovation and improve the quality of education, empowering students and educators to achieve academic excellence and international recognition.<br /><br />
            <strong className="text-red-600">Policy Advocacy and National Dialogue:</strong><br /><br />
            We are dedicated to engaging in constructive discussions to influence educational and national policies, bringing together ideas that will drive the future of Bangladesh. PUNAB will actively participate in monitoring the state’s adherence to law and order, ensuring accountability and transparency in governance.
            Leadership Development: PUNAB is a platform for cultivating the next generation of leaders, empowering individuals from within the private university system to take on critical roles in addressing national challenges and shaping the future of the country.
          </p>
        </section>

        <section id="our-vision" className="mb-8">
          <h2 className="text-white font-bold mb-2 bg-sky-500 text-center p-4 rounded-lg shadow-lg border border-gray-300 w-1/2 max-w-md mx-auto">Our Vision</h2>
          <p className="text-lg text-gray-700 p-4 bg-white rounded shadow-md">
            PUNAB envisions a Bangladesh where private universities are global centers of academic excellence, innovation, and leadership. Through unity, collaboration, and a steadfast commitment to our revolutionary ideals, we aim to create a brighter future for our education system and our nation. By harnessing the collective power of students, educators, and alumni, we are determined to not only improve education but to contribute meaningfully to the betterment of Bangladesh.<br />
            Together, we will uphold the spirit of our revolution and strive for a prosperous and just society where education leads the way.
          </p>
        </section>
        <section className="flex flex-wrap justify-center my-5">
        <h2 className="text-white font-bold mb-2 bg-sky-500 text-center p-4 rounded-lg shadow-lg border border-gray-300 w-1/2 max-w-md mx-auto">Collaborate with :</h2>

        {logos.map((logo, index) => (
          <div key={index} className="m-2 border border-gray-300 shadow-lg rounded-lg overflow-hidden">
            <Image
              src={`/university-logo/${logo}`} // Correct path to logo
              alt={`University Logo ${index + 1}`}
              width={150} // Adjust size as needed
              height={150} // Adjust size as needed
              className="object-contain h-24 w-24" // Adjust size and styling as needed
            />
          </div>
        ))}
      </section>
      </main>

      <footer className="bg-gray-800 text-red text-center p-5">
        <div>
          <h3 className="text-white font-bold mb-2 bg-green-500 text-center p-4 rounded-lg shadow-lg border border-gray-300 w-1/3 max-w-md mx-auto">Contact Us</h3>
          <p className="text-red-500">Punab Organization</p>
          <p className="text-red-500">punabofficial@gmail.com</p>
          <p className="text-red-500">Mirpur, Dhaka-1216</p>
        </div>
      </footer>
    </div>
  );
};

export default Newsfeed;
