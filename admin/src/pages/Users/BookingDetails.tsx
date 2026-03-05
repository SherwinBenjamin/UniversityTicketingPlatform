/* eslint-disable @typescript-eslint/no-explicit-any */

import BookingCard from "@/components/Users/BookingCard";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import useBooking from "@/features/Booking/useBooking";
import {  Database } from "lucide-react";
import React from "react";
function BookingDetails() {
  const [email, setEmail] = React.useState("");
  const { bookingsByEmail, bookingsByEmailLoading, bookingsByEmailData } =
    useBooking();
  const handleFetchDetails = () => {
    if (email) {
      bookingsByEmail(email);
    } else {
      toast({
        variant: "info",
        description: "Please Enter Email",
      });
    }
    setEmail("");
  };

  return (
    <div className="font-[montserrat]">
    
      <div className="md:px-[5rem]   ">
        <h2 className="md:pt-2 pt-2 px-[1rem] md:px-0  text-blue-700 font-[montserrat] font-black text-[2.5rem]  tracking-tight">
          Booking Details
        </h2>

        <section className="pt-[0.5rem] ">
          <p className="text-white py-2 tracking-tight">
            Enter the Email of user for whom you want to fetch booking details.
          </p>
          <div className="flex justify-start items-center gap-x-5">
            <div className=" ">
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                className="w-[500px] h-[3rem] px-4 rounded-[0.5rem] border-none bg-[#2D2D2E] text-white"
              />
            </div>
            <div className="w-[20%]">
              <Button
                disabled={bookingsByEmailLoading}
                onClick={handleFetchDetails}
                className=" bg-blue-600 px-[3rem] hover:bg-blue-700    h-[3rem] text-white rounded-[0.5rem]"
              >
                Search
              </Button>
            </div>
          </div>
        </section>
        <section>
          {(bookingsByEmailData?.data?.length === 0) ? (
            <div className="border-2 w-[800px] h-[380px] mt-[2rem] bg-[#000]  flex  justify-center items-center font-[monospace] text-[2rem] shadow-md shadow-nBlue  ">
              <p className="text-white">
                Get Booking Details
                <Database />
              </p>
            </div>
          ) : (
            bookingsByEmailData?.data.map((booking: any, index:number) => (
              <>
                <BookingCard key={index} bookingsByEmailData={booking} />
              </>
            ))
          )}
        </section>
      </div>
    </div>
  );
}

export default BookingDetails;
