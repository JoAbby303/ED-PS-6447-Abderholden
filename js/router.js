/*function router(value){
    hideallview();
    switch(value){
        case "grid":
                console.log("Show grid view");
                grid.classList.remove("d-none");
                //$("#grid").show();
            break;
            
        case "view_resume":
                console.log("Show view resume");
                view_resume.classList.remove("d-none");
            break;
        default:
            console.log("Show view design");
            view_design.classList.remove("d-none");
    }
}

function hideallview(){
    grid.classList.add("d-none");
    //$("#grid").hide();
    view_resume.classList.add("d-none");
    view_design.classList.add("d-none");*/

function myFunction() {
  document.getElementById("wrapper_1").innerHTML = "<img width='600px' src='../img/SmartBoard%20%20(1).jpeg'/>";
}
function myFunction_default() {
  document.getElementById("wrapper_1").innerHTML = "<img width='500px' src='../img/SmartBoard%20%20(1).jpeg'/>";
}
function myFunction2() {
  document.getElementById("wrapper_2").innerHTML = "<iframe width='600' height='315' src='https://www.youtube.com/embed/9Zw_s6pzQLU' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
}

function myFunction_default2() {
  document.getElementById("wrapper_2").innerHTML = " <img src="../img/app.png" width="500" height="300">";
}
