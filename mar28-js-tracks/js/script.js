(function(){
    getReq('https://www.udacity.com/public-api/v0/courses', init);
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

function init(data){
    console.log(data.tracks);

    data.tracks.forEach(function(e, i){
        console.log('hi');
    })
}
