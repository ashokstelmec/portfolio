import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { Link } from "react-router-dom";
import { SocialMediaLinks } from "../MyData";

const About = ({ links }) => {
  return (
    <>
      <section className={links === 1 ? "" : "hidden"} id='about'>
        <div className='text-uppercase md:mt-40 sm:mt-4 '>
          <h1 className='text-cyan-950 lg:text-8xl md:text-7xl sm:text-6xl text-5xl'>
            Ashok <span className='text-cyan-800'>Sah</span>
          </h1>
          <div className='flex items-center gap-3 text-amber-500 flex-wrap'>
            <div className='flex items-center gap-2 text-xl cursor-pointer font-family'>
              <HiLocationMarker /> Hajipur, Bihar.
            </div>
            <div className='flex items-center gap-2'>
              <BsFillTelephoneFill />
              <Link
                to='tel: 8770875424'
                className='text-amber-500 text-xl hover:text-amber-400'>
                (+91)8770875424
              </Link>
            </div>
            <div className='flex items-center gap-2'>
              <GrMail />
              <Link
                to='mailto:ashok.stelmec@gmail.com'
                className='text-amber-500 text-xl hover:text-amber-400'>
                ashok.stelmec@gmail.com
              </Link>
            </div>
          </div>
        </div>
        <div>
          <p>
            As a fresher, I am eager to apply agile frameworks and collaborative
            thinking to provide a strong foundation for high-level overviews. I
            am excited to learn and implement iterative approaches to corporate
            strategy in order to enhance the overall value proposition.
          </p>
        </div>
        <ul className='flex lg:gap-8 md:gap-8 sm:gap-6 gap-3 p-0 flex-wrap'>
          {SocialMediaLinks.map(({ id, name, url, icon }) => {
            return (
              <li
                className='bg-teal-600 rounded-full p-3 hover:bg-teal-300 cursor-pointer'
                title={name}
                key={id}>
                <Link to={url} className='text-2xl text-white hover:text-white'>
                  {icon}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default About;
