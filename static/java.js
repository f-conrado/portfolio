var sec = document.getElementById("second")
var third = document.getElementById("third")
var fourth = document.getElementById("fourth")
var fifth = document.getElementById("fifth")
var quem = document.getElementById("m")
var como = document.getElementById("mm")
var quando = document.getElementById("mmm")
var onde = document.getElementById("mmmm")
var eh = document.getElementById("v")

function remover() {
    sec.classList.remove("show")
    third.classList.remove("show")
    fourth.classList.remove("show")
    fifth.classList.remove("show")
}

function showS() {
    if(sec.classList == "second show"){
        third.classList.remove("show")
        fourth.classList.remove("show")
        fifth.classList.remove("show")
    }
    else{
        sec.classList.add("show")
        como.classList.add("show")
    }
}

function showT() {
    var hidden = document.getElementById("third")
    if(hidden.classList == "third show"){
        fourth.classList.remove("show")
        fifth.classList.remove("show")
    }
    else{
        hidden.classList.add("show")
        quando.classList.add("show")
    }
}

function showF() {
    var hidden = document.getElementById("fourth")
    if(hidden.classList == "fourth show"){
        fifth.classList.remove("show")
    }
    else{
        hidden.classList.add("show")
        onde.classList.add("show")
    }
}

function showFi() {
    var hidden = document.getElementById("fifth")
    if(hidden.classList == "fifth show"){
    }
    else{
        hidden.classList.add("show")
        eh.classList.add("show")
    }
}

function showH() {
    var hidden = document.getElementById("fifth")
    if(hidden.classList == "fifth show"){
        sec.classList.remove("show")
        third.classList.remove("show")
        fourth.classList.remove("show")
        fifth.classList.remove("show")
    }
    else{
        hidden.classList.add("show")
    }
}

