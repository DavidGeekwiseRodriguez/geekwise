(function(){
    getReq('env.json', init);
    // getReq('https://api.github.com/users/DavidGeekwiseRodriguez', getUser);
}());

function getReq(url, callback){
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function(){
        if(req.readyState === 4 && req.status === 200){
            callback(JSON.parse(req.responseText));
        }else{
            console.log('error', req.statusText);
        }
    }
    req.send(null);
}

function init(vars){
    const ROOT_URL = 'https://api.github.com/';
    const CLIENT_ID = vars.client_id;
    const CLIENT_SECRET = vars.client_secret;

    var main = document.querySelector('main'),
        searchInput = document.querySelector('form input[type="search"]'),
        searchSubmit = document.querySelector('form input[type="submit"]');

    searchSubmit.addEventListener('click', function(evt){
        main.innerHTML = '';
        evt.preventDefault();
        getReq(ROOT_URL+'search/users?client_id='+CLIENT_ID+'&client_secret='+CLIENT_SECRET+'&q='+searchInput.value, getUser);
    })
}

function getUser(user){
    console.log(user.items);
    var main = document.querySelector('main'),
        ul = document.createElement('ul'), li, img, h1;
    main.appendChild(ul);

    user.items.forEach(function(e, i){
        li = document.createElement('li'),
        img = document.createElement('img');
        h1 = document.createElement('h1');
        a = document.createElement('a');
        h2 = document.createElement('h2');

        h2.textContent = 'Type =' + ' ' + e.type;
        a.target = '_blank';
        img.src = e.avatar_url;
        h1.textContent = e.login;
        a.href = e.html_url;
        a.textContent = e.login;
        li.appendChild(a);
        ul.append(li);
        a.append(img);

    })
  /*
    var main = document.querySelector('main'),
        img = document.createElement('img'),
        h1 = document.createElement('h1');

    img.src = user.avatar_url;
    h1.textContent = user.login;
    main.append(h1, img);
  */
}
