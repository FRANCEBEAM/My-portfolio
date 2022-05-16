// for navigation
const selection = document.querySelector('.selection');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menuItems = document.querySelectorAll('nav .selection li a');


openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menuItems.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    selection.style.display = 'flex';
    selection.style.top = '0';
}
function close(){
    selection.style.top = '-100%';
}
