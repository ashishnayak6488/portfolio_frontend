import React from 'react'
import { useSelector } from 'react-redux'

const Intro = () => {

  const {loading , portfolioData} = useSelector((state) => state.root)
  const {intro} = portfolioData;

  const {welcome , firstName , lastName , caption , description} = intro;

  return (
    <div className='h-120 pt-20 justify-between'>
      <h1 className='text-white pt-2 text-3xl font-semibold'>{welcome || ''}</h1>
      <h1 className='text-secondry mt-4 text-6xl sm:text-3xl font-serif font-semibold'>{firstName || ''} { ' ' }{lastName || ''}</h1>
      <h1 className='text-tertiary mt-4 text-5xl sm:text-3xl font-semibold'>{caption || ''}</h1>
      <p className='text-white mt-8 text-1xl font-mono font-semibold'>{description || ''}</p>
      <a href="#about"><button className='border-2 border-tertiary p-3 mt-10 w-40 text-tertiary rounded text-2xl'>Get Start</button></a>
    </div>
  )
}
export default Intro
