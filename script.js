// Popup functionality
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('popup-overlay');
    
    // Show popup when page loads
    popup.style.display = 'flex';
    popup.classList.remove('hidden');
    
    // Close popup when clicking outside the content
    popup.addEventListener('click', function(e) {
        if (e.target === popup) {
            closePopup();
        }
    });
    
    // Close popup with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closePopup();
        }
    });
});

// Function to close popup
function closePopup() {
    const popup = document.getElementById('popup-overlay');
    popup.classList.add('hidden');
    
    // Hide popup completely after animation
    setTimeout(() => {
        popup.style.display = 'none';
    }, 300);
} 