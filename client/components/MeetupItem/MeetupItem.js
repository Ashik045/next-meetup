import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import deImg from '../../image/pexels-photo-3278215.jpeg';
import styles from '../MeetupItem/meetupitem.module.scss';

const MeetupItem = ({meetupDetails}) => {
  // const router = useRouter()
  // const handleClick = () => {
  //   router.push(`/${meetupDetails.id}`)
  // }

  return (
    <div className={styles.meetupitem}>
        <Image src={deImg} alt="as" />
        
        <div className={styles.meetup_body}>
          <h2>{meetupDetails.title}</h2>
          <h5>{meetupDetails.address}</h5>

          <Link href={`/newmeetup/${meetupDetails._id}`} passHref>
              <button className={styles.meetup_btn}>Show Details</button>
          </Link>
        </div>
    </div>
  )
}

export default MeetupItem