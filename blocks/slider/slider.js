export default function decorate(block) {
  const ul = document.createElement("ul");
  // console.log(block);
  [...block.children].forEach((row) => {
    
    const li = document.createElement("li");
   
    while (row.firstElementChild) {
      li.append(row.firstElementChild);
    }

    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector("h4")) {
        div.classList.add("about-card");
      } else {
        div.classList.add("about-card-body");
      }
    });
 
    
    // console.log(li);
    ul.append(li);
  });

  ul.querySelectorAll("h4").forEach((h4) => {
    h4.closest("div").replaceWith(h4);
    
  });
  
  block.textContent = "";
  
  block.append(ul);

  }

  