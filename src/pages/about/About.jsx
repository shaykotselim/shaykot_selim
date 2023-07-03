import React from 'react';
import shaykot from "../../assets/shaykot/shaykot.png"
const About = () => {
    return (
        <div className='mt-4'>
            <div className='lg:grid grid-cols-3 items-center lg:p-20'>
                <div className='flex justify-center'>
                    <img className=' shadow-md shadow-fuchsia-700 rounded' src={shaykot} alt="" />
                </div>
                <div className='col-span-2 mt-4 px-4'>
                    <div className='flex justify-center'>
                    <h1 className=' text-3xl lg:text-4xl shadow-md shadow-pink-600 text-white p-4 rounded hover:shadow-purple-600'>Know ME More</h1>
                    </div>
                    <p className='mt-4 text-white'>Welcome to my portfolio! I'm Shaykot Hossain Selim, as a junior MERN stack developer who is enthusiastic about creating dynamic web applications. I recently completed an intensive web development course at Programming Hero, I have experience in Javascript, MongoDB, Express Js, React Js, and Node Js, as well as other languages. Keeping my code maintainable, testable, and clean is important to me. I am very flexible, quick to learn, and I am always open to learning new technologies. I hope to utilize my knowledge, skills, dedication, and effort to help the organization meet and achieve its goals.</p>
                </div>
            </div>
        </div>
    );
};

export default About;