import React, { useState } from "react";
import { Projects_Data } from "../MyData";
import { Link } from "react-router-dom";

// Collect All Languages Categories
const allLanguages = ['all', ...new Set(Projects_Data.map((item) =>item.language))]

const Projects = ({ links }) => {
  const [projectData, setProjectData] = useState(Projects_Data);
  const [projectLang] = useState(allLanguages);

  // Filter Project Item Categories
  const filterItem = (language) => {
    if(language === 'all') {
      setProjectData(Projects_Data);
      return;
    }
    const newOptions = Projects_Data.filter(
      (item) => item.language === language
    );
    setProjectData(newOptions);
  };

  return (
    <>
      <section className={links === 6 ? "mt-4" : "hidden"}>
        <div className='flex flex-column '>
          <h2 className='md:text-7xl mb-4 text-rose-800 uppercase'>Projects</h2>

              {/* Select Projects  */}
          <div className="text-center mb-4">
            <select name="" id="" className="bg-teal-900 text-white border border-gray-300 rounded-lg block lg:w-1/4 md:w-1/2 w-full m-auto capitalize p-2.5" onChange={(e)=>filterItem(e.target.value)}>
              {
            projectLang.map((lang, index)=>{
              return(
                <option value={lang} className="capitalize" key={index}>{lang}</option>
              )
            })
          }
            </select>
          </div>

          <ul className='flex flex-col gap-4'>
            {projectData.map((data) => {
              const {
                id,
                title,
                description,
                img_link,
                github_link,
                live_link,
              } = data;
              return (
                <li
                  className='md:grid grid-cols-12 items-center gap-4'
                  key={id}>
                  {/* Project Content */}
                  <div
                    className={`md:col-span-6 col-span-full gap-3 flex flex-col md:mb-0 mb-4 order-1 ${
                      id % 2 === 0 ? "order-2" : "order-3"
                    }`}>
                    <h3 className='sub-font font-medium'>{title}</h3>
                    <p>{description}</p>
                    <div className='flex gap-6'>
                      <Link
                        className='no-underline capitalize text-xl border border-slate-950 text-teal-900 hover:bg-teal-900 transition-all hover:text-white px-8 py-1 rounded-full'
                        to={github_link}
                        target='_blank'>
                        code
                      </Link>
                      <Link
                        className='no-underline capitalize text-xl border border-slate-950 text-teal-900 hover:bg-teal-900 transition-all hover:text-white px-8 py-1 rounded-full'
                        to={live_link}
                        target='_blank'>
                        Live
                      </Link>
                    </div>
                  </div>
                  {/* Project Image */}
                  <div
                    className={`md:col-span-6 sm:col-span-full flex md:justify-end sm:justify-center z-0 border-2 p-2 rounded-3xl
            order-0 drop-shadow ${id % 2 === 0 ? "order-3" : "order-2"}`}>
                    <img
                      src={img_link}
                      alt={title}
                      className='rounded-3xl order-4'
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Projects;
