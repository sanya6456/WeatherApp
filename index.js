const api={
    key:'73c53d8938670e8f15c862fdbf9b757e',
    base:'https://api.openweathermap.org/data/2.5/'
}

var obj={
    city:''
}


function search(){

    obj.city=document.getElementById('inputtxt').value;

    var cityfield=document.getElementById('city');
    var tempfield=document.getElementById('temp');
    var moodfield=document.getElementById('mood');

    fetch(`${api.base}weather?q=${obj.city}&units=metric&appid=${api.key}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);

        cityfield.innerHTML=data['name'];
        tempfield.innerHTML=data['main']['temp']+' °C';
        moodfield.innerHTML=data['weather']['0']['main'];
    });

}