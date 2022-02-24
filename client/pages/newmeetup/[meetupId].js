import Image from 'next/image'
import React from 'react'
import image from '../../image/pexels-photo-3278215.jpeg'
import styles from '../../styles/meetupDetails.module.scss'

const MeetupDetails = ({meetupItem}) => {
  return (
    <div className={styles.meetup_details}>
        <div className={styles.meetup_detail}>

            <Image className={styles.detailImg} src={image} alt="none" />

            <h1>{meetupItem.message.title}</h1>

            <address>{meetupItem.message.address}</address>
            <p>{meetupItem.message.description}</p>
        </div>
    </div>
  )
}

export default MeetupDetails

export async function getServerSideProps(context) {
  const {query} = context
  // Fetch data from external API
  const res = await fetch(`http://localhost:4000/api/meetup/${query.meetupId}`)
  const meetupItem = await res.json()

  // Pass meetupItem to the page via props
  return { props: { meetupItem } }
}