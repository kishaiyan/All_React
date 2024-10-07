import React from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
  const data=useLoaderData()
  console.log(data)
  
  return (
    <div className='flex items-center gap-10 text-center m-4 p-4 text-3xl text-white bg-gray-700/70'><img src={data.avatar_url}/> <h1>Repo Count: <span>{data.public_repos}</span></h1></div>
  )
}

export default Github


export const githubInfoLoader=async()=>{
  const response= await fetch("https://api.github.com/users/kishaiyan")

  return response.json()
}