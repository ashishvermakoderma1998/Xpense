import React from 'react'

const Main = () => {
  return (
    <div className='grid grid-cols-2'>
      <div className='px-25'>
        <h1 className='text-7xl font-bold '>Track your Expenses to Save Money</h1>
        <p className='py-10 opacity-80'>Helps you to organize your income and expenses</p>
        <button className='bg-orange-600 rounded-xl p-2'>Try free demo</button>
        <span className='py-5 opacity-80'>— Web, iOs and Android</span>
      </div>
      <div >
        <img src="/src/assets/Illustration (1).png" alt="Banner" />

      </div>
    </div>
  )
}

export default Main
