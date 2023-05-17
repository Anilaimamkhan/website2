$(document).ready(function () {
  $('.galleryi').magnificPopup({
    type: 'image',
      delegate: "a",
      gallery: {
          enabled: true
      }

  });
});


$(document).ready(function () {
  $('.galleryi').magnificPopup({
    type: 'image',
      delegate: "a",
      gallery: {
          enabled: true
      }

  });
});
const bars = document.querySelector("#bars");
const nav = document.querySelector(".header nav");
const cross = document.querySelector("header.header nav ul i")
const preloader = document.getElementById("loading");





bars.onclick = () => {
  nav.classList.toggle("active")
}
cross.onclick = () => {
  nav.classList.remove("active")
}

// swiper js
var swipers = new Swiper(".swiper2", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  autoplay: {
    delay: 2500
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// gallery swiper
var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 1,
  spaceBetween: 10,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

// testimonial swiper
var swiper2 = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 40,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});



// testimonial swiper
var swiper2 = new Swiper(".swiper1", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});



// slider img
var swiper2 = new Swiper(".swiper11", {
  slidesPerView: "auto",
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    413: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});


// gallery swiper
var swiper3 = new Swiper(".mySwiper6", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});















let list = document.querySelectorAll(".list");
let item = document.querySelectorAll(".item ");
for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    for (let j = 0; j < list.length; j++) {
      list[j].classList.remove("active")
    }
    this.classList.add("active")
    let datafilter = this.getAttribute("data-filter")
    for (let k = 0; k < item.length; k++) {


      item[k].classList.remove("active");
      item[k].classList.add("hide");

      if (item[k].getAttribute("data-item") == datafilter || datafilter == "*") {
        item[k].classList.remove("hide");
        item[k].classList.add("active");

      }
    }
  })

}

window.scroll = () => {
  nav.classList.remove("active")


}

// {/* <script> */}
AOS.init({
  offset:200,
  duration:200
});
// </script>
