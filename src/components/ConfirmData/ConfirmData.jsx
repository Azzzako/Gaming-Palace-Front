import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, newUser } from "../../Redux/Actions/actions";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./ConfirmData.css"

export const ConfirmData = () => {

    const dispatch = useDispatch()
    const { user } = useAuth0()
    const usuario = useSelector(state => state.users)
    const userFiltered = usuario?.filter(usr => usr.email == user?.email)
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [modal, setModal] = useState(true)
    const [enabled, setEnabled] = useState(true)
    const [open, setOpen] = useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    

    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        adress: "",
    })

    useEffect(() => {
        setNombre(user?.name)
        setEmail(user?.email)
        setUserInfo({
            name: nombre,
            email: email,
            adress: "",
        })
        dispatch(getUser())
    }, [user?.name, user?.email, email, nombre])



    const handleOnChange = (e) => {
        e.preventDefault()
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value,
            verified: true,
            role: "customer"
        })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        dispatch(newUser(userInfo))
        setOpen(!open)
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

    console.log(userFiltered)
  

    return (
        <div>
            <Modal
                open={userFiltered[0]?.verified || user == undefined ? false : open}
                onClose={handleClose}
                disableEnforceFocus={true}
                onBackdropClick={true}
            >
                <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
      Confirm Account
    </Typography>
                    <form className="data_container" onSubmit={(handleOnSubmit)}>
                        <div className="name_container datas">
                            <label>Full name:</label>
                            <input type="text" value={userInfo.name} onChange={handleOnChange} placeholder={nombre} name="name" className="input_cont"/>
                        </div>

                        <div className="datas">
                            <label>Email: </label>
                            <input type="text" value={userInfo.email} onChange={handleOnChange} placeholder={email} name="email"  disabled className="input_cont"/>
                        </div>

                        <div className="datas">
                            <label>Adress:</label>
                            <input type="text" placeholder="Type Adress..." value={userInfo.adress} onChange={handleOnChange} name="adress" className="input_cont"/>
                        </div>

                        <input type="submit" className="botton_sub" value="Save Profile" disabled={false}/>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}

