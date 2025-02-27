import React from 'react'
import { MdOutlineWork } from 'react-icons/md';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const Experience = () => {
const experienceData = [
  {
    designation : "Software Developer Trainee",
    company : "SearchingYard Group , Jaipur",
    content : " Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    date  : "Dec 2024 - Present"
  },
  {
    designation : "Frontend Developer Intern",
    company : "To-Let Globe , Remote",
    content : " Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    date : "July 2024 - Sep 2024"
  },
]

  return (
    <section id='work' className='w-full mx-auto py-16'>
      <div className='sm:px-16 px-6  max-w-7xl mx-auto'>
          <div>
            <p className='text-gray-400 text-sm text-center'>WHAT I HAVE DONE SO FAR</p>
            <p className='font-bold text-3xl text-center'>Work Experience</p>
          </div>
          <div className='mt-5'>


<VerticalTimeline >
 {experienceData.map((value,index)=>(
   <VerticalTimelineElement
   key = {index}
   className="vertical-timeline-element--work"
   contentStyle={{ background: '#00042B', color: '#fff' }}
   contentArrowStyle={{ borderRight: '7px solid  white' }}
   date={value.date}
   iconStyle={{ background: '#00042B', color: '#fff' }}
   icon={<MdOutlineWork />}
 >
   <h3 className="vertical-timeline-element-title text-xl mb-2">{value.designation}</h3>
   <h4 className="vertical-timeline-element-subtitle text-sm">{value.company}</h4>
   <p>
     {value.content}
   </p>
 </VerticalTimelineElement>
 ))}
 
</VerticalTimeline>
          </div>
      </div>
    </section>
  )
}

export default Experience