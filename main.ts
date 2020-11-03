let humedad = 0
// establece en cero el valor inicial de humedad. La variable puede tomar un valor aleatorio entre 0 y 1023
input.onButtonPressed(Button.A, function () {
    // acciones al presionar el botón A
    // muestra la temperatura actual del sensor del microbit, por defecto aparece en 21 grados celsius, pero se puede modificar durante las pruebas
    basic.showNumber(input.temperature())
    // muestra el símbolo de grados celsius
    basic.showString("°C")
    if (input.temperature() >= 8 && input.temperature() <= 30) {
        // pausa de 500 milisegundos
        basic.pause(500)
        // limpiar pantalla
        basic.clearScreen()
        // muestre mensaje Temp. OK
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
        // pausa de 500 milisegundos
        basic.pause(500)
        // muestre mensaje Temp. alta
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
    // acciones al presionar el botón B
    // asociar la variable creada llamada humedad a la lectura del pin análogo P0
    humedad = pins.analogReadPin(AnalogPin.P0)
    // lea el pin P0 y tome su valor aleatorio entre 0 y 1023 después de presionar el botón B
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
    if (humedad >= 200 && humedad <= 600) {
        // condicional if que evalúa si la humedad está entre 200 y 600 unidades
        // pausa de 500 milisegundos
        basic.pause(500)
        // limpiar pantalla
        basic.clearScreen()
        // muestre mensaje Humedad OK
        basic.showString("Hum.Ok")
    } else if (humedad > 600) {
        // condicional if que evalúa si la humedad excede las 600 unidades
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
        // muestre mensaje Humedad Alta
        basic.showString("Hum.Alta")
    } else {
        // condicional en caso de que la Humedad sea inferior a 200 unidades
        // pausa de 500 milisegundos
        basic.pause(500)
        // limpiar pantalla
        basic.clearScreen()
        // muestre mensaje Hum. Baja
        basic.showString("Hum.Baja")
    }
})
