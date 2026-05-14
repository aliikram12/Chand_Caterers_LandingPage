// Register GSAP
gsap.registerPlugin(ScrollTrigger);

// Cursor Logic
const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");
const hoverTargets = document.querySelectorAll(".hover-target");

window.addEventListener("mousemove", (e) => {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  cursorOutline.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 500, fill: "forwards" },
  );
});

hoverTargets.forEach((target) => {
  target.addEventListener("mouseenter", () => {
    cursorOutline.style.width = "80px";
    cursorOutline.style.height = "80px";
    cursorOutline.style.backgroundColor = "rgba(204, 255, 0, 0.1)";
    cursorOutline.style.borderColor = "transparent";
  });
  target.addEventListener("mouseleave", () => {
    cursorOutline.style.width = "40px";
    cursorOutline.style.height = "40px";
    cursorOutline.style.backgroundColor = "transparent";
    cursorOutline.style.borderColor = "rgba(204, 255, 0, 0.5)";
  });
});

// Page Navigation
function showPage(pageName) {
  // Hide all pages
  document.querySelectorAll(".page-section").forEach((section) => {
    section.classList.remove("active");
    gsap.set(section, { opacity: 0, y: 20 });
  });

  // Show selected page
  const targetPage = document.getElementById(pageName);
  targetPage.classList.add("active");

  // Animate in
  gsap.to(targetPage, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "power2.out",
  });

  // Update nav links
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("text-acid");
    if (link.dataset.page === pageName) {
      link.classList.add("text-acid");
    }
  });

  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Refresh ScrollTrigger
  setTimeout(() => {
    ScrollTrigger.refresh();
    initAnimations();
  }, 100);
}

function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("translate-x-full");
}

// Slider Logic
let currentSlide = 0;
function slideOfferings(direction) {
  const track = document.getElementById("offerings-slider");
  const slides = track.children;
  const totalSlides = slides.length;

  currentSlide += direction;
  if (currentSlide < 0) currentSlide = totalSlides - 1;
  if (currentSlide >= totalSlides) currentSlide = 0;

  const slideWidth = slides[0].offsetWidth;
  track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

// Menu Tabs
function showMenuTab(tabName) {
  // Hide all contents
  document.querySelectorAll(".menu-content").forEach((content) => {
    content.classList.add("hidden");
  });

  // Remove active from tabs
  document.querySelectorAll(".menu-tab").forEach((tab) => {
    tab.classList.remove("active", "text-acid");
  });

  // Show selected
  document.getElementById(`content-${tabName}`).classList.remove("hidden");
  document
    .getElementById(`tab-${tabName}`)
    .classList.add("active", "text-acid");

  // Re-init animations for new content
  setTimeout(initAnimations, 50);
}

// Menu Data
const menuData = {
  gym: [
    {
      name: "Steamed Chicken with Greens",
      desc: "Lean chicken breast steamed to perfection served with fresh green vegetable cubes. High in protein and low in fat.",
      img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800",
    },
    {
      name: "Garlic Bread Fingers & Boiled Eggs",
      desc: "Protein-packed boiled eggs served with garlic-infused bread fingers. Perfect post-workout snack.",
      img: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800",
    },
    {
      name: "Sliced & Spiced Avocado Bowl",
      desc: "Fresh avocado slices with special spices, rich in healthy fats and fiber. Supports heart health.",
      img: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=800",
    },
    {
      name: "Masala Oats Soup",
      desc: "Hearty oats soup with traditional Indian spices. High in fiber and complex carbohydrates.",
      img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=800",
    },
    {
      name: "Grilled Juicy Thai Chicken",
      desc: "Thai-marinated chicken grilled to juicy perfection. Served with jasmine rice and fresh herbs.",
      img: "https://hot-thai-kitchen.com/wp-content/uploads/2023/05/gai-yang-bbq-chicken-new-sq.jpg",
    },
    {
      name: "Caesar Salad with Protein",
      desc: "Classic Caesar salad topped with grilled chicken strips. Fresh romaine, parmesan, and signature dressing.",
      img: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=800",
    },
    {
      name: "Couscous with Roasted Vegetables",
      desc: "Fluffy couscous with Mediterranean roasted vegetables. Vegetarian protein option packed with nutrients.",
      img: "https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?w=800",
    },
    {
      name: "Lamb with Quinoa Salad",
      desc: "Tender lamb served with grilled tomatoes and protein-rich quinoa salad. Complete meal for muscle building.",
      img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800",
    },
    {
      name: "Nutty Butter Protein Salad",
      desc: "Mixed greens with nuts, seeds, and protein-rich dressing. Perfect for plant-based protein options.",
      img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
    },
    {
      name: "Sugar-free Flaxseed Date Bites",
      desc: "Energy bites made with flaxseeds, dates, and nuts. No added sugar. Healthy snack or dessert.",
      img: "https://rukminim2.flixcart.com/image/480/640/xif0q/snack-savourie/p/a/q/250-date-bites-sugar-free-with-sweetness-of-dates-1-box-berries-original-imah8zrkgyzuhrrn.jpeg?q=90",
    },
    {
      name: "Chia Seed Banana Pudding",
      desc: "Creamy chia seed pudding with fresh bananas. Rich in omega-3 for post-workout recovery.",
      img: "https://images.unsplash.com/photo-1543362906-acfc16c67564?w=800",
    },
  ],
  catering: [
    {
      name: "Halal Authentic Chinese",
      desc: "Traditional Chinese dishes prepared with Halal-certified ingredients. From dim sum to stir-fries.",
      img: "https://kohinoor-joy.com/wp-content/uploads/2020/01/indo-chinese-food.jpg",
    },
    {
      name: "Punjabi Karahi & Curries",
      desc: "Authentic Punjabi cuisine with rich, aromatic curries and traditional karahi dishes.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoisxKMvMy1FbBsXohI0kbjTKPgODjI1BvFg&s",
    },
    {
      name: "Halal Macaroni & Pasta",
      desc: "Italian favorites made with Halal ingredients. From classic spaghetti to creamy fettuccine.",
      img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800",
    },
    {
      name: "Home Made Baking",
      desc: "Classic comfort dishes that taste just like home. Perfect for family gatherings.",
      img: "https://www.southernliving.com/thmb/k5d30JGZdhuwAR6bxpl2xToWJI8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/southern-living-old-fashioned-chicken-pot-pie-3x2-1662-c97054245e034c19b31f2a63cdc8a252.jpg",
    },
    {
      name: "Butter-based Mixed Grills",
      desc: "Assorted grilled meats marinated in special butter-based sauces. Served with fresh naan.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS91UjijaFmJ9phdTSLSz0cWhhRm81o3vV2Hw&s",
    },
    {
      name: "Charcoal Live-cooking Pizza",
      desc: "Fresh pizzas cooked in traditional charcoal ovens right before your eyes.",
      img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800",
    },
    {
      name: "Fussy Eaters' Friendly Cuisine",
      desc: "Simple yet delicious dishes that please even the pickiest eaters. Mild flavors.",
      img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800",
    },
    {
      name: "Maharaja-style Vegetarian",
      desc: "Royal vegetarian feast fit for a king. Multiple courses of rich vegetarian dishes.",
      img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800",
    },
  ],
  special: [
    {
      name: "Pure Vegetarian Feast",
      desc: "Complete vegetarian menu with no onion or garlic. Perfect for traditional vegetarian diets.",
      img: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=800",
    },
    {
      name: "Vegan Catering",
      desc: "100% plant-based menu with no animal products. Creative vegan dishes.",
      img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
    },
    {
      name: "Halal Indo-Chinese",
      desc: "Fusion of Indian and Chinese cuisines prepared with Halal ingredients.",
      img: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800",
    },
    {
      name: "Gujarati & Jain Diet",
      desc: "Traditional Gujarati cuisine prepared according to Jain dietary principles.",
      img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800",
    },
    {
      name: "Asian Vegetarian",
      desc: "Vegetarian dishes from across Asia - Thai, Chinese, Japanese, and Indian.",
      img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800",
    },
    {
      name: "Mediterranean Cuisine",
      desc: "Healthy Mediterranean dishes rich in olive oil, fresh vegetables, and lean proteins.",
      img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800",
    },
  ],
  live: [
    {
      name: "Live Charcoal Pizza Station",
      desc: "Watch our chefs create custom pizzas in traditional charcoal ovens.",
      img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800",
    },
    {
      name: "Dosa Party Station",
      desc: "Freshly made dosas with assorted fillings and chutneys. South Indian delicacy.",
      img: "https://i.ytimg.com/vi/u22VWQntZs4/maxresdefault.jpg",
    },
    {
      name: "Chaat Party Station",
      desc: "Interactive Indian street food experience. Assemble your own chaat.",
      img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800",
    },
    {
      name: "South Indian Live Dosa",
      desc: "South Indian Live Dosa stations provide an interactive, authentic, and customizable dining experience, where chefs prepare fresh, crispy dosas to order at events.",
      img: "https://balajidosalive.com/assets/gallery/3.webp",
    },
    {
      name: "Chaat Corner Live",
      desc: "Chaat Corner Live stations provide an interactive, authentic, and customizable dining experience, where chefs prepare fresh, crispy dosas to order at events.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnONhhKmEQ1yDm2aIHyeOmIM9bxSNj9ET32A&s",
    },
    {
      name: "Street Food  Live",
      desc: "Pakistan's famous street foods include savory snacks like Samosas, Pakoras, Bun Kebabs, and Chana Chaat, hearty options such as Chapli Kebabs and Nihari, sweet treats like Jalebi, and refreshing drinks like Lassi, with culinary hubs in cities like Lahore",
      img: "https://tb-static.uber.com/prod/image-proc/processed_images/6f0651bd85e4322a40e96a31d2942f5d/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
    },
    {
      name: "Tandoori Mixed Grill Live",
      desc: "A Tandoori Mixed Grill is a popular, high-protein Indo-Pakistani dish featuring a variety of meats—typically chicken tikka, lamb chops, seekh kebabs, and sometimes seafood—marinated in yogurt and spices, then cooked in a clay tandoor oven.",
      img: "https://img.freepik.com/premium-photo/tandoori-mixed-grill-platter-with-chicken_167857-54829.jpg?w=360",
    },
  ],
  sweet: [
    {
      name: "Sweet Dishes Station",
      desc: "A delightful variety of traditional and modern sweets freshly prepared for guests.",
      img: "https://www.cookwithkushi.com/wp-content/uploads/2018/08/best_easy_indian_desserts_sweets.jpg",
    },

    {
      name: "Rabdi Jalebi Corner",
      desc: "Hot crispy jalebis served with rich creamy rabdi for a perfect sweet experience.",
      img: "https://halwaisweets.com/wp-content/uploads/2022/05/Ghee-Jalebi-with-Rabdi.jpg",
    },
  ],
};
 
function populateMenu() {
  Object.keys(menuData).forEach((category) => {
    const grid = document.getElementById(`${category}-grid`);
    if (grid) {
      grid.innerHTML = menuData[category]
        .map(
          (item) => `
                        <div class="group bg-charcoal border border-white/10 hover:border-acid/50 transition-all duration-500 food-card reveal-text hover-target">
                            <div class="aspect-square overflow-hidden relative">
                                <img src="${item.img}" 
                                     alt="${item.name}" 
                                     class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700">
                                <div class="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div class="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <button class="w-full bg-acid text-ink py-3 font-bold text-xs tracking-widest uppercase hover:bg-white transition-colors">
                                        Quick View
                                    </button>
                                </div>
                            </div>
                            <div class="p-6">
                                <span class="text-acid text-xs tracking-[0.3em] uppercase">${category === "gym" ? "Protein" : category === "catering" ? "Catering" : category === "special" ? "Special" : category === "live" ? "Live" : "sweet"}</span>
                                <h3 class="font-serif text-xl mt-2 mb-3 group-hover:text-acid transition-colors">${item.name}</h3>
                                <p class="text-gray-400 text-sm mb-4 line-clamp-3">${item.desc}</p>
                                <a href="https://wa.me/447825214010?text=Hi%20Chand%20Caterers,%20I'm%20interested%20in%20ordering%20${encodeURIComponent(item.name)}" 
                                   target="_blank"
                                   class="inline-block text-acid border-b border-acid pb-1 hover:text-white hover:border-white transition-all text-sm">
                                    Book Now →
                                </a>
                            </div>
                        </div>
                    `,
        )
        .join("");
    }
  });
}

// Magnetic Buttons
function initMagneticButtons() {
  const magneticBtns = document.querySelectorAll(".magnetic-btn");
  magneticBtns.forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "translate(0, 0)";
    });
  });
}

// Animations
function initAnimations() {
  gsap.utils.toArray(".reveal-text").forEach((element, index) => {
    gsap.to(element, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power4.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      delay: index * 0.05,
    });
  });
}

// Initialize
window.addEventListener("load", () => {
  populateMenu();
  initMagneticButtons();
  initAnimations();
  showPage("home");
});

// Resize handler for slider
window.addEventListener("resize", () => {
  const track = document.getElementById("offerings-slider");
  if (track) {
    track.style.transform = `translateX(-${currentSlide * track.children[0].offsetWidth}px)`;
  }
});
