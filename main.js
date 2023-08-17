const word = document.querySelector("#word");
const btn = document.querySelector("#btn");
// results = document.getElementById('results')

// btn.addEventListener('click', function(){
// console.log(word.value)

// })

btn.addEventListener("click", function (e) {
  e.preventDefault();

  // we first prevent the submition of an empty string

  if (word.value === "") {
    document.querySelector("span").innerText = "please enter a word or phrase";
    document.querySelector("span").style.color = "red";
    return;
  }
  // convert string to lowercase
  // split the srinng after every latter
  // remove all spaces
  const wordrem = word.value.toLowerCase().split(" ").join("");

  console.log(wordrem);

  // invert the string so we can compare the with previews to check palindriome
  const resersed = word.value
    .toLowerCase()
    .split(" ")
    .join("")
    .split("")
    .reverse()
    .join("");
  console.log(resersed);

  // our first condition is to check is our main string or sentence in equal the reversed string.
  if (resersed === wordrem) {
    document.querySelector("span").innerText = `${word.value} : Is Palindrome`;
    document.querySelector("span").style.color = "green";
    return;
  } else 
  {
    document.querySelector("span").innerText = `${word.value} : not Palindrome`;
  } // we print the the dom our results
  document.querySelector("span").style.color = "red";

  word.value = "";
});
