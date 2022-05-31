  let menu = document.getElementById("menu");
    let nav1 = document.getElementById("nav1");
    let nav2 = document.getElementById("nav2");
    let aside = document.getElementById("aside");
    let video = document.getElementsByClassName("video");
    let hr = document.getElementById("hr");
    let logo = document.getElementsByClassName("logo");
    let searchIcon = document.getElementById("searchicon2");
    let arrow = document.getElementById("rightarrow");
    let field = document.getElementById("inputfield");
    let iconsright = document.getElementById("iconsright");
    let mic = document.getElementById("mic");
    let overlay = document.getElementById("overlay");
    searchIcon.onclick = function () {
        for (var i = 0; i < logo.length; i++) {
            logo[i].style.cssText = "display:none;";
        }
        arrow.style.display = "block";
        arrow.style.position="relative";
        arrow.style.top = "30%";
        field.style.display = "block";
        field.style.backgroundColor = "lightgray";
        field.style.width="360px";
        mic.style.display = "block";
        mic.style.top="1px";
        mic.style.backgroundColor="white";
        searchIcon.style.display = "none";
        iconsright.style.display = "none";
    };
    arrow.onclick = function () {
          field.style.display = "none";
          mic.style.display = "none";
         arrow.style.display = "none";
         searchIcon.style.display = "block";
         for (var i = 0; i < logo.length; i++) {
            logo[i].style.cssText = "display:block;";
        }
         iconsright.style.display = "block";
    };
     let toggle=false;
    menu.onclick = function () {
          if(toggle){
        nav1.style.display = "flex";
        nav2.style.display = "none";
        aside.style.width = "17%";
        aside.style.display = "block";
        for (var i = 0; i < video.length; i++) {
            video[i].style.width = "260px";
        }
        hr.style.width = "84.5%";
        hr.style.right = "-15.5%";
        overlay.style.display = "block";
        toggle=!toggle;
    }
   else{
             nav1.style.display = "none";
             nav2.style.display = "flex";
             aside.style.width = "7%"; 
             aside.style.cssText="@media(max-width: 900px) {aside {display:none;}}";
              for (var i = 0; i < video.length; i++) {
            video[i].style.width = "287px";
        }
        hr.style.width = "93%";
        hr.style.right = "-7%";
        overlay.style.display = "none";
             toggle=!toggle;
        }
    }; 