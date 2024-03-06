// console.log('hello world') just making sure my JS is linked
//properly to my html
function loadLocalWeather(event){
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`).then(function(res){
        return res.json()
    }).then(function(data){
        document.querySelector("#submit-btn").textContent=data.submit
    })
    console.log(loadLocalWeather);
}