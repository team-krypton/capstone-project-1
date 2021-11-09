import React, {useState, useEffect} from "react";
const API_KEY = process.env.REACT_APP_API_KEY;
const lookup = require('country-code-lookup')

const Footer = () => {
    const [country, setCountry] = useState("")

    const getCountry = async () => {
       const request = await fetch((`https://ipinfo.io/json?token=${API_KEY}`));
       try {
           const data = await request.json()
           const countryData = lookup.byIso(data.country).country
           return countryData
       } catch (error) {
           console.error(error)
       }
    }
    
    useEffect(async () => {
        const countryName = await getCountry()
        setCountry(countryName)
    }, [])

    return (
        <footer>
            <div className="footer-container">
                <p className="location" >{country ? country : "Nigeria"}</p>
                <div className="footer-section">
                    <div className='carbon-neutrality'>Carbon neutral since 2007</div>
                    <div className="wrap-link">
                        <a href="">About</a>
                        <a href="">Advertising</a>
                        <a href="">Business</a>
                        <a href="">How Search works</a>
                    </div>
                    <div className="wrap-link">
                        <a href="">Privacy</a>
                        <a href="">Terms</a>
                        <a href="">Settings</a>
                    </div>
                </div>
            </div>
        </footer>
    )
};


export default Footer