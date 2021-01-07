// 1) Select the section with an id of container without using querySelector

let container = document.getElementById("container");
console.log(container);

// 2) Select the section with an id of of container using querySelector

let container1= document.querySelector("#container");
console.log(container1);

// 3) Select all of the list of items with class of "second"

const secondElements = document.querySelectorAll(".second");
// console.log(secondElements);
secondElements.forEach(element =>{
    console.log(element)
});
    
// 4) Select a list item with a class of third, but only the list item inside of the tag

let thirdItem = document.getElementsByClassName("third")[1];
console.log(thirdItem);

// 5) Give the section with an id of container the text "Hello!"

 let newSection = document.querySelector("#container");
 newSection.append("Hello!");

// 6) Add the class main to the div with a class of footer.

let footer = document.getElementsByClassName("footer")[0];
footer.classList.add("main");

// 7) Remove the class main on th div with a class of footer.

footer.classList.remove("main");

// 8)Create new li element

let li = document.createElement("LI");

// 9) Give the li the text 'four'

let x = document.createTextNode("four");
li.appendChild(x);   //append new text to li.
//or
// li.innerText = ("four")

// 10) Append the li to the ul element 

let ul = document.querySelector('ul');
ul.append(li);

// 12) Loop over all of the list inside the ol tag and give them background color of "green"

const ol = document.querySelector("ol");
let arr= Array.from(ol.children);
for(let value of arr){
    value.style.backgroundColor = "green";
}

// 13) Remove the div with a class of footer

footer.remove();










