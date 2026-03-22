// Generar flores en forma de corazón
const flowerContainer = document.getElementById('flowers');
const totalFlowers = 60;

for (let i = 0; i < totalFlowers; i++) {
    const flower = document.createElement('div');
    flower.className = 'flower';
    
    // Ecuación paramétrica de un corazón
    const t = (i / totalFlowers) * 2 * Math.PI;
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
    
    flower.style.left = `${100 + x * 6}px`;
    flower.style.top = `${80 + y * 6}px`;
    flower.style.animationDelay = `${Math.random() * 2}s`;
    
    flowerContainer.appendChild(flower);
}

// Contador de Tiempo (Configura tu fecha aquí)
const startDate = new Date("June 9, 2024 19:30:00").getTime();

setInterval(function() {
    const now = new Date().getTime();
    const distance = now - startDate;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = 
        `${days} días ${hours} horas ${minutes} min ${seconds} seg`;
}, 1000);