import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import styles from './meetupForm.module.scss'

const MeetupForm = () => {
  const [title, setTitle] = useState('')
  const [imgUrl, setImgUrl] = useState('')
  const [address, setAddress] = useState('')
  const [description, setDescription] = useState('')
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

      try {
          await axios.post('http://localhost:4000/api/meetup', {
          title,
          imgUrl,
          address,
          description
        })
        router.push('/')
      } catch (error) {
        console.log(error);
      }
  }

  return (
    <div className={styles.form_page}>
      <div className={styles.main_form}>
      <h2>Create Your Own Meetup</h2>
        <form className={styles.form}>
          <label>Meetup Title</label>
          <input className={styles.inputs} type='text' placeholder='Title..' value={title} onChange={(e) => setTitle(e.target.value)} />

          <label>Meetup Image</label>
          <input className={styles.inputs} type='text' placeholder='Image URL' value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} />

          <label>Meetup Address</label>
          <input className={styles.inputs} type='text' placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)} />

          <label>Meetup Description</label>
          <input className={styles.inputs} type='text' placeholder='Address' value={description} onChange={(e) => setDescription(e.target.value)} />

          <input className={styles.submit_btn} onClick={handleSubmit} type="submit" value="Add Meetup" />
        </form>
      </div>
    </div>
  )
}

export default MeetupForm