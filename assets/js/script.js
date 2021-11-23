let btn = document.querySelectorAll(".btn")
let lastcontent;

btn.forEach((button)=>{
    button.onclick=function(){
      let dataid =  button.getAttribute("data-id")
      
        let content = document.getElementById(dataid)

        let contents = document.querySelectorAll(".content")
        contents.forEach((cnt)=>{
            cnt.classList.add("d-none")
        })

        content.classList.remove("d-none")
        
    }
})
