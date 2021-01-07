$(document).ready(function(){
    function printHTML(text){
    let printHTML = document.getElementById('text');
    printHTML.innerHTML += text;
}
$('#leftButton').click(function(){
// $('.text2').remove();                               //removing other text
    printHTML("<h1 class ='text2'> I'm Right! </h1>")       //displaying new text
})

$('#rightButton').click(function(){
$('.text1').remove();                                           //removing old text
    printHTML("<h1 class ='text2'> No, I'm Right! </h1>")       //displaying new text
})

$('.noHover').hover(function(){
    alert("Hey, I told you not to hover over me!")              //alert not to hover
})

})

const submit = document.getElementById("loginSubmit");

const login = document.getElementById("main");

submit.addEventListener("click", (e) => {

const password = document.getElementById('password').value;

    e.preventDefault();

    if (password === "12345678") {
        login.innerHTML = "<h1>Login Success!</h1>"
    } else {
        alert("Incorrect password. Please try again.");
    }
});

document.getElementById("body").style.background = "gold";
