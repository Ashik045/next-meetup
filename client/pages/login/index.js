import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext, useState } from 'react'
import FormInput from '../../components/FormInput/FormInput'
import { Context } from '../../context/Context'
import style from '../../styles/loginPage.module.scss'

const login = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const [loginError, setLoginError] = useState(false)
    const router = useRouter()
    const {dispatch, isFetching} = useContext(Context)

    const formDetails = [
        {
            id: 2,
            label: 'Email',
            name: 'email',
            type: 'email',
            placeholder: 'Email..',
            errorMessage: 'Invalid email address!',
            required: true,
            // pattern: '',
        },
        {
            id: 3,
            label: 'Password',
            name: 'password',
            type: 'password',
            placeholder: 'password',
            errorMessage: 'This field is required!',
            required: true,
        },
    ]

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const user = await axios.post('http://localhost:4000/api/auth/login', {
                email: values.email,
                password: values.password
            })
            router.push('/')

            console.log(user.data);
            dispatch({type: 'LOGIN_SUCCESS', payload: user.data.message[0]})
        } catch (err) {
            setLoginError(true)
            dispatch({type: 'LOGIN_FAILURE'})
        }
    }

  return (
    <div className={style.login_form}>
        <form className={style.main_login_form} onSubmit={handleSubmit}>
            <h2>Log In</h2>
            {
                formDetails.map((details) => {
                   return <FormInput key={details.id} {...details} value={values[details.name]} onChange={handleChange} />
                })
            }

            {loginError && <span className={style.logSpan}>Authentication failed!</span>}
            <input className={style.submit_btn} type="submit" value='Log In' />

            <Link href={`/signup`}>
                <a className={style.signn}>Don't have an account? Please sign up hare..</a>
            </Link>
        </form>
    </div>
  )
}

export default login