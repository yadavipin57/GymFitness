const menu = document.querySelector('.fa-bars')
const cutMenu = document.querySelector('.fa-xmark')
const sideBar = document.querySelector('.sidebar')

menu.addEventListener('click', ()=>{
    sideBar.style.right = '-1px'
})

cutMenu.addEventListener('click', ()=>{
    sideBar.style.right = '-300px'
})

// Scroll effect 

const hidden = document.querySelectorAll('.hidden')

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else{
            entry.target.classList.remove('show')
        }
    }) 
})

hidden.forEach((el)=> observer.observe(el))
