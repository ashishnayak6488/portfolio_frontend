import { Form, message } from 'antd'
import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { HideLoading, ShowLoading } from '../../redux/rootSlice'
import { server } from '../../server'

const Login = () => {

    const dispatch = useDispatch()

    const [user, setUser] = useState({
        username: "",
        password: "",
    })

    const login = async () => {
        try {
            dispatch(ShowLoading())
            const response = await axios.post(`${server}/api/portfolio/admin-login`, user)
            console.log(user)
            dispatch(HideLoading())
            if (response.data.success) {
                message.success(response.data.message);
                localStorage.setItem('token', JSON.stringify(response.data));
                window.location.href = '/admin'
            }
            else {
                message.error(response.data.message)
            }
        } catch (error) {
            message.error(error.message)
            dispatch(HideLoading)
        }
    }

    return (
        <div className=' flex items-center justify-center h-screen content-center bg-primary'>
            <div className='flex flex-col w-[40vw] justify-center items-center gap-5 border border-gray-300 p-5 bg-white'>
                <h1 className="text-tertiary text-3xl">Admin --- Login </h1>
                <Form layout='vertical'>
                    <Form.Item name={'username'} label='UserName'>
                        <input type="text" placeholder='Enter Username' value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} className='w-[27vw]' />
                    </Form.Item>
                    <Form.Item name={'password'} label='Passsword'>
                        <input type="text" placeholder='Enter Password' value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} className='w-[27vw]' />
                    </Form.Item>
                    <div className='flex justify-center'>

                        <button className='text-white text-xl bg-primary p-2 rounded' onClick={login}>Login</button>
                    </div>

                </Form>
            </div>
        </div>
    )
}

export default Login