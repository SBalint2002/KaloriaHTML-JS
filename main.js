function torol(){
    document.getElementById('osszErtek').textContent = 0;
    var ul = document.getElementById("osszLista");
    while(ul.firstChild) ul.removeChild(ul.firstChild);
    element.remove();
}

function listaBetolt(a){
    let szuloElem = document.getElementById('osszLista');
    let listaElem = document.createElement('li');
    listaElem.appendChild(ujElem(a));
    let torlesGomb = document.createElement('button');
    torlesGomb.setAttribute("id", "gomb");
    torlesGomb.textContent = 'X';
    function torlesKatt() {
        listaElem.remove();
        let ertek = parseInt(document.getElementById('osszErtek').textContent);
        ertek -= a;
        document.getElementById('osszErtek').textContent = ertek;
    }
    torlesGomb.addEventListener('click',torlesKatt);
    listaElem.appendChild(torlesGomb);
    szuloElem.appendChild(listaElem);
}

function ujElem(ertek){
    let cim = "";
    if (ertek == 250){
        cim = "Hamburger";
    }else if(ertek == 180){
        cim = "Pizza";
    }else{
        cim = "Juice";
    }
    let label = document.createElement('label');
    label.textContent = cim + ": ";
    let number = document.createElement('label');
    number.setAttribute("id", "dolt");
    number.textContent = ertek;
    label.appendChild(number);
    return label;
}

function burgerKatt(){
    let ertek = parseInt(document.getElementById('osszErtek').textContent);
    ertek += 250;
    document.getElementById('osszErtek').textContent = ertek;
    listaBetolt(250);
}

function pizzaKatt(){
    let ertek = parseInt(document.getElementById('osszErtek').textContent);
    ertek += 180;
    document.getElementById('osszErtek').textContent = ertek;
    listaBetolt(180);
}

function juiceKatt(){
    let ertek = parseInt(document.getElementById('osszErtek').textContent);
    ertek += 20;
    document.getElementById('osszErtek').textContent = ertek;
    listaBetolt(20);
}

function init() {
    document.getElementById('burger').addEventListener('click',burgerKatt);
    document.getElementById('pizza').addEventListener('click',pizzaKatt);
    document.getElementById('juice').addEventListener('click',juiceKatt);
    document.getElementById('urit').addEventListener('click',torol);
}

document.addEventListener('DOMContentLoaded',init);