function rakete () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . # # # .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        . # # # .
        . . # . .
        . # . # .
        `)
    basic.showLeds(`
        . # # # .
        . # # # .
        . . # . .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        . . # . .
        . # . # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # . # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
function propeller () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . . # .
        # . # . .
        . # # # .
        . . # . #
        . # . . .
        `)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        . # . . .
        . . # . #
        . # # # .
        # . # . .
        . . . # .
        `)
}
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    animation += 1
    animation = animation % 4
})
function herz () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
function ente () {
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . #
        . . . # #
        . . . . #
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . # #
        . . # # #
        . . . # #
        . . . # #
        . . . . .
        `)
    basic.showLeds(`
        . . # # .
        . # # # .
        . . # # #
        . . # # #
        . . . . .
        `)
    basic.showLeds(`
        . # # . .
        # # # . .
        . # # # #
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        # # . . .
        # # . . .
        # # # # .
        # # # . .
        . . . . .
        `)
    basic.showLeds(`
        # . . . .
        # . . . .
        # # # . .
        # # . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . . .
        # . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
let animation = 0
animation = 0
basic.forever(function () {
    if (animation == 0) {
        propeller()
    } else if (animation == 1) {
        rakete()
    } else if (animation == 2) {
        ente()
    } else if (animation == 3) {
        herz()
    }
})
