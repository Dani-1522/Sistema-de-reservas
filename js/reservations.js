document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const resource = document.getElementById('resource').value;
    const startTime = document.getElementById('startTime').value;
    const endTime = document.getElementById('endTime').value;
    const username = localStorage.getItem('username');

    fetch('/api/reservations?username=' + username, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ resource, startTime, endTime })
    }).then(response => response.json())
      .then(data => {
          if (data) {
              alert('Reserva creada');
              cargarReservas();
          } else {
              alert('Error al crear la reserva');
          }
      });
});

function cargarReservas() {
    const username = localStorage.getItem('username');
    fetch('/api/reservations?username=' + username)
        .then(response => response.json())
        .then(data => {
            const reservationList = document.getElementById('reservationList');
            reservationList.innerHTML = '';
            data.forEach(reservation => {
                const listItem = document.createElement('li');
                listItem.textContent = `Recurso: ${reservation.resource}, Inicio: ${reservation.startTime}, Fin: ${reservation.endTime}`;
                reservationList.appendChild(listItem);
            });
        });
}

document.addEventListener('DOMContentLoaded', function() {
    cargarReservas();
});
