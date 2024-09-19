// Um objeto que mantém o estado das teclas pressionadas
const keys = {
    a: {
        pressed : false  // Indica se a tecla "a" ou a seta esquerda estão pressionadas
    },
    d: {
        pressed : false  // Indica se a tecla "d" ou a seta direita estão pressionadas
    },
    w: {
        pressed : false  // Indica se a tecla "w" ou a seta para cima estão pressionadas
    },
    space: {
        pressed : false  // Indica se a tecla de espaço ou "z" estão pressionadas
    }
}

// Adiciona um ouvinte de evento para pressionamento de teclas
window.addEventListener("keydown", e => {
    let key = e.key;  // Captura a tecla pressionada

    switch(key) {
        case "ArrowLeft": // Caso a seta para esquerda seja pressionada
        case "a":  // Ou a tecla "a"
            keys.a.pressed = true;  // Define como true a propriedade pressed de 'a'
            player.lastKeyPressed = key;  // Armazena a última tecla pressionada no objeto player
            break;

        case "ArrowRight": // Caso a seta para direita seja pressionada
        case "d":  // Ou a tecla "d"
            keys.d.pressed = true;  // Define como true a propriedade pressed de 'd'
            player.lastKeyPressed = key;  // Armazena a última tecla pressionada no objeto player
            break;

        case "ArrowUp": // Caso a seta para cima seja pressionada
        case "w":  // Ou a tecla "w"
            keys.w.pressed = true;  // Define como true a propriedade pressed de 'w'
            break;

        case "z":  // Caso a tecla "z" seja pressionada
        case " ":  // Ou a tecla de espaço
            keys.space.pressed = true;  // Define como true a propriedade pressed de 'space'
            break;
    }
});

// Adiciona um ouvinte de evento para quando uma tecla é liberada
window.addEventListener("keyup", e => {
    let key = e.key;  // Captura a tecla liberada

    switch(key) {
        case "ArrowLeft": // Caso a seta para esquerda seja liberada
        case "a":  // Ou a tecla "a"
            keys.a.pressed = false;  // Define como false a propriedade pressed de 'a'
            break;

        case "ArrowRight": // Caso a seta para direita seja liberada
        case "d":  // Ou a tecla "d"
            keys.d.pressed = false;  // Define como false a propriedade pressed de 'd'
            break;

        case "ArrowUp": // Caso a seta para cima seja liberada
        case "w":  // Ou a tecla "w"
            keys.w.pressed = false;  // Define como false a propriedade pressed de 'w'
            break;
    }
});

// Função que lida com os controles do jogador
function handleControls() {
    movement();  // Chama a função de movimento

    // Função de movimento que ajusta a velocidade do jogador com base nas teclas pressionadas
    function movement() {
        player.velocity.x = 0;  // Zera a velocidade horizontal do jogador

        // Se a tecla "a" ou a seta para esquerda estiverem pressionadas e forem a última tecla pressionada
        if (keys.a.pressed && ["a", "ArrowLeft"].includes(player.lastKeyPressed)) {
            player.velocity.x = -1.5 * 3.4;  // Define a velocidade para mover o jogador para a esquerda
        }

        // Se a tecla "d" ou a seta para direita estiverem pressionadas e forem a última tecla pressionada
        if (keys.d.pressed && ["d", "ArrowRight"].includes(player.lastKeyPressed)) {
            player.velocity.x = 1.5 * 3.4;  // Define a velocidade para mover o jogador para a direita
        }

        // Se a tecla "w" ou seta para cima estiver pressionada
        if (keys.w.pressed) {
            player.velocity.y = -1 * 3.4;  // Aplica uma força para cima (pulo)
        }
    }
}
