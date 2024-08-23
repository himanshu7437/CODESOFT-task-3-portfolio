document.addEventListener('DOMContentLoaded', function() {
    // Skill rotation in the Hero Section
    const skills = ['Web Designer', 'Video Editor', 'UX/UI Designer'];
    let skillIndex = 0;
    const skillElement = document.querySelector('.changing-skill');

    function changeSkill() {
        skillElement.textContent = skills[skillIndex];
        skillIndex = (skillIndex + 1) % skills.length;
    }

    setInterval(changeSkill, 3000); // Change skill every 3 seconds

    // Additional Animations
    const skillBoxes = document.querySelectorAll('.skill-box');
    skillBoxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.style.transform = 'scale(1.1)';
            box.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
        });
        box.addEventListener('mouseout', () => {
            box.style.transform = 'scale(1)';
            box.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        });
    });

    const projectBoxes = document.querySelectorAll('.project-box');
    projectBoxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.style.transform = 'scale(1.05)';
            box.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
        });
        box.addEventListener('mouseout', () => {
            box.style.transform = 'scale(1)';
            box.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        });
    });

    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.05)';
            card.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
        });
        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        });
    });
});