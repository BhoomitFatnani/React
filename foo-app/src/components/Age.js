import React from 'react'

export default function Age(props) {
    let message =''
    if(props.age<18){
       message ='You are minor'
    }
    else if(props.age>18 && props.age<60){
        message ='You are adult'
    }
    else if(props.age>60){
        message='You are Senior citizen'
    }
  return (
    <div>{message}</div>
  )
}
