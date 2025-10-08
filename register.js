const registerForm = document.querySelector('form');

registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.querySelector('input[placeholder="Username"]').value;
    const firstName = document.querySelector('input[placeholder="First Name"]').value;
    const lastName = document.querySelector('input[placeholder="Last Name"]').value;
    const phoneNumber = document.querySelector('input[placeholder="Phone Number"]').value;
    const role = document.querySelector('input[placeholder="Role"]').value;
    const email = document.querySelector('input[placeholder="Email"]').value;
    const password = document.querySelector('input[placeholder="Password"]').value;

    axios.post('http://localhost:3000/register', {
        username,
        firstName,
        lastName,
        phoneNumber,
        role,
        email,
        password
    })
    .then(response => {
        console.log(response.data);
        window.location.href = 'login.html';
    })
    .catch(error => {
        console.log(error);
    });
});