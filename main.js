let menuBar=document.querySelector("#menu_bar")
let navList=document.querySelector("#nav_list")
let container1=document.querySelector("#container1")
let aboutContainer1=document.querySelector("#about_container1")
menuBar.addEventListener("click",()=>{
    if(navList.classList.contains('hidden')){
        navList.classList.remove('hidden')
        setTimeout(function(){

            navList.classList.add('-translate-x-full')
        },3000)
    }
    else{
        navList.classList.add('hidden')
        setTimeout(function(){
            
            navList.classList.remove('-translate-x-full')
        },3000)
    }
    
        
})
container1.addEventListener("click",()=>{
    if(aboutContainer1.classList.contains('max-h-0')){
        aboutContainer1.classList.remove('max-h-0')
    }
    else{
        aboutContainer1.classList.add('max-h-0')
    }
})