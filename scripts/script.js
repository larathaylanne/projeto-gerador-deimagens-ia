document.getElementById('formgerador')
.addEventListener('submit', function(e) {
    e.preventDefault();

    const textoDigitado = document.getElementById('descrition-text').value;
    console.log("Texto capturado: ", textoDigitado)

    document.querySelector('.loader').style.display = 'block';

    setTimeout(function() {
        document.querySelector('.loader').style.display = 'none';
    
    console.log("Pronto! Aqui viria a imagem gerada!");
    }, 3000);

    document.querySelector('.loader p').textContent = "Imagem gerada com sucesso! Redirecionando...";

    setTimeout(function() {
        localStorage.setItem('descricaoImagem', textoDigitado);

        window.location.href = "contato.html";
    }, 2000);

}, 3000);