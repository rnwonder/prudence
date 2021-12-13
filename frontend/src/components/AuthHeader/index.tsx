import React, { useEffect } from 'react'
import "./styles.scss"
import logo from "../../assets/graphics/PRUDENT.png"
import { useDispatch, useSelector } from 'react-redux'
import { logoutAction, userDetailsAction } from '../../redux/slice/userSlice'
import Axios from 'axios'
import { IState } from '../../interface/global'
import { useNavigate } from 'react-router-dom'

export interface IAuthHeader {
    
}

const AuthHeader: React.FunctionComponent<IAuthHeader> = ({}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const id = localStorage.getItem("accountId")
    const user = useSelector((state: IState) => state.user)

    const handleGetUserData =async ( id: string ) => {
        
        try {
            const { data } = await Axios.get(`https://limitless-temple-51492.herokuapp.com/api/user/get/${id}`)

            dispatch(userDetailsAction(data))
        } catch (e: any) {
            console.log(e.response.data.message)
        } 
    }

    const handleLogout = () => {
        dispatch(logoutAction({logout: true}))
    }

    useEffect(() => {
        if (!user.id) {
            if(id) {
                handleGetUserData(id)
            } else {
                navigate("/")
            }
        }
        
    }, [id, user.id])
    return (
        <section className="auth-header ">
            <div className="container d-flex">
                <div className="left d-flex">
                    <img src={logo} alt="" />

                    <ul className='d-flex'>
                        <li>
                            <a href="">
                                Dashboard
                            </a>
                        </li>

                        <li>
                            <a href="">
                                FAQS
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="right">
                    <button className='bg-primary text-light' onClick={handleLogout}>Log out</button>
                </div>
            </div>
            
      </section>
    )
}

export default AuthHeader