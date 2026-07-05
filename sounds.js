// sounds.js
// Sistema de sonido y música para el juego

(function () {
    // Estado de la música
    let musicEnabled = true;
    let currentAudio = null;
    let backgroundMusic = null;

    // Crear elemento de audio para música de fondo
    function initBackgroundMusic() {
        if (backgroundMusic) return;

        backgroundMusic = document.createElement('audio');
        backgroundMusic.id = 'backgroundMusic';
        backgroundMusic.loop = true;
        backgroundMusic.volume = 0.5;
        
        // Intentar usar una fuente de música ambiental
        // Puedes cambiar esta URL por tu propia música
        backgroundMusic.src = 'https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3';
        
        document.body.appendChild(backgroundMusic);
    }

    // Reproducir música de fondo
    function playBackgroundMusic() {
        initBackgroundMusic();
        
        if (musicEnabled && backgroundMusic && backgroundMusic.paused) {
            backgroundMusic.play().catch(err => {
                console.log('Autoplay bloqueado o error:', err);
                // El navegador puede bloquear la reproducción automática
            });
        }
    }

    // Detener música de fondo
    function stopBackgroundMusic() {
        if (backgroundMusic && !backgroundMusic.paused) {
            backgroundMusic.pause();
            backgroundMusic.currentTime = 0;
        }
    }

    // Toggle de música
    function toggleMusic() {
        musicEnabled = !musicEnabled;
        
        if (musicEnabled) {
            playBackgroundMusic();
            updateMusicButton();
        } else {
            stopBackgroundMusic();
            updateMusicButton();
        }
        
        return musicEnabled;
    }

    // Actualizar el estado del botón de música
    function updateMusicButton() {
        const musicButton = document.querySelector('button[onclick*="toggleMusic"]');
        if (musicButton) {
            const statusSpan = musicButton.querySelector('span:last-child');
            if (statusSpan) {
                statusSpan.textContent = musicEnabled ? 'ON' : 'OFF';
                statusSpan.style.backgroundColor = musicEnabled ? '#16a34a' : '#7f1d1d';
                statusSpan.style.color = musicEnabled ? '#dcfce7' : '#fca5a5';
            }
        }
    }

    // Reproducir sonido de efecto
    function playSoundEffect(soundName) {
        if (!musicEnabled) return;

        const sounds = {
            'click': 'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3',
            'success': 'https://assets.mixkit.co/active_storage/sfx/3415/3415-preview.mp3',
            'error': 'https://assets.mixkit.co/active_storage/sfx/3397/3397-preview.mp3',
            'notification': 'https://assets.mixkit.co/active_storage/sfx/3334/3334-preview.mp3',
        };

        if (sounds[soundName]) {
            const audio = new Audio(sounds[soundName]);
            audio.volume = 0.7;
            audio.play().catch(err => console.log('Error reproduciendo sonido:', err));
        }
    }

    // Reproducir sonido de transición de escena
    function playSceneTransition() {
        playSoundEffect('notification');
    }

    // Reproducir sonido de botón
    function playButtonClick() {
        playSoundEffect('click');
    }

    // Inicializar audio cuando el usuario interactúa por primera vez
    document.addEventListener('click', function initAudioContext() {
        playBackgroundMusic();
        document.removeEventListener('click', initAudioContext);
    }, { once: true });

    // Exponer API global
    window.SoundManager = {
        toggleMusic: toggleMusic,
        playMusic: playBackgroundMusic,
        stopMusic: stopBackgroundMusic,
        playSoundEffect: playSoundEffect,
        playSceneTransition: playSceneTransition,
        playButtonClick: playButtonClick,
        isMusicEnabled: () => musicEnabled,
        setVolume: (volume) => {
            if (backgroundMusic) {
                backgroundMusic.volume = Math.max(0, Math.min(1, volume));
            }
        }
    };

})();
