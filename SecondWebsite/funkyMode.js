document.addEventListener('DOMContentLoaded', function(){
    const themeToggle = document.getElementById('funkyModeButton');
    const body = document.body;
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme === 'funky'){
        body.classList.add('funky-theme');
        themeToggle.textContent = 'Dark Mode';
    }
    themeToggle.addEventListener('click',function(){
        body.classList.toggle('funky-theme');
        const isFunky = body.classList.contains('funky-theme');
        themeToggle.textContent = isFunky ? 'Dark Mode' : 'Funky Mode';
        localStorage.setItem('theme',isFunky ? 'funky' : 'dark');
    });
});