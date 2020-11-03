let humedad = 0
input.onButtonPressed(Button.A, function () {
    // muestra la temperatura
    // actual del sensor del microbit, por defecto aparece en 21 grados celsius, pero se puede modificar durante las pruebas
    basic.showNumber(input.temperature())
    // muestra el símbolo de grados celsius
    basic.showString("°C")
    if (input.temperature() >= 8 && input.temperature() <= 30) {
        // pausa de 500 milisegundos
        basic.pause(500)
        // limpiar pantalla
        basic.clearScreen()
        // muestre mensaje OK
        basic.showString("T ok")
    } else if (input.temperature() > 30) {
        for (let index = 0; index < 4; index++) {
            // alarma que alerte de alta temperatura sonando 4 veces
            // reproduce sonido
            music.playTone(262, music.beat(BeatFraction.Breve))
            // pausa de 200 milisegundos entre cada pitido de la alarma
            basic.pause(200)
        }
        // pausa de 500 milisegundos
        basic.pause(500)
        // limpiar pantalla
        basic.clearScreen()
        // muestre mensaje Temp. alta        basic.pause(500) // pausa de 500 milisegundos
        basic.showString("T alta")
    } else {
        // condicional en caso de que la temperatura sea inferior a 8 grados celsius
        // pausa de 500 milisegundos
        basic.pause(500)
        // limpiar pantalla
        basic.clearScreen()
        // muestre mensaje Temp. baja
        basic.showString("T baja")
    }
    // limpiar pantalla
    basic.clearScreen()
    // espera de 2 segundos hasta volver a empezar
    basic.pause(2000)
})
input.onButtonPressed(Button.B, function () {
    humedad = pins.analogReadPin(AnalogPin.P0)
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
    if (humedad >= 200 && humedad <= 600) {
        // pausa de 500 milisegundos
        basic.pause(500)
        // limpiar pantalla
        basic.clearScreen()
        // muestre mensaje OK
        basic.showString("Hum.Ok")
    } else if (humedad > 600) {
        for (let index = 0; index < 4; index++) {
            // alarma que alerte de alta temperatura sonando 4 veces
            // reproduce sonido
            music.playTone(262, music.beat(BeatFraction.Breve))
            // pausa de 500 milisegundos
            basic.pause(200)
        }
        // pausa de 500 milisegundos
        basic.pause(500)
        // limpiar pantalla
        basic.clearScreen()
        // muestre mensaje OK
        basic.showString("Hum.Alta")
    } else {
        // condicional en caso de que la temperatura sea inferior a 8 grados celsius
        // pausa de 500 milisegundos
        basic.pause(500)
        // limpiar pantalla
        basic.clearScreen()
        // muestre mensaje Temp. baja
        basic.showString("Hum.Baja")
    }
})
