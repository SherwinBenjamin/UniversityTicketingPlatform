/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useParams } from "react-router-dom";
import data from "@/DataList/EventList";

import "./DanceEventPage.css";
function DanceEventPage() {
  const [eventData, setEventData] = React.useState<any>([]);
  const [listData, setListData] = React.useState<any>([]);
  const { id } = useParams();
  React.useEffect(() => {
    setEventData(data[1]?.events);
  }, []);

  React.useEffect(() => {
    eventData?.forEach((item: any) => {
      if (item.id === id) {
        setListData(item);
      }
    });
  });

  return (
    <div className="dance-eventsdata">
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
        <h1 className="dance-title"> {listData.title}</h1>
      </div>

      <div className="dance-content">
        <p className="dance-description">{listData.description}</p>
        <div className="dance-top">
          <div className="flexdance">
            <h3 className="dancehead ">Team size: </h3>
            <h4>{listData.teamSizeFrontend}</h4>
          </div>

          {listData.timeLimit && (
            <div className="flexdance">
              <h3 className="dancehead">Time Limit :</h3>
              <h4> {listData.timeLimit}</h4>
            </div>
          )}

          {listData.eventType && (
            <div className="flexdance">
              <h3 className="dancehead">Event type:</h3>
              <h4> {listData.eventType}</h4>
            </div>
          )}

          {listData.category && (
            <div className="flexdance">
              <h3 className="dancehead">Category:</h3>
              <h4> {listData.category}</h4>
            </div>
          )}

          {listData.mode && (
            <div className="flexdance">
              <h3 className="dancehead">Mode:</h3>
              <h4> {listData.mode}</h4>
            </div>
          )}

          {/* <div className='flexdance'>
						<h3 className='dancehead'>Date:</h3>
						<h4> {listData.date}</h4>
					</div>

					<div className='flexdance'>
						<h3 className='dancehead'>Time:</h3>
						<h4> {listData.time}</h4>
					</div>

					<div className='flexdance'>
						<h3 className='dancehead'>Venue:</h3>
						<h4> {listData.venue}</h4>
					</div> */}
        </div>

        <div className="danceMainContent">
          {listData.judgingCriteria && (
            <div className="dance-judgment">
              <h3 className="danceSubtitle">Judgement Criteria :</h3>
              <p className="rules">{listData.judgingCriteria}</p>
            </div>
          )}

          <h3 className="danceSubtitle">Rules :</h3>
          {listData.rules?.map((ruleItem: any, index: number) => {
            return (
              <p key={index} className="rules">
                {ruleItem}
              </p>
            );
          })}

          <div className="dance-note">
            {" "}
            {/* <h3>Note : </h3> {listData.note} */}
          </div>
          <div className="dance-contact">
            <h3>Contact:</h3>
            {listData.contact?.map((contactitem: any) => (
              <div className="dance-items">
                {contactitem.name} : {contactitem.contact}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DanceEventPage;
