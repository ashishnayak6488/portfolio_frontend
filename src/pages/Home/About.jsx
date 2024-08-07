import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import MyImage from '../../Image/images.jpeg'
import { useSelector } from 'react-redux'

// const specifications = ['Fast ', 'Responsive', 'Intuitive', 'Dynamic']

const About = () => {


    const { loading, portfolioData } = useSelector((state) => state.root)
    const { about } = portfolioData;

    const { imageUrl, description1, description2, description3, description4, description5, skills , specifications } = about;

    return (
        <div id='about'>
            <SectionTitle title='About' />
            <div className="flex sm:flex-col gap-10">
                <div className="w-1/2 sm:w-full ml-20 sm:ml-0 gap-8">
                    <img className='h-[50vh] sm:h-[40vh]' src={imageUrl} alt="Nothing" />
                    <div className='mt-8'>
                        <h1 className='text-white text-2xl mb-4 font-extrabold font-serif'>Specifications</h1>
                        <div className="flex flex-wrap gap-4">
                            {
                                specifications.map((specification, index) => (
                                    <div className='border-2 border-tertiary p-3 rounded flex'>
                                        <h1 className='text-tertiary '>{specification}</h1>
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                </div>
                <div className="w-1/2 sm:w-full">
                    <p className='text-white'>{description1}</p>
                    <p className='text-white pt-8'><span className='text-white text-xl font-serif font-bold'>1.</span> {description2}</p>
                    <p className='text-white'><span className='text-white text-xl font-serif font-bold'>2.</span> {description3}</p>
                    <p className='text-white'><span className='text-white text-xl font-serif font-bold'>3.</span> {description4}</p>
                    <p className='text-white'><span className='text-white text-xl font-serif font-bold'>4.</span> {description5}</p>
                    <a href="#contact"><p className='pt-5 flex justify-center text-tertiary taxt-xl underline'>Hire me</p></a>
                </div>
            </div>
            <div className="text-tertiary py-20">
                <h1 className='text-2xl py-10 font-extrabold font-serif text-white'>Here are few Technologies , on Which I have working recently</h1>
                <div className="flex flex-wrap gap-8">
                    {
                        skills.map((skill, index) => (
                            <div className='border-2 border-tertiary p-3 rounded flex'>
                                <h1 className='text-tertiary text-xl '>{skill}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default About