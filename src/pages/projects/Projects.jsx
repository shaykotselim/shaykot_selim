import React from "react";
import artSchool from "../../assets/projects/Art-School-Home.png";
import educationLearning from "../../assets/projects/education-learning.png";
import jobHunter from "../../assets/projects/job-hunter.png";
import chefRecipe from "../../assets/projects/chef_recipe_hunter.png";
import { Link } from "react-router-dom";
import { FaHandPointRight } from 'react-icons/fa';

const Projects = () => {
  return (
    <div className="lg:py-20">
      <div className="flex justify-center">
        <p className=" text-3xl lg:text-4xl shadow-md shadow-pink-600 text-white p-4 rounded">
         My Recent Projects
        </p>
      </div>
      <div className="lg:grid gap-4 px-4 mt-5 grid-cols-3">
        {/*---------------------------------------------Art School Area --------------------------------- */}
        <div>
          <div className="h-[400px] overflow-y-scroll mt-8 ">
            <img className=" p-2" src={artSchool} alt="" />
          </div>

          {/* Open the modal using ID.showModal() method */}
          <div className=" mt-4 px-2">
            <p className=" shadow-md shadow-fuchsia-600 flex justify-center text-xl text-white p-2 rounded hover:shadow-pink-600">
              Art-School
            </p>{" "}
            <br />
            <div className="divider"></div>
            <p
              className="shadow-md shadow-fuchsia-600 flex justify-center text-xl text-white p-2 rounded hover:shadow-pink-600"
              onClick={() => window.my_modal_4.showModal()}
            >
              Projects Details
            </p>
          </div>
          {/* Modal Area */}
          <dialog
            id="my_modal_4"
            className="modal modal-bottom sm:modal-middle"
          >
            <form method="dialog" className="modal-box">
              <h3 className="font-bold text-lg">Art-School!</h3>
              <div className="py-4">
                <div>
                  <p className="bg-primary text-white p-2 rounded inline">
                    Description :
                  </p>
                  <p className="mt-2">
                    This is a summer camp based Learning Platform for students
                    where they can choose courses and enroll those courses with
                    various varieties.
                  </p>
                </div>

                <div className="mt-4">
                <p className="bg-primary text-white mt-8 p-2 rounded inline">
                Features :
                </p>
                <ul className="mt-4">
                    
                    <li className="flex gap-2 items-center"><FaHandPointRight className="text-primary"/><span>Provide Admin Panel and Instructor Panel for instructors.</span></li>
                    <li className="flex gap-2 items-center"><FaHandPointRight className="text-primary"/><span>Stripe payment system has been integrated.</span></li>
                    <li className="flex gap-2 items-center"><FaHandPointRight className="text-primary"/><span>Axios is used in sending asynchronous HTTP requests and handling responses.</span></li>
                   
                </ul>
                <div className="mt-4">
                <p className="bg-primary text-white mt-8 p-2 rounded inline">
                Technology :
                </p>
                <p className="mt-4">React, React-Router, Tailwind, daisyui, SweetAlert2, Axios, React Hook Form, React Icons,
                    Firebase, Mongodb, express, Node js. 
                </p>
                </div>
                <div className="mt-4">
                    <Link target="_blank" to="https://art-school-3f25b.web.app/" className="mt-2 btn border-0 border-b-4 btn-primary btn-outline">Live Site</Link>
                    <Link target="_blank" to="https://github.com/shaykotselim/art_school_project_12" className="mt-2 ml-2 border-0 border-b-4 btn btn-primary btn-outline">Client Site</Link>
                    <Link target="_blank" to="https://github.com/shaykotselim/art_school_project_12_server" className="mt-2 ml-2 border-0 border-b-4 btn btn-primary btn-outline">Server Site</Link>
                </div>
                </div>
              </div>
              <div className="modal-action">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </div>
            </form>
          </dialog>
        </div>
        {/* ------------------------------------- Education Learning Area Here--------------------------- */}
        <div>
          <div className="h-[400px] overflow-y-scroll mt-8 ">
            <img className=" p-2" src={educationLearning} alt="" />
          </div>

          {/* Open the modal using ID.showModal() method */}
          <div className=" mt-4 px-2">
            <p className="shadow-md shadow-fuchsia-600 flex justify-center text-xl text-white p-2 rounded hover:shadow-pink-600">
              Education-learning-toys
            </p>{" "}
            <br />
            <div className="divider"></div>
            <p
              className="shadow-md shadow-fuchsia-600 flex justify-center text-xl text-white p-2 rounded hover:shadow-pink-600"
              onClick={() => window.my_modal_5.showModal()}
            >
              Projects Details
            </p>
          </div>
          {/* Modal Area */}
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <form method="dialog" className="modal-box">
              <h3 className="font-bold text-lg">Education-learning-toys!</h3>
              <div className="py-4">
              <div>
                  <p className="bg-primary text-white p-2 rounded inline">
                    Description :
                  </p>
                  <p className="mt-2">
                    This is a summer camp based Learning Platform for students
                    where they can choose courses and enroll those courses with
                    various varieties.
                  </p>
                </div>

                <div className="mt-4">
                <p className="bg-primary text-white mt-8 p-2 rounded inline">
                Features :
                </p>
                <ul className="mt-4">
                    
                    <li className="flex gap-2 items-center"><FaHandPointRight className="text-primary"/><span>Provide Admin Panel and Instructor Panel for instructors.</span></li>
                    <li className="flex gap-2 items-center"><FaHandPointRight className="text-primary"/><span>Stripe payment system has been integrated.</span></li>
                    <li className="flex gap-2 items-center"><FaHandPointRight className="text-primary"/><span>Axios is used in sending asynchronous HTTP requests and handling responses.</span></li>
                   
                </ul>
                <div className="mt-4">
                <p className="bg-primary text-white mt-8 p-2 rounded inline">
                Technology :
                </p>
                <p className="mt-4">React, React-Router, Tailwind, daisyui, SweetAlert2, Axios, React Hook Form, React Icons,
                    Firebase, Mongodb, express, Node js. 
                </p>
                </div>
                <div className="mt-4">
                    <Link target="_blank" to="https://toy-marketplace-4915d.web.app/" className="mt-2 btn border-0 border-b-4 btn-primary btn-outline">Live Site</Link>
                    <Link target="_blank" to="https://github.com/shaykotselim/toy_marketplace_project_11" className="mt-2 ml-2 border-0 border-b-4 btn btn-primary btn-outline">Client Site</Link>
                    <Link target="_blank" to="https://github.com/shaykotselim/toy_marketplace_project_11_server" className="mt-2 ml-2 border-0 border-b-4 btn btn-primary btn-outline">Server Site</Link>
                </div>
                </div>
              </div>
              <div className="modal-action">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </div>
            </form>
          </dialog>
        </div>
        {/* -------------------------------------Chef Recipe Hunter---------------------------- */}
        <div>
          <div className="h-[400px] overflow-y-scroll mt-8 ">
            <img className=" p-2" src={chefRecipe} alt="" />
          </div>

          {/* Open the modal using ID.showModal() method */}
          <div className=" mt-4 px-2">
            <p className="shadow-md shadow-fuchsia-600 flex justify-center text-xl text-white p-2 rounded hover:shadow-pink-600">
            Chef-Recipe-Hunter
            </p>{" "}
            <br />
            <div className="divider"></div>
            <p
              className="shadow-md shadow-fuchsia-600 flex justify-center text-xl text-white p-2 rounded hover:shadow-pink-600"
              onClick={() => window.my_modal_6.showModal()}
            >
              Projects Details
            </p>
          </div>
          {/* Modal Area */}
          <dialog
            id="my_modal_6"
            className="modal modal-bottom sm:modal-middle"
          >
            <form method="dialog" className="modal-box">
              <h3 className="font-bold text-lg">Chef-Recipe-Hunter!</h3>
              <div className="py-4">
              <div>
                  <p className="bg-primary text-white p-2 rounded inline">
                    Description :
                  </p>
                  <p className="mt-2">
                    This is a summer camp based Learning Platform for students
                    where they can choose courses and enroll those courses with
                    various varieties.
                  </p>
                </div>

                <div className="mt-4">
                <p className="bg-primary text-white mt-8 p-2 rounded inline">
                Features :
                </p>
                <ul className="mt-4">
                    
                    <li className="flex gap-2 items-center"><FaHandPointRight className="text-primary"/><span>Provide Admin Panel and Instructor Panel for instructors.</span></li>
                    <li className="flex gap-2 items-center"><FaHandPointRight className="text-primary"/><span>Stripe payment system has been integrated.</span></li>
                    <li className="flex gap-2 items-center"><FaHandPointRight className="text-primary"/><span>Axios is used in sending asynchronous HTTP requests and handling responses.</span></li>
                   
                </ul>
                <div className="mt-4">
                <p className="bg-primary text-white mt-8 p-2 rounded inline">
                Technology :
                </p>
                <p className="mt-4">React, React-Router, Tailwind, daisyui, SweetAlert2, Axios, React Hook Form, React Icons,
                    Firebase, Mongodb, express, Node js. 
                </p>
                </div>
                <div className="mt-4">
                    <Link target="_blank" to="https://chef-recipe-hunter-52c83.web.app/" className="mt-2 btn border-0 border-b-4 btn-primary btn-outline">Live Site</Link>
                    <Link target="_blank" to="https://github.com/shaykotselim/chef_recipe_hunter_project_10" className="mt-2 ml-2 border-0 border-b-4 btn btn-primary btn-outline">Client Site</Link>
                    <Link target="_blank" to="https://github.com/shaykotselim/chef_recipe_hunter_project_10_server" className="mt-2 ml-2 border-0 border-b-4 btn btn-primary btn-outline">Server Site</Link>
                </div>
                </div>
              </div>
              <div className="modal-action">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </div>
            </form>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default Projects;
