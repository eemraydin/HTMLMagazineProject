let menuButton = document.getElementById("hamburger")

menuButton.addEventListener('click',function(){

    let menu = document.getElementById('menu')
    menu.classList.toggle('show_menu')
    

})

window.onscroll = function() {scrollFunction()}
    function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("title").style.fontSize = "20px";
        document.getElementById("search").style.width = "120px";
      } else {
        document.getElementById("title").style.fontSize = "40px";
        document.getElementById("search").style.width = "80px";
      }
    }

    let menuButton2 = document.getElementById("hambur2")

    menuButton2.addEventListener('click',function(){

        let menu2 = document.getElementById('menu')
        menu2.classList.toggle('show_menu')
        
     
    })