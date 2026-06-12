let btn = document.getElementById('theme-toggle');

btn.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    
    if (document.body.classList.contains('dark-theme')) {
        btn.textContent = 'Сонце ☀️';
    } else {
        btn.textContent = 'Місяць 🌙';
    }
});
