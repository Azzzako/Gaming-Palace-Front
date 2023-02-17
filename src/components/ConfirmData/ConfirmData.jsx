import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, newUser, postByMail } from "../../Redux/Actions/actions";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./ConfirmData.css"

export const ConfirmData = () => {

    const dispatch = useDispatch()
    const { user } = useAuth0()
    // const usuario = useSelector(state => state.users)
    const usuario = useSelector(state => state?.user)
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [open, setOpen] = useState(true);
    const handleClose = () => setOpen(false);

    // const usuarioFinal = usuario?.filter(usr => usr?.email == user?.email)
    

    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        address: "",
    })



    useEffect(() => {
        setNombre(user?.name)
        setEmail(user?.email)
        setUserInfo({
            name: nombre,
            email: email,
            address: "",
        })
        // dispatch(getUser())
        dispatch(postByMail(email))
    }, [user?.name, user?.email, email, nombre, dispatch])



    const handleOnChange = (e) => {
        e.preventDefault()
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value,
            verified: true,
            role: "customer"
        })
    }

    const  handleOnSubmit =  (e) => {
        e.preventDefault()
        dispatch(newUser(userInfo))
        setOpen(!open)
        // dispatch(postByMail(email))
        // dispatch(getUser())
        // dispatch(getUser())
    }



    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        borderRadius: "8px"
    };
    
    console.log(usuario)

    return (
        <div>
            <Modal
                open={usuario[0]?.verified || user == undefined ? false : open}
                onClose={handleClose}
                disableEnforceFocus={true}
                onBackdropClick={true}
                keepMounted={false}
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Confirm Account
                    </Typography>
                    <form className="data_container" onSubmit={(handleOnSubmit)}>
                        <div className="name_container datas">
                            <label>Full name:</label>
                            <input type="text" value={userInfo.name} onChange={handleOnChange} placeholder={nombre} name="name" className="input_cont" />
                        </div>

                        <div className="datas">
                            <label>Email: </label>
                            <input type="text" value={userInfo.email} onChange={handleOnChange} placeholder={email} name="email" disabled className="input_cont" />
                        </div>

                        <div className="datas">
                            <label>Adress:</label>
                            <input type="text" placeholder="Type Adress..." value={userInfo.address} onChange={handleOnChange} name="address" className="input_cont" />
                        </div>

                        <input type="submit" className="botton_sub" value="Save Profile" disabled={false} />
                    </form>
                    {/* 
                <ChildModal
                handleOnSubmit={handleOnSubmit}
                /> */}

                </Box>
            </Modal>
        </div>
    );
}

