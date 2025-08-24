import React from "react";
import { GetTablesByRestaurant } from "../services/allAPIs";
import { API } from "../services/Api";
import { useState } from "react";
import { serverURL } from "../services/serverURL";

const BookingRes = () => {
  // statesconst [tables, setTables] = useState([]);
const [timeSlots, setTimeSlots] = useState([]);
const [bookings, setBookings] = useState([]);
  const [selectedRes, setselectedRes] = useState("");
  const [Tables, setTables] = useState([]);
  // function of get tables of res
  const checkAvail = async () => {
    if (selectedRes) {
      try {
        // const [tablesRes, slotsRes, bookingsRes] = await Promise.all([
        //   GetTablesByRestaurant(selectedRes),
        //   API("get", `${serverURL}/timeSlots`),
        //   API("get", `${serverURL}/bookings`)
        // ]);
        const tablesRes= await GetTablesByRestaurant(selectedRes)
        const slotsRes= await API('get',`${serverURL}/timeSlots`)
        const bookingRes= await API('get',`${serverURL}/bookings`)

  
        setTables(tablesRes.data);
        setTimeSlots(slotsRes.data);
        setBookings(bookingRes.data);
      } catch (err) {
        console.error("API call failed:", err);
      }
    } else {
      alert("Please select a restaurant");
    }
  };
  // check if booked 
  const isSlotBooked = (tableId, timeSlotId) => {
    return bookings.some(
      (b) => b.tableId === tableId && b.timeSlotId === timeSlotId
    );
  };
  // handle booking
  const handleBooking = async (tableId, timeSlotId) => {
    try {
      const newBooking = {
        tableId,
        timeSlotId,
        restaurantId: parseInt(selectedRes),
      };
      await API("post", `${serverURL}/bookings`, newBooking);
      alert("Booking successful!");
  
      // Refresh bookings
      const updated = await API("get", `${serverURL}/bookings`);
      setBookings(updated.data);
    } catch (err) {
      console.error("Booking failed:", err);
    }
  };
  
  
  return (
    <div>
      {/* booking restaurant table  */}
      <div className="flex justify-center m-8">
        <p>
          <label htmlFor="time-slot">Choose Restaurant:</label>
          <select
            onChange={(e) => setselectedRes(e.target.value)}
            name=""
            id="time-slot"
            className="ms-3 w-48 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
          >
            <option value="">-- Select --</option>
            <option value="1">Restaurant 1</option>
          </select>
        </p>
      </div>
      <div className='className=" w-full flex justify-center gap-3 my-8"'>
        <button onClick={checkAvail} className="p-2 rounded bg-blue-400">
          Check Availability
        </button>
      </div>
      <div>
        {/* Table Grid */}
        <div className="grid grid-cols-3 gap-4 p-4">
  {Tables.map((table) => (
    <div key={table.id} className="bg-blue-100 p-4 rounded shadow">
      <h3 className="font-bold mb-2">{table.name}</h3>
      <p>Seats: {table.occupancy}</p>
      <div className="mt-3">
        {timeSlots.map((slot) => {
          const booked = isSlotBooked(table.id, slot.id);
          return (
            <div key={slot.id} className="flex justify-between items-center mt-2">
              <span className="text-sm">{slot.slot}</span>
              <button
                className={`text-sm px-2 py-1 rounded ${
                  booked
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-500 hover:bg-green-600 text-white"
                }`}
                disabled={booked}
                onClick={() => handleBooking(table.id, slot.id)}
              >
                {booked ? "Booked" : "Book"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  ))}
</div>

    </div>
    </div>
  );
};

export default BookingRes;
