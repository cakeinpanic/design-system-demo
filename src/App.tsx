import React, { useState } from 'react'
import './App.css'

export default function ButtonStyleApp() {
  const [isMobile, setIsMobile] = useState(true)
  const [isLanding, setIsLanding] = useState(true)

  const device = isMobile ? 'mobile' : 'desktop'
  const source = isLanding ? 'landing' : 'app'

  return (
    <>
      <style>
        {`
      
      `}</style>
      <div className="m-5
      flex flex-row
      gap-3
       justify-center
       w-full

      items-center
      text-gray-800 font-sans"

           data-device={device}
           data-source={source}
      >
        <div className="bg-white border-1 p-8 space-y-6 w-full max-w-md">
          <h1 className="text-2xl font-bold text-indigo-700 text-center">
            Style Switcher
          </h1>

          <div className="flex justify-between gap-4 items-center">
            <span className="font-medium text-sm">Device:</span>
            <div className="flex gap-2">
              <button
                className={`toggle ${isMobile ? 'active' : ''}`}
                onClick={() => setIsMobile(true)}
              >
                Mobile
              </button>
              <button
                className={`toggle ${!isMobile ? 'active' : ''}`}
                onClick={() => setIsMobile(false)}
              >
                Desktop
              </button>
            </div>
          </div>

          <div className="flex justify-between gap-4 items-center">
            <span className="font-medium text-sm">Source:</span>
            <div className="flex gap-2">
              <button
                className={`toggle ${isLanding ? 'active' : ''}`}
                onClick={() => setIsLanding(true)}
              >
                Landing
              </button>
              <button
                className={`toggle ${!isLanding ? 'active' : ''}`}
                onClick={() => setIsLanding(false)}
              >
                App
              </button>
            </div>
          </div>
          <div className="container">
            <button className="custom-button w-full mt-4">One button</button>

            <button className="custom-button w-full mt-4">Annother button</button>
          </div>
        </div>

        <div className="bg-white border-1 p-8 space-y-6 w-full max-w-md">
          <h1 className="text-2xl font-bold text-indigo-700 text-center">
           Landing style
          </h1>
          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
              <div className="">Font</div>
              <div className="">Comic Sans MS</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
