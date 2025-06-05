let menu = document.getElementById("menu")
let iconebarras = document.getElementById("icone-barras")
let iconex = document.getElementById("icone-x")
function abreFechaMenu() {
    // se o menu esta fechado
    if (menu.classList.contains("menu fechado")) {
        // abrir menu
        menu.classList.remove("menu-fechado")
        // mostrar icones x
        iconex.style.display = "inline"
        // esconder icone barras
        iconebarras.style.display = "none"
    }
    // senão
    else {
        // fecha o menu
        menu.classList.add("menu-fechado")

        // esconder icone x
        iconex.style.display = "none"
        // mostrar icone barras
        iconebarras.style.display = "inline"
    }
}
onresize = () => {
    menu.classList.remove("menu-fechado")
    iconex.style.display=inline
    iconebarras.style
}