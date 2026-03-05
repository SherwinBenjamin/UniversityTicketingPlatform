/* eslint-disable @typescript-eslint/no-explicit-any */
import "./Event.css";
import data from "../../DataList/EventList";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
// import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer/Footer";


function Event() {
  // const queryClient = useQueryClient();
  //  React.useEffect(() => {
  //   queryClient.invalidateQueries("eventCodeOfUser");

  //  },[]);
  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
  ];

  return (
    <div className="eventContainer ">
      <div className="event-top">
        <h1 className='text-white text-center text-[3rem] uppercase font-["Unbounded",sans-serif] font-extrabold tracking-wider pt-[3rem]'>
          Events
        </h1>
        <p className="text-white font-regular font-[montserrat] text-center text-[2rem] uppercase drop-shadow-md pt-[2rem] ">
          Tighten Your Seatbelts!
        </p>
      </div>
      <div className="club-container ">
        <div className="clubs">
          {data?.map((event: any, index: number) => {
            return (
              <CardContainer>
                <CardBody>
                  <CardItem
                    translateZ="90"
                    rotateX={10}
                    rotateZ={-5}
                    className={`${
                      colors[index % colors.length]
                    } bg-opacity-100 `}
                  >
                    {/* <BackgroundGradientAnimation interactive = {true}> */}
                    <Link to={`/event/${event.nameLink}`}>
                      <div key={index} className="club-box rounded-md" style={{backgroundImage: `url(${event.clubImage})`,backgroundSize: 'cover'}}>
                        {/* <img src={event.clubImage} className="object-contain absolute"></img> */}
                        <div className="category-box rounded-md m-0">
                          <p className="text-white text-[poppins] font-extrabold capitalize  ">
                            #{event.name}
                          </p>
                        </div>
                      </div>
                    </Link>
                    {/* </BackgroundGradientAnimation> */}
                  </CardItem>
                </CardBody>
              </CardContainer>
            );
          })}
        </div>
      </div>
      <Footer/>
      
    </div>
  );
}

export default Event;
