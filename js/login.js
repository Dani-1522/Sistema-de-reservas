document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/api/login',{
        method: 'POST',
        headers: {
           'Content-Type': 'application/json' 
        },
        body: JSON.stringify({username, password})
    }).then(Response => {
        if (Response.ok){
            alert('Inicio de sesión exitoso');
            window.location.href = 'reservations.html';
        }else {
            alert('Error en el inicio de sesion');
        }
    });
});