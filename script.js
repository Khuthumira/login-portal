const express = require('express')
const app = express()
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

function checkLogin(event) {
    event.preventDefault(); // Prevent form from refreshing page
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (username === "admin" && password === "admin") {
        // Store login status (can be used to prevent unauthorized access to dashboard)
        localStorage.setItem("loggedIn", "true");
        
        // Redirect to dashboard
        window.location.href = "dashboard.html";
    } else {
        errorMessage.textContent = "Invalid username or password!";
    }
}
