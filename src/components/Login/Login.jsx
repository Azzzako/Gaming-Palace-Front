import { useState } from "react"
import { useAuth } from "../../context/authContext"
import { useNavigate } from "react-router-dom"
import { async } from "@firebase/util"
import "./Login.css"

<<<<<<< HEAD
export function Login() {

    const [user, setUser] = useState({
=======
export function Login(){

    const [user, setUser]=useState({
>>>>>>> 032af9d77d2b18def0b5f122e75fc57b22e2c061
        email: '',
        password: '',
    })

<<<<<<< HEAD
    const { login, loginWithGoogle } = useAuth()
=======
    const {login, loginWithGoogle} = useAuth()
>>>>>>> 032af9d77d2b18def0b5f122e75fc57b22e2c061
    const navigate = useNavigate()

    const [error, setError] = useState()

<<<<<<< HEAD
    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value })
=======
    const handleChange = ({target: {name, value}}) => {
        setUser({...user,[name]: value})
>>>>>>> 032af9d77d2b18def0b5f122e75fc57b22e2c061
    }

    const handleSubmit = async e => {
        setError('')
        e.preventDefault()
<<<<<<< HEAD
        try {
            await login(user.email, user.password)
            navigate('/home')
        } catch (error) {
=======
        try{
            await login(user.email, user.password)
            navigate('/home')     
        }catch (error){
>>>>>>> 032af9d77d2b18def0b5f122e75fc57b22e2c061
            setError(error.message)
        }
    }

    const handleGoogleSigin = async () => {
<<<<<<< HEAD
        try {
            await loginWithGoogle()
            navigate('/home')
        } catch (error) {
=======
        try{
            await loginWithGoogle()
        navigate('/home')
        } catch (error){
>>>>>>> 032af9d77d2b18def0b5f122e75fc57b22e2c061
            setError(error.message)
        }
    }

    return (
<<<<<<< HEAD
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
=======
       <div className="login">

        
            
         <form onSubmit={handleSubmit} className="form">

        {error && <p>{error}</p>}

       <div className="cont">
       <label htmlFor="email" className="label">Email</label>
        <input className="input" type="email" name="email" placeholder="youremail@yourcompany" onChange={handleChange}/>
       </div>

        <div className="cont">
        <label htmlFor="password" className="label">Password</label>
        <input className="input" type="password" name="password" id="password" placeholder="Password" onChange={handleChange}/>
        </div>

        <button className="btnl">Login</button>

        </form> 
        

        <button onClick={handleGoogleSigin} className='btng'>Login witg Google</button>

       </div>

        

    )
}
>>>>>>> 032af9d77d2b18def0b5f122e75fc57b22e2c061
