window.onload = ()=>{
    let data=[];
    axios.get('https://restcountries.com/v3.1/all')
  .then(function (response) {
    // handle success
    data=response.data;
    print(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  
  let print = (data)=>{
      var todo="";
      
      data.forEach(element => {
          todo+=`<button class="badge bg-dark">${element.name.common} - ${element.name.official}</button>`;
      });
      document.getElementById("countries").innerHTML=todo;
  };
    search=()=>{
      let txt = document.getElementById("search").value;
      let found=data.find((pais)=>pais.name.common== txt);
      console.log(found);
      if(found != null){
          document.getElementById("nameCountry").innerHTML=found.name.common;
          document.getElementById("imgCountry").src=found.flags.png;
          document.getElementById("lanCountry").innerHTML=found.languages.spa;
          document.getElementById("regCountry").innerHTML=found.region;
          document.getElementById("ubiCountry").innerHTML=found.name.common;
          document.getElementById("ubiCountry").href=found.maps.googleMaps;
      }
    }
}