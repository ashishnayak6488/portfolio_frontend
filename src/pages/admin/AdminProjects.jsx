import { Form, Modal, message } from 'antd'
import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HideLoading, ReloadData, ShowLoading } from '../../redux/rootSlice'
import { server } from '../../server'

const AdminProjects = () => {


    const dispatch = useDispatch()
    const { portfolioData } = useSelector((state) => state.root)
    const { projects } = portfolioData;

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
                response = await axios.post(`${server}/api/portfolio/update-project`, { ...values, _id: selectedItemForEdit._id });
            }
            else {
                response = await axios.post(`${server}/api/portfolio/add-project`, values);
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
            const response = await axios.post(`${server}/api/portfolio/delete-project`, { _id: item._id });

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
                }}>Add Projects</button>
            </div>
            <div className="grid grid-cols-4 gap-5 sm:grid-cols-1">
                {
                    projects.map((project) => (
                        <div className="flex flex-col shadow border p-5 border-gray-400 gap-2">
                            <h1 className='text-primary text-2xl font-bold'>{project.title}</h1>
                            <img src={project.image} alt="" className='h-60 w-70' />
                            <h1 className=''>{project.description}</h1>
                            <div className="flex justify-end mt-5 gap-5">
                                <button className='bg-secondry text-white text-xl py-1 px-3'
                                    onClick={() => {
                                        onDelete(project)
                                    }}
                                >Delete</button>
                                <button className='bg-tertiary text-white text-xl py-1 px-3'
                                    onClick={() => {
                                        setSelectedItemForEdit(project)
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

                    <Modal visible={showAddEditModel} title={selectedItemForEdit ? 'Edit Project' : 'Add Project'} footer={null}
                        onCancel={() => {
                            setShowAddEditModel(false);
                            setSelectedItemForEdit(null)
                        }} >
                        <Form layout='vertical' onFinish={onFinish} initialValues={{
                            ...selectedItemForEdit,
                            technologies: selectedItemForEdit?.technologies?.join(" , ")
                        } || {}}>
                            <Form.Item name='title' label='Title'>
                                <input type="text" placeholder='Title' />
                            </Form.Item>
                            <Form.Item name='image' label='Image URL'>
                                <input type="text" placeholder='Image URL' />
                            </Form.Item>
                            <Form.Item name='technologies' label='Technologies'>
                                <input type="text" placeholder='Technologies' />
                            </Form.Item>
                            <Form.Item name='description' label='Description'>
                                <textarea type="text" placeholder='Description' />
                            </Form.Item>
                            <Form.Item name='link' label='Project Link'>
                                <input type="text" placeholder='Project Link' />
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

export default AdminProjects