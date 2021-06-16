var validation = new Validation();

function submitEmail() {
    let isValid = false;
    let email = getEle("emailInput").value;
    let firstName = getEle('firstNameInput').value;
    let lastName = getEle('lastNameInput').value;
    let message = getEle('messageInput').value;
    isValid = validation.kiemTraEmail(email,'emailNoti',"*Email must be in the correct format! example: abc12@gmail.com")
    isValid = validation.kiemTraRong(firstName, 'firstNameNoti', "*Name can't be blank!");
    isValid = validation.kiemTraRong(lastName, 'lastNameNoti', "*Name can't be blank!");
    isValid = validation.kiemTraRong(message, 'messageNoti', "*Message can't be blank!");
    if (isValid) return;
    emailSend(email, firstName, lastName, message);
    resetInput();
}

function emailSend(email, firstName, lastName, message) {

    Email.send({
        Host: "smtp.gmail.com",
        Username: "nguyenhuucanh1505@gmail.com",
        Password: "ffrvlwffwnwzezlu",
        To: "nguyenhuucanh1505@gmail.com",
        From: email,
        Subject: `${firstName + " " + lastName} sent you message`,
        Body: `Name: ${firstName + " " + lastName} <br/> Email: ${email} <br/> Message: ${message}`,
    }).then((message) => {
        getEle('noti').style.display = 'block'
        getEle('noti').innerHTML = "Thank you for your interest, your mail has been sent!"
        setTimeout(() => {
            getEle('noti').style.display = 'none'
        }, 5000)
    })
}

function resetInput() {
    getEle("emailInput").value = '';
    getEle('firstNameInput').value = '';
    getEle('lastNameInput').value = '';
    getEle('messageInput').value = '';
}

function getEle(id) {
    return document.getElementById(id);
}

let li = document.getElementsByClassName('nav-link');
for (var i = 0; i < li.length; i++) {
    li[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

//check email
getEle('emailInput').addEventListener('blur', function () {
    let email = getEle('emailInput').value;
    if(email !== ""){
        validation.kiemTraEmail(email,'emailNoti',"*Email must be in the correct format! example: abc12@gmail.com")
    }
    if(email === ""){
        validation.kiemTraRong(email, 'emailNoti', "*Email can't be blank!")
    }
})

//check name
getEle('firstNameInput').addEventListener('blur', function () {
    let firstName = getEle('firstNameInput').value;
    validation.kiemTraRong(firstName, 'firstNameNoti', "*Name can't be blank!")
})
getEle('lastNameInput').addEventListener('blur', function () {
    let lastName = getEle('lastNameInput').value;
    validation.kiemTraRong(lastName, 'lastNameNoti', "*Name can't be blank!")
})

//check message
getEle('messageInput').addEventListener('blur', function () {
    let message = getEle('messageInput').value;
    validation.kiemTraRong(message, 'messageNoti', "*Message can't be blank!")
})
