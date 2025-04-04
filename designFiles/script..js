document.getElementById('btn-send-otp').addEventListener('click', function() {
    const emailInput = document.getElementById("email").value;
    const otpVerifySection = document.getElementById("email-verify");
    const otpCode = Math.floor(1000 + Math.random() * 9000); 
    const emailBody = `<h1>Your OTP is: ${otpCode}</h1>`;

    if (emailInput === "") {
        alert("Please enter your email.");
        return;
    }
    Email.send({
        SecureToken: "d37a0370-7a80-415e-bff5-34e967a4fab7", 
        To: emailInput, 
        From: "dhanushri1702@gmail.com",  
        Subject: "Your OTP Code",
        Body: emailBody
    }).then(function (message) {
        if (message === "OK") {
            alert("OTP sent to your email: " + emailInput);
            otpVerifySection.style.display = "block"; 
        } else {
            alert("Failed to send OTP. Please try again.");
        }
    }).catch(function (error) {
        console.error("Error sending email: ", error);
        alert("Error sending OTP. Please check your network or configuration.");
    });
    document.getElementById('btn-verify-otp').onclick = function() {
        const otpInput = document.getElementById('otp-input').value;
        if (otpInput == otpCode) {
            alert("OTP verified successfully!");
            otpVerifySection.style.display = "none";  
        } else {
            alert("Invalid OTP. Please try again.");
        }
    };
});
