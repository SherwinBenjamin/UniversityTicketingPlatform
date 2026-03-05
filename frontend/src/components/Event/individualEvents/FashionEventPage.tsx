/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useParams } from "react-router-dom";
import data from "@/DataList/EventList";

import "./FashionEventPage.css";

function FashionEventPage() {
  const [eventData, setEventData] = React.useState<any>([]);
  const [listData, setListData] = React.useState<any>([]);
  const { id } = useParams();
  React.useEffect(() => {
    setEventData(data[2]?.events);
  }, []);
  React.useEffect(() => {
    eventData?.forEach((item: any) => {
      if (item.id === id) {
        setListData(item);
      }
    });
  });

  return (
    <div className="fashion-eventsdata">
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
        <h1 className="fashion-title"> {listData.title}</h1>
      </div>

      <div className="fashion-content">
        <p className="fashion-description">{listData.description}</p>
        <div className="fashion-top">
          <div className="flexfashion">
            <h3 className="fashionhead ">Team size: </h3>
            <h4>{listData.teamSizeFrontend}</h4>
          </div>

          {listData.timeLimit && (
            <div className="flexfashion">
              <h3 className="fashionhead">Time Limit :</h3>
              <h4> {listData.timeLimit}</h4>
            </div>
          )}

          {listData.eventType && (
            <div className="flexfashion">
              <h3 className="fashionhead">Event type:</h3>
              <h4> {listData.eventType}</h4>
            </div>
          )}

          {listData.category && (
            <div className="flexfashion">
              <h3 className="fashionhead">Category:</h3>
              <h4> {listData.category}</h4>
            </div>
          )}

          {listData.mode && (
            <div className="flexfashion">
              <h3 className="fashionhead">Mode:</h3>
              <h4> {listData.mode}</h4>
            </div>
          )}

          {/* <div className='flexfashion'>
						<h3 className='fashionhead'>Date:</h3>
						<h4> {listData.date}</h4>
					</div>

					<div className='flexfashion'>
						<h3 className='fashionhead'>Time:</h3>
						<h4> {listData.time}</h4>
					</div>

					<div className='flexfashion'>
						<h3 className='fashionhead'>Venue:</h3>
						<h4> {listData.venue}</h4>
					</div> */}
        </div>

        <div className="fashionMainContent">
          {listData.theme && (
            <div className="fashion-theme">
              <h3 className="fashionSubtitle">Theme :</h3>
              <p className="rules">{listData.theme}</p>
            </div>
          )}

          <h3 className="fashionSubtitle">Judging Criteria :</h3>
          {listData.judgingCriteria?.map((ruleItem: any, index: number) => {
            return (
              <p key={index} className="rules">
                {ruleItem}
              </p>
            );
          })}

          {listData.segments && <h3 className="fashionSubtitle">Segments :</h3>}
          {listData.segments?.map((ruleItem: any, index: number) => {
            return (
              <p key={index} className="rules">
                {ruleItem}
              </p>
            );
          })}

          <h3 className="fashionSubtitle">Rules :</h3>
          {listData.rules?.map((ruleItem: any, index: number) => {
            return (
              <p key={index} className="rules">
                {ruleItem}
              </p>
            );
          })}

          {/* <div className='fashion-note'> <h3>Note : </h3> {listData.note}</div> */}
          <div className="fashion-contact">
            <h3>Contact:</h3>
            {listData.contact?.map((contactitem: any) => (
              <div className="fashion-items">
                {contactitem.name} : {contactitem.contact}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FashionEventPage;
