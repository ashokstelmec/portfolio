import React from "react";

const Hobbies = ({ links }) => {
  return (
    <>
      <section className={links === 4 ? "md:mt-56 sm:mt-4" : "hidden"}>
        <div className='flex flex-column '>
          <h2 className='md:text-7xl mb-4 text-rose-800 uppercase'>Hobbies</h2>

          <ul className='fa-ul mb-0'>
            <li>
              <i className='fa-li fa fa-check text-red-300'></i>
              Coding
            </li>
            <li>
              <i className='fa-li fa fa-check text-red-300'></i>
              Cycling
            </li>
            <li>
              <i className='fa-li fa fa-check text-red-300'></i>
              Playing Cricket
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Hobbies;
