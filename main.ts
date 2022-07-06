function einde () {
    midden()
    sM()
    led.setBrightness(200)
    basic.pause(1000)
    rechts()
    basic.pause(500)
    led.plot(3, 3)
    basic.pause(100)
    led.plot(3, 2)
    led.unplot(3, 3)
    basic.pause(100)
    basic.showLeds(`
        # # # # .
        # # . . #
        # . . . .
        . . . . .
        . . . # .
        `)
    basic.pause(1000)
    links()
    basic.pause(500)
    led.plot(1, 3)
    basic.pause(100)
    led.plot(1, 2)
    led.unplot(1, 3)
    basic.pause(100)
    basic.showLeds(`
        # . # # .
        . . . . #
        # . . . .
        . . . . .
        . # . . .
        `)
    basic.pause(1000)
    midden()
    basic.pause(500)
    led.plot(2, 3)
    basic.pause(100)
    led.plot(2, 2)
    led.unplot(2, 3)
    basic.pause(100)
    led.plot(2, 1)
    led.unplot(2, 2)
    basic.pause(100)
    basic.showLeds(`
        # # . # .
        . . # . #
        # . . . .
        . . . . .
        . . # . .
        `)
    basic.showLeds(`
        # . . . #
        . # # # #
        # . . . .
        . . . . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        # . . . #
        # # # # .
        . . . . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        `)
    basic.clearScreen()
    led.plot(2, 4)
    basic.pause(100)
    led.plot(2, 3)
    led.unplot(2, 4)
    basic.pause(100)
    led.unplot(2, 3)
    led.plot(2, 2)
    basic.pause(1000)
    for (let index = 0; index < 5; index++) {
        led.plot(3, 0)
        basic.pause(100)
        led.unplot(3, 0)
        led.plot(3, 1)
        led.plot(1, 0)
        basic.pause(100)
        led.unplot(1, 0)
        led.plot(3, 0)
        led.plot(1, 1)
        led.unplot(3, 1)
        led.plot(3, 2)
        basic.pause(100)
        led.unplot(1, 1)
        led.plot(3, 1)
        led.unplot(3, 0)
        led.plot(1, 2)
        led.unplot(3, 2)
        led.plot(3, 3)
        basic.pause(100)
        led.unplot(1, 2)
        led.plot(3, 2)
        led.unplot(3, 1)
        led.plot(0, 0)
        led.plot(1, 3)
        led.unplot(3, 3)
        led.plot(3, 4)
        basic.pause(100)
        led.unplot(1, 3)
        led.plot(3, 3)
        led.unplot(0, 0)
        led.plot(0, 1)
        led.unplot(3, 2)
        led.unplot(3, 4)
        led.plot(1, 4)
        basic.pause(100)
        led.unplot(1, 4)
        led.unplot(0, 1)
        led.plot(0, 2)
        led.plot(3, 4)
        led.unplot(3, 3)
        basic.pause(100)
        led.unplot(0, 2)
        led.plot(0, 3)
        led.unplot(3, 4)
        basic.pause(100)
        led.unplot(0, 3)
        led.plot(0, 4)
        basic.pause(100)
        led.unplot(0, 4)
    }
    led.plot(3, 0)
    led.unplot(2, 2)
    led.plot(2, 3)
    basic.pause(100)
    led.unplot(3, 0)
    led.plot(3, 1)
    led.plot(1, 0)
    basic.pause(100)
    led.unplot(1, 0)
    led.unplot(2, 3)
    led.plot(2, 2)
    led.plot(3, 0)
    led.plot(1, 1)
    led.unplot(3, 1)
    led.plot(3, 2)
    basic.pause(100)
    led.unplot(1, 1)
    led.plot(3, 1)
    led.unplot(2, 2)
    led.plot(2, 1)
    led.unplot(3, 0)
    led.plot(1, 2)
    led.unplot(3, 2)
    led.plot(3, 3)
    basic.pause(100)
    led.unplot(1, 2)
    led.plot(3, 2)
    led.unplot(2, 1)
    led.plot(2, 0)
    led.unplot(3, 1)
    led.plot(0, 0)
    led.plot(1, 3)
    led.unplot(3, 3)
    led.plot(3, 4)
    basic.pause(100)
    led.unplot(1, 3)
    led.plot(3, 3)
    led.unplot(0, 0)
    led.unplot(2, 0)
    led.plot(0, 1)
    led.unplot(3, 2)
    led.unplot(3, 4)
    led.plot(1, 4)
    basic.pause(100)
    led.unplot(1, 4)
    led.unplot(0, 1)
    led.plot(0, 2)
    led.plot(3, 4)
    led.unplot(3, 3)
    basic.pause(100)
    led.unplot(0, 2)
    led.plot(0, 3)
    led.unplot(3, 4)
    basic.pause(100)
    led.unplot(0, 3)
    led.plot(0, 4)
    basic.pause(100)
    led.unplot(0, 4)
    basic.clearScreen()
    basic.showLeds(`
        . # # # .
        # . . . #
        # # # # #
        # . . . #
        . # # # .
        `)
    basic.pause(2000)
    basic.clearScreen()
}
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
function laatste () {
    sM()
    basic.pause(1000)
    led.plot(3, 1)
    led.plot(1, 1)
    basic.pause(100)
    led.unplot(3, 1)
    led.unplot(1, 1)
    basic.pause(100)
    led.plot(3, 1)
    led.plot(1, 1)
    basic.pause(100)
    led.unplot(3, 1)
    led.unplot(1, 1)
    basic.pause(100)
    led.plot(3, 1)
    led.plot(1, 1)
    basic.pause(100)
    led.unplot(3, 1)
    led.unplot(1, 1)
    basic.pause(100)
    led.plot(3, 1)
    led.plot(1, 1)
    basic.pause(100)
    led.plot(1, 1)
    led.plot(3, 1)
    basic.pause(100)
    led.plot(3, 2)
    led.plot(1, 2)
    basic.pause(100)
    led.plot(3, 3)
    led.plot(1, 3)
    if (led.point(1, 4)) {
        gameover()
    } else {
        if (led.point(3, 4)) {
            gameover()
        } else {
            led.plot(1, 4)
            led.plot(3, 4)
            basic.pause(1000)
            led.plotBrightness(1, 1, 200)
            led.plotBrightness(3, 1, 200)
            basic.pause(100)
            led.unplot(3, 2)
            led.unplot(1, 2)
            basic.pause(100)
            led.unplot(1, 3)
            led.unplot(3, 3)
            basic.pause(100)
            led.unplot(3, 4)
            led.unplot(1, 4)
            einde()
        }
    }
}
function sL () {
    led.plotBrightness(0, 0, 200)
    led.plotBrightness(1, 0, 200)
    led.plotBrightness(2, 0, 200)
    led.plotBrightness(3, 0, 200)
    led.plotBrightness(4, 0, 200)
    led.plotBrightness(0, 1, 200)
    led.plotBrightness(4, 3, 200)
    led.plotBrightness(4, 2, 200)
    led.plotBrightness(3, 2, 200)
    led.plotBrightness(2, 1, 200)
    led.plotBrightness(3, 1, 200)
    led.plotBrightness(4, 1, 200)
    led.unplot(2, 2)
    led.unplot(1, 2)
    led.unplot(0, 2)
    led.unplot(1, 1)
    led.unplot(0, 3)
}
function links () {
    led.unplot(2, 4)
    led.unplot(3, 4)
    led.plotBrightness(1, 4, 255)
}
function midden () {
    led.unplot(1, 4)
    led.unplot(3, 4)
    led.plotBrightness(2, 4, 255)
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
function sM () {
    led.plotBrightness(0, 0, 200)
    led.plotBrightness(1, 0, 200)
    led.plotBrightness(2, 0, 200)
    led.plotBrightness(3, 0, 200)
    led.plotBrightness(4, 0, 200)
    led.plotBrightness(0, 1, 200)
    led.plotBrightness(0, 2, 200)
    led.plotBrightness(1, 1, 200)
    led.plotBrightness(4, 1, 200)
    led.plotBrightness(4, 2, 200)
    led.plotBrightness(3, 1, 200)
    led.unplot(1, 2)
    led.unplot(2, 2)
    led.unplot(3, 2)
    led.unplot(4, 3)
    led.unplot(0, 3)
    led.unplot(2, 1)
}
function s_bijdeRL () {
    sB()
    basic.pause(200)
    led.plot(1, 1)
    led.plot(3, 1)
    basic.pause(100)
    led.unplot(3, 1)
    led.plot(3, 2)
    led.unplot(1, 1)
    led.plot(1, 2)
    basic.pause(100)
    led.plot(3, 3)
    led.unplot(3, 2)
    led.plot(1, 3)
    led.unplot(1, 2)
    basic.pause(100)
    if (led.point(1, 4)) {
        gameover()
    } else {
        if (led.point(3, 4)) {
            gameover()
        } else {
            led.plot(1, 4)
            led.unplot(1, 3)
            led.plot(3, 4)
            led.unplot(3, 3)
            basic.pause(100)
            led.unplot(3, 4)
            led.unplot(1, 4)
        }
    }
}
function rechts () {
    led.unplot(1, 4)
    led.unplot(2, 4)
    led.plotBrightness(3, 4, 255)
}
function sB () {
    led.plot(0, 0)
    led.plot(1, 0)
    led.plot(2, 0)
    led.plot(3, 0)
    led.plot(4, 0)
    led.plot(0, 2)
    led.plot(0, 1)
    led.plot(4, 2)
    led.plot(4, 1)
    led.plot(2, 1)
    led.unplot(1, 1)
    led.unplot(3, 1)
    led.unplot(1, 2)
    led.unplot(2, 2)
    led.unplot(3, 2)
    led.unplot(0, 3)
    led.unplot(4, 3)
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
    sR()
    basic.pause(200)
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
input.onButtonPressed(Button.B, function () {
    rechts()
})
function level_5 () {
    basic.showNumber(5)
    basic.pause(2000)
    basic.clearScreen()
    basic.pause(500)
    led.setBrightness(200)
    basic.showLeds(`
        # # . # #
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    led.plotBrightness(0, 0, 200)
    led.plotBrightness(1, 0, 200)
    led.plotBrightness(2, 0, 200)
    led.plotBrightness(3, 0, 200)
    led.plotBrightness(4, 0, 200)
    led.plotBrightness(0, 1, 200)
    led.plotBrightness(0, 2, 200)
    led.plotBrightness(1, 1, 200)
    led.plotBrightness(4, 1, 200)
    led.plotBrightness(4, 2, 200)
    led.plotBrightness(3, 1, 200)
    led.setBrightness(255)
    basic.pause(1000)
    midden()
    basic.pause(randint(1000, 3000))
    s_midden()
    basic.pause(randint(1000, 3000))
    s_links()
    basic.pause(randint(1000, 3000))
    s_rechts()
    basic.pause(randint(1000, 3000))
    s_rechts()
    basic.pause(randint(1000, 3000))
    s_links()
    basic.pause(randint(1000, 3000))
    s_bijdeRL()
    basic.pause(randint(1000, 3000))
    s_links()
    basic.pause(randint(1000, 3000))
    s_midden()
    basic.pause(randint(1000, 3000))
    s_links()
    basic.pause(randint(1000, 3000))
    s_rechts()
    basic.pause(randint(1000, 3000))
    s_bijdeRL()
    basic.pause(randint(1000, 3000))
    s_rechts()
    basic.pause(randint(1000, 3000))
    s_links()
    basic.pause(randint(1000, 3000))
    s_rechts()
    basic.pause(randint(1000, 3000))
    s_links()
    basic.pause(randint(1000, 3000))
    s_links()
    basic.pause(randint(1000, 3000))
    s_midden()
    basic.pause(2000)
    laatste()
}
function s_midden () {
    sM()
    basic.pause(200)
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
    sL()
    basic.pause(200)
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
function sR () {
    led.plotBrightness(0, 3, 200)
    led.plotBrightness(0, 2, 200)
    led.plotBrightness(1, 2, 200)
    led.plotBrightness(2, 1, 200)
    led.plotBrightness(0, 1, 200)
    led.plotBrightness(4, 1, 200)
    led.plotBrightness(0, 0, 200)
    led.plotBrightness(1, 0, 200)
    led.plotBrightness(2, 0, 200)
    led.plotBrightness(3, 0, 200)
    led.plotBrightness(4, 0, 200)
    led.plotBrightness(1, 1, 200)
    led.unplot(4, 3)
    led.unplot(2, 2)
    led.unplot(3, 2)
    led.unplot(4, 2)
    led.unplot(3, 1)
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
start()
