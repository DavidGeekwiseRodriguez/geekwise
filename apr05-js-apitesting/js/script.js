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
        
    }
}
