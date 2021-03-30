//portfolio-filter
const filterContainer = document.querySelector('.portfolio-filter'),
    filterBtns = filterContainer.children,
    totaleFilterBtn = filterBtns.length,
    protfolioItems = document.querySelectorAll('.portfolio-item'),
    totalProtfolioItem = protfolioItems.length;

for (let i = 0; i < totaleFilterBtn; i++){
    filterBtns[i].addEventListener('click', function () {
        filterContainer.querySelector('.active').classList.remove('active');
        this.classList.add('active');

        const filterValue = this.getAttribute('data-filter');
        for (let k = 0; k < totalProtfolioItem; k++){
            if (filterValue === protfolioItems[k].getAttribute("data-category")) {
                protfolioItems[k].classList.remove("hide");
                protfolioItems[k].classList.add("show");

            } if (filterValue === 'all') {
                 protfolioItems[k].classList.remove("hide");
                 protfolioItems[k].classList.add("show");
            }
            else {
                protfolioItems[k].classList.remove("show");
                protfolioItems[k].classList.add("hide");
            }
        }
    })
}
//protfolio lightbox
const lightbox = document.querySelector(".lighbtbox "),
    lightboxImg = lightbox.querySelector(".lightbox-img"),
    lightboxText = lightbox.querySelector(".caption-text"),
    lightboxCounter = lightbox.querySelector(".caption-counter");

let itmeIndex = 0;
for (let i = 0; i < totalProtfolioItem; i++){
    protfolioItems[i].addEventListener("click", function () {
        itmeIndex = 1;
        changeItem();
        toggleLightbox();
    })
}
function toggleLightbox() {
    lightbox.classList.toggle("open");
}
function changeItem() {
    imgSrc = protfolioItems[itmeIndex].querySelector(".portfolio-img img").getAttribute("src");
    lightboxImg.src = imgSrc;

}
