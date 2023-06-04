var cities = document.getElementById('search_go');
var show_weather = document.querySelector('#msg');
var button_submit = document.querySelector('#sumbit_go');
var api_key =  '4a9bbe1054abc44ef5089175955533a9';
var form_g0_init = document.getElementById('form_go');

/////+cities.value+
//////////api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=

function weahter(){
  
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+cities.value+"&appid=" +api_key)
    .then((response)=> response.json())
    .then((info=>
    {const name= info.name;
    console.log(name)
    var flag = document.createElement('h1');
     flag.classList.add('flag_icon');
    flag.textContent = info.sys.country;
        var name_of_city = document.createElement('div');
    name_of_city.classList.add('letterOfWeather');
    name_of_city.textContent =  info.name ; 
    console.log(flag)

    console.log(cities.value)


  


    index_of_temperature =document.createElement('h1');
     index_of_temperature.classList.add('indexoftempeture');
     
     var value_temperaure =1;
     var index = Math.random() < 0.50000000;
     if(index==true){
      index_of_temperature.textContent = '°C';
      value_temperaure = 1;
   }
   else{index_of_temperature.textContent='°F'
   value_temperaure =  2 ;}
///themokrasia
     var temp = document.createElement('h1');
     temp.classList.add('temperature');
     if(value_temperaure==1){
    temp.textContent = parseInt(info.main.temp -273);
     }
     else if(value_temperaure==2){
      temp.textContent = parseInt((info.main.temp - 273.15)*9/5 +32);
     }
    console.log(value_temperaure)



    temp.addEventListener('click',()=>{
      var index = Math.random() < 0.50000000;
      if(index==true){
         index_of_temperature.textContent = '°C';
         temp.textContent = parseInt(info.main.temp -273);
      }
      else{index_of_temperature.textContent='°F'
      temp.textContent = parseInt((info.main.temp - 273.15)*9/5 +32);}
     });
    
     var indexofelements_box = document.createElement('div')
      indexofelements_box.classList.add('elements_box')
       
      var  indexofelements = document.createElement('div');
      indexofelements.classList.add('elements');

       var lista_index_0 = document.createElement('li');
       var lista_index_1 = document.createElement('li');
       var lista_index_2 = document.createElement('li');

       lista_index_0.innerHTML = '<i class="fas fa-wind " ></i> ' + info.wind.speed
       lista_index_1.innerHTML = '<i class="fas fa-sun"></i> '+ (100 - info.clouds.all) +'%'
       lista_index_2.innerHTML = '<i class="fas fa-water"></i> ' + info.main.humidity

        indexofelements.append(lista_index_0,lista_index_1,lista_index_2)


      indexofelements_box.append(indexofelements)
     


       var show_date = document.createElement('div');
       show_date.classList.add('hmeromhnia');
       var lista_index_3 = document.createElement('li');
       var lista_index_4= document.createElement('li');
       var span_0 = document.createElement('span');

       lista_index_3.append(span_0);
  
        const day_week = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        const month_string = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      
        var today = new Date();
         day= today.getDay();
        var month= today.getMonth();
        var hmera = today.getDate();
       day_now =hmera + month_string[month];
       console.log(day_now)
       span_0.innerHTML = hmera;
       lista_index_4.innerHTML = month_string[month];

       show_date.append(lista_index_3,lista_index_4);      

       var sunny = '<i class="wi wi-day-sunny"></i>'
       var  few_clouds  = '<i class="fas fa-cloud"></i>'
       var  scattered_clouds  = '<i class="wi wi-cloud"></i>'
       var  broken_clouds  = '<i class="fas fa-cloud-sun"></i>'
       var  shower_rain  = '<i class="fas fa-cloud-showers-heavy"></i>'
       var  rain  = '<i class="wi wi-rain"></i>'
       var thunderstorm = '<i class="fas fa-bolt"></i>'
       var snow = '<i class=" 	fas fa-snowflake"></i>'
       var mist = '<i class=" 	fas fa-smog"></i>'



   var show_situation_1= document.createElement('div');
   show_situation_1.classList.add('show_situation');
   var span_1 = document.createElement('span');
   span_1.classList.add('kairos');
   const name_we = info.weather[0].description
   const upper_name_we_fourth= name_we.charAt(4).toUpperCase() + name_we.slice(5)
   const upper_name_we_first= name_we.charAt(0).toUpperCase() + name_we.slice(1,4)

   var weather_description = upper_name_we_first + upper_name_we_fourth;
  
  
     
  if(info.weather[0].description == 'few clouds'){
    const upper_name_we_fourth= name_we.charAt(4).toUpperCase() + name_we.slice(5)
   const upper_name_we_first= name_we.charAt(0).toUpperCase() + name_we.slice(1,4)
   var weather_description = upper_name_we_first + upper_name_we_fourth;
    span_1.innerHTML = weather_description  + few_clouds;
    show_situation_1.append(span_1);
  }
  else if (info.weather[0].description == 'clear sky'){
    const upper_name_we_fourth= name_we.charAt(6).toUpperCase() + name_we.slice(7,9)
   const upper_name_we_first= name_we.charAt(0).toUpperCase() + name_we.slice(1,5)
   var weather_description = upper_name_we_first + "   "+ upper_name_we_fourth;
    span_1.innerHTML = weather_description  +sunny;
    show_situation_1.append(span_1);

  }
  else if (info.weather[0].description == 'scattered clouds'){
    span_1.innerHTML = weather_description  +  scattered_clouds;
    show_situation_1.append(span_1);

  }
  else if (info.weather[0].description == 'broken clouds'){
    span_1.innerHTML = weather_description  + broken_clouds;
    show_situation_1.append(span_1);

  }
  else if (info.weather[0].description == 'shower rain'){
    span_1.innerHTML = weather_description  + shower_rain;
    show_situation_1.append(span_1);

  }
  else if (info.weather[0].description == 'rain'){

    span_1.innerHTML = weather_description  + rain  ; 
    show_situation_1.append(span_1);
  }

  else if (info.weather[0].description == 'thunderstorm'){
     span_1.innerHTML = weather_description  + thunderstorm ;
     show_situation_1.append(span_1);
    }
  else if (info.weather[0].description == 'snow'){
    span_1.innerHTML = weather_description  + snow;
    show_situation_1.append(span_1);

  }
  else if (info.weather[0].description == 'mist'){
    span_1.innerHTML = weather_description  + mist;
    show_situation_1.append(span_1);

  }


    show_weather.append(flag, name_of_city,temp,index_of_temperature,indexofelements_box,show_date,show_situation_1);





    
})
)

    
}    

button_submit.addEventListener('click',function(e){
  console.log(cities.value)
  e.preventDefault();
 

  weahter();
  

  show_weather.textContent='';
  cities.value = '';
  
});


   




    


