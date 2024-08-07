import { Form, message } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HideLoading, ShowLoading } from "../../redux/rootSlice";
import axios from 'axios';
import { server } from '../../server';


const AdminContact = () => {

    const dispatch = useDispatch()
    const { portfolioData } = useSelector((state) => state.root)

    const onFinish = async (values) => {
        try {
            dispatch(ShowLoading())
            const response = await axios.post(`${server}/api/portfolio/contact-update`, { ...values, _id: portfolioData.contact._id });
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
            <Form layout='vertical' onFinish={onFinish} initialValues={portfolioData.contact}>

                <Form.Item name={'name'} label='Name'>
                    <input type="text" placeholder='Name' />
                </Form.Item>
                <Form.Item name={'email'} label='Email'>
                    <input type="text" placeholder='Email' />
                </Form.Item>
                <Form.Item name={'gender'} label='Gender'>
                    <input type="text" placeholder='Gender' />
                </Form.Item>
                <Form.Item name={'mobile'} label='Mobile'>
                    <input type='text' placeholder='Mobile' />
                </Form.Item>
                <Form.Item name={'address'} label='Address'>
                    <input type='text' placeholder='Address' />
                </Form.Item>
                <div className='flex justify-end w-full'>
                    <button className='py-2 px-10 bg-primary text-white' type='submit'>SAVE</button>
                </div>
            </Form>
        </div>
    )
}

export default AdminContact