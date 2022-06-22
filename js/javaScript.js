

function menu(){

 let estate =  document.getElementById("menuOpen")
  


    if( estate.style.display == ""){
        estate.style.animationName = "animationMenuOpen"
        document.body.style.overflow = "scroll"
        estate.style.display ="block"
        document.getElementById("black").style.display = "block"
       
    }else{
        document.body.style.overflow = "hidden"

        estate.style.animationName = "animationMenuClose"
        document.getElementById("black").style.display = ""

        const delay = setTimeout(function(){ estate.style.display =""},500)

    }

  
    
    
}
