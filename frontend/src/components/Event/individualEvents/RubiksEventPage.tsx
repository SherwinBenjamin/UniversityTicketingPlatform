/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useParams } from "react-router-dom";
import data from "@/DataList/EventList";

import "./RubiksEventPage.css";
function RubiksEventPage() {
  const [eventData, setEventData] = React.useState<any>([]);
  const [listData, setListData] = React.useState<any>([]);
  const { id } = useParams();
  React.useEffect(() => {
    setEventData(data[15]?.events);
  }, []);
  React.useEffect(() => {
    eventData?.forEach((item: any) => {
      if (item.id === id) {
        setListData(item);
      }
    });
  });

  return (
    <div className="rubiks-eventsdata">
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
        <h1 className="rubiks-title"> {listData.title}</h1>
      </div>

      <div className="rubiks-content">
        <p className="rubiks-description">{listData.oneLiner}</p>
        <div className="rubiks-top">
          {/* <div className='flexrubiks'>
						<h3 className='rubikshead'>Date:</h3>
						<h4> {listData.date}</h4>
					</div>

					<div className='flexrubiks'>
						<h3 className='rubikshead'>Time:</h3>
						<h4> {listData.time}</h4>
					</div> */}

          {listData.eventType && (
            <div className="flexrubiks">
              <h3 className="rubikshead">Event Type:</h3>
              <h4> {listData.eventType}</h4>
            </div>
          )}

          {/* <div className='flexrubiks'>
						<h3 className='rubikshead'>Venue:</h3>
						<h4> {listData.venue}</h4>
					</div> */}

          <div className="flexrubiks">
            <h3 className="rubikshead">Mode:</h3>
            <h4> {listData.mode}</h4>
          </div>
        </div>

        <div className="rubiksMainContent">
          {listData.overview && <h3 className="rubiksSubtitle">Overview :</h3>}
          {listData.overview?.map((ruleItem: any, index: number) => {
            return (
              <p key={index} className="rules">
                {ruleItem}
              </p>
            );
          })}

          <div className="rubiks-note">
            {" "}
            {/* <h3>Note : </h3> {listData.note} */}
          </div>
          <div className="rubiks-contact">
            <h3>Contact:</h3>
            {listData.contact?.map((contactitem: any) => (
              <div className="rubiks-items">
                {contactitem.name} : {contactitem.contact}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RubiksEventPage;
