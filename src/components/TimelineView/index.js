import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard/index'
import CourseTimelineCard from '../CourseTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  console.log(timelineItemsList)
  return (
    <div className="timeline-view">
      <h1 className="timeline-heading">My Journey of CCBP 4.0</h1>
      <Chrono
        mode="VERTICAL_ALTERNATING"
        items={timelineItemsList}
        theme={{secondary: 'white'}}
      >
        {timelineItemsList.map(eachItem => {
          if (eachItem.categoryId === 'COURSE') {
            return <CourseTimelineCard eachItem={eachItem} />
          }
          return <ProjectTimelineCard eachItem={eachItem} />
        })}
      </Chrono>
    </div>
  )
}

export default TimelineView
