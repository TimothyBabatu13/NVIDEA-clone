let count = 0;
let screen = document.querySelectorAll("#slideshow .slideshow-container");
let bar = document.querySelectorAll(".bars .bar");
let control = 0;


function slideShow(){

    count++;
    
    for(let i = 0; i < screen.length; i++){
        screen[i].style.display = "none";
    };

    for(let i = 0; i < bar.length; i++){
        bar[i].classList.remove("active-bar");
        bar[i].onclick = ()=>{
            count = i;
            control++
            if(control > 0){
                clearTimeout(time);
                const idTime = setTimeout(slideShow, 1000);
                clearTimeout(idTime);
                return slideShow();
            }
            else{
                return slideShow();
            }
        }
    };

    if(count > screen.length){
        count = 1;
    };

    screen[count - 1].style.display = "block";
    bar[count - 1].classList.add("active-bar");
    
    const time = setTimeout(slideShow, 6000);

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
    let leftBtn = document.querySelectorAll(".left-of-p");
    let rightBtn = document.querySelectorAll(".right-of-p");
    let containerContainer = document.querySelectorAll(".container-grid");
    for(let i = 0; i < leftBtn.length; i++){
        leftBtn[i].addEventListener("click", function(){
            containerContainer[i].scrollLeft += 30;
        })
    }

    for(let i = 0; i < rightBtn.length; i++){
        rightBtn[i].addEventListener("click", function(){
            containerContainer[i].scrollLeft -= 30;
        })
    }
}
function main(){
    listAndXButton()
    slideShow();
    leftAndRightButton();
     
};
main();