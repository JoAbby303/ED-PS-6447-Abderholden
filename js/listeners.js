smartbutton.addEventListener('click',function(){
    if(smartbuttonclicked == false) {
        myFunction();
        smartbuttonclicked=true;
    } else {
        myFunction_default();
        smartbuttonclicked=false;
    }
    
})

smartbutton2.addEventListener('click',function(){
    if(smartbuttonclicked2 == false) {
        myFunction();
        smartbuttonclicked2=true;
    } else {
        myFunction_default2();
        smartbuttonclicked2=false;
    }
    
})
