/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useParams } from "react-router-dom";
import data from "@/DataList/EventList";

import "./SocialEventPage.css";
function SocialEventPage() {
  const [eventData, setEventData] = React.useState<any>([]);
  const [listData, setListData] = React.useState<any>([]);
  const { id } = useParams();
  React.useEffect(() => {
    setEventData(data[13]?.events);
  }, []);
  React.useEffect(() => {
    eventData?.forEach((item: any) => {
      if (item.id === id) {
        setListData(item);
      }
    });
  });

  return (
    <div className="social-eventsdata">
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
        <h1 className="social-title"> {listData.title}</h1>
      </div>

      <div className="social-content">
        <p className="social-description">{listData.oneLiner}</p>
        <div className="social-top">
          {/* <div className='flexsocial'>
						<h3 className='socialhead'>Date:</h3>
						<h4> {listData.date}</h4>
					</div>

					<div className='flexsocial'>
						<h3 className='socialhead'>Time:</h3>
						<h4> {listData.time}</h4>
					</div> */}

          {listData.eventType && (
            <div className="flexsocial">
              <h3 className="socialhead">Event Type:</h3>
              <h4> {listData.eventType}</h4>
            </div>
          )}

          <div className="flexsocial">
            <h3 className="socialhead">Venue:</h3>
            <h4> {listData.venue}</h4>
          </div>

          <div className="flexsocial">
            <h3 className="socialhead">Mode:</h3>
            <h4> {listData.mode}</h4>
          </div>
        </div>

        <div className="socialMainContent">
          {listData.description && (
            <div className="social-judgment">
              <h3 className="socialSubtitle">Description :</h3>
              <p className="rules">{listData.description}</p>
            </div>
          )}

          {listData.rules && <h3 className="socialSubtitle">Rules :</h3>}
          {listData.rules?.map((ruleItem: any, index: number) => {
            return (
              <p key={index} className="rules">
                {ruleItem}
              </p>
            );
          })}

          <div className="social-note">
            {" "}
            {/* <h3>Note : </h3> {listData.note} */}
          </div>
          <div className="social-contact">
            <h3>Contact:</h3>
            {listData.contact?.map((contactitem: any) => (
              <div className="social-items">
                {contactitem.name} : {contactitem.contact}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialEventPage;
