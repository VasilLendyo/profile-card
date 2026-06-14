let btn = document.getElementById('theme-toggle');

if(localStorage.getItem('theme') === 'dark'){
    document.body.classList.add('dark-theme');
    btn.textContent = 'Сонце ☀️';
}

btn.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    
    if (document.body.classList.contains('dark-theme')) {
        btn.textContent = 'Сонце ☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        btn.textContent = 'Місяць 🌙';
        localStorage.setItem('theme', 'light');
    }
});
