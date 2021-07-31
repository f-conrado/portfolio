var sec = document.getElementById("second")
var third = document.getElementById("third")
var fourth = document.getElementById("fourth")
var fifth = document.getElementById("fifth")
var quem = document.getElementById("m")
var como = document.getElementById("mm")
var quando = document.getElementById("mmm")
var onde = document.getElementById("mmmm")
var eh = document.getElementById("v")
var nav = document.getElementById("nav")

function classRemover(){
    sec.classList.remove("show")
    third.classList.remove("show")
    fourth.classList.remove("show")
    fifth.classList.remove("show")
}

function remover() {
    quem.classList.remove("show")
    como.classList.remove("show")
    quando.classList.remove("show")
    onde.classList.remove("show")
    eh.classList.add("burguerDesk", "burguer")
    console.log(quem.classList)
}

function showS() {
    if(sec.classList == "second x"){
        remover()
        sec.classList.add("show")
        eh.classList.add("show")
    }
    else{
        console.log(sec.classList)
        sec.classList.add("show")
        como.classList.add("show")
    }
}

function showT() {
    if(third.classList == "third show"){
        fourth.classList.remove("show")
        fifth.classList.remove("show")
    }
    else if(third.classList == "third x"){
        remover()
        sec.classList.add("show")
        third.classList.add("show")
        eh.classList.add("show")
    }
    else{
        third.classList.add("show")
        quando.classList.add("show")
    }
}

function showF() {
    if(fourth.classList == "fourth show"){
        fifth.classList.remove("show")
    }
    else if(fourth.classList == "fourth x"){
        remover()
        sec.classList.add("show")
        third.classList.add("show")
        fourth.classList.add("show")
        eh.classList.add("show")
    }
    else{
        fourth.classList.add("show")
        onde.classList.add("show")
    }
}

function showFi() {
    if(fifth.classList == "fifth show"){
    }
    else if(fifth.classList == "fifth x"){
        remover()
        sec.classList.add("show")
        third.classList.add("show")
        fourth.classList.add("show")
        fifth.classList.add("show")
        eh.classList.add("show")
    }
    else{
        fifth.classList.add("show")
        eh.classList.add("show")
    }
}

function showH() {
    var hidden = document.getElementById("fifth")
    if(hidden.classList == "fifth show"){
        classRemover()
        sec.classList.add("x")
        third.classList.add("x")
        fourth.classList.add("x")
        fifth.classList.add("x")
        eh.classList.remove("show")
    }
    else{
        classRemover()
        quem.classList.add("show")
        como.classList.add("show")
        quando.classList.add("show")
        onde.classList.add("show")
        eh.classList.remove("show")
    }
}

