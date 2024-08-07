import React, { useState } from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';

const Education = () => {

    const [educationIndex, setEducationIndex] = useState(0);
    const {portfolioData} = useSelector((state) => state.root)
    const {educations} = portfolioData;

    return (
        <div id='education'>
            <SectionTitle title='Education' />
            <div className='flex sm:flex-col gap-20 ' >
                <div className='w-1/4 sm:w-full flex flex-col sm:flex-row sm:overflow-x-scroll border-l-2 border-[#264399]'>
                    {
                        educations.map((education, index) => (
                            <div className='cursor-pointer py-5' onClick={() => setEducationIndex(index)}>
                                <h1 className={`px-5 text-2xl sm:text-[16px] sm:w-[27vw] ${educationIndex === index ? 'text-tertiary border-tertiary border-l-4 ml-[-3px] bg-[#8ab7c4]' : 'text-white'}`}>{education.period}</h1>
                            </div>
                        ))
                    }
                </div>
                <div className='flex-col ml-20 w-2/3 sm:ml-0 sm:w-full'>
                    <h1 className='text-3xl text-secondry font-serif font-extrabold py-[10px]'>{educations[educationIndex].title}</h1>
                    <h1 className='text-2xl text-tertiary font-mono font-bold py-[10px]'>{educations[educationIndex].school}</h1>
                    <h1 className='text-white py-[7px]'>{educations[educationIndex].description}</h1>
                </div>
            </div>
        </div>
    )
}

export default Education