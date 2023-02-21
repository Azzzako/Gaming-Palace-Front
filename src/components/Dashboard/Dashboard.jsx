import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepPurple } from '@mui/material/colors';
import React, { useEffect, useState } from "react";
import "./Dashboard.css"
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, updateUser } from '../../Redux/Actions/actions';
import Swal from "sweetalert2"
import withReactContent from 'sweetalert2-react-content'

export const Dashboard = () => {


    const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(getUser())
    // }, [dispatch])



    const { user } = useAuth0()
    const usuario = useSelector(state => state.users)
    const filteredUser = usuario.length > 0 ? usuario.filter(usr => usr.email === user?.email) : []
    const pictureURL = user?.picture
    const [name, setName] = useState(filteredUser[0]?.name)
    const [email, setEmail] = useState(filteredUser[0]?.email)
    const [address, setAddress] = useState(filteredUser[0]?.address)
    const [id, setId] = useState(filteredUser[0]?.id)
    const [infoUser, setInfoUser] = useState({
        name: name,
        email: email,
        address: address
    })

    useEffect(() => {
        setName(filteredUser[0]?.name)
        setEmail(filteredUser[0]?.email)
        setAddress(filteredUser[0]?.address)
        setId(filteredUser[0]?.id)
    }, [filteredUser])

    useEffect(() =>  {
        setInfoUser({
            name:name,
            email: email,
            address:address
        })
    }, [setInfoUser])


    const handleOnChange = (e) => {
        e.preventDefault()
        setInfoUser({
            ...infoUser,
            id: id,
            [e.target.name]: e.target.value,
            verified: true,
            role: "customer"
        })
        setInputDis(false)
    }

    const MySwal = withReactContent(Swal)
    const [inputDis, setInputDis] = useState(true)

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        MySwal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
        }).then((result) => {
            if (result.isConfirmed) {
                MySwal.fire('Saved!', '', 'success')
                dispatch(updateUser(infoUser))
                dispatch(getUser())
                setInputDis(true)
            } else if (result.isDenied) {
                MySwal.fire('Changes are not saved', '', 'info')
            }
        })
    }



    console.log(filteredUser, infoUser)



    return (
        <div className='dash_g'>
            <form className="dashboard_container" onSubmit={handleOnSubmit}>
                <Stack className='dash' direction="column" spacing={2}>
                    <Avatar sx={{ bgcolor: deepPurple[500], width: 100, height: 100, alignContent: "center" }} src={pictureURL}>GP</Avatar>
                    <div>{name}</div>
                    <div className='info_user'></div>
                    <input type="text" value={infoUser.name?.length > -1 ? infoUser.name : name} name="name" onChange={handleOnChange} className="infoUser" />
                    <input type="text" value={infoUser.email?.length > -1 ? infoUser.email : email} disabled onChange={handleOnChange} className="infoUser" />
                    <input type="text" value={infoUser.address?.length > -1 ? infoUser.address : address} name="address" onChange={handleOnChange} className="infoUser" />
                </Stack>
                <div className='btn_cont'>
                    <input type="submit" value="Save Profile" className='save_data' disabled={inputDis} />
                </div>

            </form>
        </div>

    )
}
