if (window.downData) {
    document.querySelector("#share_btn").style.display = "none";
}

const stickynavbar = () => {
    if (window.scrollY === 0) {
        navbar.style.backgroundColor = "";
        navbar.style.boxShadow = "";
    } else {
        navbar.style.backgroundColor = "white";
        navbar.style.boxShadow = "0 2px 20px 20px rgba(0, 0, 0, 0.2)";
    }
}
stickynavbar();
window.addEventListener("scroll", stickynavbar);

document.querySelector("#year").textContent = new Date().getFullYear();

const navbarToggle = navbar.querySelector("#navbar_toggle");
let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";
const toggleNavbarVisibility = () => {
    isNavbarExpanded = !isNavbarExpanded;
    navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
    if (isNavbarExpanded) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "";
    }
};
navbarToggle.addEventListener("click", toggleNavbarVisibility);
document.querySelector("#navbar_menu").addEventListener("click", toggleNavbarVisibility);
document.querySelector("#navbar_items_container").addEventListener("click", (e) => e.stopPropagation());

const detailsElements = document.querySelectorAll("details");
for (let i = 0; i < detailsElements.length; i++) {
    detailsElements[i].addEventListener("toggle", function (o) {
        if (o.target.open) {
            document.body.style.overflow = "hidden";
        } else if (navbarToggle.getAttribute("aria-expanded") === "false") {
            document.body.style.overflow = "";
        }
    });
}

window.addEventListener("resize", () => {
    if (document.body.clientWidth > 768) {
        if (navbarToggle.getAttribute("aria-expanded") === "true") {
            navbarToggle.setAttribute("aria-expanded", "false");
            isNavbarExpanded = !isNavbarExpanded;
            document.body.style.overflow = "";
            for (let i = 0; i < detailsElements.length; i++) {
                if (detailsElements[i].open === true) {
                    detailsElements[i].open = false;
                }
            }
        }
    } else if (document.body.clientWidth < 768) {
        for (let i = 0; i < detailsElements.length; i++) {
            if (navbarToggle.getAttribute("aria-expanded") === "false") {
                if (detailsElements[i].open === true) {
                    detailsElements[i].open = false;
                    document.body.style.overflow = "";
                }
            }
        }
    }
});

document.getElementById("share_btn").addEventListener("click", async () => {
    if (navigator.share) {
        await navigator.share({
            title: "DownloadX",
            text: "All In One Video & Audio Downloader | DownloadX",
            url: "https://www.downloadx.in"
        });
    } else {
        alert("Sharing not supported on this browser.");
    }
});