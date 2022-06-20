import React, { useState, useEffect} from 'react';
import './findWork.css'
import NewInvitation from '../../components/newInvitation/NewInvitation'
import Navbar from '../../components/navbar/Navbar'
import ActiveOpportunitiesContainer from '../../components/activeOpportunities/ActiveOpportunities'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import jobs from '../../data.json'




const FindWork = () => {

  const [currentDate, setCurrentDate] = useState(new Date());
  const [filterdJobs, setfilterdJobs] = useState([]);

  const filterByDate  = () =>{
    const filtered = jobs.filter(job=>{
      const jobDate = new Date(job.date);
      const endWeek = new Date();
      endWeek.setDate(currentDate.getDate() + 7)
      return ((jobDate.getDate() >= currentDate.getDate()) && (jobDate.getDate() <= endWeek.getDate()));
    })
    console.log(filtered);
    setfilterdJobs(filtered)
  }


  useEffect(() => {
    filterByDate();
  },[]);

  const slideLeft = ()=>{
    const date = currentDate;
    date.setDate(date.getDate() + 7)
    setCurrentDate(new Date(date));
    console.log(currentDate);
    filterByDate();
  }
  const slideRight = ()=>{
    const date = currentDate;
    date.setDate(date.getDate() - 7)
    setCurrentDate(new Date(date));
    console.log(currentDate);
    filterByDate();
    

  }
 
  const getEndWeek = ()=>{
    const date = new Date(currentDate)
    date.setDate(date.getDate() + 7)
    return (date.getDate())
  }
  return (
    <div className="findWork">
      <Navbar/>
      <div className="shiftWrapper">
          <h1 className="shiftTitle">Shifts</h1> 
          <h3 className="newInvitationAlert">You've been invited</h3>
          <NewInvitation/>
      </div>
      <div className="activeOppurtunities">
            <div className="datePicker">
                <FontAwesomeIcon onClick={slideLeft} icon={faChevronLeft} className="arrowLeft" />
                <span className='weeklySchedule'>{currentDate.getDate() + "-" + (getEndWeek())  + " " + currentDate.getFullYear()}</span>            
                <FontAwesomeIcon onClick={slideRight} icon={faChevronRight} className="arrowRight"/>
            </div>

            <ActiveOpportunitiesContainer jobs={filterdJobs} />  

            
      </div>
      
    </div>
  )
}

export default FindWork