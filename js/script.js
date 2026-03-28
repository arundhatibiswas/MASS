/* ===== MASS — Global Scripts ===== */

// Custom Cursor Initialization
document.addEventListener('DOMContentLoaded', () => {
    // 1. Create Cursor Elements
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    const follower = document.createElement('div');
    follower.className = 'cursor-follower';
    document.body.appendChild(cursor);
    document.body.appendChild(follower);

    // 2. Track Mouse Movement
    let mouseX = 0;
    let mouseY = 0;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Move the tiny dot immediately
        gsap.to(cursor, {
            x: mouseX - 4,
            y: mouseY - 4,
            duration: 0.1,
            ease: "power2.out"
        });

        // Move the follower ring with a slight lag
        gsap.to(follower, {
            x: mouseX - 20,
            y: mouseY - 20,
            duration: 0.4,
            ease: "power2.out"
        });
    });

    // 3. Hover Effects for Interactive Elements
    const interactiveElements = document.querySelectorAll('a, button, .btn-glass');

    interactiveElements.forEach((el) => {
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

// ===== Contact Page - Three.js Tile Background =====
(function () {
    const container = document.getElementById('contact-bg-canvas');
    if (!container || typeof THREE === 'undefined') return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = null; // Transparent background to allow CSS gradients if any

    const camera = new THREE.PerspectiveCamera(60, container.offsetWidth / container.offsetHeight, 0.1, 1000);
    camera.position.z = 20;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x111111);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x8800ff, 3, 50);
    pointLight1.position.set(-10, 5, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x0044ff, 2, 50);
    pointLight2.position.set(10, -5, 5);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0xff00ff, 1.5, 40);
    pointLight3.position.set(0, 10, -5);
    scene.add(pointLight3);

    // Create rounded rectangle shape for tile face
    function createRoundedRectShape(w, h, r) {
        const shape = new THREE.Shape();
        shape.moveTo(-w / 2 + r, -h / 2);
        shape.lineTo(w / 2 - r, -h / 2);
        shape.quadraticCurveTo(w / 2, -h / 2, w / 2, -h / 2 + r);
        shape.lineTo(w / 2, h / 2 - r);
        shape.quadraticCurveTo(w / 2, h / 2, w / 2 - r, h / 2);
        shape.lineTo(-w / 2 + r, h / 2);
        shape.quadraticCurveTo(-w / 2, h / 2, -w / 2, h / 2 - r);
        shape.lineTo(-w / 2, -h / 2 + r);
        shape.quadraticCurveTo(-w / 2, -h / 2, -w / 2 + r, -h / 2);
        return shape;
    }

    // Tile class
    class Tile {
        constructor(index) {
            const size = 1.4 + Math.random() * 0.8;
            const depth = 0.15 + Math.random() * 0.1;
            const radius = 0.12;

            const shape = createRoundedRectShape(size, size, radius);
            const extrudeSettings = {
                depth: depth,
                bevelEnabled: true,
                bevelThickness: 0.04,
                bevelSize: 0.04,
                bevelSegments: 4
            };

            const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
            geometry.center();

            // Dark material with slight metallic sheen
            const color = new THREE.Color();
            const hue = 0.65 + Math.random() * 0.15; // blue-purple range
            const sat = 0.3 + Math.random() * 0.4;
            const light = 0.08 + Math.random() * 0.08;
            color.setHSL(hue, sat, light);

            const material = new THREE.MeshPhongMaterial({
                color: color,
                specular: new THREE.Color(0x9933ff),
                shininess: 120,
                reflectivity: 0.8,
            });

            // Edge highlight - emissive glow on edges
            const edgeMat = new THREE.MeshPhongMaterial({
                color: 0x000000,
                emissive: new THREE.Color().setHSL(hue, 1.0, 0.5),
                emissiveIntensity: 0.6,
                shininess: 200,
            });

            const materials = [edgeMat, material, material];
            this.mesh = new THREE.Mesh(geometry, materials);

            // Random initial position (scattered to left/right ends)
            const side = Math.random() > 0.5 ? 1 : -1;
            this.targetPos = new THREE.Vector3(
                side * (12 + Math.random() * 12),
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 10
            );

            // Grid position (collapsed to grid)
            const cols = 14;
            const row = Math.floor(index / cols);
            const col = index % cols;
            this.gridPos = new THREE.Vector3(
                (col - cols / 2) * 1.65,
                (row - 5) * 1.65,
                0
            );

            // Start scattered
            this.mesh.position.copy(this.targetPos);

            // Random rotation
            this.rotX = (Math.random() - 0.5) * 0.02;
            this.rotY = (Math.random() - 0.5) * 0.02;
            this.rotZ = (Math.random() - 0.5) * 0.015;

            this.mesh.rotation.x = Math.random() * Math.PI * 2;
            this.mesh.rotation.y = Math.random() * Math.PI * 2;
            this.mesh.rotation.z = Math.random() * Math.PI * 2;

            this.phase = Math.random() * Math.PI * 2;
            this.floatSpeed = 0.3 + Math.random() * 0.4;
            this.floatAmp = 0.3 + Math.random() * 0.4;

            scene.add(this.mesh);

            this.isGrid = false;
            this.lerpT = 0;
            this.delay = index * 0.008;
        }

        update(t, toGrid) {
            if (toGrid) {
                this.lerpT = Math.min(1, this.lerpT + 0.012);
                const ease = this.lerpT < 0.5
                    ? 4 * this.lerpT * this.lerpT * this.lerpT
                    : 1 - Math.pow(-2 * this.lerpT + 2, 3) / 2;

                this.mesh.position.lerp(this.gridPos, ease * 0.05);
                this.mesh.rotation.x += (0 - this.mesh.rotation.x) * 0.04;
                this.mesh.rotation.y += (0 - this.mesh.rotation.y) * 0.04;
                this.mesh.rotation.z += (0 - this.mesh.rotation.z) * 0.04;
            } else {
                this.lerpT = Math.max(0, this.lerpT - 0.008);
                this.mesh.position.lerp(this.targetPos, 0.02);
                this.mesh.rotation.x += this.rotX;
                this.mesh.rotation.y += this.rotY;
                this.mesh.rotation.z += this.rotZ;

                // Floating bob
                this.mesh.position.y += Math.sin(t * this.floatSpeed + this.phase) * this.floatAmp * 0.008;
            }
        }
    }

    // Create tiles
    const TILE_COUNT = 90;
    const tiles = [];
    for (let i = 0; i < TILE_COUNT; i++) {
        tiles.push(new Tile(i));
    }

    // Animation state cycling
    let mode = 'scattered'; // scattered | toGrid | grid | toScattered
    let modeTimer = 0;
    const SCATTERED_DURATION = 5.0;
    const GRID_DURATION = 4.0;
    const TRANSITION_DURATION = 3.0;

    // Grid glow highlight pulse
    let glowTiles = new Set();
    let glowTimer = 0;

    // Randomly light up grid tiles
    function pickGlowTiles() {
        glowTiles.clear();
        const count = 4 + Math.floor(Math.random() * 6);
        for (let i = 0; i < count; i++) {
            glowTiles.add(Math.floor(Math.random() * TILE_COUNT));
        }
    }

    // Camera slow drift
    let camTime = 0;

    const clock = new THREE.Clock();
    let elapsed = 0;

    function animate() {
        requestAnimationFrame(animate);
        const delta = clock.getDelta();
        elapsed += delta;
        modeTimer += delta;
        camTime += delta;

        // Mode switching
        if (mode === 'scattered' && modeTimer > SCATTERED_DURATION) {
            mode = 'toGrid';
            modeTimer = 0;
        } else if (mode === 'toGrid' && modeTimer > TRANSITION_DURATION) {
            mode = 'grid';
            modeTimer = 0;
            pickGlowTiles();
        } else if (mode === 'grid' && modeTimer > GRID_DURATION) {
            mode = 'toScattered';
            modeTimer = 0;
            // Refresh random target positions (scattered to left/right ends)
            tiles.forEach(t => {
                const side = Math.random() > 0.5 ? 1 : -1;
                t.targetPos.set(
                    side * (12 + Math.random() * 12),
                    (Math.random() - 0.5) * 20,
                    (Math.random() - 0.5) * 10
                );
            });
        } else if (mode === 'toScattered' && modeTimer > TRANSITION_DURATION) {
            mode = 'scattered';
            modeTimer = 0;
        }

        const toGrid = (mode === 'toGrid' || mode === 'grid');

        // Glow pulse for grid mode
        glowTimer += delta;
        if (mode === 'grid' && glowTimer > 0.8) {
            glowTimer = 0;
            pickGlowTiles();
        }

        // Update tiles
        tiles.forEach((tile, i) => {
            tile.update(elapsed, toGrid);

            // Grid glow highlight
            if (mode === 'grid' || mode === 'toGrid') {
                const mats = tile.mesh.material;
                if (Array.isArray(mats)) {
                    const isGlowing = glowTiles.has(i);
                    mats[0].emissiveIntensity = isGlowing
                        ? 1.5 + Math.sin(elapsed * 8 + i) * 0.5
                        : 0.2;
                }
            } else {
                const mats = tile.mesh.material;
                if (Array.isArray(mats)) {
                    mats[0].emissiveIntensity = 0.6;
                }
            }
        });

        // Animate lights
        pointLight1.position.x = Math.sin(elapsed * 0.3) * 12;
        pointLight1.position.y = Math.cos(elapsed * 0.2) * 8;
        pointLight2.position.x = Math.cos(elapsed * 0.25) * 10;
        pointLight2.position.y = Math.sin(elapsed * 0.35) * 8;

        // Camera drift
        camera.position.x = Math.sin(camTime * 0.1) * 2;
        camera.position.y = Math.cos(camTime * 0.08) * 1.5;
        camera.lookAt(0, 0, 0);

        renderer.render(scene, camera);
    }

    animate();

    // Resize
    window.addEventListener('resize', () => {
        camera.aspect = container.offsetWidth / container.offsetHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.offsetWidth, container.offsetHeight);
    });
})();

// Service Tab Switcher
function setServiceTab(tab) {
    // Hide all sections
    document.querySelectorAll('.service-section').forEach(section => {
        section.classList.remove('active');
    });
    // Remove active class from all buttons
    document.querySelectorAll('.stab').forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected section
    const activeSection = document.getElementById('tab-' + tab);
    if (activeSection) {
        activeSection.classList.add('active');
    }

    // Set active button
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
}

// Global Redirect Function
function goTo(page) {
    const clean = page.replace('.html', '');
    window.location.href = clean === 'index' ? '/' : '/' + clean;
}

