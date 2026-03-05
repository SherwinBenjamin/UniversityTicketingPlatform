/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useParams } from "react-router-dom";
import data from "@/DataList/EventList";

import "./MusicEventPage.css";
function MusicEventPage() {
  const [eventData, setEventData] = React.useState<any>([]);
  const [listData, setListData] = React.useState<any>([]);
  const { id } = useParams();
  React.useEffect(() => {
    setEventData(data[0]?.events);
  }, []);
  React.useEffect(() => {
    eventData?.forEach((item: any) => {
      if (item.id === id) {
        setListData(item);
      }
    });
  });

  return (
    <div className="music-eventsdata">
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
        <h1 className="music-title"> {listData.title}</h1>
      </div>

      <div className="music-content">
        <p className="music-description">{listData.description}</p>
        <div className="music-top">
          <div className="flexmusic">
            <h3 className="musichead ">Team size: </h3>
            <h4>{listData.teamSizeFrontend}</h4>
          </div>

          {listData.timeLimit && (
            <div className="flexmusic">
              <h3 className="musichead">Time Limit :</h3>
              <h4> {listData.timeLimit}</h4>
            </div>
          )}

          {listData.eventType && (
            <div className="flexmusic">
              <h3 className="musichead">Event type:</h3>
              <h4> {listData.eventType}</h4>
            </div>
          )}

          {listData.category && (
            <div className="flexmusic">
              <h3 className="musichead">Category:</h3>
              <h4> {listData.category}</h4>
            </div>
          )}

          {listData.mode && (
            <div className="flexmusic">
              <h3 className="musichead">Mode:</h3>
              <h4> {listData.mode}</h4>
            </div>
          )}

          {/* <div className='flexmusic'>
						<h3 className='musichead'>Date:</h3>
						<h4> {listData.date}</h4>
					</div>

					<div className='flexmusic'>
						<h3 className='musichead'>Time:</h3>
						<h4> {listData.time}</h4>
					</div>

					<div className='flexmusic'>
						<h3 className='musichead'>Venue:</h3>
						<h4> {listData.venue}</h4>
					</div> */}
        </div>

        <div className="musicMainContent">
          {listData.judgingCriteria && (
            <div className="music-judgment">
              <h3 className="musicSubtitle">Judgement Criteria :</h3>
              <p className="rules">{listData.judgingCriteria}</p>
            </div>
          )}

          <h3 className="musicSubtitle">Performance Rules :</h3>
          {listData.performanceRules?.map((ruleItem: any, index: number) => {
            return (
              <p key={index} className="rules">
                {ruleItem}
              </p>
            );
          })}

          <div className="music-note">
            {" "}
            {/* <h3>Note : </h3> {listData.note} */}
          </div>
          <div className="music-contact">
            <h3>Contact:</h3>
            {listData.contact?.map((contactitem: any) => (
              <div className="music-items">
                {contactitem.name} : {contactitem.contact}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicEventPage;
