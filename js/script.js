/* ===== MASS — Global Scripts ===== */

// Custom Cursor — skip on touch devices
document.addEventListener('DOMContentLoaded', () => {
    if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    if (typeof gsap === 'undefined') return;

    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    const follower = document.createElement('div');
    follower.className = 'cursor-follower';
    document.body.appendChild(cursor);
    document.body.appendChild(follower);

    window.addEventListener('mousemove', (e) => {
        gsap.to(cursor, { x: e.clientX - 4, y: e.clientY - 4, duration: 0.1, ease: "power2.out" });
        gsap.to(follower, { x: e.clientX - 20, y: e.clientY - 20, duration: 0.4, ease: "power2.out" });
    });

    document.querySelectorAll('a, button, .btn-glass').forEach((el) => {
        el.addEventListener('mouseenter', () => {
            follower.classList.add('is-hovered');
            gsap.to(cursor, { scale: 0.5, duration: 0.3 });
        });
        el.addEventListener('mouseleave', () => {
            follower.classList.remove('is-hovered');
            gsap.to(cursor, { scale: 1, duration: 0.3 });
        });
    });
});

// Mobile menu toggle — full-screen sweep
function toggleMobileMenu() {
    const btn = document.getElementById('mob-menu-btn');
    const overlay = document.getElementById('mob-menu-overlay');
    if (!btn || !overlay) return;

    const isOpen = overlay.classList.contains('open');
    btn.classList.toggle('active', !isOpen);
    overlay.classList.toggle('open', !isOpen);
    document.body.style.overflow = isOpen ? '' : 'hidden';
}

// Navbar scroll effect
const navbar = document.getElementById('main-navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        navbar.style.background = window.scrollY > 50
            ? 'rgba(46, 0, 62, 0.85)'
            : 'rgba(46, 0, 62, 0.55)';
    });
}

// GSAP & ScrollTrigger Animations
if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    // ===== WHY MASS — Horizontal Scroll =====
    const whySection = document.querySelector('.why-scroll-section');
    const whyTrack = document.getElementById('why-cards-track');

    if (whySection && whyTrack) {
        const scrollTl = gsap.timeline({
            scrollTrigger: {
                trigger: whySection,
                start: 'top top',
                end: () => '+=' + (whyTrack.scrollWidth - window.innerWidth * 0.88),
                pin: true,
                scrub: 1,
                anticipatePin: 1,
                invalidateOnRefresh: true,
            }
        });

        const totalWidth = whyTrack.scrollWidth;
        const viewportWidth = window.innerWidth;
        const scrollDistance = Math.max(0, totalWidth - (viewportWidth * 0.88));

        scrollTl.to(
            whyTrack,
            { x: -scrollDistance, ease: 'none', duration: 0.7 },
            0.2
        );

        const whyLabel = whySection.querySelector('.section-label');
        const whyTitle = whySection.querySelector('.section-title');

        scrollTl.to(
            [whyTrack, whyLabel, whyTitle],
            { y: -50, opacity: 0, stagger: 0.02, ease: 'power2.in', duration: 0.1 },
            0.9
        );
    }

    // ===== SERVICES HERO — Split Parallax =====
    const svcHero = document.getElementById('svc-hero');
    const svcText = document.getElementById('svc-hero-text');
    const svcVisual = document.getElementById('svc-hero-visual');

    if (svcHero && svcText && svcVisual) {
        gsap.timeline({
            scrollTrigger: {
                trigger: svcHero,
                start: 'top top',
                end: 'bottom top',
                scrub: 1,
            }
        })
            .to(svcText, { x: '-60%', opacity: 0, ease: 'power2.in' }, 0)
            .to(svcVisual, { x: '60%', opacity: 0, ease: 'power2.in' }, 0);
    }

    // ===== Lenis Smooth Scrolling =====
    if (typeof Lenis !== "undefined") {
        const lenis = new Lenis({
            lerp: 0.18,
            wheelMultiplier: 2.0,
            touchMultiplier: 2.5,
            syncTouch: true,
            smoothWheel: true,
        });

        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);
    }
}

// ===== Dot Particles for Trusted Partners Section =====
(function () {
    const canvas = document.getElementById('partners-particles');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const section = canvas.parentElement;

    function resize() {
        canvas.width = section.offsetWidth;
        canvas.height = section.offsetHeight;
    }
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(section);

    const COUNT = 60;
    const colors = [
        'rgba(233,30,140,0.35)',
        'rgba(233,30,140,0.2)',
        'rgba(123,45,142,0.3)',
        'rgba(123,45,142,0.18)',
        'rgba(244,194,194,0.25)',
        'rgba(255,255,255,0.12)',
        'rgba(255,255,255,0.07)'
    ];

    const dots = [];
    for (let i = 0; i < COUNT; i++) {
        dots.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 2.5 + 0.5,
            dx: (Math.random() - 0.5) * 0.3,
            dy: -(Math.random() * 0.4 + 0.1),
            color: colors[Math.floor(Math.random() * colors.length)]
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (const d of dots) {
            d.x += d.dx;
            d.y += d.dy;

            if (d.y < -10) { d.y = canvas.height + 10; d.x = Math.random() * canvas.width; }
            if (d.x < -10) d.x = canvas.width + 10;
            if (d.x > canvas.width + 10) d.x = -10;

            ctx.beginPath();
            ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
            ctx.fillStyle = d.color;
            ctx.fill();
        }
        requestAnimationFrame(draw);
    }
    draw();
})();

// Service Tab Switcher
function setServiceTab(tab, e) {
    document.querySelectorAll('.service-section').forEach(section => {
        section.classList.remove('active');
    });
    document.querySelectorAll('.stab').forEach(btn => {
        btn.classList.remove('active');
    });

    const activeSection = document.getElementById('tab-' + tab);
    if (activeSection) {
        activeSection.classList.add('active');
    }

    const evt = e || window.event;
    if (evt && evt.currentTarget) {
        evt.currentTarget.classList.add('active');
    }
}

// Global Redirect Function
function goTo(page) {
    if (page === 'contact') {
        window.location.href = 'contact.html';
    } else if (page.endsWith('.html')) {
        window.location.href = page;
    } else {
        window.location.href = page + '.html';
    }
}

// ===== Contact Form Handler =====
(function () {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        const successEl = document.getElementById('form-success');
        const submitBtn = contactForm.querySelector('.contact-submit');
        const originalBtnText = submitBtn.innerHTML;

        // Show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Sending...</span>';

        const formData = new FormData(this);

        try {
            const response = await fetch(this.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Success
                contactForm.style.display = 'none';
                successEl.style.display = 'block';
                // Animate success
                gsap.from(successEl, {
                    opacity: 0,
                    y: 20,
                    duration: 0.6,
                    ease: "power2.out"
                });
            } else {
                // Error
                const data = await response.json();
                if (Object.hasOwn(data, 'errors')) {
                    alert(data["errors"].map(error => error["message"]).join(", "));
                } else {
                    alert("Oops! There was a problem submitting your form");
                }
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;
            }
        } catch (error) {
            alert("Oops! There was a problem connecting to the server");
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
        }
    });
})();

// ===== Blog Filtering =====
function filterBlog(category) {
    const cards = document.querySelectorAll('.blog-card');
    const tabs = document.querySelectorAll('.blog-tab');

    // Update buttons active state
    tabs.forEach(tab => {
        if (tab.getAttribute('onclick').includes(`'${category}'`)) {
            tab.classList.add('active');
            tab.style.borderColor = '#7B2D8E';
            tab.style.background = 'white';
            tab.style.color = '#7B2D8E';
        } else {
            tab.classList.remove('active');
            tab.style.borderColor = 'rgba(123, 45, 142, 0.2)';
            tab.style.background = 'transparent';
            tab.style.color = 'var(--primary)';
        }
    });

    // Filter cards with GSAP animation
    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'flex';
            gsap.fromTo(card, {
                opacity: 0,
                y: 20,
                scale: 0.95
            }, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.4,
                ease: "power2.out"
            });
        } else {
            card.style.display = 'none';
        }
    });
}
