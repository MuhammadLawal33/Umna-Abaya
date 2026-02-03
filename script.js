 const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-zoom');

  const revealOnScroll = () => {
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const revealTop = reveals[i].getBoundingClientRect().top;
      const revealPoint = 120;

      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add('active');
      }
    }
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // run on page load


function sendToWhatsApp(button) {
  const productCard = button.closest(".product");

  const productName = productCard.querySelector("h3").textContent.trim();
  const price = productCard.querySelector(".price").textContent.trim();
  
  const message = 
`Hello UMNA ABAYA 

I am interested in this product:

 Product: ${productName}
Price: ${price}

Please let me know if it is available.`;

  const phoneNumber = "2348141169542";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}
