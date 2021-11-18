window.onload =()=>{
    //Cargar json
    let arrayElem=[];
    
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET','./js/PeriodicTableJSON.json',true);
    xobj.onreadystatechange=function(){
        if(xobj.readyState == 4 && xobj.status=='200'){
            let json=JSON.parse (xobj.responseText);
            arrayElem=json.elements;
            let todo="";
            arrayElem.forEach(element => {
                todo+=`<li id="${element.name}" class="${element.category}"
                    data-id="2"
                    data-sim="${element.symbol}"
                    data-name="${element.name}"
                    data-desc="${element.summary}">
                    <abbr title="Helium">${element.symbol}</abbr>
                </li>`
            });
            document.getElementsByClassName('periodic-table')[0].innerHTML=todo;

            //Evento
            let elem=document.getElementsByTagName('li');
            console.log(elem.length);
            for(let x=0;x<elem.length;x++){
                elem[x].addEventListener('click',(e)=> {
                    let nom=elem[x].getAttribute("data-name");
                    let sim=elem[x].getAttribute("data-sim");
                    let des=elem[x].getAttribute("data-desc");
                    document.getElementById("txtElemento").innerText=nom;
                    document.getElementById("txtSimbolo").innerText=sim;
                    document.getElementById("txtDescripcion").innerText=des;
                });
            };
        }
    }
    xobj.send(null);    
}