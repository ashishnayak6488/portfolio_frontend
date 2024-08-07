import React, { useEffect } from 'react'
import { Tabs } from 'antd'
import TabPane from 'antd/es/tabs/TabPane'
import AdminIntro from './AdminIntro'
import AdminAbout from './AdminAbout'
import { useSelector } from 'react-redux'
import AdminProjects from './AdminProjects'
import AdminContact from './AdminContact'
import AdminEducation from './AdminEducation'
import AdminExperience from './AdminExperience.jsx'



const AdminHome = () => {
    const { portfolioData } = useSelector((state) => state.root)

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            window.location.href = 'admin-login'
        }
    })

    return (
        <div>
            <div className='flex justify-between'>
                <div>
                    <h1 className='text-primary text-3xl font-serif font-bold p-5'>Portfolio Admin</h1>
                </div>
                <div className='m-8'>
                    <button className='text-white text-xl bg-primary p-2' onClick={() => {
                        localStorage.removeItem('token');
                        window.location.href = '/admin-login';
                    }}>Logout</button>
                </div>
            </div>
            {
                portfolioData && (
                    <div className="m-5 text-2xl font-sans font-semibold">
                        <Tabs defaultActiveKey='1'>
                            <TabPane tab='Intro' key='1'>
                                <AdminIntro />
                            </TabPane>
                            <TabPane tab='About' key='2'>
                                <AdminAbout />
                            </TabPane>
                            <TabPane tab='Education' key='3'>
                                <AdminEducation />
                            </TabPane>
                            <TabPane tab='Experience' key='4'>
                                <AdminExperience />
                            </TabPane>
                            <TabPane tab='Projects' key='5'>
                                <AdminProjects />
                            </TabPane>
                            <TabPane tab='Contact' key='6'>
                                <AdminContact />
                            </TabPane>
                        </Tabs>
                    </div>
                )}
        </div>
    )
}

export default AdminHome