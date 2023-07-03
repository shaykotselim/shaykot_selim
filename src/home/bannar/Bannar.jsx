import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import facebook from "../../assets/social/facebook.png"
import instagram from "../../assets/social/instagram.png"
import linkedin from "../../assets/social/linkedin.png"
import twitter from "../../assets/social/twitter.png"
import github from "../../assets/social/github.png"
// import selim from "../../assets/shaykot/selim.png";
import selim2 from "../../assets/shaykot/shaykot.jpg";
import Wave from "react-wavify";
import { Link } from "react-router-dom";
const Bannar = () => {
  const [text] = useTypewriter({
    words: [
      "Tech Enthusiast",
      "Web Designer",
      "Front-end Developer",
      "Web Developer",
      "MERN Stack Developer",
    ],
    loop: 0,
  });
  return (
    <div className="">
      <div className=" lg:flex py-20 justify-evenly items-center">
        <div className="px-2">
          <p className="text-4xl lg:text-8xl font-medium  text-white">Hi I'm</p>
          <p className="mt-2 text-3xl lg:text-7xl font-medium  text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-700 via-pink-600 to-purple-600">Shaykot Hossain Selim</p>
          <p className=" text-2xl lg:text-4xl text-white">A {text}</p>
         <div className="mt-6 flex gap-4">
         <Link target="_blank" to="https://drive.google.com/file/d/1IBgsxO6YA8HJNZsI6Bf0X7MB77XB9d2F/view?usp=drive_link" className="text-md lg:text-lg shadow-md shadow-pink-600 text-white p-4 rounded hover:shadow-purple-600 ">Download Resume</Link>
         <Link to="/contact" className="text-md lg:text-lg shadow-md shadow-pink-600 text-white p-4 rounded hover:shadow-purple-600">Hire Me</Link>
         </div>
        </div>
        <div className="flex justify-center">
          <img
            className="w-[350px] mt-4 shadow-md  shadow-fuchsia-600 rounded-full hover:shadow-pink-600"
            src={selim2}
            alt=""
          />
        </div>
      </div>
      <Wave
        fill="#a21caf"
        paused={false}
        options={{
          height: 8,
          amplitude: 20,
          speed: 0.15,
          points: 4,
        }}
      />

      <div className="flex justify-center lg:fixed lg:-mt-[550px] lg:ml-[10px]">
      <div className="w-[300px] flex lg:flex-col lg:h-[350px] lg:w-[80px] lg:rounded gap-4 shadow-md shadow-fuchsia-700 p-4 ">
          <div>
            <Link target="_blank" to='https://www.linkedin.com/in/shaykotselim/'>
            <img src={linkedin} alt="" />
            </Link>
          </div>
          <div>
            <Link target="_blank" to="https://github.com/shaykotselim">
            <img src={github} alt="" />
            </Link>
          </div>
          <div>
            <Link target="_blank" to="https://twitter.com/shaykotselim">
            <img src={twitter} alt="" />
            </Link>
          </div>
          <div>
            <Link target="_blank" to="https://www.facebook.com/shaykotselim98">
            <img src={facebook} alt="" />
            </Link>
            
          </div>
          <div>
           <Link target="_blank" to="https://www.instagram.com/shaykotselim">
           <img src={instagram} alt="" />
           </Link>
          </div>
      </div>
      </div>
    </div>
  );
};

export default Bannar;
