const modeToggle = document.querySelector('.switch');
const navLinks = document.querySelectorAll('.nav-link');

const tabLinks = document.querySelectorAll('.tab-link');
const tabContent = document.querySelectorAll('.tab-content');
var i;

modeToggle.addEventListener("click", (e) => {
    e.target.checked ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')
    ;
});


//Show Content

document.getElementById("defaultOpen").classList.add('active');
tabContent[0].classList.add('open');

tabLinks.forEach(tab => tab.addEventListener('click', openTab))

function openTab(e){
  for(i=0; i<tabContent.length;i++){
    tabContent[i].classList.remove('open');
  }
  for(i=0; i<tabLinks.length;i++){
    tabLinks[i].classList.remove('active');
  }
  
  let index = [...tabLinks].indexOf(e.target);
  let tabArray = [...tabContent];
  
  tabArray[index].classList.add('open');
  tabLinks[index].classList.add('active');
}
