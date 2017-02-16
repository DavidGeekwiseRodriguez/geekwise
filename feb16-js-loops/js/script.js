var firstBtn = document.getElementById('add');
var secondBtn = document.getElementById('remove');
var userNameArray = [];
var moviesArray = ['jurassic park', 'any marvel movie', 'tucker and dale', 'jimmy neutron', 'akira', 'Jimmy Timmy Power Hour'];

// for(var i =0; i < moviesArray.length; i++){
//     console.log(moviesArray[i]);
// }

moviesArray.forEach(movieLoop);

function movieLoop(e, i){
    console.log(i + ' : ' + e);
}

firstBtn.addEventListener('click', userPrompt);
secondBtn.addEventListener('click', function(){
    alert('hacked again!1!!')
});

function populateArray(un){
    userNameArray.push(un)
    console.log(userNameArray);
    if(userNameArray.length >= 5){
        outputArray()
    }
}

function outputArray(){
    // FOREACH LOOP, only for array
    userNameArray.forEach(function(el, idx){
        console.log(idx + ' : ' + el);
    })
    /* FOR LOOP
    for(var i = 0; i < userNameArray.length; i++){
        console.log(userNameArray[i]);
    }
    */
}

function userPrompt(){
    var userName = prompt('gimme ur name')
    if(userName === null){
        alert('enter a name fren')
        return
    }

    var userNameParsed = parseInt(userName)
    var userNameNaN = isNaN(userNameParsed)
    var userNameBlank = userName.trim() === '' // !== || ===
    // console.log('original: '+userName)
    // console.log('parsed: '+userNameParsed)
    // console.log('is it NaN: '+userNameNaN)
    // console.log('is it blank: '+userNameBlank);

    if(userNameNaN === false && userNameBlank === false || userNameNaN === true && userNameBlank === true){
        alert('you entered bad info bruh')
    }else{
        // alert('you may continue mah dood')
        populateArray(userName)
    }

}
