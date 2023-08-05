function generateQRCode() {
    var inputUser = document.querySelector('textarea').value
    var googleChartAPI = "https://chart.googleapis.com/chart?cht=qr&chs=220x220&chld=H&chl="
    var qrcodeContent = googleChartAPI + encodeURIComponent(inputUser)
    document.querySelector("#qrcode-image").src = qrcodeContent 
}