var homeEle = document.querySelector("header ul li:nth-child(1) a"),
    aboutEle = document.querySelector("header ul li:nth-child(2) a"),
    worksEle = document.querySelector("header ul li:nth-child(3) a"),
    contactEle = document.querySelector("header ul li:nth-child(4) a"),
    homeMargin = document.querySelector("header ul");

function homeClick(){
  homeEle.classList.add('click');
  if(homeEle.classList = 'click'){
      homeEle.style.color = 'hsl(0, 0%, 79%)',
      aboutEle.style.color = 'hsl(0, 0%, 79%)',
      worksEle.style.color = 'hsl(0, 0%, 79%)',
      homeMargin.style.marginTop = '300px',
      contactEle.style.color = 'hsl(0, 0%, 79%)';
  }
};

function aboutClick(){
    aboutEle.classList.add('click');
    if(aboutEle.classList = 'click'){
        homeEle.style.color = 'hsl(0, 0%, 40%)',
        aboutEle.style.color = 'hsl(0, 0%, 79%)',
        worksEle.style.color = 'hsl(0, 0%, 40%)',
        contactEle.style.color = 'hsl(0, 0%, 40%)',
        homeMargin.style.marginTop = '15px';
    }
};

function worksClick(){
    worksEle.classList.add('click');
    if(worksEle.classList = 'click'){
        homeEle.style.color = 'hsl(0, 0%, 40%)';
        aboutEle.style.color = 'hsl(0, 0%, 40%)';
        worksEle.style.color = 'hsl(0, 0%, 79%)';
        homeMargin.style.marginTop = '15px',
        contactEle.style.color = 'hsl(0, 0%, 40%)';
    }
};

function contactClick(){
    contactEle.classList.add('click');
    if(contactEle.classList = 'click'){
        homeEle.style.color = 'hsl(0, 0%, 40%)';
        aboutEle.style.color = 'hsl(0, 0%, 40%)';
        worksEle.style.color = 'hsl(0, 0%, 40%)';
        homeMargin.style.marginTop = '15px',
        contactEle.style.color = 'hsl(0, 0%, 79%)';
    }
};
