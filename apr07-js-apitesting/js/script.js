(function(){
    getReq('env.json', setVars);
}())

function getReq(url, callback){
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function(){
        if(req.readyState === 4 && req.status === 200){
            callback( JSON.parse(req.responseText) );
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
}

function envVars(data){
    var root_url, img_url, api_key, access_token;
    return {
        set_root_url: function(data){
            root_url = data;
        },
        set_img_url: function(data){
            root_url = data;
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
