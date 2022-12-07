const container = document.querySelector('.container'),
qrInput = container.querySelector('.form input'),
generateButton = container.querySelector('.form button'),
qrImg = container.querySelector('.qr-code .img');

generateButton.addEventListener('click', () => {
    let qrVal = qrInput.value;
    if(!qrVal){
        Swal.fire(
            'Erro!',
            'Para gerar o QR CODE insira uma URL ou texto',
            'question'
          )
        return;
    }

    generateButton.innerText = "Gerando um QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrVal}`;
    qrImg.addEventListener('load', () => {
        generateButton.innerText = "Gerar QR CODE";
        container.classList.add('active');
    });


});

qrInput.addEventListener('keyup', () => {
    if(!qrInput.value){
        container.classList.remove('active');
    };
});
