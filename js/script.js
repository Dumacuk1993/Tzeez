document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const burgerMenu = document.querySelector(".burger-menu"),
    menu = document.querySelector(".menu__list"),
    links = document.querySelectorAll(".header-top__menu-item");

  if (burgerMenu) {
    burgerMenu.addEventListener("click", () => {
      document.body.classList.toggle("_lock");
      burgerMenu.classList.toggle("_active");
      menu.classList.toggle("_active");
    });
  }

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      if (burgerMenu.classList.contains("_active")) {
        document.body.classList.remove("_lock");
        burgerMenu.classList.remove("_active");
        menu.classList.remove("_active");
      }
    });
  });

  async function formSend(e) {
    e.preventDefault();
    const form = document.getElementById("form");
    let formData = new FormData(form);

    console.log(formData);

    let respons = await fetch("sendmail.php", {
      method: "POST",
      body: formData,
    });

    if (respons.ok) {
      let result = await respons.json();
      console.log(result);
      alert(result.message);
      form.reset();
    } else {
      alert("ошибка");
    }
  }

  form.addEventListener("submit", formSend);
});
