



export default function decorate(block) {
  // console.log(block);
[...block.children].forEach((row)=>{

row.firstElementChild.className="title-portal"
const portalElement=document.querySelector(".portal-container > div > div > div")
const portalPar = document.querySelector(".portal-container > div > div > div > div:nth-child(2)"
);
portalPar.classList.add("par")
portalElement.classList.add("portal-element")
const div =document.createElement("div")
div.className="newDiv"
portalElement.append(div)


})
  
}