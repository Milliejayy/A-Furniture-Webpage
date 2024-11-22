function validateform() {
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let surname = document.getElementById('surname').value.trim();
    let password = document.getElementById('password').value.trim();
    let gender = document.querySelector('input[name="gender"]:checked');

    if (name === "" || 
    surname === "" || 
    email === "" || 
    password === "" || 
    !gender === 0){
        alert("Please, fill all fields");
        return;
    }

    if (password.length < 6) {
        alert("Password mjust be greater than 6 characters");
        return;
    }

    let hasUpperCase = false;
    let hasLowerCase = false;
    let hasSymbol = false;
    let hasDigit = false;

    for (let char of password) {
        if(char >= 'A' && char <= 'Z'){
            hasUpperCase = true;
        } else if (char >= 'a' && char <= 'z') {
            hasLowerCase = true;
        } else if (char >= '0' && char <= '9'){
            hasDigit = true;
        } else {
            hasSymbol = true;
        }
    }

    if (!hasUpperCase || !hasLowerCase || !hasSymbol || !hasDigit) {
        alert("Password must contain at least one uppercase letter, one lowercase letter, one digit and one symbol");
        return;
    }

    window.location.href = 'index.html';
}