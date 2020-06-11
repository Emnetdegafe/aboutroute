import React from 'react'
import {useParams} from "react-router-dom"

export default function MoviePage() {
  const route_params = useParams()
  console.log(route_params)
  return (
    <div>
      MoviePage
      
    </div>
  )
}
