import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepPurple } from '@mui/material/colors';
import React, { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai"
import "./Dashboard.css"
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postByMail } from '../../Redux/Actions/actions';

export const Dashboard = () => {


    const [mail, setMail] = useState(null)
    const [switchOn, setSwitchOn] = useState(false)
    const dispatch = useDispatch()
    const { user, isAuthenticated } = useAuth0()
    const pictureURL = user?.picture

    // const handleForm = (e) => {
    //     e.preventDefault()
    //     setName(e.target.value)
    // }

    // const [edit, setEdit] = useState({
    //     name: name
    // })

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     setEdit({
    //         name: name,
    //     })
    //     setSwitchOn(false)
    // }


    // useEffect(() => {  
    //     dispatch(postByMail(user?.email))
    // }, [dispatch])

    return (
        <form className="dashboard_container">
            <Stack className='dashboard' direction="column" spacing={2}>
                <Avatar sx={{ bgcolor: deepPurple[500] }} src={pictureURL}>GP</Avatar>

               
            </Stack>


        </form>

    )
}
