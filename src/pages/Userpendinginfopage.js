import React from 'react'
import userdata from '../assests/userdata.json';
import UserPendingInfo from '../components/UserPendingInfo';


const Userpendinginfopage = () => {


  return (
    <div className='flex flex-col  relative '>
     
     <UserPendingInfo data={userdata.UserData[0]} />
      <UserPendingInfo data={userdata.UserData[1]}   />
      <UserPendingInfo data={userdata.UserData[2]}  />
      <UserPendingInfo data={userdata.UserData[3]}  />
      <UserPendingInfo data={userdata.UserData[4]}  />
      <UserPendingInfo data={userdata.UserData[5]}  />
      

     
    </div>
  )
}

export default Userpendinginfopage