let count = 0;
let control = 0;
const animation = {
    "transition-property": "all",
    "transition-duration": "10s",
    "transition-timing-function": "ease-out"
};

function slideShow(){

    let screen = document.querySelectorAll("#slideshow .slideshow-container");
    let bar = document.querySelectorAll(".bars .bar");

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
    });
}


/* Moving Left and Right */
function leftAndRightButton(){
    let leftBtn = document.querySelectorAll(".left-of-p");
    let rightBtn = document.querySelectorAll(".right-of-p");
    let containerContainer = document.querySelectorAll(".container-grid .grid-system");

    // (function(elmProto){
    //     if(`scrollTopMax` in elmProto){
    //         return;
    //     }
    //     Object.defineProperties(elmProto, {
    //         `scrollTopMax`: {
    //             get: function scrollTopMax() {
    //                 return this.scrollHeight - this.clientHeight;
    //             }
    //         },
    //         `scrollLeftMax`: {
    //             get: function scrollLeftMax() {
    //                 return this.scrollWidth - this.clientWidth;
    //             }
    //         }

    //     });
    // }
    // )(Element.prototype);

    
    for(let i = 0; i < rightBtn.length; i++){
         
        rightBtn[i].addEventListener("click", function(){
            containerContainer[i].scrollLeft += 50;

            let maxWidth = containerContainer[i].scrollWidth - containerContainer[i].clientWidth;

            leftBtn[i].style.display = "block";

            setTimeout(function hello(){
                if(containerContainer[i].scrollLeft == maxWidth){
                    rightBtn[i].style.display = "none";

                    setTimeout(hello, 100)
                }
                else{
                    rightBtn[i].style.display = "block";
                }
            }, 100)
        })
        
        
        leftBtn[i].style.display = "none";
        leftBtn[i].addEventListener("click", function(){
              
            containerContainer[i].scrollLeft -= 50;
                        
            setTimeout(function hello(){
                if(containerContainer[i].scrollLeft == 0){
                    leftBtn[i].style.display = "none";
                    setTimeout(hello, 100);
                }
                else{
                    leftBtn[i].style.display = "block";
                }
            }, 100)
            
        })
    }
}


/* Working with NavBar links */
let controll = 0;
let helpControl = -1;
let toggleHelp = -1;
function navLinks(){
    let img = document.querySelectorAll("#ul-a-without li a img");
    let link = document.querySelectorAll("#ul-a-without li a");
    let screen = window.innerWidth;
    
    for(let i in link){
        link[i].onclick = ()=>{
            controll++;
            // link[i].classList.remove("active");
            link[i].classList.add("active");
            if(controll > 2){
                controll = 1;
            }
            if(controll == 2){
                for(let i in link){
                    link[i].classList.remove("active");
                }
                link[i].classList.add("active")
            }
            if(controll == 1){
                link[i].classList.add("active")
            }
            // controll++;
            // helpControl++;
            // toggleHelp++;
            // if(screen <= 1022){
            //     img[i].classList.add("chevron-top");
            // }
            // else{
            //     link[i].classList.toggle("active");
                
            //     if(controll > 2){
            //         controll = 1;
            //     }

            //     if(helpControl > 2){
            //         helpControl = 1;
            //     }

            //     if(helpControl == 2){
            //         controll = 2;
            //     }

            //     if(toggleHelp >= 3){
            //         toggleHelp = 3;
            //         controll = 2;
            //     }

                

            //     if(controll == 2){
            //         for(let i=0; i < link.length; i++ ){
            //             link[i].classList.remove("active");
            //         }
            //         link[i].classList.add("active")
            //     }

                

            //     if(link[i].classList == "active" && controll == 2){
            //         link[i].classList.remove("active");
            //         // link[i].classList.remove("active")
            //         console.log("Hello")
            //         if(link[i].classList != "active"){
            //             link[i].classList.add("active");
            //         }
                    
            //     }
            //     else{
            //         console.log("End")
            //     }
            //     // if(link[i].classList != "active"){
            //     //     console.log("Open")
            //     // }
                
            // }

            console.log(controll) 
        }
        
    }

    // setTimeout(navLinks, 100);
}
function main(){
    listAndXButton()
    slideShow();
    leftAndRightButton();
    //navLinks();
};
main();
