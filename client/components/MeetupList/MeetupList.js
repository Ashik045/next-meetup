import React from 'react';
import MeetupItem from '../MeetupItem/MeetupItem';
import styles from '../MeetupList/meetuplist.module.scss';

function MeetupList({meetups}) {
  return (
    <div className={`${styles.meetup}`}>
      <div className={styles.meetuplist}>
          {meetups.message.map((meetup) => {
            return  <MeetupItem key={meetup._id} meetupDetails={meetup} />
          })}
      </div>
    </div>
  )
}

export default MeetupList