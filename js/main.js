function submitEmail() {
    let email = getEle("emailInput").value;
    let firstName = getEle('firstNameInput').value;
    let lastName = getEle('lastNameInput').value;
    let message = getEle('messageInput').value;
    emailSend(email, firstName, lastName, message);
    resetInput();
}

function emailSend(email, firstName, lastName, message) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "nguyenhuucanh1505@gmail.com",
        Password: "ffrvlwffwnwzezlu",
        To: "nguyenhuucanh1505@gmail.com",
        From: "nguyenhuucanh1505@gmail.com",
        Subject: `${firstName + " " + lastName} sent you message`,
        Body: `Name: ${firstName + " " + lastName} <br/> Email: ${email} <br/> Message: ${message}`,
    }).then((message) => { alert('Thank you for your interest, your mail has been sent!') })

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
