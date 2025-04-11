document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const responseDiv = document.getElementById('response');
    
    fetch('submit.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        responseDiv.style.display = 'block';
        if (data.success) {
            responseDiv.className = 'mt-3 alert alert-success';
            responseDiv.textContent = 'Message sent successfully!';
            this.reset();
        } else {
            responseDiv.className = 'mt-3 alert alert-danger';
            responseDiv.textContent = 'Error: ' + data.message;
        }
    })
    .catch(error => {
        responseDiv.style.display = 'block';
        responseDiv.className = 'mt-3 alert alert-danger';
        responseDiv.textContent = 'An error occurred: ' + error.message;
    });
});