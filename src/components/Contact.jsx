import React, {useRef, useState} from 'react'
import {motion} from 'framer-motion';
import emailjs from "@emailjs/browser";

import {styles} from "../styles"
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { contacts } from '../constants';


const MediaCard=({name,icon,link})=>{
  return (<a href={link}>
    <div className='bg-white p-[2.5px] rounded-2xl shadow-2xl cursor-pointer'>
      <div className='flex justify-center items-center bg-gray-200 gap-4 p-2 px-6 rounded-xl text-black'>
        <img src={icon} alt={name} className='size-10' />
        <p>{name}</p>
      </div>
    </div>
  </a>)
}

const Contact = () => {
  const formRef=useRef();
  const [form,setForm]=useState({name:"",email:"",message:""});
  const [loading,setLoading]=useState(false)

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("Sending Email");
    emailjs
      .send(
        'service_0z6ceqk',
        'template_i1yvy0b',
        {
          from_name: form.name,
          to_name: "Rishav Aanand",
          from_email: form.email,
          to_email: "avinashkumar999333@gmail.com",
          message: form.message,
        },
        'zyKOszi6Llg6EJxFa'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-white p-1  rounded-2xl '
      >
        
        <div className=' bg-gray-100 p-8 rounded-2xl'>
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          {/* <div className='flex gap-4'>
            {contacts.map((contact)=>(
              <MediaCard key={contact.id} icon={contact.icon} name={contact.name} link={contact.link} />
            ))}
          </div> */}

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'
          >
            <label className='flex flex-col'>
              <span className='text-black font-medium mb-4'>Your Name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className='bg-white py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-black font-medium mb-4'>Your email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className='bg-white py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-black font-medium mb-4'>Your Message</span>
              <textarea
                rows={5}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='What you want to say?'
                className='bg-white py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
              />
            </label>

            <button
              type='submit'
              className='bg-white py-3 px-8 rounded-xl outline-none w-fit text-black font-bold shadow-md '
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact");