import { Form, message } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HideLoading, ShowLoading } from "../../redux/rootSlice";
import axios from 'axios';
import { server } from '../../server';


const AdminIntro = () => {

    const dispatch = useDispatch()
    const { portfolioData } = useSelector((state) => state.root)

    const onFinish = async (values) => {
        try {
            dispatch(ShowLoading())
            const response = await axios.post(`${server}/api/portfolio/intro-update`, { ...values, _id: portfolioData.intro._id });
            dispatch(HideLoading())

            if (response.data.success) {
                message.success(response.data.message)
            }
            else {
                message.error(response.data.message)
            }
        } catch (error) {
            dispatch(HideLoading());
            message.error(error.message)
        }
    }


    return (
        <div>
            <Form layout='vertical' onFinish={onFinish} initialValues={portfolioData.intro}>
                <Form.Item name={'welcome'} label='Welcome'>
                    <input type="text" placeholder='Welcome' />
                </Form.Item>
                <Form.Item name={'firstName'} label='First Name'>
                    <input type="text" placeholder='First Name' />
                </Form.Item>
                <Form.Item name={'lastName'} label='Last name'>
                    <input type="text" placeholder='Last name' />
                </Form.Item>
                <Form.Item name={'caption'} label='Caption'>
                    <input type="text" placeholder='Caption' />
                </Form.Item>
                <Form.Item name={'description'} label='Description'>
                    <input type='textArea' placeholder='Description' />
                </Form.Item>
                <div className='flex justify-end w-full'>
                    <button className='py-2 px-10 bg-primary text-white' type='submit'>SAVE</button>
                </div>
            </Form>
        </div>
    )
}

export default AdminIntro