const familylist = [
  {
    id: 1,
    number: "01",
    title: "Hi , I'm Ram",
    description:
      "I am a simple, quiet, and creatively inclined Marathi young man. Devotion to Lord Vitthal, the Warkari tradition, a passion for decoration, and a deep love for Lord Ganesha constitute significant parts of my life. I enjoy learning new things, generating various creative ideas, and approaching every task with wholehearted dedication,For me, relationships, cherished memories, and humanity hold immense importance. I firmly believe in moving forward with a smile on my face, no matter how many obstacles life may present. Living simply, dreaming big, and placing my faith in the fruits of my own hard work—this is the true essence of my personality.",
    techStack: ["I am a simple boy"],
    image: "assets/family/family1.webp",
    instagramLink : "#"
  },
  {
    id: 2,
    number: "02",
    title: "It's My Father",
    description:
      "My father Name is Chhagan (Rajendra) Laxman Patil. My father was a very good and loving man.He always instilled in me values of positive thinking, humanity, and devotion.However, he left my side far too soon; consequently, I miss him deeply to this very day.It was through my father's companionship—and the values he imparted—that I was drawn toward the Warkari tradition.I inherited from him my passion for devotion to Lord Vitthal, for singing Abhangs, and for playing the Pakhawaj.Although my father is no longer physically with me today, his thoughts, his teachings, and his blessings remain with me forever.",
    techStack: ["I'm Really Miss You Baba"],
    image: "assets/family/family2.webp",
  },
  {
    id: 3,
    number: "03",
    title: "It's My Mother",
    description:
      "My Mother Name is Megha Chhagan Patil. Ever since my father passed away, my mother has single-handedly shouldered the entire responsibility of our home.She never once let me feel the absence of my father.My mother raised me by showering me with the love of both a mother and a father.She toiled tirelessly for my sake and endured countless hardships, yet she never gave up.It is solely because of her hard work, love, and the values she instilled in me that I am able to move forward in life today.My mother's struggles, her love, and her sacrifices hold immense significance for me.God has blessed me with the strongest and most loving mother in the world. So, thank you, God, for giving me this mother.",
    techStack: ["My Mother is MY Wold "],
    image: "assets/family/family3.webp",
  },
  {
    id: 4,
    number: "04",
    title: "It's My Sister",
    description:
      "My Sister Name is Shruti Chhagan Patil. My sister has always stood by me like a pillar of support.After our father passed away, she, alongside our mother, shouldered a great deal of responsibility.She always looks out for me, offers guidance, and stands by my side at every step.To me, my sister is not merely a sibling, but also a close friend and a source of inspiration.Her love, her support, and her affection are deeply precious to me.",
    techStack: ["My Cute Sister"],
    image: "assets/family/family4.webp",
  },
];

const family = document.querySelector(".family");

let currentIndex = 0;

const renderFamily = (index) => {
  const familyContent = familylist[index];

  const previousDisabled = currentIndex === 0;
  const nextDisabled = currentIndex === familylist.length - 1;

  family.innerHTML = `
        <div class="family-info">
            <h3>${familyContent?.number}</h3>
            <h4>${familyContent?.title}</h4>
            <p>
            ${familyContent?.description}
            </p>
            <div class="tech-stack">
                ${familyContent?.techStack
                  ?.map((tech, i) => {
                    return `<span key=${i}>${tech}</span>`;
                  })
                  .join(",")}
            </div>       
        
            <div class="carousel">
            <img 
                src="${familyContent?.image}" 
                alt="${familyContent?.title}" 
            />

            <div class="arrows">
              <a href="#" id="previous" class='${
                previousDisabled ? "disabled-btn" : ""
              }'>
                <i class="ph ph-caret-left"></i>
              </a>
              <a href="#" id="next" class='${
                nextDisabled ? "disabled-btn" : ""
              }'>
                <i class="ph ph-caret-right"></i>
              </a>
            </div>
          </div>    
        `;
   

  document.getElementById("previous").addEventListener("click", (e) => {
    e.preventDefault();

    if (currentIndex > 0) {
      currentIndex--;
      renderFamily(currentIndex);
    }
  });

  document.getElementById("next").addEventListener("click", (e) => {
    e.preventDefault();

    if (currentIndex < familylist.length - 1) {
      currentIndex++;
      renderFamily(currentIndex);
    }
  });
};

renderFamily(currentIndex);
