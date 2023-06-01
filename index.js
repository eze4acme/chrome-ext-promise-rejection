fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature')
    .then(res => res.json())
    .then(data => {
        console.log(data.urls.full);
        document.getElementById('author-name').textContent = `Author:  ${data.user.name}
        `
        document.body.style.backgroundImage = `url(${data.urls.regular})`

    })
    .catch(err => {
    
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1490682143684-14369e18dce8?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjQ3OTQ3MzY&ixlib=rb-1.2.1&q=80)`
    })


fetch('https://api.coingecko.com/api/v3/coins/dogecoin')
    .then(res =>{ 
        if (!res.ok) {
            throw Error('Please Kindly refresh the page')
        }
        
        return res.json()})
    .then(data => {data
        document.getElementById('top-subset').innerHTML = `
        <img src=${data.image.small}>
        <p class='top-name'>${data.name}</p>
        `
        
        document.getElementById('price').innerHTML =`
        <p class='top-name'>🎯: $${data.market_data.current_price.usd}</p>
        <p class='top-name'>👆: $${data.market_data.high_24h.usd}</p>
        <p class='top-name'>👇: $${data.market_data.low_24h.usd}</p>
        `
    })
    .catch(err => {
        console.error(err);
    })
function doDate() {

let myDate = new Date().toLocaleTimeString('en-us', {timeStyle: 'medium'})
document.querySelector('.time').textContent = `${myDate}`
}
setInterval(doDate, 1000);

  navigator.geolocation.getCurrentPosition((position) => {
    let lat = position.coords.latitude
    let lon = position.coords.longitude
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`)
    .then(res => {
        if (!res.ok) {
            throw Error("Weather data not available")
        }
        
        return res.json()})
    .then(data => {data
    
    document.getElementById('weather').innerHTML = `
    <img src=http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png >
    <p>${Math.round(data.main.temp)}ºc</p>
    <p class="weather-city">${data.name}</p>
    `
   
})
.catch(err => console.error(err))
});
    