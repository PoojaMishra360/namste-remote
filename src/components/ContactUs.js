import React from "react";

  const ContactUs = () => {
    return (
      <div> <h1>Contact Us Page</h1>
      <form>
       
        <input className="border-2 border-black" type="text" id="name" name="name" placeholder="name" required />
       <textarea className="border-2 border-black" id="message" name="message" required></textarea>
      
        <button type="submit" className="border-2 border-black bg-gray-300 rounded-lg">Submit</button>
      </form>
          </div>
    );
  }

  export default ContactUs;