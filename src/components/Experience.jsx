import React from 'react'
import { EXPERIENCES } from '../constants'

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className='my-20 text-center text-4xl'>Experience</h2>
        <div>
            {EXPERIENCES.map((Experience,index) => (
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'
                >
                    <div className="w-full lg:w-1/4">
                        <p className='mb-2 text-sm text-neutral-400'>{Experience.year}</p>
                    </div>
                    <div className="w-full max-w-xl lg:w-3/4">
                      <h6 className='mb-2 font-semibold'>
                        {Experience.role} - {" "}
                        <span className='text-sm text-purple-200'>
                          {Experience.company}
                        </span>
                      </h6>
                    </div>
                </div>
               ))}
        </div>
    </div>
  )
}

export default Experience
