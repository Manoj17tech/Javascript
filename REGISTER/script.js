document.getElementById('register-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Collect values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const photoFile = document.getElementById('photo').files[0];

  if (photoFile) {
    const reader = new FileReader();
    reader.onload = function (event) {
      const photoDataURL = event.target.result;

      // Store in localStorage
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      localStorage.setItem('phone', phone);
      localStorage.setItem('photo', photoDataURL);

      // Redirect to profile page
      window.location.href = 'profile.html';
    };

    reader.readAsDataURL(photoFile);
  }
});



const name = "Manoj"
console.log(name);


const friendName = "Niharika"
console.log(friendName);

