
$(document).ready(function () {
    
var Cont = {
        val: 8000000
    },
    NewVal = 113000000;



$("#btn2").click(function() {

TweenLite.to(Cont, 5, {
    val: NewVal,
    roundProps: "val",
    onUpdate: function () {
        document.getElementById("counter").innerHTML = numberWithCommas(Math.ceil(Cont.val))
    }
})

})
    //counter from:https: codepen.io/MAW/pen/wabEyg
    
    function numberWithCommas(x) {
        
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    
$("#btn2point5").click(function() {
 $('.new').toggleClass('colorChange');
    })
    
    $("#btn3").click(function() {
TweenMax.from("circle", 4, {drawSVG: 0})
    })
    
    
$("#btn5").click(function() {
TweenMax.from("circle", 4, {drawSVG: 0})
    })






var pos = $(document).scrollTop();

$("#btn1").click(function () {
    $('html, body').animate({
        scrollTop: $("#two").offset().top
    }, 800)
    $("body").css("overflow", "visible")
})
$("#btn2").click(function () {
    $('html, body').animate({
        scrollTop: $("#three").offset().top
    }, 800)
    $("body").css("overflow", "visible")
})

    $("#btn3").click(function() {
        $('html,body').animate({
            scrollTop: $("#four").offset().top}, 800)
         $("body").css("overflow", "visible")
        })
  
$("#btn4").click(function () {
    $('html, body').animate({
        scrollTop: $("#five").offset().top
    }, 800)
    $("body").css("overflow", "visible")
})

$("#btn5").click(function () {
    $('html, body').animate({
        scrollTop: $("#six").offset().top
    }, 800)
    $("body").css("overflow", "visible")
})
    $("#btn6").click(function () {
    $('html, body').animate({
        scrollTop: $("#seven").offset().top
    }, 800)
    $("body").css("overflow", "visible")
})
//    $("#btn4").click(function () {
//    $('html, body').animate({
//        scrollTop: $("#five").offset().top
//    }, 800)
//    $("body").css("overflow", "visible")
//})

var tl = new TimelineLite,
    mySplitText = new SplitText("#quote", {
        type: "words,chars"
    }),
    chars = mySplitText.chars; //an array of all the divs that wrap each character

TweenLite.set("#quote", {
    perspective: 400
});

tl.staggerFrom(chars, 0.8, {
    opacity: 0,
    scale: 0,
    y: 80,
    rotationX: 180,
    transformOrigin: "0% 50% -50",
    ease: Back.easeOut
}, 0.01, "+=0");



document.getElementById("animate").onclick = function () {
    tl.restart();
}


});