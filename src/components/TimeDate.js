import {useEffect,useState } from "react";
import "../App.css";


export function Datey() {

    const [date, setDate] = useState("");


    useEffect(() => {
        let interval = setInterval(() => {
        const currentDateTime = new Date();
    

        const day = currentDateTime.getDate();
          const month = currentDateTime.getMonth() + 1; // Adding 1 because months are zero-based
        const year = currentDateTime.getFullYear();
    // console.log("day",day)
    // console.log("month",month)
    let newMonth = month < 10 ? "0" + month : month;
    let newDay = day < 10 ? "0" + day : day;

        const formattedDate = `${newDay}/${newMonth}/${year}`;
        setDate(formattedDate);
        }, 1000);
    
        return () => clearInterval(interval);
    }, []);

    return (
        <p>{date}</p>
    );
}


export function Timey() {

    const [time, setTime] = useState("");

  // The useEffect to update the time every second
useEffect(() => {
    let interval = setInterval(() => {
        const currentDateTime = new Date();
        setTime(currentDateTime.toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
}, []);

return (
        <p>{time}</p>
);
}


//     const [DateTime, setDateTime] = useState(new Date().toLocaleString());

//     //the useEffect is to update the Date time every second
//     useEffect(() => {
//     let interval = setInterval( () => setDateTime(new Date().toLocaleString()))

//     return () => clearInterval(interval)
//     },[])

//     return (
//     <div className="DateTime">
//         <p>Date & Time: {DateTime}</p>
//     </div>
//     );
// }