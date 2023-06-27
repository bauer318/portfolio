const mainScript = () => {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    //Menu show
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        });
    }

    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }
    //Remove menu mobile
    const navLink = document.querySelectorAll('.nav__link');

    function linkAction() {
        const navMenu = document.getElementById('nav-menu');
        //When click on each nav__link, we remove the show-menu class
        navMenu.classList.remove('show-menu');
    }

    navLink.forEach((n) => n.addEventListener('click', linkAction));

    //Accordion skills
    const skillsContent = document.getElementsByClassName('skills__content');
    const skillsHeader = document.querySelectorAll('.skills__header');

    function toggleSkills() {
        let itemClass = this.parentNode.className;
        for (let i = 0; i < skillsContent.length; i++) {
            skillsContent[i].className = 'skills__content skills__close';
        }
        if (itemClass === 'skills__content skills__close') {
            this.parentNode.className = 'skills__content skills__open';
        }
    }

    skillsHeader.forEach(el => {
        el.addEventListener('click', toggleSkills);
    });
    //Qualification tabs
    const tabs = document.querySelectorAll('[data-target]');
    const tabContents = document.querySelectorAll('[data-content]');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.target);
            tabContents.forEach(tabContent => {
                tabContent.classList.remove('qualification__active');
            });
            target.classList.add('qualification__active');
            tabs.forEach(tab => {
                tab.classList.remove('qualification__active');
            });
            tab.classList.add('qualification__active');
        });
    });

    //Services modal
    const modalViews = document.querySelectorAll('.services__modal');
    const modalButtons = document.querySelectorAll('.services__button');
    const modalCloses = document.querySelectorAll('.services__modal-close');

    let modal = function (modalClick) {
        modalViews[modalClick].classList.add('active-modal');
    };
    modalButtons.forEach((modalButton, index) => {
        modalButton.addEventListener('click', () => {
            modal(index);
        });
    });

    modalCloses.forEach((modalClose) => {
        modalClose.addEventListener('click', () => {
            modalViews.forEach((modalView) => {
                modalView.classList.remove('active-modal');
            });
        });
    });

    //Portfolio swiper
    /*let swiperPortfolio = new Swiper('.portfolio__container', {
        cssMode: true, loop: true,

        navigation: {
            nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev',
        }, pagination: {
            el: '.swiper-pagination', clickable: true,
        },
    });*/

    //Testimonial swiper
   /* let swiperTestimonial = new Swiper('.testimonial__container', {
        loop: true, grabCursor: true, spaceBetween: 48,

        pagination: {
            el: '.swiper-pagination', clickable: true, dynamicBullets: true,
        }, breakpoints: {
            568: {
                slidesPerView: 2,
            },
        },
    });*/

    //Scroll sections active link
    const sections = document.querySelectorAll('section[id]');

    function scrollActive() {
        const scrollY = window.pageYOffset;

        sections.forEach((current) => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            let sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document
                    .querySelector('.nav__menu a[href*=' + sectionId + ']')
                    .classList.add('active-link');
            } else {
                document
                    .querySelector('.nav__menu a[href*=' + sectionId + ']')
                    .classList.remove('active-link');
            }
        });
    }

    window.addEventListener('scroll', scrollActive);

    function scrollHeader() {
        const nav = document.getElementById('header');
        //When the scroll is greater than 200 viewport height, then add the scroll-header to the header tag
        if (this.scrollY >= 80) {
            nav.classList.add('scroll-header');
        } else {
            nav.classList.remove('scroll-header');
        }
    }

    window.addEventListener('scroll', scrollHeader);

    //Show scroll up
    function scrollUp() {
        const scrollUp = document.getElementById('scroll-up');
        //When the scroll is higher than viewport height, then add the show-scroll class to the tag with the scroll
        if (this.scrollY >= 560) {
            scrollUp.classList.add('show-scroll');
        } else {
            scrollUp.classList.remove('show-scroll');
        }
    }

    window.addEventListener('scroll', scrollUp);

    //Dark light theme
    const themeButton = document.getElementById('theme-button');
    const darkTheme = 'dark-theme';
    const iconTheme = 'uil-sun';


    //Previously selected topic (if user selected)
    const selectedTheme = localStorage.getItem('selected-theme');
    const selectedIcon = localStorage.getItem('selected-icon');

    //We obtain the current theme that the other face has by validating the dark-theme class
    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
    const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

    //We validate if the user previously chose a topic
    if (selectedTheme) {
        document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
        document.body.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
    }

    //Activate / deactivate the theme manually with the button
    themeButton.addEventListener('click', () => {
        //Add or remove the dark / icon theme
        document.body.classList.toggle(darkTheme);
        themeButton.classList.toggle(iconTheme);

        //We save the theme and the current icon that the user chose
        localStorage.setItem('selected-theme', getCurrentTheme());
        localStorage.setItem('selected-icon', getCurrentIcon());
    });
};

export default mainScript;