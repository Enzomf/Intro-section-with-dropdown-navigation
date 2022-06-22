

function menu(){

 let estate =  document.getElementById("menuOpen")
  


    if( estate.style.display == ""){
        estate.style.animationName = "animationMenuOpen"
     

        estate.style.display ="block"
        document.getElementById("black").style.display = "block"
       
    }else{
     


        estate.style.animationName = "animationMenuClose"
        document.getElementById("black").style.display = ""

        const delay = setTimeout(function(){ estate.style.display =""},500)

    }

  
    
    
}
