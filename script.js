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
