import '../App.css';


export default function Flag({apii,country}) {

    let newCountry = country === "IL" || country === "il" ? 'PS' : country

    return (
    <>
    {newCountry ? (
        <img className='flag_img' src={`https://flagcdn.com/w640/${newCountry.toLowerCase()}.png`}
        srcSet={`https://flagcdn.com/w1280/${newCountry.toLowerCase()}.png 2x,https://flagcdn.com/192x144/de.png 3x`}
        width="100"     // u can adjust the flag's size from here, the rest can be modifed from the App.css .flag_img
        alt="Flag" />
    ) : null}
        </>
    ) 
}