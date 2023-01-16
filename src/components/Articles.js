import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { articles } from "../data";
import { PencilIcon } from "@heroicons/react/solid"

export default function Articles() {
  return (
    <section id="articles" className="text-gray-400 bg-darkerPurple-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <PencilIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Articles I've Written
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            I'm a former award-winning journalist and photographer. Here's a few of my favorite articles I've produced.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {articles.map((article) => (
            <a
              href={article.link}
              key={article.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={article.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {article.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {article.title}
                  </h1>
                  <p className="leading-relaxed">{article.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
