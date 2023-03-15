import React from 'react';

const Contacts = () => {
  return (
    <div id='contacts' className="shadow-lg w-96 px-12 py-4 mx-[50px] my-[50px]">
      <h1 className="text-xl font-bold mb-4">Get in Touch.</h1>
      <div className="">
        <form action="" className="flex flex-col gap-4">
          <label htmlFor="name" className="font-medium">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="What's your name?"
            className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <label htmlFor="email" className="font-medium">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="What's your email address?"
            className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <label htmlFor="message" className="font-medium">
            Your Message
          </label>
          <textarea
            name=""
            id="message"
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
        </form>
      </div>
    </div>
  );
};

export default Contacts;
