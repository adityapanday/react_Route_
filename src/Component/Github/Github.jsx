import React, { useEffect, useState } from 'react'

function Github() {
    const [data , setdata] = useState([]);
    useEffect(()=>{
        fetch('https://api.github.com/users/adityapanday').then(res => res.json())
        .then(data=>{
            console.log(data);
            setdata(data);
        })
    },[])
  return (
    <div className='text-color m-4 bg-gray-600 text-white p-4 text-3xl' >Github followers : {data.followers}
    <img src={data.avatar_url} alt='image' width={200}/>
    
    
    
    </div>
  )
}

export default Github;