function level_4 () {
    basic.showNumber(4)
    basic.pause(2000)
    basic.clearScreen()
    midden()
    basic.pause(1000)
    led.plot(0, 0)
    led.plot(1, 0)
    led.plot(2, 0)
    basic.pause(500)
    led.plot(0, 1)
    led.plot(1, 1)
    led.plot(2, 1)
    led.unplot(0, 0)
    led.unplot(1, 0)
    led.unplot(2, 0)
    basic.pause(500)
    led.plot(0, 2)
    led.plot(1, 2)
    led.plot(2, 2)
    led.plot(3, 0)
    led.unplot(0, 1)
    led.unplot(1, 1)
    led.unplot(2, 1)
    basic.pause(500)
    led.plot(0, 3)
    led.plot(1, 3)
    led.plot(2, 3)
    led.plot(3, 1)
    led.unplot(3, 0)
    led.unplot(0, 2)
    led.unplot(1, 2)
    led.unplot(2, 2)
    basic.pause(500)
    led.unplot(0, 3)
    led.unplot(1, 3)
    led.unplot(2, 3)
    if (led.point(1, 4)) {
        gameover()
    } else {
        if (led.point(2, 4)) {
            gameover()
        } else {
            led.plot(3, 2)
            led.unplot(3, 1)
            led.plot(0, 4)
            led.plot(1, 4)
            led.plot(2, 4)
            basic.pause(500)
            led.plot(3, 3)
            led.unplot(3, 2)
            led.unplot(0, 4)
            led.unplot(1, 4)
            led.unplot(2, 4)
            basic.pause(500)
            led.unplot(3, 3)
            if (led.point(3, 4)) {
                gameover()
            } else {
                led.plot(3, 4)
                basic.pause(500)
                led.unplot(3, 4)
                basic.pause(500)
                level_5()
            }
        }
    }
}
function links () {
    led.unplot(2, 4)
    led.unplot(3, 4)
    led.plot(1, 4)
}
function midden () {
    led.unplot(1, 4)
    led.unplot(3, 4)
    led.plot(2, 4)
}
function to_be_continuet () {
    basic.pause(2000)
    for (let index = 0; index < 5; index++) {
        basic.pause(10)
        basic.showLeds(`
            . . # # #
            . . . . #
            . . . . #
            . . . . #
            . . # # #
            `)
        basic.pause(10)
        basic.showLeds(`
            . . . # #
            . . . . #
            . . . . #
            . . . . #
            . # # # #
            `)
        basic.pause(10)
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            # # # # #
            `)
        basic.pause(10)
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . . #
            # . . . #
            # # # # #
            `)
        basic.pause(10)
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.pause(10)
        basic.showLeds(`
            . . . . .
            # . . . .
            # . . . .
            # . . . #
            # # # # #
            `)
        basic.pause(10)
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # # # # #
            `)
        basic.pause(10)
        basic.showLeds(`
            # # . . .
            # . . . .
            # . . . .
            # . . . .
            # # # # .
            `)
        basic.pause(10)
        basic.showLeds(`
            # # # . .
            # . . . .
            # . . . .
            # . . . .
            # # # . .
            `)
        basic.pause(10)
        basic.showLeds(`
            # # # # .
            # . . . .
            # . . . .
            # . . . .
            # # . . .
            `)
        basic.pause(10)
        basic.showLeds(`
            # # # # #
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
        basic.pause(10)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . .
            # . . . .
            . . . . .
            `)
        basic.pause(10)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            . . . . .
            . . . . .
            `)
        basic.pause(10)
        basic.showLeds(`
            # # # # #
            # . . . #
            . . . . #
            . . . . #
            . . . . .
            `)
        basic.pause(10)
        basic.showLeds(`
            # # # # #
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            `)
        basic.pause(10)
        basic.showLeds(`
            . # # # #
            . . . . #
            . . . . #
            . . . . #
            . . . # #
            `)
    }
    basic.clearScreen()
}
input.onButtonPressed(Button.A, function () {
    links()
})
function rechts () {
    led.unplot(1, 4)
    led.unplot(2, 4)
    led.plot(3, 4)
}
input.onButtonPressed(Button.AB, function () {
    midden()
})
function level_2 () {
    basic.showNumber(2)
    basic.pause(2000)
    basic.clearScreen()
    links()
    basic.pause(1000)
    led.plot(1, 0)
    basic.pause(1000)
    led.plot(1, 1)
    led.unplot(1, 0)
    basic.pause(1000)
    led.plot(1, 2)
    led.plot(3, 0)
    led.unplot(1, 1)
    basic.pause(1000)
    led.plot(1, 3)
    led.plot(3, 1)
    led.unplot(1, 2)
    led.unplot(3, 0)
    basic.pause(1000)
    led.unplot(1, 3)
    led.unplot(3, 1)
    if (led.point(1, 4)) {
        gameover()
    } else {
        led.plot(1, 4)
        led.plot(3, 2)
        basic.pause(1000)
        led.plot(3, 3)
        led.unplot(1, 4)
        led.unplot(3, 2)
        basic.pause(1000)
        led.unplot(3, 3)
        if (led.point(3, 4)) {
            gameover()
        } else {
            led.plot(3, 4)
            basic.pause(1000)
            led.unplot(3, 4)
            level_3()
        }
    }
}
function s_rechts () {
    basic.showLeds(`
        # # # # #
        # . # # #
        . . . # #
        . . . . #
        . . . . .
        `)
    basic.pause(500)
    led.plot(1, 1)
    basic.pause(100)
    led.unplot(1, 1)
    led.plot(1, 2)
    basic.pause(100)
    led.plot(1, 3)
    led.unplot(1, 2)
    basic.pause(100)
    if (led.point(1, 4)) {
        gameover()
    } else {
        led.plot(1, 4)
        led.unplot(1, 3)
        basic.pause(100)
        led.unplot(1, 4)
    }
}
input.onButtonPressed(Button.B, function () {
    rechts()
})
function level_5 () {
    basic.showNumber(5)
    basic.pause(2000)
    basic.clearScreen()
    basic.pause(500)
    basic.showLeds(`
        # # . # #
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        # # # # #
        # # . # #
        # . . . #
        . . . . .
        . . . . .
        `)
    midden()
    basic.pause(2000)
    s_midden()
}
function s_midden () {
    basic.showLeds(`
        # # # # #
        # # . # #
        # . . . #
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    led.plot(2, 1)
    basic.pause(100)
    led.unplot(2, 1)
    led.plot(2, 2)
    basic.pause(100)
    led.plot(2, 3)
    led.unplot(2, 2)
    basic.pause(100)
    if (led.point(2, 4)) {
        gameover()
    } else {
        led.plot(2, 4)
        led.unplot(2, 3)
        basic.pause(100)
        led.unplot(2, 4)
    }
}
function s_links () {
    basic.showLeds(`
        # # # # #
        # # # . #
        # # . . .
        # . . . .
        . . . . .
        `)
    basic.pause(500)
    led.plot(3, 1)
    basic.pause(100)
    led.unplot(3, 1)
    led.plot(3, 2)
    basic.pause(100)
    led.plot(3, 3)
    led.unplot(3, 2)
    basic.pause(100)
    if (led.point(3, 4)) {
        gameover()
    } else {
        led.plot(3, 4)
        led.unplot(3, 3)
        basic.pause(100)
        led.unplot(3, 4)
    }
}
function start () {
    basic.pause(1000)
    basic.showLeds(`
        # . . # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . # . #
        # . . # .
        # . . # .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        # . # . #
        . . # . #
        . . . # #
        # . . # .
        # . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        # . # . .
        # . # . #
        . . . . #
        # . . # #
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        # . # . #
        # . . . #
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        `)
    basic.clearScreen()
    basic.pause(1000)
    basic.showLeds(`
        . # # # .
        # . . . #
        # # # # #
        # . . . #
        . # # # .
        `)
    if (true) {
        basic.pause(1000)
        basic.clearScreen()
        basic.pause(2000)
        level_1()
    } else {
        basic.pause(1000)
        basic.clearScreen()
        basic.pause(2000)
        level_1()
    }
}
function level_1 () {
    basic.showNumber(1)
    basic.pause(2000)
    basic.clearScreen()
    midden()
    basic.pause(1000)
    led.plot(2, 0)
    basic.pause(1000)
    led.unplot(2, 0)
    led.plot(2, 1)
    basic.pause(1000)
    led.unplot(2, 1)
    led.plot(2, 2)
    basic.pause(1000)
    led.unplot(2, 2)
    led.plot(2, 3)
    basic.pause(1000)
    led.unplot(2, 3)
    if (led.point(2, 4)) {
        gameover()
    } else {
        led.plot(2, 4)
        basic.pause(1000)
        led.unplot(2, 4)
        level_2()
    }
}
function level_3 () {
    basic.showNumber(3)
    basic.pause(2000)
    basic.clearScreen()
    midden()
    basic.pause(1000)
    led.plot(1, 0)
    basic.pause(500)
    led.unplot(1, 0)
    led.plot(1, 1)
    basic.pause(500)
    led.unplot(1, 1)
    led.plot(1, 2)
    basic.pause(500)
    led.unplot(1, 2)
    led.plot(1, 3)
    led.plot(2, 0)
    basic.pause(500)
    led.unplot(1, 3)
    led.unplot(2, 0)
    if (led.point(1, 4)) {
        gameover()
    } else {
        led.plot(1, 4)
        led.plot(2, 1)
        basic.pause(500)
        led.unplot(1, 4)
        led.unplot(2, 1)
        led.plot(2, 2)
        basic.pause(500)
        led.unplot(2, 2)
        led.plot(2, 3)
        basic.pause(500)
        led.unplot(2, 3)
        if (led.point(2, 4)) {
            gameover()
        } else {
            led.plot(2, 4)
            basic.pause(500)
            led.unplot(2, 4)
            level_4()
        }
    }
}
function gameover () {
    basic.clearScreen()
    basic.showString("game over")
}
level_5()
