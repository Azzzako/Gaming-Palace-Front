import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepPurple } from '@mui/material/colors';
import React, { useState } from "react";
import { AiFillEdit } from "react-icons/ai"
import "./Dashboard.css"
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

export const Dashboard = () => {


    const [name, setName] = useState("Change name")
    const [switchOn, setSwitchOn] = useState(false)

    const { user } = useAuth0()
    const pictureURL = user?.picture
    console.log(user)

    const handleForm = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }

    const [edit, setEdit] = useState({
        name: name
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        setEdit({
            name: name,
        })
        setSwitchOn(false)
    }

    return (
        <form className="dashboard_container">
            <Stack className='dashboard' direction="column" spacing={2}>
                <Avatar sx={{ bgcolor: deepPurple[500] }} src={pictureURL}>GP</Avatar>

                <div className='edit_container'>
                    <label>Name</label>
                    {switchOn ? <input className='avatar_edit' value={name} onChange={handleForm} /> : <span className='avatar_name'>{name}<AiFillEdit className='icon' onClick={() => setSwitchOn(!switchOn)} /></span>}
                </div>

                <div className='edit_container'>
                    <label>Email</label>
                    {switchOn ? <input className='avatar_edit' value={name} onChange={handleForm} /> : <span className='avatar_name'>{`zanduva@gmail.com`}<AiFillEdit className='icon' onClick={() => setSwitchOn(!switchOn)} /></span>}
                </div>

                <div className='create_option'>
                    <Link to="/productform"> <span className='create_span'>Create Product</span></Link>
                    <span>View Sales</span>
                </div>

                <button onClick={handleSubmit}>Save</button>
                <input type="submit" disabled={switchOn ? true : false} />
            </Stack>


        </form>

    )
}
