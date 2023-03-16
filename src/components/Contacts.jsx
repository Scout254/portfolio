import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'

const Contacts = () => {
  const formRef = useRef();

  const [form,setForm] = useState({
    name:"",
    email:"",
    message:"",
  });

  const [message, setMessage] = useState("");

  const handleChange =(e)=>{
    const {name,value} = e.target;
    setForm({...form,[name]:value})
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    emailjs.send(
      "service_a5x84hv",
      "template_22egb5b",
      {
        from_name:form.name,
        to_name:"michael mutinda",
        from_email:form.email,
        to_email:"mutinda947@gmail.com",
        message:form.message,
      },
      "tAO9aQfMFxrDVOlx-"
      )
      .then(()=>{
        setMessage("Thank you. I will get back to you as as soon as possible.");
        setForm({
          name:"",
          email:"",
          message:"",
        })
      },(error)=>{
        console.log(error);
        setMessage("Something went wrong. Please try again later.")
      }
      )
  }

  return (
    <div id='contacts' className="shadow-lg w-96 px-12 py-4 mx-[50px] my-[50px]">
    <h1 className="text-xl font-bold mb-4">Get in Touch.</h1>
    <div className="">
      <form action="" 
      ref={formRef}
      onSubmit={handleSubmit}
      className="flex flex-col gap-4"
      
      >
        <label htmlFor="name" className="font-medium">
          Your Name
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="What's your name?"
          className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label htmlFor="email" className="font-medium">
          Your Email
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="What's your email address?"
          className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label htmlFor="message" className="font-medium">
          Your Message
        </label>
        <textarea
         value={form.message}
         onChange={handleChange}
          name="message"
          cols="30"
          rows="10"
          placeholder="What do you want to say?"
          className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send
        </button>
        {message && (
          <div className="mt-4 p-4 bg-green-100 border-green-400 border-2 rounded-md text-green-700">
            {message}
          </div>
        )}
      </form>
    </div>
  </div>
  );
};

export default Contacts;
