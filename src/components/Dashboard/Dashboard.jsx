import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepPurple } from '@mui/material/colors';
import React, { useState } from "react";
import { AiFillEdit } from "react-icons/ai"
import "./Dashboard.css"
import { Link } from 'react-router-dom';

export const Dashboard = () => {


    const [name, setName] = useState("Change name")
    const [switchOn, setSwitchOn] = useState(false)

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
            <Stack className='dashboard_stack_1' direction="row" spacing={2}>
                <Avatar sx={{ bgcolor: deepPurple[500] }}>GP</Avatar>
                <span> Carajo</span>
                <span> Carajo</span>
                <span> Carajo</span>
                <span> Carajo</span>
                <span> Carajo</span>
                <span> Carajo</span>
                <span> Carajo</span>
                <span> Carajo</span>
                <span> Carajo</span>


            </Stack>

            <Stack>


                <div className='edit_container'>
                    <label>Name</label>
                    {switchOn ? <input className='avatar_edit' value={name} onChange={handleForm} /> : <span className='avatar_name'>{name}<AiFillEdit className='icon' onClick={() => setSwitchOn(!switchOn)} /></span>}
                </div>

                <div className='edit_container'>
                    <label>Email</label>
                    {switchOn ? <input className='avatar_edit' value={name} onChange={handleForm} /> : <span className='avatar_name'>{`zanduva@gmail.com`}<AiFillEdit className='icon' onClick={() => setSwitchOn(!switchOn)} /></span>}
                </div>

                <div className='create_option'>
                    <Link to="/productform"><span className='create_span'>Create Product</span></Link>
                    <span>View Sales</span>
                </div>

                <div className='buttons_submit'>
                    <button onClick={handleSubmit} className="button_option btns">Save</button>
                    <input type="submit" disabled={switchOn ? true : false} className="input_submit btns" />
                </div>
            </Stack>


        </form>

    )
}
