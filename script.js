// Año dinámico
document.getElementById('year').textContent = new Date().getFullYear();

// Enviar formulario a WhatsApp
const form = document.getElementById('contacto');
if (form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const nombre = encodeURIComponent(document.getElementById('nombre').value.trim());
    const mensaje = encodeURIComponent(document.getElementById('mensaje').value.trim());
    const texto = `Hola Globos Vale! Soy ${nombre}. ${mensaje}`;
    const url = `https://wa.me/56946349041?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
  });
}

// Botón flotante a WhatsApp
const wbtn = document.querySelector('.whatsapp-float');
if (wbtn){
  wbtn.addEventListener('click', ()=>{
    window.open('https://wa.me/56946349041?text=Hola%20Globos%20Vale!%20Quiero%20cotizar%20%F0%9F%8E%88', '_blank');
  });
}