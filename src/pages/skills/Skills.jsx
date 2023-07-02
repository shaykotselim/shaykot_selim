import React from "react";
import html from "../../assets/skills/html5.png";
import bootstrap from "../../assets/skills/bootstrap.png";
import tailwind from "../../assets/skills/tailwind.png";
import css from "../../assets/skills/css3.png";
import javaScript from "../../assets/skills/javascript.png";
import react from "../../assets/skills/react.png";
import node from "../../assets/skills/node.png";
import mongoDB from "../../assets/skills/mongo.png";
import express from "../../assets/skills/express.png";
import firebase from "../../assets/skills/firebase.png";
import github from "../../assets/skills/github.png";
import git from "../../assets/skills/git.png";
const Skills = () => {
  return (
    <div className="py-20">
      <div className="flex justify-center">
      <p className="text-center bg-primary inline text-4xl text-white p-4 rounded">Technical Skills</p>
      </div>
      <div className="p-16 lg:p-20">
        <div className="lg:grid gap-4 grid-cols-5">
          <div className="bg-white mt-4 rounded">
            <div className="flex justify-center">
            <img className="lg:p-8 mt-4 p-4 h-[150px] w-[150px]" src={html} alt="" />
            </div>
            <p className="text-center font-bold text-xl">HTML5</p>
          </div>
          <div className="bg-white mt-4 rounded">
            <div className="flex justify-center">
            <img className="p-8  h-[150px] w-[150px]" src={css} alt="" />
            </div>
            <p className="text-center font-bold text-xl">CSS3</p>
          </div>
          <div className="bg-white mt-4 rounded">
            <div className="flex justify-center">
            <img className="p-8 h-[150px] w-[150px]" src={bootstrap} alt="" />
            </div>
            <p className="text-center font-bold text-xl">Bootstrap</p>
          </div>
          <div className="bg-white mt-4 rounded">
            <div className="flex justify-center">
            <img className="p-8 h-[150px] w-[150px]" src={tailwind} alt="" />
            </div>
            <p className="text-center font-bold text-xl">Tailwind</p>
          </div>
          <div className="bg-white mt-4 rounded">
            <div className="flex justify-center">
            <img className="p-8 h-[150px] w-[150px]" src={javaScript} alt="" />
            </div>
            <p className="text-center font-bold text-xl">javaScript</p>
          </div>
          <div className="bg-white mt-4 rounded">
            <div className="flex justify-center">
            <img className="p-8 h-[150px] w-[150px]" src={mongoDB} alt="" />
            </div>
            <p className="text-center font-bold text-xl">MongoDB</p>
          </div>
          <div className="bg-white mt-4 rounded">
            <div className="flex justify-center">
            <img className="p-8 h-[150px] w-[150px]" src={express} alt="" />
            </div>
            <p className="text-center font-bold text-xl">Express</p>
          </div>
          <div className="bg-white mt-4 rounded">
            <div className="flex justify-center">
            <img className="p-8 h-[150px] w-[150px]" src={react} alt="" />
            </div>
            <p className="text-center font-bold text-xl">React</p>
          </div>
          <div className="bg-white mt-4 rounded">
            <div className="flex justify-center">
            <img className="p-8 h-[150px] w-[150px]" src={node} alt="" />
            </div>
            <p className="text-center font-bold text-xl">Node</p>
          </div>
          <div className="bg-white mt-4 rounded">
            <div className="flex justify-center">
            <img className="p-8 h-[150px] w-[150px]" src={firebase} alt="" />
            </div>
            <p className="text-center font-bold text-xl">Firebase</p>
          </div>
          <div className="bg-white mt-4 rounded">
            <div className="flex justify-center">
            <img className="p-8 h-[150px] w-[150px]" src={github} alt="" />
            </div>
            <p className="text-center font-bold text-xl">Github</p>
          </div>
          <div className="bg-white mt-4 rounded">
            <div className="flex justify-center">
            <img className="p-8 h-[150px] w-[150px]" src={git} alt="" />
            </div>
            <p className="text-center font-bold text-xl">Git</p>
          </div>
          
         
        </div>
      </div>
    </div>
  );
};

export default Skills;
