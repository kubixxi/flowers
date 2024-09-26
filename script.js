document.addEventListener("DOMContentLoaded", () => {
    const garden = document.querySelector('.garden');
    const numberOfFlowers = 30;
    
    for (let i = 0; i < numberOfFlowers; i++) {
        setTimeout(() => {
            const flower = createFlower();
            garden.appendChild(flower);
        }, i * 300); // Kwiaty pojawiają się co 300ms
    }
});

function createFlower() {
    const flower = document.createElement('div');
    flower.classList.add('flower');

    const stemHeight = Math.random() * 150 + 100; // Wysokość łodygi od 100px do 250px

    flower.style.left = `${Math.random() * 90}vw`; // Kwiat pojawia się w losowej szerokości
    flower.style.height = `${stemHeight}px`;

    const stem = document.createElement('div');
    stem.classList.add('stem');
    stem.style.height = `${stemHeight}px`;

    const petals = document.createElement('div');
    petals.classList.add('petals');
    const petalCount = 6;
    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        petals.appendChild(petal);
    }

    const center = document.createElement('div');
    center.classList.add('center');

    const leafLeft = document.createElement('div');
    leafLeft.classList.add('leaf', 'left');

    const leafRight = document.createElement('div');
    leafRight.classList.add('leaf', 'right');

    flower.appendChild(stem);
    flower.appendChild(petals);
    flower.appendChild(center);
    flower.appendChild(leafLeft);
    flower.appendChild(leafRight);

    return flower;
}
