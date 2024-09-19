const canvas = document.querySelector('canvas'); // Retorna o elemento do DOM
const ctx = canvas.getContext('2d'); // Define qual contexto será executado

const canvasWidth = 1024 
const canvasHeight= 576
//Define tamanhos da tela

canvas.width = canvasWidth 
canvas.height = canvasHeight
//Integra tamanhos

let prevTime = 0

animate()

function animate(){
    window.requestAnimationFrame(animate)

    handleControls()

    ctx.fillStyle = "black"
    ctx.fillRect(0,0,canvasWidth,canvasHeight) // Define o preenchimento do Canvas

    player.update()
    //player2.update()

    let delta = (Performance.now() - prevTime) / 1000 // Verifica fps
    let fps = 1 / delta

    prevTime = Performance.now()
    console.log(`FPS: ${fps}`)
}
// Anima os frames
