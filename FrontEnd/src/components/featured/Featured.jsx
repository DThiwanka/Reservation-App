import React from 'react'
import useFetch from '../../hooks/useFetch'
import './featured.css'

const Featured = () => {

  const {data,loading,error} = useFetch("/api/hotels/countByCity?cities=berlin,madrid,london")

  console.log(data);

  return (

      <div className="featured">
        <div className="featuredItem">
          <img src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80" alt="testjpg"/>
          <div className="featuredTitles">
            <h1>Dublin</h1>
            <h2>123 properties</h2>
          </div>
        </div>

        <div className="featuredItem">
          <img src="https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="testjpg"/>
          <div className="featuredTitles">
            <h1>Dublin</h1>
            <h2>123 properties</h2>
          </div>
        </div>

        <div className="featuredItem">
          <img src="https://images.unsplash.com/photo-1563911302283-d2bc129e7570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="testjpg"/>
          <div className="featuredTitles">
            <h1>Dublin</h1>
            <h2>123 properties</h2>
          </div>
        </div>
      </div>
    
  )
}

export default Featured
