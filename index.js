let ul = document.querySelector('.result-list');
let div = document.querySelector('.result');
let submit = document.getElementById('submit');
//get access to list json
let listArray;

 fetch("./list.json")
.then(response => {
   return response.json();
})
.then(function(data){
    listArray = data;
});

//fullfill form -- 'abcdefghijklmnopqrstuvwxyz'

let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let arr = [];
function randomArr(){
    for(let i = 0; i<5;i++){
        arr.push(characters[randomIndex()])
    }
}

function randomIndex () {
    return Math.floor(Math.random()*characters.length)
}

let letters = document.getElementById('letters');

function createRandomList (){
    for(let i = 0;i<letters.length;i++){
        letters.children[i].innerHTML=arr[i];
        letters.children[i].value=arr[i];
    }
}



randomArr();
createRandomList();

//result of search -- old version

letters.addEventListener('click',function(ev){
    if(ev.target.tagName==='OPTION'){
        ul.innerHTML='';
        seaRch(ev.target.innerHTML)
    } else {
        ul.innerHTML='';
        console.log('NO MATCHES')
        ul.insertAdjacentHTML('afterbegin',`<p>no matches!</p>`)
    }
})

function seaRch(letter){
    for(let i = 0;i<listArray.length;i++){
        if (listArray[i]["name"][0]===letter) {
            console.log(listArray[i]["name"])
            ul.insertAdjacentHTML('afterbegin',`<li>${listArray[i]["name"]}</li>`)
        }
    }
}
//result of search -- new version
/*function seaRch(letter){
    for(let i = 0;i<listArray.length;i++){
        if (listArray[i]["name"][0]===letter) {
            ul.insertAdjacentHTML('afterbegin',`<li>${listArray[i]["name"]}</li>`)
        }
    }
}

submit.addEventListener('click', function(ev){
    let userLetter = document.getElementById('letters').value;
    ul.innerHTML='';
    seaRch(userLetter);
    if (ul.innerHTML==false) {
        ul.insertAdjacentHTML('afterbegin',`<p>No matches!</p>`)
    }
    ev.preventDefault();
})*/

