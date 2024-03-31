import Restcard from "./Restcard";
import restobj from "../Utils/mockdata";
import { useState } from "react";




const Body= ()=>{
    // state varaible -whenever state chnages, diff alogirthm compare virtual dom -- and re render the component
    const [listofres, setlistofres] = useState(restobj);
    
    return (
       <div className="body">
            <div className="filter">
                <button className="filterbtn" onClick={
                    ()=>{
                       
                        let filterarray=restobj.filter(res=>res.avgRating>=4.3);
                        
                        setlistofres(filterarray);
                    }
                }>Top Rated Restaurants</button>
            </div>
            <div className="restcontainer">
               {listofres.map((restaurant)=> (
                <Restcard key={restaurant.id} restdata={restaurant}/>
                ))} 
            </div>
       </div>
    );

};

export default Body;