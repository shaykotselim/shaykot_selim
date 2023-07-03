import React from "react";
import { Link } from "react-router-dom";
import gmail from "../../assets/shaykot/gmail.png"
import messenger from "../../assets/shaykot/messenger.png"
const Contact = () => {
  return (
    <div className="py-20">
      <div className="flex justify-center">
        <p className="shadow-md shadow-fuchsia-600 text-4xl p-4 rounded text-white hover:shadow-pink-600">Connect With Me</p>
      </div>
      <div className="lg:grid grid-cols-3 px-8 gap-4 items-center py-20">
      <div className="">
        
        <div className="flex flex-col items-center gap-8   justify-center mt-4">
          <div className=" w-3/4 shadow-md shadow-fuchsia-600 flex flex-col justify-center items-center py-4">
            <img className="w-8" src={gmail} alt="" />
            <p className="text-white text-xl">Email</p>
            <p className="text-white text-xl">hossainshaykot@gmail.com</p>
            <Link target="_blank" to="https://mail.google.com/mail" className="btn btn-secondary btn-outline border-0 border-b-4">send a message</Link>
          </div>
          <div className=" w-3/4 shadow-md shadow-fuchsia-600 flex flex-col justify-center items-center py-4">
            <img className="w-8" src={messenger} alt="" />
            <p className="text-white text-xl">Messenger</p>
            <p className="text-white text-xl">Shaykot Hossain Selim</p>
            <Link target="_blank" to="https://www.messenger.com/" className="btn btn-secondary btn-outline border-0 border-b-4">send a message</Link>
          </div>
        </div>
      </div>
      <div className="col-span-2 mt-8">
      <div className="mb-4 flex justify-center">
      <p className="shadow-md rounded shadow-fuchsia-500 inline p-4 hover:shadow-pink-600 text-white text-3xl">
          Message Me
        </p>
      </div>
        <form>
          <label className="label text-white">
            <span>Your Name</span>
          </label>
          <input
            placeholder="........"
            type="text"
            className="input input-bordered bg-black text-white w-full"
          />
          <label className="label text-white">
            <span>Your Email</span>
          </label>
          <input
            placeholder="........"
            type="text"
            className="input bg-black text-white input-bordered  w-full"
          />
          <label className="label text-white">
            <span>Your message</span>
          </label>
          <textarea
            placeholder="........"
            className="textarea textarea-bordered text-white bg-black textarea-lg w-full "
          ></textarea>
          <input type="submit" className="btn btn-secondary btn-outline border-0 border-b-4 w-full" value="Send" va />
        </form>
      </div>
    </div>
    </div>
  );
};

export default Contact;
