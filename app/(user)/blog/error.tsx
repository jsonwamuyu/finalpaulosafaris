'use client';

import { useEffect } from "react";

export default function Error({reset, error}:{error:Error;reset:()=>void}){

    useEffect(()=>{
        //Log error to an error reporting service
        console.log(error)
    },[error])
    return(
        <div className="min-h-screen flex items-center justify-center my-2 flex-col">
            <h2 className="text-lg font-normal">Something went wrong!</h2>
            <button onClick={() => reset()} className="bg-green text-white rounded-md py-2 px-6 text-sm font-medium outline-none border-none">Try again</button>
        </div>
    )
}