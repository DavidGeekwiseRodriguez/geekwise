(function(){
    getReq('env.json', setVars)
}())

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

var myVars;

function setVars(data){
    myVars = envVars();
    myVars.set_root_url(data.root_url);
    myVars.set_img_url(data.img_url);
    myVars.set_api_key(data.api_key);
    myVars.set_access_token(data.access_token);

    var url = myVars.get_root_url()+'search/movie?api_key='+myVars.get_api_key()+'&language=en-US&page=1&query=Jurassic';

    getReq(url, getMovies);
}

function getMovies(movies){
    var main = document.querySelector('main'),
        section = document.createElement('section'),
        h1 = document.createElement('h1'),
        h2 = document.createElement('h2'),
        p = document.createElement('p'),
        ul = document.createElement('ul'), li, poster_path, h2, p, div;
    h1.textContent = 'Trending Movies';
    section.append(h1, ul);
    main.appendChild(section);

    movies.results.forEach(function(e){
        li = document.createElement('li');
        poster_path = document.createElement('img');
        original_title = document.createElement('h2');
        overview = document.createElement('p');
        div = document.createElement('div');

        poster_path.src = myVars.get_img_url()+'w500'+e.poster_path;
        original_title.textContent = e.original_title;
        overview.textContent = e.overview;

        overview.textContent = e.overview.split(".").splice(0, 3)+".";

        div.append(original_title, overview);
        li.append(poster_path, div);
        ul.appendChild(li);
    })
    pageSetup();
}

function envVars(){
    var root_url, img_url, api_key, access_token;
    return {
        set_root_url: function(data){
            root_url = data;
        },
        set_img_url: function(data){
            img_url = data;
        },
        set_api_key: function(data){
            api_key = data;
        },
        set_access_token: function(data){
            access_token = data;
        },
        get_root_url: function(data){
            return root_url;
        },
        get_img_url: function(data){
            return img_url;
        },
        get_api_key: function(data){
            return api_key;
        },
        get_access_token: function(data){
            return access_token;
        }
    }
}

function pageSetup(){
    var search = document.querySelector('form input[type="search"]'),
        searchBtn = document.querySelector('form input[type="submit"]');

    searchBtn.addEventListener('click', function(evt){
        evt.preventDefault();
        var userSearch = search.value;

        var url = myVars.get_root_url()+'search/movie?api_key='+myVars.get_api_key()+'&language=en-US&page=1&query='+userSearch;

        getReq(url, getMovies);
    })
}
