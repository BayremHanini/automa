 document.addEventListener('DOMContentLoaded', function() {
            window.addEventListener('load', function() {
                setTimeout(function() {
                    document.getElementById('loading-screen').style.opacity = '0';
                    setTimeout(function() {
                        document.getElementById('loading-screen').style.display = 'none';
                        
                        setTimeout(function() {
                            document.getElementById('info-modal').style.display = 'block';
                            document.getElementById('dot7').style.display = 'block';
                            
                            setTimeout(function() {
                                document.getElementById('dot7').style.animation = 'pulse 2s infinite';
                                document.getElementById('dot7').style.animationDelay = '0s';
                            }, 50);
                        }, 2500);
                    }, 500);
                }, 1500);
            });

            document.getElementById('modal-close').addEventListener('click', function() {
                document.getElementById('info-modal').style.display = 'none';
            });
        });