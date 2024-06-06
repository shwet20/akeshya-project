(function() {
    "use strict";
    if (typeof window !== 'undefined' && window.document) {

        const on = (type, el, listener, all = false) => {
            el = el.trim()
            let selectEl = all ? [...document.querySelectorAll(el)] : document.querySelector(el);
            if (selectEl) {
                if (all) {
                    selectEl.forEach(e => e.addEventListener(type, listener));
                } else {
                    selectEl.addEventListener(type, listener);
                }
            }
        };

        const onscroll = (el, listener) => {
            el.addEventListener('scroll', listener);
        };

        const scrollto = (el) => {
            let header = document.querySelector('#header');
            let offset = header.offsetHeight;

            if (!header.classList.contains('header-scrolled')) {
                offset -= 20;
            }

            let elementPos = document.querySelector(el).offsetTop;
            window.scrollTo({
                top: elementPos - offset,
                behavior: 'smooth'
            });
        };

        on('click', '.mobile-nav-toggle', function(e) {
            document.querySelector('#navbar').classList.toggle('navbar-mobile');
            this.classList.toggle('bi-list');
            this.classList.toggle('bi-x');
        });

        on('click', '.navbar .dropdown > a', function(e) {
            if (document.querySelector('#navbar').classList.contains('navbar-mobile')) {
                e.preventDefault();
                this.nextElementSibling.classList.toggle('dropdown-active');
            }
        }, true);

        on('click', '.scrollto', function(e) {
            if (document.querySelector(this.hash)) {
                e.preventDefault();

                let navbar = document.querySelector('#navbar');
                if (navbar.classList.contains('navbar-mobile')) {
                    navbar.classList.remove('navbar-mobile');
                    let navbarToggle = document.querySelector('.mobile-nav-toggle');
                    navbarToggle.classList.toggle('bi-list');
                    navbarToggle.classList.toggle('bi-x');
                }
                scrollto(this.hash);
            }
        }, true);

        window.addEventListener('load', () => {
            if (window.location.hash) {
                const hash = window.location.hash.substring(1);
                const targetElement = document.getElementById(hash);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });

        new Swiper('.testimonials-slider', {
            speed: 600,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
            slidesPerView: 'auto',
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                1200: {
                    slidesPerView: 2,
                    spaceBetween: 20
                }
            }
        });

        window.addEventListener('load', () => {
            let portfolioContainer = document.querySelector('.portfolio-container');
            if (portfolioContainer) {
                let portfolioIsotope = new Isotope(portfolioContainer, {
                    itemSelector: '.portfolio-item',
                    layoutMode: 'fitRows'
                });

                let portfolioFilters = document.querySelectorAll('#portfolio-flters li');

                on('click', '#portfolio-flters li', function(e) {
                    e.preventDefault();
                    portfolioFilters.forEach(function(el) {
                        el.classList.remove('filter-active');
                    });
                    this.classList.add('filter-active');

                    portfolioIsotope.arrange({
                        filter: this.getAttribute('data-filter')
                    });
                    portfolioIsotope.on('arrangeComplete', function() {
                        AOS.refresh();
                    });
                }, true);
            }
        });

        const portfolioLightbox = GLightbox({
            selector: '.portfolio-lightbox'
        });

        new Swiper('.portfolio-details-slider', {
            speed: 400,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            }
        });

        window.addEventListener('load', () => {
            AOS.init({
                duration: 1000,
                easing: 'ease-in-out',
                once: true,
                mirror: false
            });
        });
    }

    const select = (el, all = false) => {
        el = el.trim();
        if (all) {
            return [...document.querySelectorAll(el)];
        } else {
            return document.querySelector(el);
        }
    };

    const navbarlinksActive = () => {
        let position = window.scrollY + 200;
        const navbarlinks = select('#navbar .scrollto', true);
        navbarlinks.forEach(navbarlink => {
            if (!navbarlink.hash) return;
            let section = select(navbarlink.hash);
            if (!section) return;
            if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                navbarlink.classList.add('active');
            } else {
                navbarlink.classList.remove('active');
            }
        });
    };

    if (typeof window !== 'undefined') {
        window.addEventListener('load', navbarlinksActive);
        window.addEventListener('scroll', navbarlinksActive);
        return () => {
            window.removeEventListener('load', navbarlinksActive);
            window.removeEventListener('scroll', navbarlinksActive);
        };
    }

})();

(function() {
    "use strict";
    const loadScript = (src) => {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.async = true;
            script.onload = resolve;
            script.onerror = reject;
            document.body.appendChild(script);
        });
    };
    (async () => {
        try {
            await loadScript('/path/to/your/script.js');
            console.log('Script loaded successfully');
        } catch (error) {
            console.error('Error loading script:', error);
        }
    })();
    return () => {
        const script = document.querySelector('script[src="/path/to/your/script.js"]');
        if (script) {
            document.body.removeChild(script);
        }
    };
})();

(function() {
    "use strict";
    if (typeof window !== 'undefined' && window.document) {
        const select = (el, all = false) => {
            el = el.trim();
            if (all) {
                return [...document.querySelectorAll(el)];
            } else {
                return document.querySelector(el);
            }
        };

        const selectHeader = select('#header');
        if (selectHeader) {
            const headerScrolled = () => {
                if (window.scrollY > 100) {
                    selectHeader.classList.add('header-scrolled');
                } else {
                    selectHeader.classList.remove('header-scrolled');
                }
            };
            window.addEventListener('load', headerScrolled);
            window.addEventListener('scroll', headerScrolled);
            return () => {
                window.removeEventListener('load', headerScrolled);
                window.removeEventListener('scroll', headerScrolled);
            };
        }
    }
})();

(function() {
    "use strict";
    if (typeof window !== 'undefined' && window.document) {
        const select = (el, all = false) => {
            el = el.trim();
            if (all) {
                return [...document.querySelectorAll(el)];
            } else {
                return document.querySelector(el);
            }
        };

        const backtotop = select('.up-arrow');
        if (backtotop) {
            const toggleBacktotop = () => {
                if (window.scrollY > 100) {
                    backtotop.classList.add('active');
                } else {
                    backtotop.classList.remove('active');
                }
            };
            window.addEventListener('load', toggleBacktotop);
            window.addEventListener('scroll', toggleBacktotop);
            return () => {
                window.removeEventListener('load', toggleBacktotop);
                window.removeEventListener('scroll', toggleBacktotop);
            };
        }
    }
})();

(function() {
    "use strict";

    if (typeof window !== 'undefined') {
        window.addEventListener('load', () => {
            if (window.location.hash) {
                const hash = window.location.hash.substring(1);
                const targetElement = document.getElementById(hash);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    }
})();



