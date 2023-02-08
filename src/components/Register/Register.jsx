import { useState } from "react"
import { useAuth } from "../../context/authContext"
import { useNavigate } from "react-router-dom"
import { async } from "@firebase/util"
import "./Register.css"

export function Register(){

    const [user, setUser]=useState({
        email: '',
        password: '',
    })

    const {signup} = useAuth()
    const navigate = useNavigate()

    const [error, setError] = useState()

    const handleChange = ({target: {name, value}}) => {
        setUser({...user,[name]: value})
    }

    const handleSubmit = async e => {
        setError('')
        e.preventDefault()
        try{
            await signup(user.email, user.password)
            navigate('/home')     
        }catch (error){
            setError(error.message)
        }
    }


    return (
        <div className="register">
            <form onSubmit={handleSubmit} className="form">

            {error && <p>{error}</p>}

           <div className="cont">
           <label htmlFor="email" className="label">Email</label>
            <input type="email" name="email" placeholder="youremail@yourcompany" onChange={handleChange} className="input"/>
           </div>

            <div className="cont">
            <label htmlFor="password" className="label">Password</label>
            <input type="password" name="password" id="password" onChange={handleChange} placeholder="Password" className="input"/>
            </div>

            <button className="btnl">Register</button>

            </form>
        </div>
    )
}