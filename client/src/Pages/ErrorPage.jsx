import React from 'react';
import Lottie, { useLottie } from "lottie-react";
import groovyWalkAnimation from "./../../public/errorpage.json";

const ErrorPage = () => {
    const options = {
        animationData: groovyWalkAnimation,
        loop: true
      };
      const { View } = useLottie(options);
    return (
        <div className='w-full h-[100px]'>
            <Lottie style={{width: "40%", display: "flex", justifyContent:"center", alignItems: "center", margin: "200px auto"}} animationData={groovyWalkAnimation}/>
        </div>
    );
};

export default ErrorPage;