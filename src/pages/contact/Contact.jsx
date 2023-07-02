import React from "react";

const Contact = () => {
  return (
    <div className="grid grid-cols-3 px-8 items-center py-20">
      <div className="">
        <p className="bg-primary inline text-4xl text-white p-4 rounded mt-4">
          Connect With Me
        </p>
      </div>
      <div className="col-span-2">
        <form >
            <label className="label">
                <span>Your Name</span>
            </label>
            <input 
            placeholder="........"
            type="text" 
            className="input input-bordered  w-full"
            />
            <label className="label">
                <span>Your Email</span>
            </label>
            <input 
            placeholder="........"
            type="text" 
            className="input input-bordered  w-full"
            />
            <label className="label">
                <span>Your message</span>
            </label>
            <textarea placeholder="........" className="textarea textarea-bordered textarea-lg w-full " ></textarea>
        </form>
      </div>
      
    </div>
  );
};

export default Contact;
