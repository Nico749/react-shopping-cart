import React from 'react'

const Home = () => {
  return (
    <div>
      Welcome {JSON.parse(localStorage.getItem('user'))}
    </div>
  )
}

export default Home
