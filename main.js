const sections = document.querySelectorAll("section");
    window.addEventListener("scroll", () => {
      sections.forEach(sec => {
        const secTop = sec.getBoundingClientRect().top;
        if(secTop < window.innerHeight - 100){
          sec.classList.add("show");
        }
      });
    });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.add("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
}); 