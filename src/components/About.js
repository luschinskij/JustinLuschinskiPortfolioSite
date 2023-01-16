import React from "react";
//md: thing is fluid until the md breakpoint (whatever condition comes after) then it locks to the container. 
//So by default, it's mx-auto, but on larger screens, it becomes flex, flex row. and it centers the items.
//p{t|r|b|l} = padding. py = padding top and bottom. px = padding left and right
export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Justin.
            <br className="hidden lg:inline-block" /> I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            I'm an Applied Computer Science at the University of Winnipeg. I'm also a former award-winning journalist and the co-founder of A Critical Cause, a mental health charity fund with The Winnipeg Foundation.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./JLPic.jpg"
          />
        </div>
      </div>
    </section>
  );
}
