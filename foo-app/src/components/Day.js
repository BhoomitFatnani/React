import React from 'react'

export default function Day() {
    let currentDate = new Date();
    let dayNumber = currentDate.getDay();
    let message='';
    let exactDay='';

    switch(dayNumber){
        case 0:
            message='Today is Sunday.... Enjoy your Holiday';
            break;
        case 6:
            message='Today is Saturday.... Enjoy your Holiday';
            break;
        case 1:
            message=`Today is ${exactDay}....`;
            break;
        case 2:
            message=`Today is ${exactDay}....`;
            break;
        case 3:
            message=`Today is ${exactDay}....`;
            break;
        case 4:
            message=`Today is ${exactDay}....`;
            break;
        case 5:
            message=`Today is ${exactDay}....`;
            break;
        
        
    }
  return (
    <div>{message}</div>
  )
}
