var search = document.querySelector("#page1 #search");
var change = document.querySelector("#page1 #changed");
var click = document.querySelector("#page1 #click");


change.addEventListener("click",function(){
    search.style.display = 'block'
})

click.addEventListener("click",function(){
    search.style.display = 'none'
})

var right = document.querySelector("#right-side");
var menu = document.querySelector("#page1 #menu");
var close = document.querySelector("#page1 #close");


menu.addEventListener("click",function(){
    right.style.display = 'block'
})

close.addEventListener("click",function(){
    right.style.display = 'none'
})

