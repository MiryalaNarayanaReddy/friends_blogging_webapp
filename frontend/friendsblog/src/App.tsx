import React from 'react'


function App(): React.ReactNode {

  return (
    <>
      <div className='grid grid-cols-3 gap-4'>
        <div className='col-span-1'>
          <h1>Friends Blog</h1>
        </div>
        <div className='col-span-2'>
          <h1>Blog Posts</h1>
        </div>
      </div>
    </>
  )
}

export default App
