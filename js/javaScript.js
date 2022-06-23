






function menu() {

    let estate = document.getElementById("menuOpen")

    document.getElementById("menu").classList.toggle("change");
    
    
    if (estate.style.display == "") {
        estate.style.animationName = "animationMenuOpen"
        
        document.body.style.overflow = "hidden"
    

        estate.style.display = "block"
        document.getElementById("black").style.display = "block"

    } else {
        document.body.style.overflow = "visible"


        estate.style.animationName = "animationMenuClose"
        document.getElementById("black").style.display = ""

        const delay = setTimeout(function () { estate.style.display = "" }, 500)

    }
}




function menuOpen(controle) {

    let features = document.getElementById("featuresExtended")
    let company = document.getElementById("companyExtended")

    if (controle == 1) {
        if (features.style.display == "") {
            features.style.display = "block"
            features.style.animationName = "menuExpansion"

            document.getElementById("featuresArrow").style.transitionDuration = "1s"
            document.getElementById("featuresArrow").style.transform = "rotate(-180deg)"
        } else {

            features.style.animationName = "menuRetration"
            document.getElementById("featuresArrow").style.transitionDuration = "1s"
            document.getElementById("featuresArrow").style.transform = "rotate(0deg)"
            const animationControl = setTimeout(function(){ features.style.display = ""}, 250)
           
        }
    }


    if (controle == 2) {
        if (company.style.display == "") {
            
            company.style.display = "block"
            company.style.animationName = "menuExpansion"
            document.getElementById("companyArrow").style.transitionDuration = "1s"
            document.getElementById("companyArrow").style.transform = "rotate(-180deg)"
            
      
        } else {

            document.getElementById("companyArrow").style.transitionDuration = "1s"
            document.getElementById("companyArrow").style.transform = "rotate(0deg)"
           
            company.style.animationName = "menuRetration"
            const animationControl = setTimeout(function(){ company.style.display = ""}, 250)
        }
    }




}
