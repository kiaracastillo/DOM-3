//Kiara castillo Magallanes
//09-29-2022
//McDiv

//Ponga un div en la página.Cuando se hace clic en el div,
//agregue el texto "mc" a lo que sea que esté en su HTML interno.
//Después de 3 clics, el div mostrará "divdivdiv"

let m = document.getElementById("mcDivs");
m.style.backgroundColor = "#8febcf";
m.style.width = "80px";
m.style.height = "30px";
let veces = 0;
function cambio() {
    m.innerHTML = "mc";
    veces = veces + 1;
    if(veces > 2) m.innerHTML = "div div div";
}

