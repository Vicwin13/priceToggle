let myToggle = document.getElementById("myToggle");
// let toggle =toggleButton.toggleAttribute("checked");

let basic = document.getElementById("amount1");
let professional = document.getElementById("amount2");
let master = document.getElementById("amount3");



function basicPrice(){

    if (myToggle.classList.contains("checked")){
        myToggle.classList.remove("checked");
        basic.innerHTML = 19.99;
        professional.innerHTML = 24.99;
        master.innerHTML = 39.99;
        
    } 
    else {
        myToggle.classList.add("checked");
        console.log("Its just been added");
        basic.innerHTML = 199.99;
        professional.innerHTML = 249.99;
        master.innerHTML = 399.99;
    }
    


}

myToggle.addEventListener("click", basicPrice);
