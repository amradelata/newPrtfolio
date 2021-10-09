console.log("000000000000000000");
let allCards = document.querySelectorAll(".my-card");
let buttons = document.querySelectorAll("button");
let phonePars = document.getElementById("phonePars");
let topbtn = document.querySelector(".top-buttonphone");
let myphoneprojectbtn = document.querySelectorAll(".phoneprojectbtn");
// let navIcon = document.getElementById('phoneParsNave')
let manMeue = document.querySelector(".my-buttonsPhone");
// navIcon.addEventListener('click', () => {
//   // console.log('click')
//   manMeue.classList.toggle('disblay-block')
// })
//

buttons.forEach((category) =>
  category.addEventListener("click", function () {
    allCards.forEach((card) => {
      if (category.id === "all") {
        card.classList.remove("hide");
        return;
      }
      if (category.id !== card.getAttribute("data-name")) {
        card.classList.add("hide");
      } else {
        card.classList.remove("hide");
      }
    });
  })
);

phonePars.addEventListener("click", () => {
  topbtn.style.display = "block !important";
  topbtn.classList.toggle("heid");
});

//close phone nave after click on catagory
myphoneprojectbtn.forEach((item) =>
  item.addEventListener("click", () => {
    topbtn.classList.remove("heid");
  })
);
