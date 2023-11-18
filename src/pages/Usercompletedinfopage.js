import React from 'react'
import userdata from '../assests/userdata.json';
import UsercompletedInfo from '../components/UsercompletedInfo';
const Usercompletedinfopage = () => {
  return (
    <div className='flex flex-col  relative'>
   
    <UsercompletedInfo data={userdata.UserData[0]}/>
    <UsercompletedInfo data={userdata.UserData[1]}/>
    <UsercompletedInfo data={userdata.UserData[2]}/>
    <UsercompletedInfo data={userdata.UserData[3]}/>
    <UsercompletedInfo data={userdata.UserData[4]}/>
    <UsercompletedInfo data={userdata.UserData[5]}/>   
    </div>
  )
}

export default Usercompletedinfopage