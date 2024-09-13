const ContactUs = () => {

    return (
      <div className="font-bold  p-4 m-auto text-center">
        <h1 className="text-3xl">Contact Us</h1>
        <br></br>
        <form className="">
          <div >
          <input type="text" className="border border-gray p-2 m-2 w-[] placeholder-gray-500 placeholder-opacity-25  hover:bg-slate-100 cursor-pointer" placeholder="Your Name"/>
          <input type="email" className="border border-gray p-2 m-2 w-[] hover:bg-slate-100 placeholder-gray-500 placeholder-opacity-25 cursor-pointer" placeholder="Your Email"/>
          </div>
          {/* <div>
          <input type="number" className="border border-gray p-2 m-2 w-[] hover:bg-slate-100 placeholder-gray-500 placeholder-opacity-25 cursor-pointer" placeholder="Your Phone Number"/>
          </div> */}
          {/* <div>
          <input type="text" className=" placeholder:text-left border border-gray p-2 m-2 w-[] h-auto hover:bg-slate-100  placeholder-gray-500 placeholder-opacity-25 cursor-pointer align-top" placeholder="Your Message!"/>
          </div> */}
        
        <button className="border rounded-lg border-black p-2 m-2  hover:bg-gray-200 cursor-pointer" >Submit</button>
        </form>
      </div>
    );
  };
  
  export default ContactUs;
  