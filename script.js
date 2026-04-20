// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Change icon between bars and times (x)
    const icon = menuToggle.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
        document.body.style.overflow = 'hidden';
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        document.body.style.overflow = '';
    }
});

// Close mobile menu when clicking a link
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            document.body.style.overflow = '';
        }
    });
});

// WhatsApp Form Submission
const waForm = document.getElementById('whatsapp-form');

waForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Ambil data dari form
    const nama = document.getElementById('nama').value;
    const jurusan = document.getElementById('jurusan').value;
    const ukuran = document.getElementById('ukuran').value;
    
    // Validasi dasar
    if (!nama || !jurusan || !ukuran) {
        alert("Mohon lengkapi semua data pemesanan.");
        return;
    }
    
    // Nomor WhatsApp Admin (Silakan diganti dengan nomor sebenarnya)
    // Gunakan format kode negara (62 untuk Indonesia), tanpa tanda + atau angka 0 di depan
    const nomorWA = "6281235449093"; 
    
    // Format Pesan
    const pesan = `Halo Admin Baju PKKMB UBP 2026!%0A%0ASaya ingin memesan baju dengan detail berikut:%0A- *Nama*: ${nama}%0A- *Kelas Asal*: ${jurusan}%0A- *Ukuran*: ${ukuran}%0A%0AMohon informasi lebih lanjut mengenai ketersediaan dan metode pembayaran. Terima kasih!`;
    
    // Buat URL dan buka di tab baru
    const waURL = `https://wa.me/${nomorWA}?text=${pesan}`;
    window.open(waURL, '_blank');
});

// Animation on Scroll (opsional, memberikan efek elemen muncul)
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.product-card, .feature-text, .cta-box');
    
    elements.forEach(el => {
        const elementPosition = el.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            el.style.transition = 'all 0.8s ease';
        }
    });
};

// Setup initial state for elements to be animated
document.querySelectorAll('.product-card, .feature-text, .cta-box').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
});

// Trigger animation on scroll and on load
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);
