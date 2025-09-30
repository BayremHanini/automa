document.addEventListener('DOMContentLoaded', function() {
            const dot7 = document.getElementById('dot7');
            const mainContent = document.getElementById('main-content');
            const alternateExperience = document.getElementById('alternate-experience');
            const backButton = document.getElementById('back-button');
            
            dot7.addEventListener('click', function() {
                mainContent.style.display = 'none';
                alternateExperience.style.display = 'block';
                backButton.style.display = 'block';
                
                window.scrollTo(0, 0);
            });
            
            backButton.addEventListener('click', function() {
                mainContent.style.display = 'block';
                alternateExperience.style.display = 'none';
                backButton.style.display = 'none';
                
                window.scrollTo(0, 0);
            });
        });