function preload() {

}

function setup() {
    canvas = createCanvas(700,  700)
    canvas.center()

    video = createCapture(VIDEO)
    video.hide()
}

function draw() {
    fill("blue")
    circle(650, 650, 100)
    circle(50, 60, 100)
    fill("red")
    rect(610, 10, 80, 80)
    rect(10, 610, 80, 80)
    fill("green")
    rect(10, 120, 80, 480)
    rect(610, 110, 80, 480)
    rect(110, 610, 480, 80)
    rect(110, 10, 480, 80)

    image(video, 100, 100, 500, 500)
}