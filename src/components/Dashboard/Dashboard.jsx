import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import React from "react";
import { AiFillEdit } from "react-icons/ai"
import "./Dashboard.css"
import { Link } from 'react-router-dom';

export const Dashboard = () => {

 

    return (
        <form className="dashboard_container">
            <Stack className='dashboard_stack_1' direction="row" spacing={2}>
            
               

            </Stack>

            <Stack>

                
                <div className='edit_container'>
                <Avatar alt="hola" />

                    <label>Name</label>
                    <span className='avatar_name'>{}<AiFillEdit className='icon' /></span>
                </div>

                <div className='edit_container'>
                    <label>Email</label>
                    <span className='avatar_name'>{}<AiFillEdit className='icon'  /></span>
                </div>

                <div className='create_option'>
                    <Link to="/productform"><span className='create_span'>Create Product</span></Link>
                    <span>View Sales</span>
                </div>

                <div className='buttons_submit'>
                    <button className="button_option btns">Save</button>
                    <input type="submit" className="input_submit btns" />
                </div>
            </Stack>


        </form>

    )
}
