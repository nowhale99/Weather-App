const fetchWeather = async function(){
    let search = document.getElementById('input').value
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=4979050b6399489bb9b150308232611&q=${search}`)
    const weatherData = await response.json()

    const imgUrl = weatherData.current.condition.icon
    const location = weatherData.location.name
    const temperature = weatherData.current.temp_c
    const condition = weatherData.current.condition.text

    document.getElementById('input').value = ''
    return{location, imgUrl, condition, temperature}
}

const showData = async function(){
    try{
        const dataset = await fetchWeather()
        document.getElementById('location').innerText = dataset.location
        document.getElementById('temp').innerText = `${dataset.temperature}C`
        document.getElementById('conditions').innerText = dataset.condition
        document.getElementById('pic').src=dataset.imgUrl
    
        document.getElementById('output').classList.remove('invisible')
    }catch(err){
        if(document.getElementById('input').value===''){
            alert('You put nothing in there!')
        }
        else{
            alert('You have entered absolute garbage!')
        }
        document.getElementById('input').value=''
    }
}

