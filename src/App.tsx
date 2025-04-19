import React, { useState } from 'react';
import './App.css';

export default function ButtonStyleApp() {
  const [isMobile, setIsMobile] = useState(true);
  const [isLanding, setIsLanding] = useState(true);

  const device = isMobile ? 'mobile' : 'desktop';
  const source = isLanding ? 'landing' : 'app';

  return (
    <div
      className="m-5 min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800 font-sans"
      data-device={device}
      data-source={source}
    >
      <div className="bg-white shadow-md rounded-lg p-8 space-y-6 w-full max-w-md">
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

      <style>{`
        .toggle {
          padding: 8px 16px;
          border: 2px solid #c7d2fe;
          background: #e0e7ff;
          color: #3730a3;
          cursor: pointer;
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
          transition: background 0.3s, color 0.3s;
        }
        .toggle.active {
          background: #4338ca;
          color: white;
          border-color: #4338ca;
        }
        
    
      `}</style>
    </div>
  );
}
