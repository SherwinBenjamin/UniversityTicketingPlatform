import { Copy, Verified, XCircle } from "lucide-react";
import { CopyToClipboard } from "react-copy-to-clipboard";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function BookingCard({ bookingsByEmailData }: any) {
  return (
    <div>
      <div className="border-2 w-[800px] h-[380px] mt-[2rem] bg-[#000]  font-[monospace] ">
        <div className="text-white text-base   font-semibold  tracking-tight flex justify-start py-[0.3rem] items-center  ">
          <h2 className=" px-[1rem] capitalize w-[260px]">booking Id :</h2>
          <p>{bookingsByEmailData?.id}</p>
          <CopyToClipboard text={bookingsByEmailData?.id}>
            <Copy className="ml-3" size={16} />
          </CopyToClipboard>
        </div>
        <div className="text-white text-base   font-semibold  tracking-tight flex justify-start py-[0.3rem] items-center ">
          <h2 className=" px-[1rem] capitalize w-[260px]">user Id :</h2>
          <p>{bookingsByEmailData?.user_id}</p>
          <CopyToClipboard text={bookingsByEmailData?.user_id}>
            <Copy className="ml-3" size={16} />
          </CopyToClipboard>
        </div>
        <div className="text-white text-base   font-semibold  tracking-tight flex justify-start py-[0.3rem] items-center">
          <h2 className=" px-[1rem] capitalize w-[260px]">payment Id :</h2>
          <p>{bookingsByEmailData?.payment_id}</p>
          <CopyToClipboard text={bookingsByEmailData?.payment_id}>
            <Copy className="ml-3" size={16} />
          </CopyToClipboard>
        </div>
        <div className="text-white text-base  font-semibold  tracking-tight flex justify-start py-[0.3rem] items-center">
          <h2 className=" px-[1rem] capitalize w-[260px]">ticket Id :</h2>
          <p>{bookingsByEmailData?.ticket_id}</p>
          <CopyToClipboard text={bookingsByEmailData?.ticket_id}>
            <Copy className="ml-3" size={16} />
          </CopyToClipboard>
        </div>
        <div className="text-white text-base  font-semibold  tracking-tight flex justify-start py-[0.3rem] ">
          <h2 className=" px-[1rem] capitalize w-[260px] ">payment Status :</h2>
          <p>{bookingsByEmailData?.payment_status}</p>
        </div>
        <div className="text-white text-base   font-semibold  tracking-tight flex justify-start py-[0.3rem] ">
          <h2 className=" px-[1rem] capitalize w-[260px]">ticket Status :</h2>
          <p>{bookingsByEmailData?.ticket_status}</p>
        </div>
        <div className="text-white text-base font-semibold  tracking-tight flex justify-start py-[0.3rem] ">
          <h2 className=" px-[1rem] capitalize w-[260px]">
            offline Ticket Issued :
          </h2>
          {bookingsByEmailData?.offline_ticket_issued ? (
            <Verified className="text-green-600" />
          ) : (
            <XCircle className="text-red-600" />
          )}
        </div>
        <div className="text-white text-base   font-semibold  tracking-tight flex justify-start py-[0.3rem] ">
          <h2 className=" px-[1rem] capitalize w-[260px]">Ticket Type :</h2>
          <p>{bookingsByEmailData?.ticket_type}</p>
        </div>
        <div className="text-white text-base   font-semibold  tracking-tight flex justify-start py-[0.3rem] ">
          <h2 className=" px-[1rem] capitalize w-[260px]">staff Name :</h2>
          <p>
            {bookingsByEmailData?.staff_name
              ? bookingsByEmailData?.staff_name
              : "Not Assigned"}
          </p>
        </div>
        <div className="text-white text-base   font-semibold  tracking-tight flex justify-start py-[0.3rem] items-center ">
          <h2 className=" px-[1rem] capitalize w-[260px]">Staff Id :</h2>
          <p>
            {bookingsByEmailData?.staff_id
              ? bookingsByEmailData?.staff_id
              : "Not Assigned"}
          </p>
          {bookingsByEmailData?.staff_id ? (
            <CopyToClipboard text={bookingsByEmailData?.staff_id}>
              <Copy className="ml-3" size={16} />
            </CopyToClipboard>
          ) : null}
        </div>
        <div className="text-white text-base  font-[montserrat] font-semibold  tracking-tight flex justify-start py-[0.3rem] ">
          <h2 className=" px-[1rem] capitalize w-[260px]">Last Updated :</h2>
          <p>
            {bookingsByEmailData?.updated_at
              ? new Date(bookingsByEmailData?.updated_at).toLocaleString()
              : "Not Updated"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BookingCard;
