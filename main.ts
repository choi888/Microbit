OLED12864_I2C.init(60)
OLED12864_I2C.clear()
basic.forever(function () {
    for (let index = 0; index < 400; index++) {
        OLED12864_I2C.showString(
        1,
        2,
        "Hello World!",
        1
        )
        basic.pause(5000)
        OLED12864_I2C.clear()
        OLED12864_I2C.rect(
        0,
        0,
        60,
        30,
        1
        )
        basic.pause(5000)
        OLED12864_I2C.clear()
    }
})
