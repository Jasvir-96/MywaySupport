document.addEventListener('DOMContentLoaded', function() {
    const socialIcons = document.querySelectorAll('.social-icon');
    
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            // Hide all other social icons' spans
            socialIcons.forEach(otherIcon => {
                if (otherIcon !== this) {
                    otherIcon.querySelector('span').style.maxWidth = '0';
                    otherIcon.querySelector('span').style.opacity = '0';
                }
            });
            
            // Show the current icon's span
            this.querySelector('span').style.maxWidth = '400px';
            this.querySelector('span').style.opacity = '1';
        });
        
        icon.addEventListener('mouseleave', function() {
            // Hide all spans when mouse leaves
            socialIcons.forEach(otherIcon => {
                otherIcon.querySelector('span').style.maxWidth = '0';
                otherIcon.querySelector('span').style.opacity = '0';
            });
        });
    });
}); 