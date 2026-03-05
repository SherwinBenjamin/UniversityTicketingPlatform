/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useParams } from "react-router-dom";
import data from "@/DataList/EventList";

import "./MoviesEventPage.css";

function MoviesEventPage() {
  const [eventData, setEventData] = React.useState<any>([]);
  const [listData, setListData] = React.useState<any>([]);
  const { id } = useParams();
  React.useEffect(() => {
    setEventData(data[3]?.events);
  }, []);
  React.useEffect(() => {
    eventData?.forEach((item: any) => {
      if (item.id === id) {
        setListData(item);
      }
    });
  });

  return (
    <div className="movies-eventsdata">
      {/* {eventCodeOfUserLoading && eventCode?.includes(Number(id)) ? (
				<Button
					className="bg-green-500   "
					onClick={() => handleRegisterForEvent()}
					disabled={!isAuthenticated || registerForEventLoading}
				>
					Register
				</Button>
			) : (
				<Button
					className="bg-green-500   "
					onClick={() => handleRegisterForEvent()}
					disabled={!isAuthenticated || registerForEventLoading}
				>
					unregister
				</Button>
			)}

			{user?.name} */}
      <div>
        <h1 className="movies-title"> {listData.title}</h1>
      </div>

      <div className="movies-content">
        <p className="movies-description">{listData.description}</p>
        <div className="movies-top">
          <div className="flexmovies">
            <h3 className="movieshead ">Team size: </h3>
            <h4>{listData.teamSizeFrontend}</h4>
          </div>

          {listData.eventType && (
            <div className="flexmovies">
              <h3 className="movieshead">Event type:</h3>
              <h4> {listData.eventType}</h4>
            </div>
          )}

          {listData.mode && (
            <div className="flexmovies">
              <h3 className="movieshead">Mode:</h3>
              <h4> {listData.mode}</h4>
            </div>
          )}

          {/* <div className='flexmovies'>
						<h3 className='movieshead'>Date:</h3>
						<h4> {listData.date}</h4>
					</div>

					<div className='flexmovies'>
						<h3 className='movieshead'>Time:</h3>
						<h4> {listData.time}</h4>
					</div>

					<div className='flexmovies'>
						<h3 className='movieshead'>Venue:</h3>
						<h4> {listData.venue}</h4>
					</div> */}
        </div>

        <div className="moviesMainContent">
          <h3 className="moviesSubtitle">Rules :</h3>
          {listData.rules?.map((ruleItem: any, index: number) => {
            return (
              <p key={index} className="rules">
                {ruleItem}
              </p>
            );
          })}

          {/* <div className='movies-note'> <h3>Note : </h3> {listData.note}</div> */}
          <div className="movies-contact">
            <h3>Contact:</h3>
            {listData.contact?.map((contactitem: any) => (
              <div className="movies-items">
                {contactitem.name} : {contactitem.contact}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviesEventPage;
