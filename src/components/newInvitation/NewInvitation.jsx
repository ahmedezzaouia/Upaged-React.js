import React from 'react'
import './newInvitation.css'
import Data from '../../data.json'

const shifts = () => {
  return (
    <>
        {Data.filter(data => data.invited == true).map(data => {
          return(
            <div className="newInvitationContainers" key={data.id}>
              <div className="newInvitationDesc">
                  <span className='newInvitationDate'>{data.date}</span>
                  <span className="newInvitationTime">{data.time}</span>
                  <span className="newInvitationUnit">{data.unit}l</span>
                  <span className="newInvitationPrice">{data.price}</span>
              </div>
              <div className="newInvitationHospitalInfo">
                  <span className="hospitalName">{data.hospital}</span>
                  <span className="hospitalRate">{data.rate}</span>
                  <span className="hospitalAddress">{data.address}</span>
              </div>
              <div className="newInvitationRequestButton">
                  <button className="requestDecline">DECLINE</button>
                  <button className="requestApply">APPLY</button>
              </div>
            </div>
            )
          })}
    </>
  )
}

export default shifts