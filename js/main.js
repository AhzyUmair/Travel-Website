/*==================== SHOW MENU ====================*/
document.addEventListener('DOMContentLoaded', function() {
    const navMenu = document.getElementById('nav-menu'),
          navToggle = document.getElementById('nav-toggle'),
          navClose = document.getElementById('nav-close');

    /*===== MENU SHOW =====*/
    if(navToggle && navMenu){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu')
        })
    }

    /*===== MENU HIDDEN =====*/
    if(navClose && navMenu){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu')
        })
    }

    /*==================== REMOVE MENU MOBILE ====================*/
    const navLink = document.querySelectorAll('.nav__link');

    function linkAction(){
        const navMenu = document.getElementById('nav-menu')
        if(navMenu) {
            navMenu.classList.remove('show-menu')
        }
    }
    if(navLink && navLink.length && navMenu){
        navLink.forEach(n => n.addEventListener('click', linkAction))
    }

    /*==================== About Animated Heading (JS only) ====================*/
    /**
     * This handles the animated heading letters for about section.
     * It finds .about__title inside .about__data, then replaces the heading's text content by wrapping each
     * letter in a span.about__heading-letter, so that the CSS animation for drop-by-letter works.
     * The letter reveal animation will be triggered after the section's transition ends.
     */
    const aboutTitle = document.querySelector('.about__data .section__title.about__title');
    if (aboutTitle) {

        const html = aboutTitle.innerHTML;
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        let pieceList = [];
    
        tempDiv.childNodes.forEach(node => {
            if (node.nodeType === 1 && node.tagName === 'B') {
                let newB = document.createElement('b');
                Array.from(node.textContent).forEach((ch) => {
                    let span = document.createElement('span');
                    span.textContent = ch;
                    newB.appendChild(span);
                });
                pieceList.push(newB);
            } else if (node.nodeType === 1 && node.tagName === 'BR') {
                pieceList.push(document.createElement('br'));
            } else if (node.nodeType === 3) {
                Array.from(node.textContent).forEach((ch) => {
                    if (ch === '\n') {
                        pieceList.push(document.createElement('br'));
                    } else if (ch !== '') {
                        let span = document.createElement('span');
                        span.textContent = ch;
                        pieceList.push(span);
                    }
                });
            }
        });
    
        const wrapper = document.createElement('span');
        wrapper.className = 'about__heading';
        pieceList.forEach(p => wrapper.appendChild(p));
        aboutTitle.innerHTML = '';
        aboutTitle.appendChild(wrapper);
    
        function runLetterAnimation() {
            let spans = [];
            wrapper.querySelectorAll('b').forEach(b => spans.push(...b.childNodes));
            wrapper.childNodes.forEach(node => {
                if (node.nodeType === 1 && node.tagName !== 'B' && node.tagName !== 'BR') {
                    spans.push(node);
                }
            });
            spans = spans.filter(x => x.nodeType === 1 && x.tagName === 'SPAN');
            spans.forEach((span, i) => {
                span.classList.add('about__heading-letter');
                span.style.animationDelay = (i * 0.20) + 's';
            });
        }
    
        const aboutData = aboutTitle.closest('.about__data');
        let animationStarted = false;
        function triggerOnce() {
            if (!animationStarted) {
                animationStarted = true;
                runLetterAnimation();
            }
        }
    
        if (aboutData) {
            let received = false;
            const tryTimeout = setTimeout(() => {
                if (!received) triggerOnce();
            }, 700);
    
            let propertyToWatch = null;
            const computed = window.getComputedStyle(aboutData);
            const transitionProp = computed.transitionProperty;
            if (transitionProp && transitionProp !== 'all' && transitionProp !== 'none') {
                propertyToWatch = transitionProp;
            }
            aboutData.addEventListener('transitionend', function handler(e) {
                if (!propertyToWatch || e.propertyName === propertyToWatch || propertyToWatch === 'all') {
                    received = true;
                    aboutData.removeEventListener('transitionend', handler);
                    clearTimeout(tryTimeout);
                    triggerOnce();
                }
            });
        } else {
            setTimeout(runLetterAnimation, 700);
        }
    }

    /*==================== CHANGE BACKGROUND HEADER ====================*/
    function scrollHeader(){
        const header = document.getElementById('header')
        if(header && window.scrollY >= 100) header.classList.add('scroll-header');
        else if(header) header.classList.remove('scroll-header')
    }
    window.addEventListener('scroll', scrollHeader)

    /*==================== SWIPER LUXURY VIDEO CARDS ====================*/
    if(typeof Swiper !== 'undefined') {
        let luxSwiper = new Swiper('.lux__container', {
            slidesPerView: 1,
            spaceBetween: 24,
            loop: true,
            grabCursor: true,
            centeredSlides: true,
            effect: 'coverflow',
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2,
                slideShadows: false,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                576: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                }
            }
        });

        let discoverSwiperEl = document.querySelector('.discover__container');
        if (discoverSwiperEl) {
            let swiper = new Swiper(".discover__container", {
                effect: "coverflow",
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: "auto",
                loop: true,
                spaceBetween: 32,
                coverflowEffect: {
                    rotate: 0,
                },
            })
        }
    }

    /*==================== VIDEO ====================*/
    const videoFile = document.getElementById('video-file'),
          videoButton = document.getElementById('video-button'),
          videoIcon = document.getElementById('video-icon');

    function playPause(){ 
        if (videoFile && videoIcon && videoFile.paused){
            videoFile.play()
            videoIcon.classList.add('ri-pause-line')
            videoIcon.classList.remove('ri-play-line')
        }
        else if(videoFile && videoIcon) {
            videoFile.pause(); 
            videoIcon.classList.remove('ri-pause-line')
            videoIcon.classList.add('ri-play-line')
        }
    }
    if(videoButton){
        videoButton.addEventListener('click', playPause)
    }

    function finalVideo(){
        if(videoIcon){
            videoIcon.classList.remove('ri-pause-line')
            videoIcon.classList.add('ri-play-line')
        }
    }
    if(videoFile){
        videoFile.addEventListener('ended', finalVideo)
    }

    /*==================== SHOW SCROLL UP ====================*/ 
    function scrollUp(){
        const scrollUp = document.getElementById('scroll-up');
        if(scrollUp) {
            if(window.scrollY >= 200) scrollUp.classList.add('show-scroll');
            else scrollUp.classList.remove('show-scroll')
        }
    }
    window.addEventListener('scroll', scrollUp)

    /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
    const sections = document.querySelectorAll('section[id]')

    function scrollActive(){
        const scrollY = window.pageYOffset

        sections.forEach(current =>{
            const sectionHeight = current.offsetHeight
            const sectionTop = current.offsetTop - 50;
            const sectionId = current.getAttribute('id')
            const navMenuLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
            if(navMenuLink){
                if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                    navMenuLink.classList.add('active-link')
                }else{
                    navMenuLink.classList.remove('active-link')
                }
            }
        })
    }
    window.addEventListener('scroll', scrollActive)

    /*==================== SCROLL REVEAL ANIMATION ====================*/
    if(typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            distance: '60px',
            duration: 2800,
            // reset: true,
        })

        sr.reveal(`.home__data, .home__social-link, .home__info,
                .discover__container,
                .experience__data, .experience__overlay,
                .place__card,
                .sponsor__content,
                .footer__data, .footer__rights`,{
            origin: 'top',
            interval: 100,
        })

        sr.reveal(`.about__data, 
                .video__description,
                .subscribe__description`,{
            origin: 'left',
        })

        sr.reveal(`.about__img-overlay, 
                .video__content,
                .subscribe__form`,{
            origin: 'right',
            interval: 100,
        })
    }

    /*==================== DARK LIGHT THEME ====================*/ 
    const themeButton = document.getElementById('theme-button');
    const darkTheme = 'dark-theme';
    const iconTheme = 'ri-sun-line'; // when active, the icon turns into a sun = dark mode

    function updateHomeImageByTheme(theme) {
        const homeImg = document.getElementById('home-img');
        if (!homeImg) return;
        if (theme === 'dark') {
            homeImg.setAttribute('src', 'img/dark1.jpg');
        } else {
            homeImg.setAttribute('src', 'img/home1.jpg');
        }
    }

    const selectedTheme = localStorage.getItem('selected-theme');
    const selectedIcon = localStorage.getItem('selected-icon');

    // Getters for html state
    function getCurrentTheme() {
        return document.body.classList.contains(darkTheme) ? 'dark' : 'light';
    }
    function getCurrentIcon() {
        // iconTheme = 'ri-sun-line'
        // Default is ri-moon-line, toggles to sun for dark!
        return themeButton && themeButton.classList.contains(iconTheme) ? 'ri-sun-line' : 'ri-moon-line';
    }

    // Only run theme code if themeButton exists!
    if (themeButton) {
        // Set initial values (from localStorage or default)
        if (selectedTheme) {
            if (selectedTheme === 'dark') {
                document.body.classList.add(darkTheme);
                themeButton.classList.add(iconTheme);
                updateHomeImageByTheme('dark');
            } else {
                document.body.classList.remove(darkTheme);
                themeButton.classList.remove(iconTheme);
                updateHomeImageByTheme('light');
            }
        } else {
            // No prior storage, use current dom state
            updateHomeImageByTheme(getCurrentTheme());
            // Ensure correct icon state:
            if (getCurrentTheme() === 'dark') {
                themeButton.classList.add(iconTheme);
            } else {
                themeButton.classList.remove(iconTheme);
            }
        }

        themeButton.addEventListener('click', () => {
            // Toggle the theme
            document.body.classList.toggle(darkTheme);
            themeButton.classList.toggle(iconTheme);
            const isDark = document.body.classList.contains(darkTheme);
            updateHomeImageByTheme(isDark ? 'dark' : 'light');
            // Update localStorage
            localStorage.setItem('selected-theme', isDark ? 'dark' : 'light');
            // For icon, save what SHOULD be rendered on the button (matches markup) after toggle:
            localStorage.setItem('selected-icon', getCurrentIcon());
        });
    } else {
        // Defensive: set correct image if no theme button
        updateHomeImageByTheme(document.body.classList.contains(darkTheme) ? 'dark' : 'light');
    }
});
