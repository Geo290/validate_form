var flag = flase;
function validate() {
    if (flag) {
        console.log("Validation completed");
        var user = document.getElementById("user").value
        var password = document.getElementById("password").value

        alert(user)
        alert(password)
    }
}

function correctCaptcha() {
    console.log("Captcha answered successfully");
    flag = true;
}