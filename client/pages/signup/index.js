import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import FormInput from '../../components/FormInput/FormInput'
import styles from '../../styles/formPage.module.scss'

const signup = () => {
    const [loginError, setLoginError] = useState(false)
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        conPassword: ''
    })
    const router = useRouter()

    const formDetails = [
        {
            id: 1,
            label: 'Username',
            name: 'username',
            type: 'text',
            placeholder: 'Name..',
            errorMessage: 'Username should be 3-10 characters and shound not include any special character!',
            required: true,
            pattern: '^[a-zA-Z0-9]{3,10}$',
        },
        {
            id: 2,
            label: 'Email',
            name: 'email',
            type: 'email',
            placeholder: 'Email..',
            errorMessage: 'Email should be a valid email address!',
            required: true,
            // pattern: '',
        },
        {
            id: 3,
            label: 'Password',
            name: 'password',
            type: 'password',
            placeholder: 'password',
            errorMessage: 'Password should be 6-20 characters and include at last 1 uppercase, 1 lowercase, 1 number and 1 special character!',
            required: true,
            pattern: '(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{6,20}).*$',
        },
        {
            id: 4,
            label: 'Confirm Password',
            name: 'conPassword',
            type: 'password',
            placeholder: 'Re-enter password',
            errorMessage: 'Password does not matched!',
            required: true,
            pattern: values.password,
        },
    ]

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
                await axios.post('http://localhost:4000/api/auth/signup', {
                username: values.username,
                email: values.email,
                password: values.password
            })
            router.push('/login')
        } catch (err) {
            setLoginError(true)
        }
    }


  return (
    <div className={styles.form_page}>
        <form className={styles.main_form} onSubmit={handleSubmit}>
        <h2>Create New Account</h2>
            {
                formDetails.map((details) => {
                   return <FormInput key={details.id} {...details} value={values[details.name]} onChange={handleChange} />
                })
            }

            {loginError && <span className={styles.logSpan}>Authentication failed!</span>}
            <input className={styles.submit_btn} type="submit" value='Sign In' />
            <Link href={`/login`}>
                <a className={styles.loginn}>Already have an account? Please log in hare..</a>
            </Link>
        </form>
    </div>
  )
}

export default signup