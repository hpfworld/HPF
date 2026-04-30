// Working Video System - Modal + YouTube Fallback
console.log('🎬 Video system starting...');

// Video URLs database for all subdomains
const videoUrls = {
    // 'perceptual': 'https://www.youtube.com/embed/0h_ZuQqTHvI?si=32wq0L-m5lev-R1w',
    // 'continuous': 'https://www.youtube.com/embed/0h_ZuQqTHvI?si=32wq0L-m5lev-R1w',
    // 'analytical': 'https://www.youtube.com/embed/0h_ZuQqTHvI?si=32wq0L-m5lev-R1w',
    // 'reflective': 'https://www.youtube.com/embed/0h_ZuQqTHvI?si=32wq0L-m5lev-R1w',
    // 'external': 'https://www.youtube.com/embed/0h_ZuQqTHvI?si=32wq0L-m5lev-R1w',
    // 'internal': 'https://www.youtube.com/embed/0h_ZuQqTHvI?si=32wq0L-m5lev-R1w',
    // 'active': 'https://www.youtube.com/embed/0h_ZuQqTHvI?si=32wq0L-m5lev-R1w',
    
    // // Understanding Domain
    // 'conceptual': 'https://www.youtube.com/embed/0h_ZuQqTHvI?si=32wq0L-m5lev-R1w',
    // 'empathetic': 'https://www.youtube.com/embed/0h_ZuQqTHvI?si=32wq0L-m5lev-R1w',
    // 'contextual': 'https://www.youtube.com/embed/0h_ZuQqTHvI?si=32wq0L-m5lev-R1w',
    // 'intuitive': 'https://www.youtube.com/embed/0h_ZuQqTHvI?si=32wq0L-m5lev-R1w',
    // 'adaptive': 'https://www.youtube.com/embed/0h_ZuQqTHvI?si=32wq0L-m5lev-R1w',
    // 'reflective-understanding': 'https://www.youtube.com/embed/0h_ZuQqTHvI?si=32wq0L-m5lev-R1w',
    // 'interdisciplinary': 'https://www.youtube.com/embed/0h_ZuQqTHvI?si=32wq0L-m5lev-R1w',

    // // Thinking Domain (LCCASAH) - 7 subdomains 
    // 'logical': 'https://www.youtube.com/embed/0h_ZuQqTHvI?si=32wq0L-m5lev-R1w', 
    // 'creative': 'https://www.youtube.com/embed/0h_ZuQqTHvI?si=32wq0L-m5lev-R1w', 
    // 'critical': 'https://www.youtube.com/embed/0h_ZuQqTHvI?si=32wq0L-m5lev-R1w', 
    // 'abstract': 'https://www.youtube.com/embed/0h_ZuQqTHvI?si=32wq0L-m5lev-R1w', 
    // 'systems': 'https://www.youtube.com/embed/0h_ZuQqTHvI?si=32wq0L-m5lev-R1w', 
    // 'analytical-thinking': 'https://www.youtube.com/embed/0h_ZuQqTHvI?si=32wq0L-m5lev-R1w', 
    // 'holistic': 'https://www.youtube.com/embed/0h_ZuQqTHvI?si=32wq0L-m5lev-R1w', 

    // // Deciding Domain (RIICETS) - 7 subdomains 
    // 'rational': 'https://www.youtube.com/embed/0h_ZuQqTHvI?si=32wq0L-m5lev-R1w', 
    // 'intuitive-deciding': 'https://www.youtube.com/embed/0h_ZuQqTHvI?si=32wq0L-m5lev-R1w', 
    // 'informed': 'https://www.youtube.com/embed/0h_ZuQqTHvI?si=32wq0L-m5lev-R1w', 
    // 'collaborative': 'https://www.youtube.com/embed/0h_ZuQqTHvI?si=32wq0L-m5lev-R1w', 
    // 'ethical': 'https://www.youtube.com/embed/0h_ZuQqTHvI?si=32wq0L-m5lev-R1w', 
    // 'timely': 'https://www.youtube.com/embed/0h_ZuQqTHvI?si=32wq0L-m5lev-R1w', 
    // 'strategic': 'https://www.youtube.com/embed/0h_ZuQqTHvI?si=32wq0L-m5lev-R1w', 

    // // Performing Domain (ECCASSE) - 7 subdomains 
    // 'efficient': 'https://www.youtube.com/embed/0h_ZuQqTHvI?si=32wq0L-m5lev-R1w', 
    // 'creative-performing': 'https://www.youtube.com/embed/0h_ZuQqTHvI?si=32wq0L-m5lev-R1w', 
    // 'collaborative-performing': 'https://www.youtube.com/embed/0h_ZuQqTHvI?si=32wq0L-m5lev-R1w',
    // 'adaptive-performing': 'https://www.youtube.com/embed/0h_ZuQqTHvI?si=32wq0L-m5lev-R1w', 
    // 'skillful': 'https://www.youtube.com/embed/0h_ZuQqTHvI?si=32wq0L-m5lev-R1w', 
    // 'strategic-performing': 'https://www.youtube.com/embed/0h_ZuQqTHvI?si=32wq0L-m5lev-R1w', 
    // 'ethical-performing': 'https://www.youtube.com/embed/0h_ZuQqTHvI?si=32wq0L-m5lev-R1w',

    // // Experiencing Domain (SCESCLT) - 7 subdomains 
    // 'sensory': 'https://www.youtube.com/embed/0h_ZuQqTHvI?si=32wq0L-m5lev-R1w', 
    // 'cognitive': 'https://www.youtube.com/embed/0h_ZuQqTHvI?si=32wq0L-m5lev-R1w', 
    // 'emotional': 'https://www.youtube.com/embed/0h_ZuQqTHvI?si=32wq0L-m5lev-R1w', 
    // 'social': 'https://www.youtube.com/embed/0h_ZuQqTHvI?si=32wq0L-m5lev-R1w', 
    // 'cultural': 'https://www.youtube.com/embed/0h_ZuQqTHvI?si=32wq0L-m5lev-R1w', 
    // 'learning': 'https://www.youtube.com/embed/0h_ZuQqTHvI?si=32wq0L-m5lev-R1w', 
    // 'transformative': 'https://www.youtube.com/embed/0h_ZuQqTHvI?si=32wq0L-m5lev-R1w', 
    
    // // Repeating Domain (IRACSHP) - 7 subdomains 
    // 'iterative': 'https://www.youtube.com/embed/0h_ZuQqTHvI?si=32wq0L-m5lev-R1w',
    // 'reflective-repeating': 'https://www.youtube.com/embed/0h_ZuQqTHvI?si=32wq0L-m5lev-R1w', 
    // 'adaptive-repeating': 'https://www.youtube.com/embed/0h_ZuQqTHvI?si=32wq0L-m5lev-R1w', 
    // 'continuous-repeating': 'https://www.youtube.com/embed/0h_ZuQqTHvI?si=32wq0L-m5lev-R1w', 
    // 'strategic-repeating': 'https://www.youtube.com/embed/0h_ZuQqTHvI?si=32wq0L-m5lev-R1w', 
    // 'habitual': 'https://www.youtube.com/embed/0h_ZuQqTHvI?si=32wq0L-m5lev-R1w', 
    // 'purposeful': 'https://www.youtube.com/embed/0h_ZuQqTHvI?si=32wq0L-m5lev-R1w'
};

// Main playVideo function - Cross-browser compatible
window.playVideo = function(videoType) {
    console.log('🎬 Video clicked:', videoType);
    
    // Cross-browser element selection
    var videoModal = document.getElementById('videoModal');
    var modalContent = videoModal && (videoModal.querySelector('.modal-content') || videoModal.getElementsByClassName('modal-content')[0]);
    
    // Try modal approach first
    if (videoModal && modalContent) {
        // Check if we have a real video URL
        if (videoUrls[videoType] && videoUrls[videoType].indexOf('YOUR_VIDEO_ID_') === -1) {
            // Cross-browser display setting
            videoModal.style.display = '-webkit-flex';
            videoModal.style.display = '-ms-flexbox';
            videoModal.style.display = 'flex';
            
            // Cross-browser body overflow
            if (document.body.style) {
                document.body.style.overflow = 'hidden';
            }
            
            // Create iframe in modal without close button
            modalContent.innerHTML = `
                <iframe width="100%" height="100%" 
                    src="${videoUrls[videoType]}" 
                    title="YouTube video player" 
                    frameborder="0" 
                    style="border-radius: 12px; display: block; margin: 0; padding: 0; position: absolute; top: 0; left: 0; right: 0; bottom: 0;"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen>
                </iframe>
            `;
            
            console.log('✅ Video modal opened');
        } else {
            console.log('⏳ Video not ready:', videoType);
            alert(`🎬 Video for "${videoType}" coming soon!`);
        }
    } else {
        // Fallback: open directly on YouTube
        console.log('📺 Modal not found, opening YouTube directly');
        openOnYouTube(videoType);
    }
};

// Function to open video on YouTube
window.openOnYouTube = function(videoType) {
    if (videoUrls[videoType] && !videoUrls[videoType].includes('YOUR_VIDEO_ID_')) {
        const videoId = videoUrls[videoType].split('/embed/')[1]?.split('?')[0];
        if (videoId) {
            const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
            console.log('🔗 Opening YouTube:', youtubeUrl);
            window.open(youtubeUrl, '_blank', 'noopener,noreferrer');
        }
    } else {
        alert(`Video for "${videoType}" is not available yet.`);
    }
};

// Function to close video modal
function closeVideoModal() {
    const videoModal = document.getElementById('videoModal');
    if (videoModal) {
        videoModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        
        // Clear modal content to stop video
        const modalContent = videoModal.querySelector('.modal-content');
        if (modalContent) {
            modalContent.innerHTML = '';
        }
    }
}

// Setup event listeners when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔍 DOM loaded, setting up video system...');
    
    // Setup modal close when clicking outside
    const videoModal = document.getElementById('videoModal');
    if (videoModal) {
        videoModal.addEventListener('click', function(e) {
            if (e.target === videoModal) {
                closeVideoModal();
            }
        });
        console.log('✅ Modal click-outside handler set up');
    }
    
    // Setup ESC key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeVideoModal();
        }
    });
    
    console.log('✅ Video system ready');
    console.log(`📊 ${Object.keys(videoUrls).length} subdomains configured`);
});

console.log('🎬 Video system loaded successfully!');