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
            console.log('error', statusText);
        }
    }
    req.send(null);
}

var myVars;

function envVars(data){
    var url = 'https://oc-index.library.ubc.ca/search?api_key=', id;
    return {
        setID: function(data){
            id = data;
        },
        getID: function(){
            return id;
        },
        getUrl: function(){
            return url;
        }
    };
}

function setVars(data){
    myVars = envVars();
    myVars.setID(data.key);

    setPage();
}

function setPage(){
    getReq(myVars.getUrl()+myVars.getID(), search);
}

function search(info){
    console.log(info);
}
