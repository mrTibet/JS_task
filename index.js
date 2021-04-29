//get access to list json
let listArray;

 fetch("./list.json")
.then(response => {
   return response.json();
})
.then(function(data){
    listArray = data;
});

//fullfill form

let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
let arr = [];
function randomArr(){
    for(let i = 0; i<5;i++){
        arr.push(characters[randomIndex()])
    }
    console.log(arr);
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

letters.addEventListener('click',function(ev){
    if(ev.target.tagName==='OPTION'){
      console.log(ev.target.innerHTML)
    }
})



