var flag = false;
function validate() {
    var user = document.getElementById("user").value
    var password = document.getElementById("password").value

    alert(user)
    alert(password)

    if (flag) {
        console.log("Validation completed");
    }
}

function correctCaptcha() {
    console.log("Captcha answered successfully");
    flag = true;
}