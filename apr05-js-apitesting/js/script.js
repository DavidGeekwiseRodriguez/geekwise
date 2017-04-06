(function(){
    getReq('env.json', setVars)
}())

function getReq(url, callback){
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function(){
        if(req.readyState === 4 && req.status === 200){
            callback( JSON.parse(req.responseText) )
        }else{
            console.log('error', req.statusText);
        }
    }
    req.send(null);
}

var myVars;

function setVars(data){
    myVars = envVars();
    console.log(data);
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
