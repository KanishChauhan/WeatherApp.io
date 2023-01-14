let t=document.getElementById('temp')
let i=document.getElementById('img')
let w=document.getElementById('wind')
let pr=document.getElementById('presp')
let h=document.getElementById('humid')
let bck = document.getElementsByTagName('body')
// const img = new Image(70, 70); // width, height

const options = {
    method: 'GET',
	headers: {
		'X-RapidAPI-Key': '70f36ccc53msh2a5528ce59a08a9p11135cjsna8d95a114944',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};




async function getimage(response){
    
    let allimages=response.results[random]
    let img=allimages.urls.regular
    console.log(img)
    bck.style.backgroundImage=`url(${img})`
}













async function fun(p){
    let random=Math.floor(Math.random()*10)
    let url=`https://api.unsplash.com/search/photos?query=${p}&client_id=qRQpuCAuSVAjXx9jNmdQzjrwIfJtg_t0vhs2a8wxdoE`
    // console.log(url)
  let a =await fetch(url)

  
  let resp=await a.json()
//   console.log(random)
  let image=resp.results[random].urls.regular
  console.log(image)
  document.body.setAttribute('class','class1')
  document.body.style.background=`linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3)),url('${image}')`
  document.body.style.backgroundPosition="center"
  document.body.style.backgroundRepeat="no-repeat"
  document.body.style.height="100%"
  document.body.style.backgroundSize="cover"
//   document.body.style=''

  

  
  }

  
  
  // let p=prompt("which cities weather you want to see")
  async function getV(){
      let p=document.getElementById('inp').value
    //   console.log(p)

  await fun(p)
await getdetails(p)
}



function getdetails(p){
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${p}`, options)
	.then(response => response.json())
	.then((response)=>{

        // console.log(response)
        get(response)
    }).catch(err => console.error(err));

}


window.onload = () =>{
    document.body.style.background="url('https://c1.wallpaperflare.com/preview/116/459/808/lake-sunset-water-landscape.jpg')"
    document.body.style.backgroundPosition="center"
    document.body.style.backgroundRepeat="no-repeat"
    document.body.style.height="100%"
    document.body.style.backgroundSize="cover"
}

    function get(response){
        
        i.style='margin-right: 30px;margin-bottom: 10px'
        // let c= document.createElement('img')
        // let t=document.getElementById('temp')
        // let t=document.getElementById('temp')
        // let t=document.getElementById('temp')
        
        w.innerHTML=response.wind_speed +" km/h"
        console.log(response)
        t.innerHTML=response.temp+"°C"
        h.innerHTML=response.humidity+"%"
        
        // let tmp=response.temp
        // t.innerHTML=tmp
        
        // let tmp=response.temp
        // t.innerHTML=tmp

        if(response.temp>=40){
            img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMgCoBzRyuv8-NCwfuoNkODrp1b6IE2v192uU02u8s4jBY6GMq&s";
            i.appendChild(img);
        }
        if(response.wind_speed9=10){
            img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBaQllKrwOeptbXwxuPJzfkpG8z1vTPSgqraWvvFZUrBq0hGFw&s";
            i.appendChild(img);
        }
        if(response.temp<10){
            img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB-Q081wZEEBNIDgpwL-TB9crJWH-s4SnOatdblHSlvQXcCGA&s";
            i.appendChild(img);
        }

    }

   

// console.log(response);
let weather ={
    'apikeys':'81c55f43d3d3fccbb7a13fd35ad6355c'
}