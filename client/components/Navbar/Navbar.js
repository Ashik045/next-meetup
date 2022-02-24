import Link from 'next/link'
import React, { useContext } from 'react'
import { Context } from '../../context/Context'
import styles from './nabvar.module.scss'

const Navbar = () => {
    const {user, dispatch} = useContext(Context)

    const handLogOut = () => {
        dispatch({type: 'LOGOUT'})
    }
  return (
      <>
    <nav className={styles.navbar}>
        <div className={styles.brand}>
            <Link href='/'>
                MEETUP
            </Link>
        </div>

        <div className={styles.nav_menu}>
            <Link href='/'>
                <a href='All Meetups'>All Meetups</a>
            </Link>
            
            <Link href='/newmeetup'>
                <a href='New Meetup'>New Meetup</a>
            </Link>
        </div>

        <div className={styles.register}>
        {user ? (
            <div className={styles.login}>
                <h4>{user.username}</h4>
                <button className={styles.regbtn} onClick={handLogOut}>Log Out</button>
            </div>
        ) : (
            <Link href={'/login'}>
                <button className={`${styles.signup} ${styles.regbtn}`}>Log In</button>
            </Link>
        )}
        </div>
    </nav>
    </>
  )
}

export default Navbar