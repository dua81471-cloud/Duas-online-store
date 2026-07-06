// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = this.getAttribute("href");

        if (target.startsWith("#")) {
            const section = document.querySelector(target);

            if (section) {
                section.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    });
});

// Fade-in animation on scroll
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.2
});

document.querySelectorAll(".card,.product,.hero-text,.hero-image").forEach((el)=>{
    el.classList.add("hidden");
    observer.observe(el);
});

// Button click effect
document.querySelectorAll(".btn,.buy").forEach(btn=>{
    btn.addEventListener("click",()=>{
        btn.style.transform="scale(0.95)";
        setTimeout(()=>{
            btn.style.transform="scale(1)";
        },150);
    });
});

// Current year in footer
const year = new Date().getFullYear();
const footer = document.querySelector("footer p:last-child");

if(footer){
    footer.innerHTML = `© ${year} Dua's Online Store. All Rights Reserved.`;
        }
