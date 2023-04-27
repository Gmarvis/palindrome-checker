let word = document.querySelector('#word')
let btn = document.querySelector('#btn')
// results = document.getElementById('results')


// btn.addEventListener('click', function(){
// console.log(word.value)
    
// })



btn.addEventListener('click' , function (){
    
    // method two
    if (word.value === ""){
        alert ("please enter a word or phrase")
    }

    let arrWithNospace = []
    let arrReverse = []

    let allCharacters=''

    // 1st remove all spaces and special characters 
    for (let i = 0; i <word.value.length; i++){

        let characters = word.value[i]
        if (+characters){
        allCharacters += characters
    }
    else if (characters.toLowerCase() !== characters.toUpperCase()){
        allCharacters += characters

    }

    }
    let wordInLowerCase = allCharacters.toLowerCase()


    //      Using two arrays to diffenciate the regular string and the revese string 

    for (let i in wordInLowerCase){
        arrWithNospace.unshift(wordInLowerCase[i])
        arrReverse.push(wordInLowerCase[i])
    }


    // iterating through the two array to ditermine is it palindrone

    for (let i = 0; i < arrWithNospace.length; i++){
        if (arrWithNospace[i]=== arrReverse[i]){
            document.querySelector('span').innerText=`${word.value} : its Palindrome`
        }
        else {
            document.querySelector('span').innerText= `${word.value} , is not Palindrome`
        }
    }
    console.log(arrWithNospace)
    console.log(arrReverse)

    word.value = ""


  // method 0ne


/*
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

 */
        
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