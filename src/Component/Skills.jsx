import React from "react";
import { Skillset } from "../MyData";

const Skills = ({ links }) => {
  return (
    <>
      <section className={links === 3 ? "mt-4" : "hidden"}>
        <div className='my-auto'>
          <h2 className='mb-5 text-7xl text-rose-800 uppercase main-font font-black'>
            Skills
          </h2>

          <p className='mb-3'>Programming Languages &amp; Tools</p>
          <ul className='list-inline list-icons flex gap-2 flex-wrap'>
            {Skillset.map((data) => {
              const { id, name, title } = data;
              const myClass = `${name} text-7xl hover:text-red-600 cursor-pointer`;
              return (
                <li className='list-inline-item' key={id}>
                  <i className={myClass} title={title}></i>
                </li>
              );
            })}
          </ul>

          <div className='mb-3'>Workflow</div>
          <ul className='fa-ul mb-0'>
            <li>
              <i className='fa-li fa fa-check text-red-300'></i>
              Mobile-First, Responsive Design
            </li>
            <li>
              <i className='fa-li fa fa-check text-red-300'></i>
              Cross Browser Testing &amp; Debugging
            </li>
            <li>
              <i className='fa-li fa fa-check text-red-300'></i>
              Cross Functional Teams
            </li>
            <li>
              <i className='fa-li fa fa-check text-red-300'></i>
              Agile Development &amp; Scrum
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Skills;
