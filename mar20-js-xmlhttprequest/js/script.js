// var req = new XMLHttpRequest();

var car = {
    make: 'jeep',
    model: 'wrangler',
    color: 'black',
    year: 2012,
    doors: 2
}

for(key in car){
    // console.log(opts); // grabs properties, not values
    // console.log(car[opts]); // grabs values, not properties
    // console.log(key + ' : ' + car[key]);
}

const ROOT_URL = 'https://api.github.com/';


var main = document.querySelector('main'),
    img, h1, req, githubObj;

function getReq(){
    req = new XMLHttpRequest();
    req.open('GET', ROOT_URL+'users/DavidGeekwiseRodriguez?client_id='+CLIENT_ID+'&client_secret='+CLIENT_SECRET);

    req.onload = function(){
        if(req.readyState === 4 && req.status === 200){
            console.log('success', req.statusText);
            githubObj = JSON.parse(req.responseText);
        }else{
            console.log('error', req.statusText);
        }
    // img = document.createElement('img'),
    // h1 = document.createElement('h1');
    // console.log('DONE', req.readyState);
    // var githubObj = JSON.parse(req.responseText);
    // console.log(githubObj);
    // img.src = githubObj.avatar_url;
    // h1.textContent = githubObj.login;
    // main.append(img, h1);
    }
    req.send(null);
}

(function(){
    getReq();
    console.log(githubObj);
}());
