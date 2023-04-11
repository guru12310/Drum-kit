// this for when you click the letter it will play sound 

var numberofdrum=document.querySelectorAll(".drum").length;
for(var i=0; i<numberofdrum; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
var button=this.innerHTML;

makesound(button);
buttonanimation(button);
    });
}  


//this is for when you press the keyboard it play the sound


document.addEventListener("keypress",function(event){
    makesound(event.key);
    buttonanimation(event.key);
})

function makesound(key){

    switch(key){
        case "w":
var tom1= new  Audio("sounds/tom-3.mp3");
tom1.play();
break;

case "l":
var tom1= new  Audio("sounds/tom-2.mp3");
tom1.play();
break;

case "a":
    var tom1= new  Audio("sounds/tom-3.mp3");
    tom1.play();
    break;


    case "d":
        var tom1= new  Audio("sounds/tom-4.mp3");
        tom1.play();
        break;


         case "j":
            var tom1= new  Audio("sounds/tom-2.mp3");
            tom1.play();
            break;

            case "s":
                var tom1= new  Audio("sounds/kick-bass.mp3");
                tom1.play();
                break;

                case "k":
                    var tom1= new  Audio("sounds/snare.mp3");
                    tom1.play();
                    break;
    }
    
}

function buttonanimation(currentkey){
    var activeButton=document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}