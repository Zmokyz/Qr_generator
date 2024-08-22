const QRshow = document.getElementById("QRImage");
const DownloadButton = document.getElementById("Dowload_button")
const ShareButton = document.getElementById("Copy_button")


async function MakeQR() {
    //consult the qrdata from
    const data = sessionStorage.getItem('qrData');
    if (data) {
        try {
            const dataUrl = await QRCode.toDataURL(data);
            QRshow.src = dataUrl;
            //Share Button
            ShareButton.addEventListener("click", function() {
                let copy_text= data;
                //this is actually the thing that make the clipboard copy the text 
                navigator.clipboard.writeText(copy_text);
                alert("Copied the text: " + copy_text);
                console.log("coppied")
            });//catch the error 
        } catch (error) {
            console.error('Error:', error);
        } //catch the other error Lol
    } else {
        console.error('No data found for QR code generation');
    }
}

MakeQR();

//function for dowloading button 
DownloadButton.addEventListener("click",()=>{
    //element with the image and the dowload
    const Link = document.createElement("a");
    Link.href = QRshow.src;
    Link.download = "QrCode";
    //we put the element on the body
    document.body.appendChild(Link);
    //simulates a click on the element
    Link.click();
    //removes the element from the structure
    document.body.removeChild(Link);
})
