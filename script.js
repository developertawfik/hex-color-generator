window.onload = () => {
    main()
}
function main() {
    var btn = document.getElementById("btn");
    var body = document.getElementById("root");
    var input = document.getElementById("hex");
    btn.addEventListener("click", function () {
        var bgColor = hexColorGenerator();
        console.log(bgColor)
        input.value = bgColor;
        body.style.backgroundColor = bgColor;

    })
}

function hexColorGenerator() {
    var red = Math.floor(Math.random() * 255)
    var green = Math.floor(Math.random() * 255)
    var blue = Math.floor(Math.random() * 255)

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}