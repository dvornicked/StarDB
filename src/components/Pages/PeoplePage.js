import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PersonList } from '../SWComponents'


const PeoplePage = () => {
  const navigate = useNavigate()
  return (
    <PersonList onItemSelected={item => navigate(item)} />
  )
}

export default PeoplePage