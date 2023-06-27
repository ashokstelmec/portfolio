import React from "react";
import { EducationData } from "../MyData";

const Education = ({ links }) => {
  return (
    <>
      <section className={links === 2 ? "mt-4" : "hidden"}>
        <h2 className='text-7xl mb-4 text-rose-800 uppercase main-font font-black'>
          EDUCATION
        </h2>

        {EducationData.map((data) => {
          const { id, organisation, stream, branch, marks, duration } = data;
          return (
            <div className='flex flex-column flex-md-row mb-5' key={id}>
              <div className='me-auto'>
                <h3 className='mb-0 uppercase text-4xl sub-font font-medium'>
                  {organisation}
                </h3>
                <div className='mb-3 text-2xl uppercase text-gray-500 sub-main-font font-normal'>
                  {stream}
                </div>
                <div className='text-gray-400 text-xl font-family sub-min-font font-light'>
                  {branch}
                </div>
                <p className='text-gray-400 text-xl min-font min-font font-extralight'>
                  {marks < 11 ? `CGPA: ${marks}` : `Percentage: ${marks}`}
                </p>
              </div>
              <div className='md:text-end'>
                <span className='text-teal-800 sub-min-font font-light'>
                  {duration}
                </span>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Education;
