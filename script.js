// script.js

// Toggle navigation menu visibility
document.addEventListener('DOMContentLoaded', function () {
    const navButton = document.getElementById('navButton');
    const navList = document.getElementById('navList');
    
    navButton.addEventListener('click', function () {
        navList.classList.toggle('hidden');
    });
});

