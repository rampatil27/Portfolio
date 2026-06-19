const aboutTabs = document.querySelectorAll(".tab");
const aboutContent = document.querySelectorAll(".tab-content");

document.addEventListener("DOMContentLoaded", () => {
  if (aboutTabs) {
    aboutTabs[0].click();
  }
});

aboutTabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();

    aboutTabs.forEach((a) => a.classList.remove("active"));
    tab.classList.add("active");

    aboutContent.forEach((c) => c.classList.remove("active"));

    document.getElementById(tab.dataset.section).classList.add("active");
    
    if (tab.dataset.section === "education") {
      const education = document.querySelector(".education-list");

      const educationList = [
        {
          id: 1,
          date: "2024 - 2026",
          degree: "9th and 10th",
          institution: "Sahakar Vidya Mandir , Motala",
          details:
            "I completed my 9th and 10th grades at this school. I was fortunate to have very good teachers, and I made many wonderful memories here.",
        },
        {
          id: 2,
          date: "2021 - 2024",
          degree: "6th to 8th",
          institution: "Babanrao Deshpande Vidyalaya , Motala",
          details:
            "I completed my 6th and 7th grades at this school.",
        },
        {
          id: 3,
          date: "2016 - 2021",
          degree: "1st to 5th",
          institution: "Brahma Education Valley , Motala",
          details:
            "All my childhood memories are connected with this school.I studied at this school from Nursery to the 5th grade.",
        },
      ];
      const educationContent = educationList
        .map((ele) => {
          return `
            <div class="experience-box" key="${ele?.id}">
              <h4>${ele?.date}</h4>
              <h3>${ele?.degree}</h3>

              <div class="company-name">
                <span></span>
                <p>${ele?.institution}</p>
              </div>

              <p>${ele?.details}</p>
            </div>
        `;
        })
        .join("");

      if (education) {
        education.innerHTML = educationContent;
      }
   
    } else if (tab.dataset.section === "about-me") {
      const myInfo = document.querySelector(".my-info");

      const infoList = [
        {
          id: 1,
          key: "Name : ",
          value: "Ram Patil",
        },
        {
          id: 2,
          key: "Country : ",
          value: "India",
        },
        {
          id: 3,
          key: "State : ",
          value: "Maharashtra",
        },
        {
          id: 4,
          key: "District : ",
          value: "Buldhana",
        },
        {
          id: 5,
          key: "Sub District : ",
          value: "Motala"
        },
        {
          id: 6,
          key: "Address : ",
          value: "Aadavihir,Near Gajanan Maharaj Mandir",
        },
      ];

      const infoContent = infoList
        .map((ele) => {
          return `
            <div class="info-box" key=${ele?.id}>
              <span>${ele?.key}</span>
              <span>${ele?.value}</span>
            </div>
        `;
        })
        .join("");

      if (myInfo) {
        myInfo.innerHTML = infoContent;
      }
    }
  });
});
