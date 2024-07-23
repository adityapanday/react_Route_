import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

const {Userid , Postid } = useParams();
  return (
    <>
        <div>User name is : {Userid}</div>
        <div>User post id is : {Postid}</div>
    </>
    
  )
}

export default User