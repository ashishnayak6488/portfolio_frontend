import React, { useState } from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';


const Projects = () => {

    const [projectIndex, setProjectIndex] = useState(0);
    const { portfolioData } = useSelector((state) => state.root)
    const { projects } = portfolioData;

    return (
        <div id='project'>
            <SectionTitle title='Project' />
            <div className='flex flex-col gap-20 ' >
                <div className='w-full sm:w-full flex flex-row overflow-x-scroll border-3 border-[#264399]'>
                    {
                        projects.map((project, index) => (
                            <div className='cursor-pointer py-5 width' onClick={() => setProjectIndex(index)}>
                                <h1 className={`px-5 min-w-56 text-2xl sm:text-[16px] sm:w-[27vw] content-center ${projectIndex === index ? 'text-tertiary border-tertiary border-l-4 ml-[-3px] bg-[#242285]' : 'text-white'}`}>{project.title}</h1>
                            </div>
                        ))
                    }
                </div>
                <div className='flex sm:flex-col items-center ml-20 sm:w-full gap-10 sm:ml-0 sm:justify-center'>
                    <div className='w-2/5 sm:w-full'>
                        <img src={projects[projectIndex].image} className='h-[40vh] w-[100vw]' alt="" />
                    </div>
                    <div className='flex-col sm:ml-0 w-3/5 sm:w-full'>
                        <h1 className='text-3xl font-sans font-bold text-secondry py-[10px]'>{projects[projectIndex].title}</h1>
                        <p className='text-white py-[7px]'>{projects[projectIndex].description}</p>
                        <div className='mt-8'>
                            <h1 className='text-white text-2xl mb-4 font-extrabold font-serif'>Technologies used</h1>
                            <div className="flex flex-wrap gap-4">
                                {
                                    projects[projectIndex].technologies.map((technologie, index) => (
                                        <div className='border-2 border-tertiary p-2 rounded flex'>
                                            <h1 className='text-tertiary '>{technologie}</h1>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='mt-4'>
                                <a href={projects[projectIndex].link} target='_blank'><h1 className='flex text-tertiary underline cursor-pointer font-sans font-bold text-xl'>Click Here</h1></a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects