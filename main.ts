input.onButtonPressed(Button.A, function () {
    Numb += 1
    basic.showNumber(Numb)
})
input.onButtonPressed(Button.AB, function () {
    Numb = Numb
    basic.showNumber(Numb)
})
input.onButtonPressed(Button.B, function () {
    Numb += -1
    basic.showNumber(Numb)
})
let Numb = 0
basic.showIcon(IconNames.Skull)
Numb = 0
basic.showNumber(Numb)
