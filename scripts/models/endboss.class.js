class Endboss extends MovableObject {
    y = 120;
    height = 320;
    width = 320;
    images_walking = [
        '../assets/img/4_enemie_boss_chicken/1_walk/G1.png',
        '../assets/img/4_enemie_boss_chicken/1_walk/G2.png',
        '../assets/img/4_enemie_boss_chicken/1_walk/G3.png',
        '../assets/img/4_enemie_boss_chicken/1_walk/G4.png',
    ];

    constructor() {
        super().loadImage('../assets/img/4_enemie_boss_chicken/1_walk/G1.png');
        this.loadImages(this.images_walking);

        this.x = 2000;
        this.speed = 0.15 + Math.random() * 0.5;

        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60)

        setInterval(() => {
            this.playAnimation(this.images_walking);
        }, 200);
    }

}