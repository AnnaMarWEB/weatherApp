import { data, Link, useMatch, useResolvedPath } from "react-router-dom"
import Cel from "./Cel"
import Far from "./Far"
import "./Navbar.css"
import { useState } from "react"
const API_KEY="b789b00075732e4641e1d989e0592364"
export default function Navbar(){
    const [city,setCity]=useState("")
    const [weather,setWeather]=useState(data)
    
    const search = async (event)=>{
        event.preventDefault()
        try{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
            const responce = await fetch(url)
            const data = await responce.json()
            console.log(data)
        }catch(error){
          
        }
      }
    return(
        <nav className="nav">
            <input type="text" onChange={(event) =>{setCity(event.target.value, setWeather(event.target.value))}}/>
            <button onClick={search}>Search city</button> 
            <ul>
                <CustomLink to="/cel" element={<Cel weather={weather} setWeather={setWeather} setCity={setCity} data={data} />}>
                  <label htmlFor="cel">C
                     <input type="radio" name="deg"/>
                  </label>
                </CustomLink>
                <CustomLink to="/far" element={<Far />}>
                  <label htmlFor="far">F
                     <input type="radio" name="deg"/>
                  </label>
                </CustomLink>
            </ul>
            
        </nav>
    )
} 
function CustomLink({to, children}){
    const resolvePath=useResolvedPath(to)
    const isActive=useMatch({path:resolvePath.pathname, end:true})   
    return(
        <li>
            <Link className={isActive? "active":"" }  to={to}>{children}</Link>       
        </li>
    )
}

