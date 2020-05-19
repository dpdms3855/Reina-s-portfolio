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

  scrollIntoView(link);
});

//Handle click on "contact me" button on home
const homeContactBtn = document.querySelector('.home_contact');
homeContactBtn.addEventListener('click',()=>{
   scrollIntoView('#contact')  
});

//Makr home slowly fade to transparent as the window scrolls down
const home= document.querySelector('.home_container');
const homeHeight= home.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
    home.style.opacity= 1-window.scrollY/ homeHeight;  //opacity가 1이면 완전불투명, 0이 투명이니까 
                                                     //homrHieght이 800px이라면 스크롤이 800px일때 나누면 1이 됨->1-1=0=>투명
});                                                  //window의 스크롤이 크면클수록  투명에 가까워지는것


const arrowUp = document.querySelector('.arrow-up');
//Show "arrow-up" button when scrolling down
document.addEventListener('scroll',()=>{
   
    if(window.scrollY>homeHeight/2){
        arrowUp.classList.add('visible');
    }else{      //스크롤이 위에 있는 경우엔 보여지면 안되므로
        arrowUp.classList.remove('visible');
    }
});

//Handle click on the 'arrow-up'button
arrowUp.addEventListener('click',()=>{
    scrollIntoView("#home");
    console.log("dd")
});


//Projects
const workBtnContainer=document.querySelector('.work_categories');
const projectContainer=document.querySelector('.work_projects');
const projects = document.querySelectorAll('.project'); //4개의 프로젝트가 담긴 배열이 만들어짐

workBtnContainer.addEventListener('click',(e)=>{
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    console.log(filter);
    if(filter==null){
        return;
    }

    projectContainer.classList.add('anime-out');

    setTimeout(()=>{    //브라우저야~이 코드의 블럭을 0.3초 후에 실행해죠 하고 전달 후 끝맺음
        projects.forEach((project)=>{
            console.log(project.dataset.type);     
            //버튼을 누르면 해당 프로젝트만 나오게끔 하기
            if(filter==='*'||filter===project.dataset.type){   //만약 선택한 필터가 전부 다 보여지는 all이거나, 
               project.classList.remove('invisible');              //혹은, 선택한 필터와 필터가 프로젝트에 있는 데이타 셋 타입이 같으면
            }else{                                                 //보여줘야하니까 안보여지는 클래스를 없애고,,
               project.classList.add('invisible');              //타입이 필터와 동일하지않으면
            }                                                      //안보여야 하니까 안보여지는 클래스를 add한다.
           });
        projectContainer.classList.remove('anime-out');
    },300)
    /*0.3초가 지났을때 그때 필터링을해서 애니메이션을 지워주는,,
    setTimeout에 전달한 이런 함수는 0.3초 이후에 브라우저로부터 호출된다.
    */ 
});





function scrollIntoView(selector){      //네브바 메뉴에도, 버튼에도 해당함수가 필요하므로 따로 작성.
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:'smooth'});
}