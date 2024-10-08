//  HEADER SCRIPT
const ham = document.querySelector(".header_ham");
const menu = document.querySelector('ul.header_menu');
const links = menu.querySelectorAll('.header_menu li');

var tl = gsap.timeline({ paused: true });

tl.to(menu, {
  duration: 1,
  opacity: 1,
  height: '100vh',
  ease: 'expo.inOut',
});
tl.from(links, {
  duration: 1,
  opacity: 0,
  y: 20,
  stagger: 0.1,
  ease: 'expo.inOut',
}, "-=0.5");


tl.reverse();

ham.addEventListener('click', () => {
	tl.reversed(!tl.reversed());
});


// REVEAL SCRIPT
function animateFrom(elem, direction) {
    direction = direction | 1;

    var x = 0,
        y = direction * 100;
    if(elem.classList.contains("gs_reveal_fromLeft")) {
      x = -100;
      y = 0;
    } else if(elem.classList.contains("gs_reveal_fromRight")) {
      x = 100;
      y = 0;
    }
    gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
      duration: 1.25,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: "expo",
      overwrite: "auto"
    });
  }

  function hide(elem) {
    gsap.set(elem, {autoAlpha: 0});
  }

  document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
      hide(elem);

      ScrollTrigger.create({
        trigger: elem,
        markers: false,
        onEnter: function() { animateFrom(elem) },
        onEnterBack: function() { animateFrom(elem, -1) },
        onLeave: function() { hide(elem) }
      });
    });
  });



  // ISOLTOP GRID
  $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      columnWidth: '.grid-sizer'
    }
  });


  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $('.grid').isotope({ filter: filterValue });
  });


  document.addEventListener("DOMContentLoaded", function () {
    let videoCloseBtn = document.querySelector(".icon-minus");
    let stickyVideo = document.querySelector(".sticky-video");
    let videoPanel = document.querySelector(".video-panel")

    stickyVideo.classList.add("hidden");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            stickyVideo.classList.remove("hidden");
        } else {
            stickyVideo.classList.add("hidden");
        }
    });

    videoCloseBtn.addEventListener("click", function (event) {
        videoPanel.classList.toggle("hide-video");
    });
});