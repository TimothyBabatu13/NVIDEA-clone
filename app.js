let count = 0;
let screen = document.querySelectorAll("#slideshow .slideshow-container");
let bar = document.querySelectorAll(".bars .bar");


function slideShow(){

    count++;
    
    for(let i = 0; i < screen.length; i++){
        screen[i].style.display = "none";
    };

    for(let i = 0; i < bar.length; i++){
        bar[i].classList.remove("active-bar");
        bar[i].onclick = ()=>{
            count = i;
        }
    };

    if(count > screen.length){
        count = 1;
    };

    screen[count - 1].style.display = "block";
    bar[count - 1].classList.add("active-bar");
    
    setTimeout(slideShow, 7000);

};



/* List and x-buttons */
function listAndXButton(){
    let list = document.getElementById("list-button");
    list.addEventListener("click", function(){
        this.classList.toggle("x")
        if(this.className == "x"){
            document.querySelector("header .container").style.left = 0;
        }
        else{
            document.querySelector("header .container").style.left = -100000 + "px";
        }
        // alert("Hello")
    });
}


/* Moving Left and Right */
function leftAndRightButton(){
    let y = 0;
    let x = document.querySelectorAll(".container .grid-system");
    let leftButton = document.querySelectorAll(".left-of-p");
    let rightButton = document.querySelectorAll(".right-of-p");
    
    for(let i in rightButton){
        rightButton[i].addEventListener("click", function(){
            y+=20;
             x[i].scrollLeft = y;
            console.log(y);
        })
    }
}
function main(){
    listAndXButton()
    slideShow();
    leftAndRightButton();

};
main();