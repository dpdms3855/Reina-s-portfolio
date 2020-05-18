'use strict';

//Make navbar transparent when it is on the top
const navabar = document.querySelector('#navbar');
const navbarHeight=navbar.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{   
    console.log(window.scrollY);
    console.log('navbarHeight: ${navbarHeight}');
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar__dark');
    }else{
        navbar.classList.remove('navbar__dark');
    }
})
 //스크롤이 될때마다 이 함수를 호출해줘
    //arrow function이라고도하는데, 아무런 인자를 받지않고 우리가 원하는 블럭을 실행하는것
    //스트롤이 될때마다 블럭안에서 작성한 코드가 실행하도록,,,


//Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar_menu');
navbarMenu.addEventListener('click',(event)=>{
    const target= event.target;
    const link = target.dataset.link;
    if(link==null){
        return;
    }

    console.log(event.target.dataset.link);
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior:'smooth'});
});