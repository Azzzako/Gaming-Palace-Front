import { useState } from "react"
import { useAuth } from "../../context/authContext"
import { useNavigate } from "react-router-dom"
import { async } from "@firebase/util"
import "./Login.css"

export function Login() {

    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const { login, loginWithGoogle } = useAuth()
    const navigate = useNavigate()

    const [error, setError] = useState()

    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async e => {
        setError('')
        e.preventDefault()
        try {
            await login(user.email, user.password)
            navigate('/home')
        } catch (error) {
            setError(error.message)
        }
    }

    const handleGoogleSigin = async () => {
        try {
            await loginWithGoogle()
            navigate('/home')
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className="login">



            <form onSubmit={handleSubmit} className="form">

                {error && <p>{error}</p>}

                <div className="cont">
                    <label htmlFor="email" className="label">Email</label>
                    <input className="input" type="email" name="email" placeholder="youremail@yourcompany" onChange={handleChange} />
                </div>

                <div className="cont">
                    <label htmlFor="password" className="label">Password</label>
                    <input className="input" type="password" name="password" id="current-password" placeholder="Password" onChange={handleChange} />
                </div>

                <button className="btnl">Login</button>

            </form>


            <button onClick={handleGoogleSigin} className='btng'>Login witg Google</button>

        </div>



    )
}
