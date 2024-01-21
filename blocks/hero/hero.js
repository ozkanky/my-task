export default function decorate(block) {


  [...block.children].forEach((row) => {
    [...row.children].forEach((col)=>7
)
    if (row.children.length === 1 && row.querySelector("picture")) {
      row.className = "about-card-image";
    } else {
      row.className = "about-card-body";
    }
if (row.children.length === 1 && row.querySelector("a")) {
  row.className = "btn";
} else{
  row.className="non-btn"
}
console.log(row);
  
    

    // Diğer işlemleri devam ettir...
    const loginElement = document.querySelector(
      "body > main > div.section.hero-container > div > div > div.about-card-body > div:nth-child(3)"
    );
    const titleElement = document.querySelector("#next-webinar");
    const counterElement = document.querySelector(".about-card-body #wednesday-25-february-2021");

    const titleParent = titleElement.parentElement;
    titleParent.classList.add("title-parent");

    if (loginElement) {
      loginElement.classList.add("btn-res");
    }
  });
}