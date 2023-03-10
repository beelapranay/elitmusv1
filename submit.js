//const form = document.querySelector('.form')

var fname = document.getElementById("name")
var email = document.getElementById("email")
var code = document.getElementById("code")
var submit = document.getElementById("submit")

submit.addEventListener("click", event => {
    var data = {
        "name": fname.value,
        "email": email.value,
        "testcode": code.value
    }

    console.log(data)

    fetch('https://fce7-49-204-133-92.in.ngrok.io/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    }).then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
})