import React from "react";
import HeroImage from "../assets/heroImage.jpg";

// import { HiArrowNarrowRight } from "react-icons/hi";
// import { Link } from "react-scroll";

const PDF_FILE_PDF = 'http://localhost:3000/public/Aaditya_pal_CV.pdf';

const Home = () => {
  const downloadfileAtURL = (url) => {
    fetch(url).then(response => response.blob()).then(blob => {
      const blobURL = window.URL.createObjectURL(new Blob([blob]))

      const fileName = url.split('/').pop('Aaditya_pal_CV.pdf')
      const aTag = document.createElement('a');
      aTag.href = blobURL;
      aTag.setAttribute('download', fileName);
      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();
    });
  };
  return (
    <div
      name="home"
      className="w-full h-[770px] bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
        <div className="flex flex-col justify-center ">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 0 years of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Next JS and GraphQL.
          </p>

          <button className="px-8 py-5 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 w-[250px]" onClick={() => { downloadfileAtURL(PDF_FILE_PDF) }}>Download Resume</button>


        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-[50px] mx-auto mt-9 w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
