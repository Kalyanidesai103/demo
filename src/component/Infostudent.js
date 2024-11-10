import React from 'react'

function Infostudent(props) {

    console.log(props);

    const{userInfo} = props;
  return (
    <div>
    <p> First Name is :{userInfo.fname}</p>
    <p> Last Name is :{userInfo.lname}</p>
    </div>
  )
}

export default Infostudent;