let listNum = document.querySelectorAll("ul li");
let submitBtn = document.querySelector("button");
let ratingContainer = document.querySelector(".rating");
let thanksContainer = document.querySelector(".thanks");

listNum.forEach((li) => {
  li.addEventListener("click", function (e) {
    // Delete Active class from all lis
    listNum.forEach((li) => {
      li.classList.remove("active");
    });

    // Add Active class to current li
    e.target.classList.add("active");

    // Current Num
    let num = li.innerHTML;

    // Click On submit Btn
    submitBtn.addEventListener("click", () => {
      if (li.classList.contains("active")) {
        ratingContainer.style.display = "none";

        let paraOfThanksContainer =
          thanksContainer.querySelector("p:first-of-type");

        paraOfThanksContainer.innerHTML = `You selected ${num} out of 5`;
        thanksContainer.style.display = "block";
      }
    });
  });
});
