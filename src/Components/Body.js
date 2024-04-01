import Restcard from "./Restcard";
import restobj from "../Utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";






const Body= ()=>{
    // state varaible -whenever state chnages, diff alogirthm compare virtual dom -- and re render the component
    const [listofres, setlistofres] = useState([]);
    useEffect(()=>{
        fetchfunction();
    },[]);
    
    const fetchfunction= async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json =await data.json();
        const obj=json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
        const restobj=obj.map(obj=>obj.info);
        setlistofres(restobj);
        
    }
    
    
    return listofres.length===0 ? <Shimmer /> :(
       <div className="body">
            <div className="filter">
                <button className="filterbtn" onClick={
                    ()=>{
                       
                        let filterarray=listofres.filter(res=>res.avgRating>=4.3);
                        
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