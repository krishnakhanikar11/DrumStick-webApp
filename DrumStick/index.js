// detecting button press

for(var i =0;i<7;i++){
    document.querySelectorAll(".btn")[i].addEventListener("click", function(){
        var switchInnerHTML = this.innerHTML;

        makeSound(switchInnerHTML);
        btnAnimation(switchInnerHTML);
        
      });
}

// Detecting keyboard press

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    btnAnimation(event.key);
})


function makeSound(key){
    switch (key) {
        case "w":
            var tom_1 = new Audio('sounds/tom-1.mp3');
            tom_1.play();
            
            break;

        case "a":
            var tom_2 = new Audio('sounds/tom-2.mp3');
            tom_2.play();
                
            break;
        
        case "s":
            var tom_3 = new Audio('sounds/tom-3.mp3');
            tom_3.play();
                
            break;

        case "d":
            var tom_4 = new Audio('sounds/tom-4.mp3');
            tom_4.play();
                    
            break;

        case "j":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
                    
            break;

        case "k":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
                    
            break;

        case "l":
            var kick_bass = new Audio('sounds/kick-bass.mp3');
            kick_bass.play();
                    
            break;

        
        default:
            break;
    }

}


function btnAnimation(currentKey){
    var activeBtn = document.querySelector("." + currentKey);
    activeBtn.classList.add("pressed");

    setTimeout(function(){
        activeBtn.classList.remove("pressed");
    },100);

}