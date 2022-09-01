<script>
import { onMount } from "svelte";


    const PIECES = [
        [
            [1,1,1,1]
        ],
        [
            [1,0,0],
            [1,1,1]
        ],
        [
            [0,1,0],
            [1,1,1],
            [0,0,0],
        ],
        [
            [0,0,1],
            [1,1,1]
        ],
        [
            [1,1,0],
            [0,1,1],
        ],
        [
            [0,1,1],
            [1,1,0],
        ],
        [
            [1,1],
            [1,1],
        ]
    ]

    const rotate = (piece) => {
        let newPiece = []
        let w = piece[0].length
        let h = piece.length

        for (let i = 0; i < w; i++) {
            newPiece[i] = []
            for (let j = 0; j < h; j++) {
                newPiece[i][j] = piece[h - j - 1][i]
            }
        }

        return newPiece
    }

    const checkCollisionAt = (dX = 0, dY = 0, dR = 0) => {
        let piece = Array.from({length: dR}).reduce(a => rotate(a), selectedPiece)

        if (!grid) return true

        for (let i = 0; i < piece.length; i++) {
            for (let j = 0; j < piece[0].length; j++) {
                let gridVal = grid[i + pieceY + dY]?.[pieceX + dX - j]
                if (piece[i][j] && (gridVal || gridVal == undefined)) return false
            }
        }
        
        return true
    }

    const placeSelectedPiece = () => {
        for (let i = 0; i < selectedPiece.length; i++) {
            for (let j = 0; j < selectedPiece[0].length; j++) {
                if (selectedPiece[i][j]) grid[i + pieceY][pieceX - j] = 1
            }
        }
    }

    const GRID_SIZE = 30

    let frameWidth, frameHeight

    $: gridX = Math.floor(frameWidth / GRID_SIZE)
    $: gridY = Math.floor(frameHeight / GRID_SIZE)
    $: gameWidth = gridX * GRID_SIZE
    $: gameHeight = gridY * GRID_SIZE

    let grid


    const resizeGrid = () => {
        let newGrid = []

        for (let i = 0; i < gridY; i++){
            newGrid[i] = []
            for (let j = 0; j < gridX; j++){
                newGrid[i][j] = grid[i]?.[j] ?? ((i > gridY - 2) && (j > 6 || j < 4))
            }
        }

        return newGrid
    }

    $: gridX, gridY, grid = resizeGrid()

    let selectedPiece = PIECES[4]

    let pieceX = 5
    let pieceY = 5

    const cellAt = (x,y) => {
        if (grid[y][x]) return true

        if (selectedPiece?.[y - pieceY]?.[pieceX - x]) return true

        return false
    }

    let movingLeft, movingDown, movingRight

    const handleKeypress = (e) => {
        if (e.code == "KeyW") up()
        if (e.code == "Comma") rotatePiece(3)
        if (e.code == "Period") rotatePiece(1)
    }

    const handleKeydown = (e) => {
        if (e.code == "KeyA") movingLeft = true
        if (e.code == "KeyS") movingDown = true
        if (e.code == "KeyD") movingRight = true
    }

    const handleKeyup = (e) => {
        if (e.code == "KeyA") movingLeft = false
        if (e.code == "KeyS") movingDown = false
        if (e.code == "KeyD") movingRight = false
    }

    const left = () => {
        if (!checkCollisionAt(1,0,0)) return
        pieceX += 1
    }

    const right = () => {
        if (!checkCollisionAt(-1,0,0)) return
        pieceX -= 1
    }

    const down = () => {
        if (!checkCollisionAt(0,1,0)) return
        pieceY += 1
    }

    const up = () => {
        while(checkCollisionAt(0,1,0)) {
            down()
        }
    }

    const rotatePiece = (num) => {
        if (!checkCollisionAt(0,0,num)) return

        selectedPiece = Array.from({length: num}).reduce(a => rotate(a), selectedPiece)
    }

    const resetPiece = () => {
        selectedPiece = PIECES[Math.floor(Math.random() * PIECES.length)]
        pieceX = 4
        pieceY = 2
    }

    let pieceContainer
    const sleep = (ms) => new Promise(res => setTimeout(res, ms))

    const checkForClearedRows = () => {
        grid.forEach((row, i) => {
            if (row.every(x => !!x)) {
                let origin = []
                row.forEach((x, j)=> {
                    if (selectedPiece[i - pieceY]?.[pieceX - j]) origin.push(j)
                })

                clearRow(i, [origin[0], origin.at(-1)])
                // clearRow(i, [5, 8])
            }
        })
    }

    const clearRow = async (row, [oStart = 0, oEnd = 0]) => {
        let cells = selectRow(row)

        let animNum = Math.max(oStart, cells.length - oEnd)

        Array.from({length: oEnd - oStart + 1}).map((x,i) => i + oStart).forEach(index => cells[index].classList.add("flashing"))

        for (let i = 0; i < animNum; i++) {
            await sleep(20)
            cells[oEnd + i]?.classList.add("flashing")
            cells[oStart - i]?.classList.add("flashing")
        }

        grid.pop()
        grid = [Array.from({length: gridX}).map(()=>0), ...grid]
        cells.forEach(cell => cell.classList.remove("flashing"))
    }

    const selectRow = (row) => {
        let cells = Array.from(pieceContainer.children).slice(gridX * row, gridX * (row + 1))

        return cells
    }

    console.log(selectRow)

    let frameLength = 200
    let graceCount = 0
    const gameTick = () => {
        let canMoveDown = checkCollisionAt(0,1,0)
        if (canMoveDown) {
            down()
        } 
        let moving = movingLeft || movingRight
        if (moving && graceCount < 3) {
            if (!canMoveDown) graceCount++
        } else if (!canMoveDown) {
            placeSelectedPiece()
            checkForClearedRows()
            resetPiece()
            graceCount = 0
        }

        setTimeout(gameTick, frameLength)
    }

    const halfTick = () => {
        if (movingLeft) left()
        if (movingRight) right()
        if (movingDown) down()
        setTimeout(halfTick, frameLength / 2)
    }

    onMount(() => {
        document.addEventListener("keypress", handleKeypress)
        document.addEventListener("keydown", handleKeydown)
        document.addEventListener("keyup", handleKeyup)

        setTimeout(() => {
            gameTick()
            halfTick()
        }, frameLength)

        return () => {
            document.removeEventListener("keypress", handleKeypress)
            document.removeEventListener("keydown", handleKeydown)
            document.removeEventListener("keyup", handleKeyup)
        }
    })
</script>

<style global>
    .flashing {
        animation: flash .5s cubic-bezier(0, 0.62, 0.39, 0.9) forwards;
    }

    @keyframes flash {
        0%, 100% {
            background-color: rgba(255,255,255,0)
        }
        50% {
            background-color: rgba(255,255,255,1)
        }
    }
</style>
    
<div class="w-full h-full" bind:offsetWidth={frameWidth} bind:offsetHeight={frameHeight}>
    <div class="text-white">{`${pieceX} ${pieceY} ${checkCollisionAt(0,1,0)}`}</div>
    <div bind:this={pieceContainer} class="absolute bottom-0 right-0 flex flex-row-reverse flex-wrap" style="width: {gameWidth}px; height: {gameHeight}px">
        {#each (grid ?? []) as row, y}
            {#each (row ?? []) as cell, x}
                <div class="bg-dark border-2 box-border text-xs border-black" style="width: {GRID_SIZE}px; height: {GRID_SIZE}px" class:opacity-0={!cellAt(x,y, pieceX, pieceY, selectedPiece)}></div>
            {/each}
        {/each}
    </div>
</div>