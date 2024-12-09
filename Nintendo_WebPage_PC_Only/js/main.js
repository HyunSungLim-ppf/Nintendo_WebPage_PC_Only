$(()=>{
    $('.game_forum').eq(0).css({"display": "block"})
    $('.game_logo').click(function(){
        // each game logo active
        $('.game_logo').css({"filter": "grayscale(100%)"})
        $('.game_logo').eq($(this).index()).css({"filter": "grayscale(0%)"})

        // each game forum active
        $('.game_forum').css({"display": "none"})
        $('.game_forum').eq($(this).index()).css({"display": "block"})

        // each game img active
        $('#game_product_img').attr("src", `./images/best_game_img/game0${$(this).index()+1}_product_img.png`)
        $('#game_play_img').attr("src", `./images/best_game_img/game0${$(this).index()+1}_play_img.png`)
    })

    // FAQ
    $('.question').click(function () {
        const idx = $(this).index();
        $('.fa-plus').stop().css({ transform: "rotate(0deg)" })
        if ($('.fa-plus').eq(idx).css('transform') == "matrix(0.707107, -0.707107, 0.707107, 0.707107, 0, 0)") {
            $('.fa-plus').eq(idx).stop().css({ transform: "rotate(0deg)" })
        } else {
            $('.fa-plus').eq(idx).stop().css({ transform: "rotate(315deg)" })
        }
        $('.answer').stop().slideUp(100);
        $('.answer').eq(idx).stop().slideToggle(200);
    })

    // # 
    $('a[href="#"]').click(function(e){
        e.preventDefault()
        $('#alert').stop().fadeIn(800);
        setTimeout(function(){
            $('#alert').stop().fadeOut(1000);
        },3000)
    })
})