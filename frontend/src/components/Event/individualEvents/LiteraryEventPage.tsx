/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useParams } from "react-router-dom";
import data from "@/DataList/EventList";

import "./LiteraryEventPage.css";

function LiteraryEventPage() {
  const [eventData, setEventData] = React.useState<any>([]);
  const [listData, setListData] = React.useState<any>([]);
  const { id } = useParams();
  React.useEffect(() => {
    setEventData(data[4]?.events);
  }, []);
  React.useEffect(() => {
    eventData?.forEach((item: any) => {
      if (item.id === id) {
        setListData(item);
      }
    });
  });

  return (
    <div className="literary-eventsdata">
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
        <div>
          <h1 className="literary-title"> {listData.title}</h1>
        </div>

        <div className="literary-content">
          <div className="literary-top">
            {listData.teamSizeFrontend && (
              <div className="literarys">
                <h3 className="literary-head">Team size:</h3>
                <h4>{listData.teamSizeFrontend}</h4>
              </div>
            )}

            {listData.mode && (
              <div className="literarys">
                <h3 className="literary-head">Mode:</h3>
                <h4>{listData.mode}</h4>
              </div>
            )}

            {/* {listData.date && (
                            <div className='literarys'>
                                <h3 className='literary-subtitle'>Date:</h3>
                                <h4>{listData.date}</h4>
                            </div>
                        )}

                        {listData.time && (
                            <div className='literarys'>
                                <h3 className='literary-subtitle'>Time:</h3>
                                <h4>{listData.time}</h4>
                            </div>
                        )}

                        {listData.venue && (
                            <div className='literarys'>
                                <h3 className='literary-subtitle'>Venue:</h3>
                                <h4>{listData.venue}</h4>
                            </div>
                        )} */}
          </div>
          <div className="literary-content2">
            {/* <div className="literary-judgment">
                        <h3 className="literary-subtitle">Judgement Criteria :</h3>
                        <p className="rules">{listData.judgingcriteria}</p>
                        </div> */}

            {listData.mode && (
              <div className="literary-judgement">
                <h3 className="literary-subtitle">Description :</h3>
                <h4>{listData.description}</h4>
              </div>
            )}

            <div className="literary-judgement">
              {listData.descriptionTips && (
                <h3 className="literary-subtitle">Tips :</h3>
              )}

              {listData.descriptionTips?.map((tipsItem: any) => (
                <p className="literary-rules">{tipsItem}</p>
              ))}
            </div>

            <div className="literary-judgement">
              {listData.judgingcriteria && (
                <h3 className="literary-subtitle">Judgement Criteria :</h3>
              )}

              {listData.judgingcriteria?.map((judgingcriteriaItem: any) => (
                <p className="literary-items">{judgingcriteriaItem}</p>
              ))}
            </div>
            {listData.speakers && (
              <h3 className="literary-subtitle">Speaker</h3>
            )}

            <table className="speakerTable">
              {listData.speakers?.map((speakerItem: any) => (
                <tr className="speakerRow">
                  <td className="speakerName">{speakerItem.speaker}</td>
                  <td className="speakerTime">{speakerItem.time}</td>
                </tr>
              ))}
            </table>

            {/* {listData.speakers?.map((speakerItem) => (
                        <div className="literary-items">
                            {speakerItem.speaker} : {speakerItem.time}
                        </div>
                        ))} */}

            {listData.rules && (
              <h3 className="literary-subtitle">General Rules :</h3>
            )}
            {listData.rules?.map((ruleItem: any) => (
              <p className="literary-rules">{ruleItem}</p>
            ))}

            {/* <div className="literary-note">
                        {" "}
                        <h3 className="literary-subtitle">Note : </h3> {listData.note}
                        </div> */}
            <div className="literary-contact">
              <h3>Contact:</h3>
              {listData.contact?.map((contactitem: any) => (
                <div className="literary-items">
                  {contactitem.name} : {contactitem.contact}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiteraryEventPage;
