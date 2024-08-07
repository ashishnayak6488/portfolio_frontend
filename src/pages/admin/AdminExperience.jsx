import { Form, Modal, message } from 'antd'
import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HideLoading, ReloadData, ShowLoading } from '../../redux/rootSlice'
import { server } from '../../server'

const AdminExperience = () => {


    const dispatch = useDispatch()
    const { portfolioData } = useSelector((state) => state.root)
    const { experiences } = portfolioData;

    const [showAddEditModel, setShowAddEditModel] = useState(false)
    const [selectedItemForEdit, setSelectedItemForEdit] = useState(null)
    const [type, setType] = useState("add")

    const onFinish = async (values) => {

        try {

            const tempTechnologies = values?.technologies?.split(" , ") || [];
            values.technologies = tempTechnologies;

            dispatch(ShowLoading())
            let response;
            if (selectedItemForEdit) {
                response = await axios.post(`${server}/api/portfolio/update-experience`, { ...values, _id: selectedItemForEdit._id });
            }
            else {
                response = await axios.post(`${server}/api/portfolio/add-experience`, values);
            }
            dispatch(HideLoading())

            if (response.data.success) {
                message.success(response.data.message)
                setShowAddEditModel(false)
                setSelectedItemForEdit(null);
                dispatch(HideLoading());
                dispatch(ReloadData(true))
            }
            else {
                message.error(response.data.message)
            }
        } catch (error) {
            dispatch(HideLoading());
            message.error(error.message)
        }
    }

    const onDelete = async (item) => {
        try {
            dispatch(ShowLoading())
            const response = await axios.post(`${server}/api/portfolio/delete-experience`, { _id: item._id });

            dispatch(HideLoading())

            if (response.data.success) {
                message.success(response.data.message)
                dispatch(HideLoading());
                dispatch(ReloadData(true))
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
            <div className="flex justify-end mb-5">
                <button className='py-2 px-10 bg-primary text-white' onClick={() => {
                    setSelectedItemForEdit(null)
                    setShowAddEditModel(true)
                }}>Add Experience</button>
            </div>
            <div className="grid grid-cols-4 gap-5 sm:grid-cols-1 ">
                {
                    experiences.map((experience) => (
                        <div className="flex flex-col shadow border p-5 border-gray-400 gap-2">
                            <h1 className='text-primary text-2xl font-bold'>{experience.period}</h1>
                            <h1><span className='text-xl'>Company</span> : {experience.company}</h1>
                            <h1><span className='text-xl'>Role</span> : {experience.role}</h1>
                            <h1 className=''>{experience.description}</h1>
                            <div className="flex justify-end mt-5 gap-5">
                                <button className='bg-secondry text-white text-xl py-1 px-3'
                                    onClick={() => {
                                        onDelete(experience)
                                    }}
                                >Delete</button>
                                <button className='bg-tertiary text-white text-xl py-1 px-3'
                                    onClick={() => {
                                        setSelectedItemForEdit(experience)
                                        setShowAddEditModel(true)
                                        setType("edit")
                                    }} >Edit</button>
                            </div>
                        </div>
                    ))
                }
            </div>

            {
                (type === 'add' || selectedItemForEdit) && (

                    <Modal visible={showAddEditModel} title={selectedItemForEdit ? 'Edit Experience' : 'Add Experience'} footer={null}
                        onCancel={() => {
                            setShowAddEditModel(false);
                            setSelectedItemForEdit(null)
                        }} >
                        <Form layout='vertical' onFinish={onFinish} initialValues={{
                            ...selectedItemForEdit,
                            technologies: selectedItemForEdit?.technologies?.join(" , ")
                        } || {}}>
                            <Form.Item name='period' label='Period'>
                                <input type="text" placeholder='Period' />
                            </Form.Item>
                            <Form.Item name='company' label='Company'>
                                <input type="text" placeholder='Company' />
                            </Form.Item>
                            <Form.Item name='role' label='Job Role'>
                                <input type="text" placeholder='Job Role' />
                            </Form.Item>
                            <Form.Item name='technologies' label='Technologies'>
                                <input type="text" placeholder='Technologies' />
                            </Form.Item>
                            <Form.Item name='description' label='Description'>
                                <input type="text" placeholder='Description' />
                            </Form.Item>
                            <div className="flex justify-between">
                                <button className='py-2 px-10 bg-secondry text-white'
                                    onClick={() => {
                                        setShowAddEditModel(false)
                                        setSelectedItemForEdit(null)
                                    }}
                                >Cancel</button>
                                <button className='py-2 px-10 bg-primary text-white'>{selectedItemForEdit ? 'Update' : 'Add'}</button>
                            </div>
                        </Form>

                    </Modal>
                )
            }

        </div >
    )
}

export default AdminExperience
