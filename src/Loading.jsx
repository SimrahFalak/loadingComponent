import React from "react"
function Loading() {
    return(
        <div className="wrapper absolute top-0 left-0 w-screen h-screen bg-black flex items-center justify-center"> 
        <div className=" container rotate-45 w-24 grid grid-cols-3 gap-x-1 gap-y-1">
           {new Array(9).fill().map((arr)=>{
             return  <div className="box w-7 h-7 bg-[#65cdef]"></div>
           })}

        </div>
        </div>
    )
}

export default Loading