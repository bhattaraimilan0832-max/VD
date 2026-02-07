// Falling hearts animation
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDelay = Math.random() * 5 + 's';
    document.getElementById('hearts').appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 300);

// Falling roses animation
function createRose() {
    const rose = document.createElement('div');
    rose.className = 'rose';
    rose.innerHTML = '🌹';
    rose.style.left = Math.random() * 100 + 'vw';
    rose.style.animationDelay = Math.random() * 7 + 's';
    document.getElementById('roses').appendChild(rose);
    setTimeout(() => rose.remove(), 7000);
}
setInterval(createRose, 500);

// Static kissing GIF (middle-left side)
function createKiss() {
    const kiss = document.createElement('img');
    kiss.className = 'kiss';
    kiss.src = 'kisses.gif'; // Direct kissing GIF URL
    kiss.onerror = () => kiss.remove(); // Remove if GIF fails to load
    document.getElementById('kisses').appendChild(kiss);
    // No removal; stays static
}
createKiss(); // Call once to place it

// Static hugging GIF (middle-right side)
function createHug() {
    const hug = document.createElement('img');
    hug.className = 'hug';
    hug.src = 'hugs.gif'; // Direct hugging GIF URL
    hug.onerror = () => hug.remove(); // Remove if GIF fails to load
    document.getElementById('hugs').appendChild(hug);
    // No removal; stays static
}
createHug(); // Call once to place it

// Typing effect for memory text
const text = "Remember how we laughed through the tough times, held each other during the lows, and celebrated every high? You've taught me what true love means – it's not perfect, but it's ours. I promise to stand by you, love you fiercely, and make every day feel like Valentine's Day.";
let index = 0;
const typingText = document.getElementById('typing-text');
function typeWriter() {
    if (index < text.length) {
        typingText.innerHTML = text.substring(0, index + 1);
        index++;
        setTimeout(typeWriter, 50);
    } else {
        typingText.classList.remove('typing');
    }
}
setTimeout(typeWriter, 2000);

// Lightbox for gallery images
const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Button interactions
document.getElementById('yes').addEventListener('click', () => {
    document.getElementById('main-container').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('main-container').style.display = 'none';
        document.getElementById('love-overlay').style.display = 'flex';
    }, 1000);
});

document.getElementById('no').addEventListener('click', () => {
    const noBtn = document.getElementById('no');
    noBtn.style.position = 'absolute';
    noBtn.style.left = Math.random() * (window.innerWidth - 100) + 'px';
    noBtn.style.top = Math.random() * (window.innerHeight - 50) + 'px';
});

document.getElementById('back-btn').addEventListener('click', () => {
    document.getElementById('love-overlay').style.display = 'none';
    document.getElementById('main-container').style.display = 'block';
    setTimeout(() => {
        document.getElementById('main-container').style.opacity = '1';
    }, 100);
});

// Overlay animations for "Yes" reveal
function createOverlayHeart() {
    const heart = document.createElement('div');
    heart.className = 'overlay-heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDelay = Math.random() * 5 + 's';
    document.getElementById('overlay-hearts').appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

function createOverlayRose() {
    const rose = document.createElement('div');
    rose.className = 'overlay-rose';
    rose.innerHTML = '🌹';
    rose.style.left = Math.random() * 100 + 'vw';
    rose.style.animationDelay = Math.random() * 7 + 's';
    document.getElementById('overlay-roses').appendChild(rose);
    setTimeout(() => rose.remove(), 7000);
}

// Interactive elements in the "Yes" overlay
document.getElementById('pulsing-heart').addEventListener('click', () => {
    alert("My heart beats only for you, Sumi! ❤️");
});

document.getElementById('reveal-more').addEventListener('click', () => {
    const extra = document.getElementById('extra-memories');
    extra.style.display = extra.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('play-music').addEventListener('click', () => {
    // Example: Open a YouTube video (replace with your romantic song URL)
    window.open('https://www.youtube.com/watch?v=Umqb9KENgmk&list=RDUmqb9KENgmk&start_radio=1', '_blank');
    // Alternatively, if you have audio: const audio = new Audio('romantic-song.mp3'); audio.play();
});

// Start overlay animations when "Yes" is clicked
document.getElementById('yes').addEventListener('click', () => {
    document.getElementById('main-container').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('main-container').style.display = 'none';
        document.getElementById('love-overlay').style.display = 'flex';
        // Start floating animations
        setInterval(createOverlayHeart, 300);
        setInterval(createOverlayRose, 500);
    }, 1000);
});