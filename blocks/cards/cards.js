export default function decorate(block) {
  const titleCards=document.querySelector('.button-container')

  titleCards.parentElement.classList.add("title-dates")

  const strongElements = block.querySelectorAll("strong");

  strongElements.forEach((strongElement) => {
    const buttonElement = document.createElement("button");
    buttonElement.textContent = "See Bio";

    buttonElement.addEventListener("click", function () {
    
    });

    strongElement.parentNode.replaceChild(buttonElement, strongElement);
  });
}
