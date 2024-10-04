function highlight() {
    //Write your code here
    let strong = document.querySelectorAll("strong");
    // console.log(strong);
    

    strong.forEach((boldie => {
        
        boldie.style.color = "green"
    }))
    
    
    
}


function return_normal() {
    //Write your code here
    let strong = document.querySelectorAll("strong");
    // console.log(strong);
    
    
    strong.forEach((boldie => {
        
        boldie.style.color = "black"
    }))

    
}