export default function decorate(block) {
//  console.log(block);
 


 [...block.children].forEach((row)=>{
  // console.log(row)
  [...block.children].forEach((col)=>{
    
    col.classList.add("col")
    const h3Parents = document.querySelectorAll('.col div');

    // Her bir div öğesi için döngü
    h3Parents.forEach(function(div) {
     
      // Div'in çocukları arasında h3 etiketini seç
      const h3Element = div.querySelector('h3');
// console.log(h3Element);
      //  h3 etiketi ebeveyn div'e bir sınıf ekle
      if (h3Element) {
        div.classList.add("col-content");
      }
  })
 })
})}