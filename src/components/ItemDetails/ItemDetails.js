import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../Spinner'

import './ItemDetails.css'

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  )
}

export { Record }

const ItemDetails = props => {
  const [item, setItem] = useState(null)
  const [image, setImage] = useState(null)
  const [loading, setLoading] = useState(false)
  const { id } = useParams(':id')

  useEffect(() => {
    const { itemId = id, getData, getImageUrl } = props
    if (!itemId) return
    setLoading(true)
    getData(itemId).then(item =>{
      setItem(item)
      setLoading(false)
      setImage(getImageUrl(item))
    }
    )
  }, [ id, props ])

    if (loading)
      return (
        <div className="item-details card">
          <Spinner />
        </div>
      )
      if (!item) return <span>Select a item from a list</span>
      const { name } = item

      return (
        <div className="item-details card">
          <img className="item-image" src={image} alt="Item" />
          <div className="card-body">
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
              {React.Children.map(props.children, child => {
                return React.cloneElement(child, { item })
              })}
            </ul>
          </div>
        </div>
      )
}

export default ItemDetails