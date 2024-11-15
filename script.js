//Get the button
let mybutton = document.getElementById("btn-back-to-top");


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  console.log("Scroll");
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//when user clicks the price they want to donate, the button stays highlighted
const moneyElements = document.querySelectorAll('.money');

moneyElements.forEach(money => {
  money.addEventListener('click', () => {
    moneyElements.forEach(otherMoney => {
      otherMoney.classList.remove('active');
    });
    money.classList.add('active');
  });
});

// Page refreshes with a blank form once button is clicked.
const donationForm = document.getElementById('donation-form');
const donateButton = document.getElementById('donate-button');

donationForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission behavior
  donationForm.reset(); // Reset the form fields
  window.location.reload(); // Refresh the page
});

//when user clicks time period, the button stays highlighted
const time = document.querySelector('#time');
const monthly = time.querySelector('.monthly');
const onetime = time.querySelector('.onetime');

time.addEventListener('click', (event) => {
  const target = event.target;
  if (target.tagName === 'SPAN') {
    monthly.classList.remove('active');
    onetime.classList.remove('active');
    target.classList.add('active');
  }
});


//donation validation
function validateForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;

  if (name === "" || email === "") {
    alert("Name and email must be filled out");
    return false;
  }



  return true;
}