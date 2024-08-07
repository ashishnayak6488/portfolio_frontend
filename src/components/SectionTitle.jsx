import React from 'react'

const SectionTitle = ({title}) => {
  return (
    <div className='flex items-center'>
        <h1 className='text-white mt-20 text-4xl font-serif font-bold'>{title}</h1>
        <div className='w-60 h-1 m-20 mt-40 bg-tertiary items-baseline'></div>
    </div>
  )
}

export default SectionTitle