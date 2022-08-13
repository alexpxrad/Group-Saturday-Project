

import React from "react";
import { useState } from "react";


const Pages = () => {
const [data, setData] = useState ([]) //the Hook

const getPages = () => {
    fetch("https://api.sampleapis.com/coffee/hot") //fetch api
    .then( res  =>  res.json() )   //parsing data in Json format, parse
    .then( json  =>  setData(json) )   //putting parsed json as a variable and console
    .catch( err  =>  console.error(err) ) //handling error
}



getPages()

        return (
                <>
                    <header>
                        <h1>This is our Saturday</h1> 
                        </header>
                        <main>
                        {data.map( (each)=> {  //looping array
                                    return (
                                        <div>
                                            <h2>{each.title}</h2>
                                            <img src={each.image} alt="" />
                                            <p>{each.description}</p>
                                        </div>
                                    )
                                } )}      
                        </main> 
                </>
        )    
}


export default Pages;