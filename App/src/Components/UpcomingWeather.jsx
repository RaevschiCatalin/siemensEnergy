import React from "react";

const UpcomingWeather = () => {
    const API_KEY = "ef494ceb6c433d1058a661ce25d99bac"
    const [weather, setWeather] = useState(null);
    const [location, setLocation] = useState(null);
    function handleLocationClick() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
            console.log("Geolocation not supported");
        }
    }
    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setLocation({ latitude, longitude });
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        fetch(`api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
            .then(response => response.json())
            .then(data => {
                setWeather(data);
                console.log(data);
            })
    return (
        <div>
        <p>Upcoming Weather</p>
        </div>
    );
    }
}
export default UpcomingWeather;