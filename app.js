const USER_API_URL = 'http://localhost:3000/user';

// Switching between login and register
document.getElementById('showRegister').addEventListener('click', () => {
    document.getElementById('loginPage').classList.add('hidden');
    document.getElementById('registerPage').classList.remove('hidden');
});

document.getElementById('showLogin').addEventListener('click', () => {
    document.getElementById('registerPage').classList.add('hidden');
    document.getElementById('loginPage').classList.remove('hidden');
});

// Register User
document.getElementById('registerBtn').addEventListener('click', () => {
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('registerPassword').value;

    const payload = {
        username,
        email,
        password
    };
    
    fetch(`${API_URL}/user/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(Response => Response.json())
    .then(data => {
        alert('User registered successfully');
        document.getElementById('registerPage').classList.add('hidden');
        document.getElementById('loginPage').classList.remove('hidden');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error registering user');
    });
})

// Login User
document.getElementById('loginBtn').addEventListener('click', () => {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const payload = {
        email,
        password
    };
    
    fetch(`${USER_API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(Response => Response.json())
    .then(data => {
        if (data.token) {
            alert('Login successful');
            document.getElementById('loginPage').classList.add('hidden');
            document.getElementById('dashboardPage').classList.remove('hidden');
        } else {
            alert('Invalid credentials');
        }
    })
    .catch(error => {
        console.log(error);
        console.error('Error:', error);
        alert('Error logging in');
    });
});