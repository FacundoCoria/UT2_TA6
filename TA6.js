function convertToCelsius(temp){
    let celsius = (temp - 32) * (5/9);
    console.log(celsius);
}

function convertToFahrenheit(temp){
    let fahrenheit = temp * 9/5 + 32;
    console.log(fahrenheit);
}

convertToCelsius(50);
convertToFahrenheit(0);