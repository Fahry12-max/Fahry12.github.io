// Navbar: transparent → solid on scroll
        const header = document.getElementById('site-header');
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 40);
        });

        // Tandai body sudah JS-ready, baru section bisa jadi invisible
        document.body.classList.add('js-ready');

        // Section reveal with IntersectionObserver
        const sections = document.querySelectorAll('section:not(#home)');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.08 });

        sections.forEach(s => observer.observe(s));

        // Smooth scroll — fix dari versi lama (addEventListener, bukan .add)
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) target.scrollIntoView({ behavior: 'smooth' });
            });
        });
