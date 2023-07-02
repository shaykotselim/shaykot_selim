import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import shaykot from "../../assets/shaykot/shaykot.png";
import selim from "../../assets/shaykot/selim.png";
import selim2 from "../../assets/shaykot/shaykot.jpg";
import Wave from "react-wavify";
const Bannar = () => {
  const [text] = useTypewriter({
    words: [
      "Tech Enthusiast",
      "Web Designer",
      "Web Developer",
      "MERN Stack Developer",
    ],
    loop: 0,
  });
  return (
    <div className="">
      <div className=" lg:flex py-20 justify-evenly items-center">
        <div className="px-2">
          <p className="text-5xl text-white">Hi I'm</p>
          <p className="mt-2 text-3xl text-white">Shaykot Hossain Selim</p>
          <p className="text-3xl text-primary">A {text}</p>
          <p className="mt-2 btn btn-primary">Download Resume</p>
        </div>
        <div className="flex justify-center">
          <img
            className="w-[350px] border-4 mt-2 border-primary rounded-full"
            src={selim2}
            alt=""
          />
        </div>
      </div>
      <Wave
        fill="#5b21b6"
        paused={false}
        options={{
          height: 8,
          amplitude: 20,
          speed: 0.15,
          points: 4,
        }}
      />
    </div>
  );
};

export default Bannar;
