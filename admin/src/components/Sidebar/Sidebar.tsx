import { SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Link } from "react-router-dom";

import { ScrollArea } from "@/components/ui/scroll-area";
function Sidebar() {
  const isActive = (path: string) => location.pathname == path;

  return (
    <div>
      <SheetContent side={"left"} className=" bg-nBlack ">
        <SheetHeader>
          <SheetTitle className="text-white font-[montserrat] font-bold  text-[1.7rem] ">
            Dashboard
          </SheetTitle>
          <div>
            <ScrollArea className="h-[80vh] w-full ">
              <div>
                <div
                  className={`  text-white mt-[0.5rem] text-[1rem] font-[montserrat capitalize  w-full font-medium px-4 py-3 rounded-[0.5rem]  hover:bg-nBlue/10 ${
                    isActive("/") ? "bg-nBlue/10" : ""
                  }  `}
                >
                  <Link to="/">Home</Link>
                </div>
              </div>
              <div>
                <h3 className="text-blue-700 uppercase font-[montserrat]  font-extrabold text-[1.2rem]    ">
                  Staffs
                </h3>
                <div
                  className={`  text-white mt-[0.5rem] text-[1rem] font-[montserrat capitalize  w-full font-medium px-4 py-3 rounded-[0.5rem] hover:bg-nBlue/10 ${
                    isActive("/staff-verification") ? "bg-nBlue/10" : ""
                  }  `}
                >
                  <Link to="/staff-verification">staff verification</Link>
                </div>
                <div
                  className={`  text-white mt-[0.5rem] text-[1rem] font-[montserrat capitalize  w-full font-medium px-4 py-3 rounded-[0.5rem] hover:bg-nBlue/10 ${
                    isActive("/register-staff") ? "bg-nBlue/10" : ""
                  }  `}
                >
                  <Link to="/register-staff">Register Staff</Link>
                </div>
              </div>
              <div>
                <h3 className="text-blue-700 uppercase font-[montserrat]  font-extrabold text-[1.2rem]    ">
                  Events
                </h3>
                <div
                  className={`  text-white mt-[0.5rem] text-[1rem] font-[montserrat capitalize  w-full font-medium px-4 py-3 rounded-[0.5rem] hover:bg-nBlue/10 ${
                    isActive("/event-list") ? "bg-nBlue/10" : ""
                  }  `}
                >
                  <Link to="/event-list">Events List</Link>
                </div>
                <div
                  className={`  text-white mt-[0.5rem] text-[1rem] font-[montserrat capitalize  w-full font-medium px-4 py-3 rounded-[0.5rem] hover:bg-nBlue/10 ${
                    isActive("/create-event") ? "bg-nBlue/10" : ""
                  }  `}
                >
                  <Link to="/create-event">Create Event</Link>
                </div>
              </div>
              <div>
                <h3 className="text-blue-700 uppercase font-[montserrat]  font-extrabold text-[1.2rem]    ">
                  Users
                </h3>
                <div
                  className={`  text-white mt-[0.5rem] text-[1rem] font-[montserrat capitalize  w-full font-medium px-4 py-3 rounded-[0.5rem] hover:bg-nBlue/10 ${
                    isActive("/booking-detail") ? "bg-nBlue/10" : ""
                  }  `}
                >
                  <Link to="/booking-detail">Booking Detail</Link>
                </div>
                <div
                  className={`  text-white mt-[0.5rem] text-[1rem] font-[montserrat capitalize  w-full font-medium px-4 py-3 rounded-[0.5rem] hover:bg-nBlue/10 ${
                    isActive("/handle-user") ? "bg-nBlue/10" : ""
                  }  `}
                >
                  <Link to="/handle-user">Handle User</Link>
                </div>
              </div>
            </ScrollArea>
          </div>
        </SheetHeader>
      </SheetContent>
    </div>
  );
}

export default Sidebar;
