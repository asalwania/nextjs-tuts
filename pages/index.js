import { useEffect, useState } from 'react';

let timer;

/* 
  @desc When we try to call this fuction it will get triggered when user stops typing 
**/
export default function Home(props) {
  console.log(props)
  return <div>{props.user?.name}</div>;
}

export function getServerSideProps() {
  return {
    props: {
      user:{
        name:"ajay"
      }
    },
  };
}
