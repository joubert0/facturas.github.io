document.addEventListener('DOMContentLoaded', function() {
    // Your initialization code here (if needed)
});

const sounds = {
    up: './media/Up-Arrow.mp3',  
    down: './media/Down-Arrow.mp3',
    left: './media/Left-Arrow.mp3',
    right: './media/Right-Arrow.mp3'
};

document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case 'ArrowUp':
            playSound(sounds.up);
            document.getElementById('Up').style.transform = 'scale(1.2)';
            break;
        case 'ArrowDown':
            playSound(sounds.down);
            document.getElementById('Down').style.transform = 'scale(1.2)';
            break;
        case 'ArrowLeft':
            playSound(sounds.left);
            document.getElementById('Left').style.transform = 'scale(1.2)';
            break;
        case 'ArrowRight':
            playSound(sounds.right);
            document.getElementById('Right').style.transform = 'scale(1.2)';
            break;
        default:
            break;
    }
});

document.addEventListener('keyup', function(event) {
    switch(event.key) {
        case 'ArrowUp':
            resetScale('Up');
            break;
        case 'ArrowDown':
            resetScale('Down');
            break;
        case 'ArrowLeft':
            resetScale('Left');
            break;
        case 'ArrowRight':
            resetScale('Right');
            break;
        default:
            break;
    }
});

function playSound(soundPath) {
    const audio = new Audio(soundPath);
    audio.play();
}

function resetScale(direction) {
    setTimeout(() => {
        document.getElementById(direction).style.transform = 'scale(1)';
    }, 200);
}