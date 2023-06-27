import React from "react";
import { CertificationData } from "../MyData";

const Certification = ({ links }) => {
  return (
    <>
      <section
        className={links === 5 ? "flex flex-column md:mt-56 sm:mt-4" : "hidden"}
        id='certification'>
        <div className='my-auto'>
          <h2 className='md:text-7xl mb-4 text-rose-800 uppercase main-font font-black'>
            Certifications
          </h2>

          {CertificationData.map(({ id, organisation, course, duration }) => {
            return (
              <div
                className='resume-item flex flex-column flex-md-row'
                key={id}>
                <div className='me-auto'>
                  <h3 className='mb-0 text-4xl uppercase sub-font font-medium'>
                    {course}
                  </h3>
                  <div className='mb-3 text-2xl uppercase text-gray-400 sub-min-font font-light'>
                    {organisation}
                  </div>
                </div>
                <div className='md:text-end'>
                  <span className='text-teal-800 sub-min-font font-light'>
                    {duration}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        {/* <hr  className="md:mt-56 mt-6" /> */}
      </section>
    </>
  );
};

export default Certification;
