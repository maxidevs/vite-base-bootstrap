import { useEffect, useState } from 'react'
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import bootstrapLogo from '/bootstrap.png'
import * as bootstrap from 'bootstrap'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.querySelectorAll('[data-bs-toggle="popover"]')
      .forEach(popover => {
        new bootstrap.Popover(popover, {
          trigger: 'hover',
          placement: 'bottom',
          html: true,
          content: "This popover is created thanks to an ESM shim.",
          sanitize: false 
        })
      })
  }, [])
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/" target="_blank">
          <img src={bootstrapLogo} className="logo" alt="Bootstrap logo" />
        </a>
      </div>
      <h1>Vite + React + Bootstrap</h1>
      <div className="card">
        <button
          className='btn btn-lg btn-primary mb-3 mx-auto'
          onClick={() => setCount((count) => count + 1)}
          role="button"
          data-bs-toggle="popover"
          title="Custom popover"
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
