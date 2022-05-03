document.forms[0].onsubmit = function(a){
    a.preventDefault();
}

let num = document.forms[0].elements ;

let text = document.querySelector("[name='texts']");

let select = document.querySelector("select");

let result = document.querySelector(".results");

let sub = document.forms[0].create;

sub.onclick = function(){

    let nu = num.value;
    let tex = text.value;
    let selec = select.value;

    result.innerHTML = "";

    for( let i=1 ; i<= nu ; i++){
        let cont = document.createElement(selec);
        cont.textContent = tex;
        cont.className = "box";
        cont.title = "Element";
        cont.id = `id-${i}`;
        result.appendChild(cont);

    }
}