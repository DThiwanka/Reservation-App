import React from 'react'
import './propertyList.css'

const PropertyList = () => {
  return (
    <div className='pList'>

      <div className="pListItem">
        <img src="https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Hotels</h1>
            <h2>233 hotels</h2>
        </div>
      </div>

      <div className="pListItem">
        <img src="https://images.unsplash.com/photo-1565031491910-e57fac031c41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Apartments</h1>
            <h2>233 hotels</h2>
        </div>
      </div>

      <div className="pListItem">
        <img src="https://images.unsplash.com/photo-1554009975-d74653b879f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80" alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Resort</h1>
            <h2>233 hotels</h2>
        </div>
      </div>

      <div className="pListItem">
        <img src="https://images.unsplash.com/photo-1599777560450-e462cffc5368?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Villas</h1>
            <h2>233 hotels</h2>
        </div>
      </div>

      <div className="pListItem">
        <img src="https://images.unsplash.com/photo-1575403071235-5dcd06cbf169?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Cabins</h1>
            <h2>233 hotels</h2>
        </div>
      </div>

    </div>
  )
}

export default PropertyList
