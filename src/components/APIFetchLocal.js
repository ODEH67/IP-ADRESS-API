import {useEffect,useState } from "react";
import {Link } from "react-router-dom";
// import "../App.css";
import Map from './Map';
import SyncLoader from "react-spinners/ClockLoader";
import {Datey} from "./TimeDate";
import Flag from "./Flage";
import CountryInfos from "./CountryInfos";
import CountryCodes from "country-codes-list"
import {Timey} from "./TimeDate"


//added max
import './Max.css';
import LogoWhere from '../images/logo-where.png';
// import MapTest from './images/map-test.png';
// import IconLocation from '../images/icon-location.png';
//


export default function API_Fetch1() {

    const [loading1, setLoading1] = useState(true);
    const [api1, setApi1] = useState({});
    const [coordi, setCoordi] = useState({});

    // console.log("api1",api1)



    useEffect(() => {

    const accepted = (positioner) => {
        console.log("Current positioner:", positioner);
        setCoordi(positioner)
    };
    const refused = (error) => {
        console.log("location refused:", error);
    };
        navigator.geolocation.getCurrentPosition(accepted, refused)
        
}, []);


    useEffect(() => {
const DataFetch1 = async () => {

    try {
        const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${coordi.coords.latitude}&longitude=${coordi.coords.longitude}&localityLanguage=en`);
        if (!response.ok) {
            throw new Error(`Request failed, status: ${response.status}`);
        }
        const data = await response.json();
        setLoading1(false)
        setApi1(data);
        console.log("data local nav",data)
    } catch (error) {
		console.log(error);
		}
	};
    DataFetch1()
}, [coordi]);


const CountryObjectName = CountryCodes.customList('countryCode','{countryNameEn}')


    return (
    <>
    {loading1 ? (
        <div className="loading">
        <h1 className="loading-text">Hacking your Location 😈...</h1>
				<SyncLoader
					color="#00B5B5"
					cssOverride={{ margin: "5vh auto" }}
					loading
					size={90}
				/>
                </div>
			) : (
                <>
<div className='main-div'>
    <div className="header">
        <img className="Logo" src={LogoWhere} alt="logo-where" />
        <hr />
    </div>
    <h3>Here you are!</h3>
    <div className="box">
        <div className="map-box">
        < Map
                lati ={coordi && coordi.coords  && coordi.coords.latitude && (coordi.coords.latitude)}
                lngi ={coordi && coordi.coords && coordi.coords.longitude && (coordi.coords.longitude)} />
            {/* <img className="map-test" src={MapTest} alt="map-test" /> */}
        </div>

        <div className="info-box">
        
            <h2 className="headline-info">You are in</h2>
            {CountryObjectName[api1.countryCode] && (api1.countryCode === "IL" ? (<p className="text-info">{CountryObjectName["PS"]}</p>) : (<p className="text-info">{CountryObjectName[api1.countryCode]}</p>))}

            <h2 className="headline-info">Region</h2>
            <p className="text-info">{api1.principalSubdivision && (api1.principalSubdivision)}</p>

            <h2 className="headline-info">City, Area</h2>
            <p className="text-info">{api1.city ? (api1.city +"," ):( "") } {api1.locality ? (api1.locality ):( "") }</p>

            <div className="box-bottom">
                <div className="text-box-bottom">
                    <h2 className="headline-info-bottom">Date where you are</h2>
                    <Datey className="text-info-bottom"/>
                </div>
                    <div className="flag-box-bottom">
                    <Flag country={api1.countryCode} api1i={api1}/>
                </div>

                <div className="text-box-bottom">
                    <h2 className="headline-info-bottom">Time where you are</h2>
                    <Timey className="text-info-bottom"/>
                </div>
            </div>
            <div className="additional-list">
                <h2 className="headline-info-bottom">Wanna know more?</h2>
                {/* extra idea, the code under this comment is for more info about the location, can be added in a dropdown Menu with the country code  */}
                <CountryInfos 
                // Timezone={passedApi.location.timezone && passedApi.location.timezone}
                PostalCode={api1.postcode}
                CountryCode={api1 && api1.countryCode && (api1.countryCode)}/>
                {/* <p>Country Code: {api.location.country === "IL" ? "PS" : api.location.country}</p>*/}
                {/* <p>Timezone: {api.location.timezone}</p>*/}
                {/* api.location.postalCode && <p>Postal Code: {api.location.postalCode}</p> */}
                {/* <p>Using VPN: {api.proxy.vpn === false ? "No" : "Yes"}</p> */}
                <Link to="/IP-ADRESS-API" style ={{textDecorationLine : "none"}}>
                <h2 className="headline-info-bottom">* Back to the boring IP location? *</h2>
                </Link>
            </div>
        </div>
    </div>

    <div className="footer">
        <hr />
        <br/>
        <div className="footer-links">
            <p className="footer-link">Home</p>
            <p className="footer-link">About</p>
            <p className="footer-link">Imprint</p>
        </div>
    </div>
</div>
</>
    )
    }

                                    {/* all infos without styling */}
    {/*<section className="App_body">
        <div className="App_space">
            <h3>IP Adress</h3>
            <div className="body_elements">
            {loading ? (
				<SyncLoader
					color="blue"
					cssOverride={{ margin: "40vh auto" }}
					loading
					size={90}
				/>
			) : (
                <>
                <div className="map_container">
                    < Map
                    lati ={api && api.location && api.location.lat && (api.location.lat)}
                    lngi ={api && api.location && api.location.lng && (api.location.lng)} />
                </div>
                <div className="ip_adress">
                    <p>ip adress : {api.ip}</p>
                </div>
                <div className="location_container">
                    <Flag country={api.location.country} apii={api}/>
                    {CountryObjectName[api.location.country ] && <div>Country: {CountryObjectName[api.location.country ]}</div>}

                     //extra idea, the code under this comment is for more info about the location, can be added in a dropdown Menu with the country code 
                    <CountryInfos CountryCode={api && api.location && api.location.country && (api.location.country)}/>

                    <p>Country Code: {api.location.country}</p>
                    <p>region: {api.location.region}</p>
                    <p>city: {api.location.city}</p>
                    {api.location.postalCode && <p>postalCode:{api.location.postalCode}</p> }
                    <p>timezone: {api.location.timezone}</p>
                    <p>using VPN: {api.proxy.vpn === false ? "No" : "Yes"}</p> 
                    <DateTime/>
                </div>
                </>)}
            </div>
        </div>
    </section>*/}

    </>
    )
    }