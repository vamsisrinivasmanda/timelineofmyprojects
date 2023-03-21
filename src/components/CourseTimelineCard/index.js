import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {eachItem} = props
  return (
    <div className="course-container">
      <div className="course-header">
        <h1 className="heading">{eachItem.courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle />
          <p className="duration">{eachItem.duration}</p>
        </div>
      </div>
      <p className="desc">{eachItem.description}</p>
      <ul className="tags-container">
        {eachItem.tagsList.map(eachTag => (
          <li key={eachTag.name}>
            <p className="tag-container">{eachTag.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
