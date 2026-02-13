// ============== HEART MESSAGES ==============
const heartMessages = [
    "Your smile brightens even my darkest days! 😊✨",
    "Your kindness shows me what love really means! 💝",
    "With you, I feel truly safe and at home! 🏠❤️",
    "You are my greatest dream come true! 🌟"
];

const heartEmojis = ['💖', '💗', '💓', '💝'];
let teddyShown = false; // Track if teddy has been shown

// ============== MUSIC ==============
window.addEventListener('load', () => {
    const audio = document.getElementById('bgMusic');
    // Happy Lofi Music URL
    audio.src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
    audio.play().catch(() => {
        document.body.addEventListener('click', () => {
            audio.play();
        }, { once: true });
    });
});

// Enhanced Background Animation with More Hearts
function createHeart() {
    const canvas = document.getElementById('bg-canvas');
    const h = document.createElement('div');
    h.classList.add('floating-heart');
    h.innerHTML = '❤️';
    h.style.left = Math.random() * 100 + 'vw';
    h.style.animationDuration = (Math.random() * 4 + 4) + 's';
    h.style.fontSize = (Math.random() * 1 + 1.5) + 'rem';
    canvas.appendChild(h);
    setTimeout(() => h.remove(), 8000);
}
setInterval(createHeart, 300);

// Teddy Bear Animation - Only Show Once
function showTeddyBear() {
    if (teddyShown) return; // Don't show if already shown
    teddyShown = true;
    
    const container = document.getElementById('teddy-container');
    container.innerHTML = '';
    const teddy = document.createElement('div');
    teddy.classList.add('teddy-bear');
    teddy.innerHTML = '🧸';
    container.appendChild(teddy);
    
    setTimeout(() => {
        teddy.style.animation = 'teddyFloat 2s ease-in-out 0.5s forwards';
        teddy.style.position = 'fixed';
    }, 800);

    setTimeout(() => {
        container.innerHTML = '';
    }, 3500);
}

// Navigation
function show(id) {
    document.querySelectorAll('.card').forEach(c => c.classList.remove('active'));
    document.getElementById('s' + id).classList.add('active');
}

// Gift Box Opening - Shows teddy bear only once
function openGift() {
    showTeddyBear();
    setTimeout(() => show(2), 2500);
}

// Show Heart Message Popup
function showHeartMessage(index) {
    const popup = document.getElementById('heart-popup');
    const popupText = document.getElementById('heart-popup-text');
    popupText.innerText = heartMessages[index];
    popup.style.display = 'flex';
}

// Close Heart Popup
document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('heart-popup');
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });
});

// Enhanced Photo Gallery Logic with 7 Images
let pIdx = 0;
const photos = [
    "https://picsum.photos/400/500?random=10",
    "https://picsum.photos/400/500?random=11",
    "https://picsum.photos/400/500?random=12",
    "https://picsum.photos/400/500?random=13",
    "https://picsum.photos/400/500?random=14",
    "https://picsum.photos/400/500?random=15",
    "https://picsum.photos/400/500?random=16"
];

function nextPhoto() {
    pIdx = (pIdx + 1) % photos.length;
    document.getElementById('currPhoto').src = photos[pIdx];
    document.getElementById('photo-count').innerText = `Memory ${pIdx + 1} of ${photos.length}`;
}

// Yes Button - Show Joyful Animation and Celebration
function yes() {
    const card = document.getElementById('s4');
    const celebrationText = document.getElementById('celebration-text');
    const yesBtn = document.getElementById('yesBtn');
    
    // Hide buttons
    yesBtn.style.display = 'none';
    document.getElementById('noBtn').style.display = 'none';
    
    // Show celebration
    celebrationText.style.display = 'block';
    celebrationText.innerText = 'YAYYY!!!!!!';
    
    card.classList.add('joyful');
    createCelebrationHearts();
    
    setTimeout(() => {
        card.classList.remove('joyful');
        show(5);
    }, 2000);
}

// Celebration Hearts Animation
function createCelebrationHearts() {
    for (let i = 0; i < 25; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = '-50px';
            heart.style.fontSize = (Math.random() * 1 + 1.5) + 'rem';
            heart.style.zIndex = '999';
            heart.style.pointerEvents = 'none';
            document.body.appendChild(heart);
            
            const duration = Math.random() * 1.5 + 1.5;
            const xMove = (Math.random() - 0.5) * 300;
            
            heart.animate([
                { transform: 'translateY(0) translateX(0) scale(1) rotate(0deg)', opacity: 1 },
                { transform: `translateY(150vh) translateX(${xMove}px) scale(0.5) rotate(360deg)`, opacity: 0 }
            ], { duration: duration * 1000, easing: 'ease-in' });
            
            setTimeout(() => heart.remove(), duration * 1000);
        }, i * 50);
    }
}

// Confetti Animation (if needed)
function createConfetti() {
    const confetti = ['🎉', '💕', '❤️', '🎊', '✨', '💖', '🌹'];
    for (let i = 0; i < 20; i++) {
        const conf = document.createElement('div');
        conf.style.position = 'fixed';
        conf.style.left = Math.random() * 100 + 'vw';
        conf.style.top = '-20px';
        conf.style.fontSize = '2rem';
        conf.style.pointerEvents = 'none';
        conf.style.zIndex = '999';
        conf.innerHTML = confetti[Math.floor(Math.random() * confetti.length)];
        document.body.appendChild(conf);
        
        const duration = Math.random() * 2 + 2;
        const xMove = (Math.random() - 0.5) * 200;
        
        conf.animate([
            { transform: 'translateY(0) translateX(0) rotate(0deg)', opacity: 1 },
            { transform: `translateY(100vh) translateX(${xMove}px) rotate(360deg)`, opacity: 0 }
        ], { duration: duration * 1000, easing: 'ease-in' });
        
        setTimeout(() => conf.remove(), duration * 1000);
    }
}

// Open Greeting Card
function openGreeting() {
    show(6);
}

// Runaway No Button
const noBtn = document.getElementById('noBtn');
noBtn.addEventListener('mouseover', moveBtn);
noBtn.addEventListener('touchstart', moveBtn);
noBtn.addEventListener('click', (e) => {
    e.preventDefault();
    moveBtn();
});

function moveBtn() {
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 100);
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
    noBtn.style.position = 'fixed';
    noBtn.style.zIndex = '100';
}