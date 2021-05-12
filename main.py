OLED12864_I2C.init(60)
OLED12864_I2C.clear()

def on_forever():
    OLED12864_I2C.show_string(1, 2, "Hello World!", 1)
    basic.clear_screen()
    basic.pause(5000)
basic.forever(on_forever)
