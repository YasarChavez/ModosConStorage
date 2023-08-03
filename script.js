const body = document.querySelector("body");

var valorDarkStorage = localStorage.getItem("modo");
verificarstorageDark(valorDarkStorage);


function modooscuro() {
    if(body.classList.contains("dark")){
        body.classList.remove("dark");
        localStorage.removeItem("modo");
    } else{
        body.classList.add("dark");
        localStorage.setItem("modo", "true");
    }

}

function verificarstorageDark(valorDarkStorage) {
    if (valorDarkStorage) {
        body.classList.add("dark");
    } else {
        body.classList.remove("dark");
    }
}
