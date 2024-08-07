import React, { useState } from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';

const Experience = () => {

    const [experienceIndex, setExperienceIndex] = useState(0);
    const { portfolioData } = useSelector((state) => state.root)
    const { experiences } = portfolioData;

    return (
        <div id='experience'>
            <SectionTitle title='Experience' />
            <div className='flex sm:flex-col gap-20 ' >
                <div className='w-1/4 sm:w-full flex flex-col sm:flex-row sm:overflow-x-scroll border-l-2 border-[#264399]'>
                    {
                        experiences.map((experience, index) => (
                            <div className='cursor-pointer py-5' onClick={() => setExperienceIndex(index)}>
                                <h1 className={`px-5 text-2xl sm:text-[16px] sm:w-[27vw] ${experienceIndex === index ? 'text-tertiary border-tertiary border-l-4 ml-[-3px] bg-[#8ab7c4]' : 'text-white'}`}>{experience.period}</h1>
                            </div>
                        ))
                    }
                </div>
                <div className='flex-col ml-20 w-2/3 sm:ml-0 sm:w-full'>
                    <h1 className='text-3xl text-secondry font-serif font-extrabold py-[10px]'>{experiences[experienceIndex].role}</h1>
                    <h1 className='text-2xl text-tertiary font-mono font-bold py-[10px]'>{experiences[experienceIndex].company}</h1>
                    <h1 className='text-white py-[7px]'>{experiences[experienceIndex].description}</h1>

                    <div className='mt-8'>
                        <h1 className='text-white text-2xl mb-4 font-extrabold font-serif'>Technologies used</h1>
                        <div className="flex flex-wrap gap-4">
                            {
                                experiences[experienceIndex].technologies.map((technologie, index) => (
                                    <div className='border-2 border-tertiary p-2 rounded flex'>
                                        <h1 className='text-tertiary '>{technologie}</h1>
                                    </div>
                                ))
                            }
                        </div>
                        {/* <div className='mt-4'>
                                <a href={projects[projectIndex].link} target='_blank'><h1 className='flex text-tertiary underline cursor-pointer font-sans font-bold text-xl'>Click Here</h1></a>
                            </div> */}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience