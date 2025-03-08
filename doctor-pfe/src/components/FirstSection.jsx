import React from "react"
import tooth from"../assets/tooth.png"

export default function FirstSection(){
    return (
        <div id="Parent" className="flex justify-between mt-2  gap-5" >
            
            <div  className="pt-4 bg-[#f9e379] rounded-[30px] w-74 p pl-10  h-80 ">

            
                <div id="headText">
                    <h1>DENTISTERIE ESTHÉTIQUE</h1>
                    <p>Le sourire est la première porte de communication entre humains</p>
                </div>


                <div id="button ou tswira" className="flex justify-between items-end relative">

                <div id="button" className="rounded-[100px] bg-blue-500">

                </div>
                
                <div  className="bg-blue-900 w-10 h-10 rounded-full left-2 absolute top-35 pr-2">
                    
                     
                </div>
                <div className="pt-12 " >
                    <img src={tooth} className="w-40 opacity-20 pt-5 pr-5 "/>
                </div>

               

                </div>
                </div>



                
                <div className="pt-4 bg-[#f9e379] rounded-[30px] w-74 pb-10 pl-10  ">
                <div id="headText">
                    <h2>First head</h2>
                    <p>node awa awajsmozk</p>
                <div id="button">

                </div>
                <div id="image">

                </div>
                </div>
                </div>
                


                <div className="pt-4 bg-[#f9e379] rounded-[30px] w-74 pb-10 pl-10  ">
                <div id="headText">
                    <h2>First head</h2>
                    <p>node awa awajsmozk</p>
                <div id="button">

                </div>
                <div id="image">

                </div>
                </div>
                </div>
                


                <div className="pt-4 bg-[#f9e379] rounded-[30px] w-74 pb-10 pl-10  ">
                <div id="headText">
                    <h2>First head</h2>
                    <p>node awa awajsmozk</p>
                <div id="button">

                </div>
                <div id="image">

                </div>
                </div>
                </div>




        </div>
        
    )
}