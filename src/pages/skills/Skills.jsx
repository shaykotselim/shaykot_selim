import React from "react";
import html from "../../assets/skills/html.png";
import bootstrap from "../../assets/skills/bootstrap.png";
import tailwind from "../../assets/skills/tailwind-css-icon.png";
import css from "../../assets/skills/css-3.png";
import javaScript from "../../assets/skills/js.png";
import react from "../../assets/skills/react.png";
import node from "../../assets/skills/node-js.png";
import mongoDB from "../../assets/skills/mongodb.png";
import express from "../../assets/skills/express-js.png";
import firebase from "../../assets/skills/firebase.png";
import github from "../../assets/skills/github.png";
import git from "../../assets/skills/git.png";
const Skills = () => {
  return (
    <div className="py-20">
      <div className="flex justify-center">
      <p className=" text-3xl lg:text-4xl shadow-md shadow-pink-600 text-white p-4 rounded hover:shadow-purple-600">Technical Skills</p>
      </div>
      <div className="p-16 lg:p-20">
        <div className="lg:grid gap-4 grid-cols-5">
          <div className=" mt-4 rounded shadow-md shadow-[#fa803e]">
            <div className="flex justify-center">
            <img className="p-8  h-[150px] w-[150px]" src={html} alt="" />
            </div>
            <p className="text-center text-white font-bold text-xl">HTML5</p>
          </div>
          <div className=" mt-4 rounded shadow-md shadow-[#3b82f6]">
            <div className="flex justify-center">
            <img className="p-8  h-[150px] w-[150px]" src={css} alt="" />
            </div>
            <p className="text-center text-white font-bold text-xl">CSS3</p>
          </div>
          <div className=" mt-4 rounded shadow-md shadow-[#701a75]">
            <div className="flex justify-center">
            <img className="p-8 h-[150px] w-[150px]" src={bootstrap} alt="" />
            </div>
            <p className="text-center text-white font-bold text-xl">Bootstrap</p>
          </div>
          <div className=" mt-4 rounded shadow-md shadow-[#22d3ee]">
            <div className="flex justify-center">
            <img className="p-8 h-[150px] w-[150px]" src={tailwind} alt="" />
            </div>
            <p className="text-center text-white font-bold text-xl">Tailwind</p>
          </div>
          <div className=" mt-4 rounded shadow-md shadow-[#fbbf24]">
            <div className="flex justify-center">
            <img className="p-8 h-[150px] w-[150px]" src={javaScript} alt="" />
          
            </div>
            <p className="text-center text-white font-bold text-xl">javaScript</p>
          </div>
          <div className=" mt-4 rounded shadow-md shadow-[#22c55e]">
            <div className="flex justify-center">
            <img className="p-8 h-[150px] w-[150px]" src={mongoDB} alt="" />
            </div>
            <p className="text-center text-white font-bold text-xl">MongoDB</p>
          </div>
          <div className=" mt-4 rounded shadow-md shadow-white">
            <div className="flex justify-center">
            <img className="p-8 h-[150px] w-[150px]" src={express} alt="" />
            </div>
            <p className="text-center text-white font-bold text-xl">Express</p>
          </div>
          <div className=" mt-4 rounded shadow-md shadow-[#22d3ee]">
            <div className="flex justify-center">
            <img className="p-8 h-[150px] w-[150px]" src={react} alt="" />
            </div>
            <p className="text-center text-white font-bold text-xl">React js</p>
          </div>
          <div className="mt-4 rounded shadow-md shadow-[#22c55e]">
            <div className="flex justify-center">
            <img className="p-8 h-[150px] w-[150px]" src={node} alt="" />
            </div>
            <p className="text-center text-white font-bold text-xl">Node js</p>
          </div>
          <div className=" mt-4 rounded shadow-md shadow-[#fbbf24]">
            <div className="flex justify-center">
            <img className="p-8 h-[150px] w-[150px]" src={firebase} alt="" />
            </div>
            <p className="text-center text-white font-bold text-xl">Firebase</p>
          </div>
          <div className=" mt-4 rounded shadow-md shadow-white">
            <div className="flex justify-center">
            <img className="p-8 h-[150px] w-[150px]" src={github} alt="" />
            </div>
            <p className="text-center text-white font-bold text-xl">Github</p>
          </div>
          <div className=" mt-4 rounded shadow-md shadow-[#fa803e]">
            <div className="flex justify-center">
            <img className="p-8 h-[150px] w-[150px]" src={git} alt="" />
            </div>
            <p className="text-center text-white font-bold text-xl">Git</p>
          </div>
          
         
        </div>
      </div>
    </div>
  );
};

export default Skills;
