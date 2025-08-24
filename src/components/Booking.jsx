import React from "react";
import { Link } from "react-router-dom";

const Booking = () => {
  return (
    <div>
      <div className="min-h-screen  flex justify-center bg-[url(/18741.jpg)] object-fit ">
        <div id="booking-section " className="my-8 backdrop-blur-md px-2 ">
          <h1 className="text-6xl my-6 text-center">Book a Table</h1>
          <p className="text-3xl my-2 text-center">
            Convenience At Your Fingertips
          </p>
          <p className="text-1xl my-2 text-center">
            Enjoy Favourite Food Without Delay
          </p>
          <div className="flex justify-center">
            <div className="flex flex-col justify-center items-center gap-3 p-3  rounded-lg">
              <input
                className=" mt-6 w-72 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                type="text"
                placeholder="Your Name"
              />
              <input
                class="w-72 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                type="text"
                placeholder="Your email"
              />
              <input
                class="w-72 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                type="text"
                placeholder="Your Phone Number"
              />

              <Link to="/bookingPage">
                <button className="  p-2 rounded bg-blue-400">Book Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
