import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import contactImg from '../../Image/contact.jpg'
import { useSelector } from 'react-redux'

const Contact = () => {

    const { portfolioData } = useSelector((state) => state.root)
    const { contact } = portfolioData;

    return (
        <div id='contact'>
            <SectionTitle title='Contact Me' />
            <div className="flex justify-between items-center sm:flex-col">
                <div className='flex flex-col py-10'>
                    <p className='text-secondry text-2xl font-bold'>{'['}</p>
                    <div className='ml-5'>

                        {
                            Object.keys(contact).map((key) => key !== '_id' && (
                                <p className='text-tertiary text-xl gap-10'>
                                    <span>{key}</span>
                                    <span>{' : '}</span>
                                    <span>{contact[key]}</span>
                                </p>
                            ))
                        }
                    </div>
                    <p className='text-secondry text-2xl font-bold'>{']'}</p>

                </div>
                <div>
                    <a href="https://www.google.com/maps/place/BH-2+RAJKIYA+ENGINEERING+COLLEGE+,+SONBHADRA/@24.4569081,82.9931238,40m/data=!3m1!1e3!4m6!3m5!1s0x398ee7a5e1d5c6db:0xe390a7559129094c!8m2!3d24.4569939!4d82.9931079!16s%2Fg%2F11t4dy__23!5m1!1e4?authuser=0&entry=ttu" target='_blank'><img src={contactImg} alt="contact me" className='h-[50vh] w-[35vw] sm:w-[85vw]' /></a>
                </div>
            </div>
        </div>
    )
}

export default Contact