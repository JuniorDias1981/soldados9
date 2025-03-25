// Mostrar/esconder formulário ao clicar no botão
document.getElementById('abrir-form').addEventListener('click', function() {
    const form = document.getElementById('form-contato');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
});

// Enviar formulário para o WhatsApp
document.getElementById('form-whatsapp').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const numeroWhatsapp = "5522999138432"; // Substitua pelo número real (com código do país e DDD, sem + ou espaços)

    const texto = `Olá, Soldado 9! Meu nome é ${nome} e gostaria de ajudar. ${mensagem}`;
    const textoCodificado = encodeURIComponent(texto);
    const urlWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${textoCodificado}`;

    window.open(urlWhatsapp, '_blank');

    // Opcional: Limpar formulário após envio
    this.reset();
    document.getElementById('form-contato').style.display = 'none';
});
