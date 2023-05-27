import CountryCodes from "country-codes-list"
import "../App.css";
import {useEffect,useState } from "react";


                //this code for getting the other extra infos from react installed package:

export default function CountryInfos({CountryCode,Timezone,PostalCode}) {

    const [section, setSection] = useState("Postal Code");
    const [selected, setSelected] = useState("");


    const CountryObjectCall = CountryCodes.customList('countryCode','{countryCallingCode}')
    const CountryObjectLanguage = CountryCodes.customList('countryCode','{officialLanguageNameEn}')
    const CountryObjectCurrency = CountryCodes.customList('countryCode','{currencyNameEn}')
    const CountryObjectContinent = CountryCodes.customList('countryCode','{region}')

    let newCountryCode = CountryCode === "IL" ? 'PS' : CountryCode

    console.log( CountryCodes.customList('countryCode','{region}'))

    useEffect(() => {

        if (section === "Postal Code"){
            setSelected(PostalCode);
        
        } else if (section === "Language"){
            setSelected(CountryObjectLanguage[newCountryCode] && CountryObjectLanguage[newCountryCode]);
        
        } else if (section === "Currency"){
            setSelected(CountryObjectCurrency[newCountryCode] && CountryObjectCurrency[newCountryCode]);
        
        } else if (section === "Country Code"){
            setSelected(newCountryCode);
        
        } else if (section === "Timezone"){
            setSelected("UTC "+Timezone);
        
        } else if (section === "Call Code"){
            setSelected(CountryObjectCall[newCountryCode] && "+"+CountryObjectCall[newCountryCode]);
        
        } else if (section === "Continent"){
            setSelected(CountryObjectContinent[newCountryCode] && CountryObjectContinent[newCountryCode]);
        }

    }, [section]);

    return (
    <div className="Menu-container">
        <div className="drop-Menu">
            <select
            name="section"
            id="section"
            value={section}
            onChange={(e) => setSection(e.target.value)}
            >
                <option value="Postal Code">Postal Code</option>
                <option value="Country Code">Country Code</option>
                <option value="Call Code">Call Code</option>
                <option value="Language">Language</option>
                <option value="Currency">Currency</option>
                {CountryObjectContinent && <option value="Continent">Continent</option>}
                {Timezone && <option value="Timezone">Timezone</option>}
            </select>
        </div>
        <h3>{selected}</h3>
        {/* {CountryObjectCall[newCountryCode] && <div>Call Code: +{CountryObjectCall[newCountryCode]}</div>} */}
        {/* {CountryObjectLanguage[newCountryCode] && <div>Language: {CountryObjectLanguage[newCountryCode]}</div>} */}
        {/* {CountryObjectCurrency[newCountryCode] && <div>Currency: {CountryObjectCurrency[newCountryCode]}</div>} */}
    </div>
    );
}

                // OR this to get only the full name of the country from the flags API .JSON:


// export default function CountryInfo({CountryCode}) {

//     const [Countries, setCountries] = useState({});

//     useEffect(() => {
//         const DataFetch = async () => {
        
//             try {
//                 const response = await fetch('https://flagcdn.com/en/codes.json');
//                 if (!response.ok) {
//                     throw new Error(`Request failed, status: ${response.status}`);
//                 }
//                 const data = await response.json();
//                 setCountries(data);
//                 // console.log("data",data)
//             } catch (error) {
//                 console.log(error);
//                 }
//             };
//             DataFetch()

//         }, [CountryCode])

//     console.log(Countries)

//     return (
//     <>
//         {Countries.hasOwnProperty(CountryCode.toLowerCase()) ? <div>Country: {Countries[CountryCode.toLowerCase()]}</div> : null}
//     </>
//     );
// }