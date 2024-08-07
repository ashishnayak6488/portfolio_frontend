import React from 'react'

const LeftSider = () => {
  return (
    <div className='fixed left-0 bottom-0 pl-8 sm:static'>
        <div className='flex flex-col justify-center items-center'>
            <div className='flex flex-col gap-8 sm:flex-row sm:mb-5'>
                <a href="https://www.facebook.com/ashish.nayak.39545464" target='_blank'><i className="ri-facebook-circle-line text-gray-500 text-xl"></i></a>
                <a href="https://mail.google.com/mail" target='_blank'><i className="ri-mail-line text-gray-500 text-xl"></i></a>
                <a href="https://www.linkedin.com/in/ashish-kumar-2659b3220/" target='_blank'><i className="ri-linkedin-box-line text-gray-500 text-xl"></i></a>
                <a href="https://www.instagram.com/ashishnayak6488/" target='_blank'><i className="ri-instagram-line text-gray-500 text-xl"></i></a>
                <a href="https://github.com/ashishnayak6488" target='_blank'><i className="ri-github-fill text-gray-500 text-xl"></i></a>
            </div>
            <div className='w-[1px] h-36 bg-gray-700 sm:hidden'>

            </div>
        </div>
    </div>
  )
}

export default LeftSider