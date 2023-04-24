let word = document.querySelector('#word')
let btn = document.querySelector('#btn')
// results = document.getElementById('results')


// btn.addEventListener('click', function(){
// console.log(word.value)
    
// })



btn.addEventListener('click' , function (){
    if (word.value === ""){
        alert ("please enter a word or phrase")
    }

    let wordrem = word.value.toLowerCase().split(' ').join('')

    console.log(wordrem)


    let resersed = word.value.toLowerCase().split(' ').join('').split('').reverse().join('');
    console.log(resersed)

    if (resersed === wordrem){
        document.querySelector('span').innerText=`${word.value} , its Palindrome`
    }

    else 
    document.querySelector('span').innerText= `${word.value} , is not Palindrome`

    word.value = ""
        
    })


//     const myText = '  abc def ghi   ';
// const newText = myText.split(' ').join('').split('').reverse().join('');
// console.clear();
// console.log(newText);
























// btn.addEventListener('click' , function (){

// let resersed = word.value.split("").reverse().join("");

//     if (resersed === word.value){
//         document.querySelector('span').innerText="its Palindrome"
//     }

//     else 
//         document.querySelector('span').innerText="its not Palindrome"
    
// })


// function polindrone(str) {
//     let resersed = str.split("").reverse().join("");
//     if (resersed === str) {
//     return true;

//     }

//     else return false
// }

// console.log(polindrone("dad"))