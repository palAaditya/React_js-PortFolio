import React from 'react'
import Facebook from "../assets/facebook.svg";
import LinkedIn from "../assets/linkedin.svg";
import Instagram from "../assets/instagram.svg";


const footer = () => {
  return (
    <>
    <footer className='md:flex-col flex bg-gradient-to-b from-gray-800 to-black w-full border-t-2'>
        <div className=" flex justify-around px-4 py-6 w-full">
          <div>
            <p className="text-gray-300 text-sm">Copyright &copy; 2024 <span className='font-bold text-orange-600'>Aaditya Pal.</span> || All rights reserved.</p>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <a href="https://www.facebook.com/">
                  <img src={Facebook} className="w-5" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/aaditya-pal-42b505259/">
                  <img src={LinkedIn} className="w-5" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/official_adityapal260619/">
                  <img src={Instagram} className="w-5"/>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </footer>
    </>
  )
}

export default footer