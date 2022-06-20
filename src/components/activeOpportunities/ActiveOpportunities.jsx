import React from 'react'
import './activeOpportunities.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faCloudSun } from '@fortawesome/free-solid-svg-icons'
// import Data from '../../data.json'


const activeOpportunities = ({jobs}) => {

  
  const startDate = new Date("2021-08-14");
  const endDate = new Date("2021-08-16");

  
  return (
  <>
    {jobs.map(data => {
    {/* {Data.filter(data => data.date >= startDate && data.date < endDate ).map(data => { */}
      return(
          <div className="activeOpportunitiesContainers" key={data.id}>              
              <div className="activeOpportunitiesDesc" >
                  <span className='activeOpportunitiesDate'>{data.date} 
                  <FontAwesomeIcon icon={faSun} className="Icon"/>
                  </span>
                  <span className="activeOpportunitiesTime">{data.time}</span>
                  <span className="activeOpportunitiesUnit">{data.unit}</span>
                  <span className="activeOpportunitiesPrice">{data.price}</span>
              </div>
              <div className="activeOpportunitiesHospitalInfo">
                  <span className="activeOpportunitieshospitalName">{data.hospital}</span>
                  <span className="activeOpportunitieshospitalRate">{data.rate}</span>
                  <span className="activeOpportunitieshospitalAddress">{data.address}</span>
              </div>
              <div className="activeOpportunitiesRequestButton">
                  <button className="requestApply">APPLY</button>
            </div> 
        </div>
      )
    })}
  </>
  )
}

export default activeOpportunities