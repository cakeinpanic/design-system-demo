import { useState } from 'react'
import './App.css'

export default function ButtonStyleApp() {
  const [isMobile, setIsMobile] = useState(true)
  const [isLanding, setIsLanding] = useState(true)

  const device = isMobile ? 'mobile' : 'desktop'
  const source = isLanding ? 'landing' : 'app'

  const cssVariables = {
    landing: {
      typography: {
        common: {
          'font': '"Comic Sans MS"',

        },
        desktop: {
          'h1-font-size': '30px',
          'h2-font-size': '25px',
          'control-font-size-size': '20px',

        },
        mobile: {
          'h1-font-size': '19px',
          'h2-font-size': '15px',
          'control-font-size-size': '12px',

        },

      },
      button: {
        common: {
          'btn-bg': 'lightgreen',
          'btn-shadow': '3px 1px 5px 6px green',
          'btn-border-radius': '30px'
        },
        desktop: {

          'btn-padding-horizontal': '60px',
          'btn-padding-vertical': '10px',
          'control-gap': '40px',
        },
        mobile: {

          'btn-padding-horizontal': '60px',
          'btn-padding-vertical': '5px',
          'control-gap': '30px',
        },
      }
    },
    app: {
      typography: {
        common: {
          'font': '"Montserrat", sans-serif',
        },
        desktop: {
          'h1-font-size': '30px',
          'h2-font-size': '20px',
          'control-font-size': '15px',

        },
        mobile: {
          'h1-font-size': '22px',
          'h2-font-size': '15px',
          'control-font-size': '12px',

        },
      },
      button: {
        common: {
          'btn-bg': 'lightblue',
          'btn-shadow': 'none',
          'btn-border-radius': '0px',
        },
        desktop: {

          'btn-padding-horizontal': '20px',
          'btn-padding-vertical': '5px',
          'control-gap': '10px',
        },
        mobile: {

          'btn-padding-horizontal': '10px',
          'btn-padding-vertical': '5px',
          'control-gap': '10px',
        },
      },

    },
  }

  const currentVariables = {
    ...cssVariables[source].button.common,
    ...cssVariables[source].button[device],
    ...cssVariables[source].typography.common,
    ...cssVariables[source].typography[device],
  }

  return (
    <>
      <style>
        {`
          :root {
            ${Object.entries(currentVariables)
          .map(([key, value]) => `--${key}: ${value};`)
          .join('\n')}
          }
        `}
      </style>
      <div
        className="demo-container p-5 flex flex-row gap-3 justify-center w-full items-center text-gray-800 items-start"
        data-device={device}
        data-source={source}
      >
        <div className="bg-white border-1 p-8 space-y-6 w-1/2">
          <h1 className="text-2xl font-bold text-indigo-700 text-center">
            Demo
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
            <h1>H1 title</h1>
            <h2>H2 title</h2>
            <button className="custom-button w-full mt-4">One button</button>

            <button className="custom-button w-full mt-4">Another button</button>
          </div>
        </div>

        {Object.entries(cssVariables).map(([sourceKey, sourceValue]) => (
          <div className="bg-white border-1 p-8 space-y-6 w-1/3" key={sourceKey}>
            <h1 className="text-2xl font-bold  text-center">
              {sourceKey.charAt(0).toUpperCase() + sourceKey.slice(1)} style
            </h1>
            {Object.entries(sourceValue).map(([categoryKey, categoryValue]) => (
              <div className="flex flex-col" key={categoryKey}>
                <h3 className="text-lg font-bold">
                  {categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1)}
                </h3>
                {Object.entries(categoryValue).map(([typeKey, typeValue]) => (
                  <div className="flex flex-col" key={typeKey}>
                    <h4 className="text-md font-semibold">
                      {typeKey.charAt(0).toUpperCase() + typeKey.slice(1)}
                    </h4>
                    {Object.entries(typeValue).map(([key, value]) => (
                      <div className="flex flex-row justify-between" key={key}>
                        <div>{key}</div>
                        <div>{value}</div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}
