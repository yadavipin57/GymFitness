const menu = document.querySelector('.fa-bars')
const cutMenu = document.querySelector('.fa-xmark')
const sideBar = document.querySelector('.sidebar')

menu.addEventListener('click', ()=>{
    sideBar.style.right = '-1px'
})

cutMenu.addEventListener('click', ()=>{
    sideBar.style.right = '-300px'
})