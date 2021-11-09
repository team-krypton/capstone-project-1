import React, {useState, useEffect} from "react";
const API_KEY = process.env.REACT_APP_API_KEY;
const lookup = require('country-code-lookup')

const Footer = () => {
    const [country, setCountry] = useState("")
    
    useEffect(() => {
        async function getCountry () {
            const request = await fetch((`https://ipinfo.io/json?token=${API_KEY}`));
            try {
                const data = await request.json()
                const countryData = lookup.byIso(data.country).country
                setCountry(countryData)
            } catch (error) {
                console.error(error)
            }
        }
        getCountry()
    }, [])

    return (
        <div id="footer">
            <div className="from">
                <p className="abt">{country ? country : "Nigeria"}</p>
            </div>
            <div className="frow">
                <div className="col-1 fcol3">
                    <a href="" className="abt">About</a>
                    <a href="" className="abt">Advertizing</a>
                    <a href="" className="abt">Business</a>
                    <a href="" className="abt">How&nbsp;Search&nbsp;works</a>
                </div>
                <div className="col-2 fcol3">
                    <img className="googlelf" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAMAAAAiV0Z6AAAAPFBMVEVLoEN0wU6CzFKCzFKCzFKCzFKCzFJSo0MSczNDmkCCzFJPoUMTczNdr0gmgziCzFITczMTczMTczMTczPh00jOAAAAFHRSTlPF/+bIsms8Ad///hX+//5/tXw7aMEAx10AAACaSURBVHgBbc4HDoRQCATQ33tbvf9dF9QxaCT9UQaltLHOh/golXKhMs5Xqa0xU1lyoa2fXFyQOsDG38qsLy4TaV+sFislovyhPzLJJrBu6eQOtpW0LjbJkzTuTDLRVNKa3uxJI+VdiRqXSeu6GW+Qxi29eLIi8H7EsYrT42BD+mQtNO5JMjRuC4lSY8V4hsLX0egGijvUSEP9AbylEsOkeCgWAAAAAElFTkSuQmCC" alt="" 
                    data-atf="1" data-frt="1" /> &nbsp;
                    <a href="" className="abt carbon">Carbon neutral since 2007</a>
                </div>
                <div className="col-3 fcol3">
                    <a href="" className="abt">Privacy</a>
                    <a href="" className="abt">Terms</a>
                    <a href="" className="abt">Settings</a>
                </div>
            </div>
        </div>
    )
};

export default Footer
