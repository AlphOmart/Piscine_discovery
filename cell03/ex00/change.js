function change() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b= Math.floor(Math.random() * 256);
    var the_rgb = "rgb(" + r + "," + g + "," + b + ")";
    console.log(the_rgb,document.body.style.background);
    document.body.style.background=the_rgb;
}
