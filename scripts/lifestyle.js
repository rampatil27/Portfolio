const lifestyleTabs = document.querySelectorAll(".tab");
const lifestyleContent = document.querySelectorAll(".tab-content");

document.addEventListener("DOMContentLoaded", () => {
  if (lifestyleTabs) {
    lifestyleTabs[0].click();
  }
});

lifestyleTabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();

    lifestyleTabs.forEach((a) => a.classList.remove("active"));
    tab.classList.add("active");

    lifestyleContent.forEach((c) => c.classList.remove("active"));

    document.getElementById(tab.dataset.section).classList.add("active");

  });
});
