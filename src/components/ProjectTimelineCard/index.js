import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {eachItem} = props
  return (
    <div className="project-container">
      <img src={eachItem.imageUrl} className="project-image" alt="project" />
      <div>
        <div className="course-header">
          <h1 className="heading">{eachItem.projectTitle}</h1>
          <div className="duration-container">
            <AiFillCalendar />
            <p className="duration">{eachItem.duration}</p>
          </div>
        </div>
        <p className="desc">{eachItem.description}</p>
        <a href={eachItem.projectUrl} className="project-link">
          Visit
        </a>
      </div>
    </div>
  )
}

export default ProjectTimelineCard
