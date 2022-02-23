import React from 'react'
import { StarshipList } from '../SWComponents'
import { useNavigate } from 'react-router-dom'


const StarshipPage = () => {
  const navigate = useNavigate()
  return (
    <StarshipList onItemSelected={item => navigate(item)} />
  )
}

export default StarshipPage