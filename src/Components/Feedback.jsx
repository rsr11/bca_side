import React from "react";
import "../App.css";

function Feedback(){
    return <div id="Contact">
        <h1 className="headingContactUs">Contact Us</h1>
    <div className="FeedbackContainer">
            {/* <div className="flex sm:w-[50vw] w-[30vw] h-[550px] justify-center border-4 border-black mb-[100px] pb-[30px] rounded-md ">
        <form action="https://formspree.io/f/moqzaady" method="POST" >
            <input type="text" 
            placeholder="Name.."
            name="Username"
            className="p-2 w-[60vw] sm:w-[40vw]"
            autoComplete="off"
            required
            />
            <input type="email"
             placeholder="Abc@gmail.com"
             name="email"
             className="p-2 w-[60vw] sm:w-[40vw]"
             autoComplete="off"
             required
              />
            <textarea name="message" id="" className="p-2 w-[60vw] sm:w-[40vw]" cols="50" rows="20" placeholder="Any thing you want to ask !...."
            autoComplete="off" required></textarea>
            <button name="Submit" className="p-2 border-2 w-full border-blue-600 text-white bg-blue-600 rounded-md mt-5">Submit</button>
        </form>
            </div> */}


    </div>
            <div className='sm:h-[467px] w-[90vw] sm:w-[457px] mx-4 border-2 border-black mb-10 sm:mx-auto  top-3 right-36  fedbackStyle' >
          <h1 className='text-xl font-semibold px-7 pt-7 pb-4 mb-4' > Fill the form</h1>
          <form action="https://formspree.io/f/moqzaady" autoComplete="off" method="POST" className='relative' id='feedback'>
              <input type="text" autoComplete="off" required name="name" className='bg-[#EFF2F6] p-3 sm:w-[85%] w-[90%] sm:mx-7 mx-3 mb-3' placeholder='Your Name' />
              <input type='email' autoComplete="off" required name="email" className='bg-[#EFF2F6] p-3 sm:w-[85%] w-[90%] sm:mx-7 mx-3 mb-3' placeholder='Email Address' />
              {/* <input type="number" className='bg-[#EFF2F6] p-3 sm:w-[41%] w-[43%]  sm:mr-7 mr-0 mb-3' name="" id="" placeholder='Phone Number' /> */}
              {/* <input type="text" className='bg-[#EFF2F6] p-3 sm:w-[85%] w-[90%] sm:mx-7 mx-3 mb-3' placeholder='Education' /> */}
              <textarea id="message" autoComplete="off" name="message" required className='bg-[#EFF2F6] p-3 sm:w-[85%] w-[90%] sm:mx-7 mx-3 mb-3 resize-none ' placeholder='Your Message....' cols="30" rows="4"></textarea>
              <button type="submit" name="Submit" className='bg-[#F04C4B] py-3 px-8 mb-5 sm:mb-0 mx-3 sm:mx-0 shadowOfButton transition-all rounded-md sm:absolute -bottom-12 right-10  text-white'> Submit</button>
          </form>
                  
        </div>
    </div>
}

export default Feedback;