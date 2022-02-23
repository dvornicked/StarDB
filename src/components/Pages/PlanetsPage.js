import React from 'react'
import { PlanetList } from '../SWComponents'
import { useNavigate } from 'react-router-dom'


const PlanetPage = () => {
  const navigate = useNavigate()
  return (
    <PlanetList onItemSelected={item => navigate(item)} />
  )
}

export default PlanetPage