<script lang="ts">
    import { cubicInOut } from "svelte/easing"

    let key = 0

    function paperOut (node: HTMLElement, { duration = 1000, peak = 300, easing = cubicInOut } = {}) {
        const { x, y, width, height} = node.getBoundingClientRect()

        const startX = x + width / 2
        const startY = y + height / 2

        const targetX = 100
        const targetY = window.innerHeight

        const peakY = Math.min(startY, targetY) - peak

        const midX = (startX + targetX) / 2

        const rotateX = .5 * 360 * Math.random()
        const rotateY = 1 * 360 * Math.random()
        const rotateZ = .5 * 360 * Math.random()

        const parabola = createParabola(startX, startY, midX, peakY, targetX, targetY)

        return {
            duration,
            easing,
            css: (t: number, u: number) => {

                const x = (targetX - startX) * (1 - t) + startX
                const y = parabola(x)
                return `
                    transform: translate(${x - startX}px, ${y - startY}px) scale(${1 - u ** 3})  rotateX(${rotateX * u}deg) rotateY(${rotateY * u}deg) rotateZ(${rotateZ * u}deg);
                    z-index: 1;
                    position: absolute;
                    top: 0;
                `
            }
        }
    }

    function createParabola(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number) {
        // calculate the coefficients of the parabola ax^2 + bx + c = y
        let denom = (x1 - x2) * (x1 - x3) * (x2 - x3);
        let a = (x3 * (y2 - y1) + x2 * (y1 - y3) + x1 * (y3 - y2)) / denom;
        let b = (x3 * x3 * (y1 - y2) + x2 * x2 * (y3 - y1) + x1 * x1 * (y2 - y3)) / denom;
        let c = (x2 * x3 * (x2 - x3) * y1 + x3 * x1 * (x3 - x1) * y2 + x1 * x2 * (x1 - x2) * y3) / denom;

        // return a function that takes an x value and returns the y value on the parabola
        return function(x: number) {
            return a * x * x + b * x + c;
        };
    }
</script>


<div class="relative flex flex-col items-center gap-10 resume-cont">
    <a class="relative h-min">
        {#key key}
            <img src="/Resume.png" alt="Resume" on:click={() => key += 1} class="resume" out:paperOut />
        {/key}
    </a>
    <div class="resume-shadow" />
</div>


<style>

    
    .resume {
        border-radius: .5rem;
        box-shadow: 0px 3px 10px -5px rgba(0,0,0,0.75);
        border: 1px solid rgba(0,0,0,0.1);
        width: 600px;
        cursor: pointer;
        transition: 0.3s ease;
        transform: translate(0);
    }

    .resume:hover {
        transform: translateY(-15px);
        box-shadow: 0px 3px 12px -5px rgba(0,0,0,0.75);
    }
    
    .resume-shadow {
        height: 30px;
        width: 90%;
        border-radius: 100%;
        background-color: rgba(0,0,0,0.5);
        filter: blur(15px);
        transition: 0.3s ease;
    }

    .resume-cont:has(.resume:hover) .resume-shadow {
        width: 85%;
        background-color: rgba(0,0,0,0.4);
        filter: blur(18px);
    }
</style>