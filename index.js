const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");
menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});
closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");
  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});
Orders.forEach((order) => {
  const tr = document.createElement("tr");
  const trContent = `<tr>
<td>${order.productName}</td>
<td>${order.productNumber}</td>
<td>${order.paymentStatus}</td>
<td>${order.paymentStatus}</td>
<td>${order.paymentStatus}</td>

<td class="${
    order.shipping === "Declined"
      ? "danger"
      : order.shipping === "pending"
      ? "warning"
      : "primary"
  }">${order.shipping}</td>
<td class="primary">Details</td>
<td><button class="danger modelbutt" onclick="openModal()">Edit coupon</button></td>
</tr>`;
  tr.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(tr);
});

//  Modal popup js

var modal = document.getElementById("myModal");

// Open the modal
function openModal() {
  modal.style.display = "block";
}

// Close the modal
function closeModal() {
  modal.style.display = "none";
}

// Close the modal when the user clicks outside of it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// The add coupon model -------------------------------------------------------------------
var cmodal = document.getElementById("addCouponModal");

// Open the modal
function openCModal() {
  cmodal.style.display = "block";
}

// Close the modal
function closeCModal() {
  cmodal.style.display = "none";
}

// Close the modal when the user clicks outside of it
window.onclick = function (event) {
  if (event.target == cmodal) {
    cmodal.style.display = "none";
  }
};
