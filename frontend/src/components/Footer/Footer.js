import { Link } from "react-router-dom"
import './Footer.css'

export const Footer = () => {

    return (
        <div className="footer-link-container">
        <div className="icon">
        <Link to={{pathname: 'https://github.com/safetyboi'}} target="_blank">
            <i className="fa-brands fa-github" style={{color: "#006990", fontSize: '30px'}}></i> 
        </Link>
        </div>
        <div className="icon">
        <Link to={{pathname: 'https://www.linkedin.com/in/daniel-culbertson-23bb757b/'}} target="_blank">
            <i className="fa-brands fa-linkedin" style={{color: "#006990", fontSize: '30px'}}></i>
        </Link>
        </div>
        {/* <p>Check Out My Other Projects</p>
        <Link to={{pathname: "https://treasure-mhx1.onrender.com/" }} target="_blank">Treasure</Link>
        <Link to={{pathname: "https://safetyboi.github.io/JS-Project/" }} target="_blank">Trashpicker</Link> */}
        </div>
    )
}