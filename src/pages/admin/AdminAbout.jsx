import { Form, message } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HideLoading, ShowLoading } from "../../redux/rootSlice";
import axios from 'axios';
import { server } from '../../server';

const AdminAbout = () => {

  const dispatch = useDispatch()
  const { portfolioData } = useSelector((state) => state.root)

  const onFinish = async (values) => {

    try {

      const tempSkills = values.skills.split(",");
      values.skills = tempSkills
      const tempSpecifications = values.specifications.split(",");
      values.specifications = tempSpecifications
      dispatch(ShowLoading())
      const response = await axios.post(`${server}/api/portfolio/about-update`, { ...values, _id: portfolioData.about._id });
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
      <Form layout='vertical' onFinish={onFinish} initialValues={{ ...portfolioData.about, skills: portfolioData.about.skills.join(" , "), specifications: portfolioData.about.specifications.join(" , ") }}>
        <Form.Item name={'imageUrl'} label='Image URL'>
          <input type="text" placeholder='Image URL' />
        </Form.Item>
        <Form.Item name={'specifications'} label='Specifications'>
          <input type="text" placeholder='Specifications' />
        </Form.Item>
        <Form.Item name={'description1'} label='Description 1'>
          <input type='textArea' placeholder='Description 1' />
        </Form.Item>
        <Form.Item name={'description2'} label='Description 2'>
          <input type='textArea' placeholder='Description 2' />
        </Form.Item>
        <Form.Item name={'description3'} label='Description 3'>
          <input type='textArea' placeholder='Description 3' />
        </Form.Item>
        <Form.Item name={'description4'} label='Description 4'>
          <input type='textArea' placeholder='Description 4' />
        </Form.Item>
        <Form.Item name={'description5'} label='Description 5'>
          <input type='textArea' placeholder='Description 5' />
        </Form.Item>
        <Form.Item name={'skills'} label='Skills'>
          <input type='textArea' placeholder='Skills' />
        </Form.Item>
        <div className='flex justify-end w-full'>
          <button className='py-2 px-10 bg-primary text-white' type='submit'>SAVE</button>
        </div>
      </Form>
    </div>
  )
}

export default AdminAbout