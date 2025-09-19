
  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  document.querySelectorAll('.navbar-nav .nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      const offcanvasEl = document.querySelector('#offcanvasNavbar');
      const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl) ||
                        new bootstrap.Offcanvas(offcanvasEl);
      offcanvas.hide();
    });
  });

// validation
(() => {
    const form = document.getElementById('contactForm');
    const successMsg = document.getElementById('successMsg');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 
        if (!form.checkValidity()) {
            event.stopPropagation();
            form.classList.add('was-validated');
            return;
        }

        form.classList.remove('was-validated');
        form.reset();
        successMsg.classList.remove('d-none'); 
        setTimeout(() => successMsg.classList.add('d-none'), 1000);
    });

  
    form.name.addEventListener('input', () => {
        form.name.value = form.name.value.replace(/[^A-Za-z\s]/g, '');
    });
    form.message.addEventListener('input', () => {
        form.message.value = form.message.value.replace(/[^A-Za-z0-9\s]/g, '');
    });
})();