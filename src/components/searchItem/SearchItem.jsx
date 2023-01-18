import React from 'react'
import './searchitem.css'

const SearchItem = () => {
  return (
    <div className='searchItem'>
      <img src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80" alt="testjpg" className='siImage' />

    <div className='siDesc'>
      <h1 className='siTitle'>Tower Street Apartments</h1>
      <span className='siDistance'>Free Airport Center</span>
      <span className='siTaxiOp'>Free Airport Taxi</span>
      <span className='siSubtitle'>Studio Aprtments with Air Conditioning</span>
      <span className='siFeatures'>Entire Studio * 1 bathroom * 21m<sup>2</sup> 1 full bed</span>
      <span className='siCancelOp'>Free Cancellation</span>
      <span className='siCancelOpSubtitle'>You Can Cancel Later,<blockquote>So lock in this great price Today;</blockquote></span>
    </div>
    <div className='siDetails'>details</div>
    </div>
  )
}

export default SearchItem
