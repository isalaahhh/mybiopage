document.addEventListener('DOMContentLoaded', function() {
    const splashScreen = document.getElementById('splash-screen');
    const splashMessageElement = document.getElementById('splash-message');
    const mainContent = document.getElementById('main-content');
    const greetingElement = document.getElementById('greetingMessage');

    const now = new Date();
    const hour = now.getHours();
    let splashText;
    let mainGreetingText;

    if (hour >= 5 && hour < 12) {
        splashText = "Selamat Pagi!";
        mainGreetingText = "Pagi yang cerah! Selamat beraktifitas";
    } else if (hour >= 12 && hour < 12) {
        splashText = "Selamat Siang!";
        mainGreetingText = "Siang! Jelajahi profilku sekarang juga ^_^";
    } else if (hour >= 15 && hour < 18) {
        splashText = "Selamat Sore!";
        mainGreetingText = "Sore! Senang bertemu denganmu";
    } else {
        splashText = "Selamat Malam!";
        mainGreetingText = "Malam! Selamat beristirahat";
    }

    splashMessageElement.textContent = splashText;
    
    if (greetingElement) { 
        greetingElement.textContent = mainGreetingText;
    } else {
        console.error("Elemen dengan ID 'greetingMessage' tidak ditemukan di HTML.");
    }

    const splashDuration = 1200;
    const fadeOutDuration = 600;

    setTimeout(() => {
        splashScreen.classList.add('fade-out');

        setTimeout(() => {
            splashScreen.classList.add('hidden');
            mainContent.classList.remove('hidden');
            mainContent.classList.add('visible');
        }, fadeOutDuration);

    }, splashDuration);

    const profilePic = document.querySelector('.profile-pic');
    if (profilePic) {
        profilePic.addEventListener('mouseover', () => {
            profilePic.style.transform = 'scale(1.05)';
        });
        profilePic.addEventListener('mouseout', () => {
            profilePic.style.transform = 'scale(1)';
        });
    }
});