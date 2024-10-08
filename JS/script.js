function joinWhatsApp() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const christian = document.getElementById('christian').value;

    if (name && phone && email && christian) {
        // Link para o grupo do WhatsApp (substitua o link abaixo pelo seu)
        const whatsappLink = "https://chat.whatsapp.com/EXEMPLO_LINK_DO_GRUPO";
        window.location.href = whatsappLink;
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}
