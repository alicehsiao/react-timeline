import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const timelineComponents = props.events.map((post, index) => {
    return <TimelineEvent key={index}
    person={post.person}
    status={post.status}
    timestamp={post.timeStamp}/>
  });

  return (
    <div className="timeline">
      {timelineComponents}
     </div>
  );
}

export default Timeline;
