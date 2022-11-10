// import SplashVideo from "./splash-video.mov"
import { NavLink } from "react-router-dom"
import './HomePage.css'


export const HomePage = () => {
    return (
        <>
        <div className="background-video-container">
        <video className="video" autoPlay loop id="video" src="https://foobar-donuts-dev.s3.us-west-2.amazonaws.com/new-splash-video.mov" />
        {/* // <video autoPlay loop id="video" src='https://player.vimeo.com/video/576970863?h=a36f935b8d&title=0&muted=1&autopause=0&loop=1&background=1&app_id=122963' />
        // <video autoPlay loop id="video" src={SplashVideo} /> */}
        <div className="button-container-vertical">
        <div className="button-container-horizontal">
            <NavLink exact to="/donuts" className="index-navlink-button" style={{ textDecoration: 'none' }}>View Our Donuts</NavLink>
        </div>
        </div>
        </div>
        </>
    )
}