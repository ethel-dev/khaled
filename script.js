/*global KhaledJS*/
window.onload = function() {
    anotherOne()
    textFit($('#big-khaled')[0])
    
    $("#quote_area").hover(function() {
        $("#khaled_phrase").css("display", "none")
        $("#another_one").css("display", "inline-block")
        textFit($('#another_one')[0], {multiLine: true, alignVert: true})
    }, function() {
        $("#another_one").css("display", "none")
        $("#khaled_phrase").css("display", "inline-block")
        textFit($('#khaled_phrase')[0], {multiLine: true, alignVert: true})
    })
}

function anotherOne() {
    var khaled = KhaledJS();
    
    switch(Math.floor(Math.random() * 3) + 1) {
        case 1:
            $("#khaled_phrase").text(khaled.key)
            break
        case 2:
            $("#khaled_phrase").text(khaled.they)
            break
        case 3:
            $("#khaled_phrase").text(khaled.you)
            break
    }
    
    $("#another_one").css("display", "none")
    $("#khaled_phrase").css("display", "inline-block")
    textFit($('#khaled_phrase')[0], {multiLine: true, alignVert: true})
    $("#another_one_sound").trigger("play").prop("currentTime", 0)
}