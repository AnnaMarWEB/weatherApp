import "./Cel.css"

export default function Cel({}){

    return(
        <>
        <div className="container">
          <div className='main'>
            <div className='city'>0</div>
            <div className='deg'>30C</div>
            <div className='img'>Img</div>
            <div className='type'>Sunny</div>
          </div>
            <HourlyWeather />
          <div className='daily'>Daily</div>
        </div>
        </>
    )
}
function HourlyWeather(setWeather){
  
    return(
        <>
            <div className='city'>{setWeather.name}</div>
            <div className='deg'>deg</div>
            <div className='img'>img</div>
            <div className='type'>icon</div>
         </>
    )
}