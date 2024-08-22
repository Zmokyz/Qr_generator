document.getElementById("Button_QR").addEventListener("click", function() {
    const inputValue = document.getElementById("Input_qr").value;
    sessionStorage.setItem('qrData', inputValue);
    window.location.href = 'qrPage.html'; // Redirect to the QR page
});