export default function decorate(block) {
  [...block.children].forEach((row) => {
  

    if (row.children.length === 1 && row.querySelector("picture")) {
      row.className = "about-card-image";
    } else {
      row.className = "about-card-body";
    }
    if (row.children.length === 1 && row.querySelector("a")) {
      row.className = "btn";
    } else {
      row.className = "non-btn";
    }

    
    const titleElement = document.querySelector("#next-webinar");
    const counterElement = document.querySelector(".hero-container > div > div > div:nth-child(2) > div")
    

    const titleParent = titleElement.parentElement;
    titleParent.classList.add("title-parent");

    
  });
  //!conter innerHTML
  const counter = document.querySelector(
    ".hero-container > div > div > div:nth-child(2) h5"
  );

  const counterDiv = document.createElement("div");
  counterDiv.classList.add("countdown");
  counterDiv.innerHTML = `
          <div class='timer'>
            <h2 id='days'>00</h2>
            <small>Days</small>
          </div>
    
           <div class='timer'>
            <h2 id='hours'>00</h2>
            <small>Hours</small>
          </div>
    
           <div class='timer'>
            <h2 id='minutes'>00</h2>
            <small>Minutes</small>
          </div>
    
           <div class='timer'>
            <h2 id='seconds'>00</h2>
            <small>Seconds</small>
          </div>
          `;
  
  console.log(counter);



  counter.appendChild(counterDiv);

  //!   counter

  const days = document.querySelector("#days");

  const hours = document.getElementById("hours");
  const minutes = document.getElementById("minutes");
  const seconds = document.getElementById("seconds");

  const currentYear = new Date().getFullYear();
  const newYearTime = new Date(`February 25, 2025 00:00:00`);

  const updateCountDownTime = () => {
    const currentTime = new Date();
    const diff = newYearTime - currentTime;
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 24;
    const s = Math.floor(diff / 1000) % 24;

   days.innerHTML = d < 10 ? `0${d}` : d;
   hours.innerHTML = h < 10 ? `0${h}` :h;
   minutes.innerHTML = m < 10 ? `0${m}` : m;
   seconds.innerHTML = s < 10 ? `0${s}` : s;

  };
  setInterval(updateCountDownTime, 1000);
}