
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import useBooking from "@/features/Booking/useBooking";
import { Copy, Database, Verified, XCircle } from "lucide-react";
import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import useStaff from "@/features/Staffs/useStaff";

function HandleUser() {
  const [email, setEmail] = React.useState("");
  const [userId, setUserId] = React.useState("");
  const {
    userDetailByEmail,
    userDetailByEmailLoading,
    userDetailByEmailData,
    deleteUser,
    deleteUserLoading,
  } = useBooking();
  const handleFetchDetails = () => {
    if (email) {
      userDetailByEmail(email);
    } else {
      toast({
        variant: "info",
        description: "Please enter email to fetch user details",
      });
    }
    setEmail("");
  };

  const handleDeleteUser = () => {
    if (userId) {
      deleteUser(userId);
    } else {
      toast({
        variant: "info",
        description: "Please enter User id to delete",
      });
    }
    setUserId("");
  };
  const{staffData}=useStaff();
  return (
    <div className="">
    
      <div className="pl-[5rem]  ">
        <h2 className="pt-2  text-blue-700 font-[montserrat] font-black text-[2.5rem]  tracking-tight">
          User Details
        </h2>
      </div>
      <div className="px-[5rem]  ">
        <section className="pt-[0.5rem] ">
          <p className="text-white py-2 tracking-tight">
            Enter the Email of user for whom you want to fetch booking details.
          </p>
          <div className="flex justify-start items-center gap-x-5">
            <div>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                className="w-[500px] h-[3rem] px-4 rounded-[0.5rem] border-none bg-[#2D2D2E] text-white"
              />
            </div>
            <div>
              <Button
                disabled={userDetailByEmailLoading}
                onClick={handleFetchDetails}
                className=" bg-blue-600 px-[3rem] hover:bg-blue-700  h-[3rem] text-white rounded-[0.5rem]"
              >
                Search
              </Button>
            </div>
            <div>
              {userDetailByEmailData ? (
                <img
                  className="rounded-[50rem] w-[45px] h-[45px] "
                  src={userDetailByEmailData?.data?.profile_pic}
                ></img>
              ) : null}
            </div>
          </div>
        </section>
        <section>
          {!userDetailByEmailData?.data ? (
            <div className="border-2 w-[800px] h-[380px] mt-[2rem] bg-[#000]  flex  justify-center items-center font-[monospace] text-[2rem] shadow-md shadow-nBlue  ">
              <p className="text-white">
                Get Users Details
                <Database />
              </p>
            </div>
          ) : (
            <div className=" bookingBox border-2 w-[800px] h-[380px] overflow-scroll  mt-[2rem] bg-[#000]  font-[monospace] py-3 ">
              <div className="text-white text-base   font-semibold  tracking-tight flex justify-start py-[0.3rem] items-center  ">
                <h2 className=" px-[1rem] capitalize w-[260px]">User Id :</h2>
                <p>{userDetailByEmailData?.data?.id}</p>
                <CopyToClipboard text={userDetailByEmailData?.data?.id}>
                  <Copy className="ml-3" size={16} />
                </CopyToClipboard>
              </div>
              <div className="text-white text-base   font-semibold  tracking-tight flex justify-start py-[0.3rem] items-center ">
                <h2 className=" px-[1rem] capitalize w-[260px]">Name:</h2>
                <p>{userDetailByEmailData?.data?.name}</p>
              </div>
              <div className="text-white text-base   font-semibold  tracking-tight flex justify-start py-[0.3rem] items-center ">
                <h2 className=" px-[1rem] capitalize w-[260px]">Email:</h2>
                <p>{userDetailByEmailData?.data?.email}</p>
                <CopyToClipboard text={userDetailByEmailData?.data?.email}>
                  <Copy className="ml-3" size={16} />
                </CopyToClipboard>
              </div>
              <div className="text-white text-base   font-semibold  tracking-tight flex justify-start py-[0.3rem] items-center">
                <h2 className=" px-[1rem] capitalize w-[260px]">
                  Phone Number :
                </h2>
                <p>{userDetailByEmailData?.data?.phone_number}</p>
                <CopyToClipboard
                  text={userDetailByEmailData?.data?.phone_number}
                >
                  <Copy className="ml-3" size={16} />
                </CopyToClipboard>
              </div>
              <div className="text-white text-base  font-semibold  tracking-tight flex justify-start py-[0.3rem] items-center">
                <h2 className=" px-[1rem] capitalize w-[260px]">Gender :</h2>
                <p>{userDetailByEmailData?.data?.gender}</p>
              </div>
              <div className="text-white text-base  font-semibold  tracking-tight flex justify-start py-[0.3rem] ">
                <h2 className=" px-[1rem] capitalize w-[260px] ">
                  college Name :
                </h2>
                <p>{userDetailByEmailData?.data?.college_name}</p>
              </div>
              <div className="text-white text-base   font-semibold  tracking-tight flex justify-start py-[0.3rem] ">
                <h2 className=" px-[1rem] capitalize w-[260px]">
                  Reg Number :
                </h2>
                <p>{userDetailByEmailData?.data?.reg_number}</p>
                <CopyToClipboard text={userDetailByEmailData?.data?.reg_number}>
                  <Copy className="ml-3" size={16} />
                </CopyToClipboard>
              </div>
             
              <div className="text-white text-base font-semibold  tracking-tight flex justify-start py-[0.3rem] ">
              <h2 className=" px-[1rem] capitalize w-[260px]">
                ticket for Events :
              </h2>
              {userDetailByEmailData?.data?.is_registration_ticket_issued ? (
                <Verified className="text-green-600"  />
              ) : (
                <XCircle className="text-red-600" />
              )}
            </div>
              <div className="text-white text-base font-semibold  tracking-tight flex justify-start py-[0.3rem] ">
                <h2 className=" px-[1rem] capitalize w-[260px]">
                  Srm Ktr Student :
                </h2>
                {userDetailByEmailData?.data?.is_srm_ktr ? (
                  <Verified className="text-green-600" />
                ) : (
                  <XCircle className="text-red-600" />
                )}
              </div>

              <div className="text-white text-base font-semibold  tracking-tight flex justify-start py-[0.3rem] ">
                <h2 className=" px-[1rem] capitalize w-[260px]">
                  Pro show ticket purchased :
                </h2>
                {userDetailByEmailData?.data?.is_ticket_issued ? (
                  <Verified className="text-green-600" />
                ) : (
                  <XCircle className="text-red-600" />
                )}
              </div>

              <div className="text-white text-base  font-[montserrat] font-semibold  tracking-tight flex justify-start py-[0.3rem] ">
                <h2 className=" px-[1rem] capitalize w-[260px]">
                  created At :
                </h2>
                <p>
                  {userDetailByEmailData?.data?.created_at
                    ? new Date(
                        userDetailByEmailData?.data?.created_at
                      ).toLocaleString()
                    : "Not Updated"}
                </p>
              </div>
              <div className="text-white text-base  font-[montserrat] font-semibold  tracking-tight flex justify-start py-[0.3rem] ">
                <h2 className=" px-[1rem] capitalize w-[260px]">
                  last updated:
                </h2>
                <p>
                  {userDetailByEmailData?.data?.updated_at
                    ? new Date(
                        userDetailByEmailData?.data?.updated_at
                      ).toLocaleString()
                    : "Not Updated"}
                </p>
              </div>
              <div className="text-white text-base font-semibold  tracking-tight flex justify-start py-[0.3rem] ">
                <h2 className=" px-[1rem] capitalize w-[260px]">delete :</h2>
                {userDetailByEmailData?.data?.is_deleted ? (
                  <Verified className="text-green-600" />
                ) : (
                  <XCircle className="text-red-600" />
                )}
              </div>
            </div>
          )}
        </section>
        {
          (staffData?.data?.user?.role === "admin")?(
            <section className="py-[2.5rem] ">
            <h2 className="pt-[2rem]  text-red-600 font-[montserrat] font-black text-[2.5rem]  tracking-tight">
              Delete User
            </h2>
            <p className="text-white py-2 tracking-tight">
              Enter User Id to delete the user.
            </p>
            <div className="flex justify-start items-center gap-x-5">
              <div>
                <input
                  type="text"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  placeholder="Enter User Id"
                  className="w-[500px] h-[3rem] px-4 rounded-[0.5rem] border-none bg-[#2D2D2E] text-white"
                />
              </div>
              <div>
                <Dialog>
                  <DialogTrigger>
                    {" "}
                    <Button className="hover:bg-red-700 bg-red-600 px-[3rem]  h-[3rem] text-white rounded-[0.5rem]">
                      Delete
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Are you absolutely sure?</DialogTitle>
                      <DialogDescription>
                        This action cannot be undone. This will permanently delete
                        account and remove data from our servers.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button className="bg-gray-600 hover:bg-gray-700 h-[3rem] text-white rounded-[0.5rem]">
                          Cancel
                        </Button>
                      </DialogClose>
                      <Button
                        disabled={deleteUserLoading}
                        onClick={handleDeleteUser}
                        className="hover:bg-red-700 bg-red-600 px-[3rem]  h-[3rem] text-white rounded-[0.5rem]"
                      >
                        Delete
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </section>
          ):null
        }
       
      </div>
    </div>
  );
}

export default HandleUser;
