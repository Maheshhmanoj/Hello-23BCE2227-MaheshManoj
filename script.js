let text = "Hi,I am Mahesh Manoj-23BCE2227!";
        let index = 0;
        function typeEffect() {
            if (index < text.length) {
                document.getElementById("text").textContent += text.charAt(index);
                index++;
                setTimeout(typeEffect, 100);
            }
        }
        window.onload = typeEffect;
        particlesJS("particles-js", {
            particles: {
                number: { value: 80 },
                size: { value: 3 },
                move: { speed: 3 },
                line_linked: { enable: true }
            }
        });