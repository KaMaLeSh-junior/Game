var move = 1;
var play= true;

$("table tr td").click(function(){
    if($(this).text() == "" && play){
        if((move%2) == 1){
            $(this).append("X");
            $(this).css('color',"red");
        }
        else{
            $(this).append("O");
            $(this).css('color','black');
        }
        move++;

        if(findWinner() != -1 && findWinner() !=""){
            if(findWinner()=="X"){
                $(".buttonBox").css({"visibility":"visible","z-index":"2000","opacity":"1"})
                $('.buttonBox').append('<div class ="winner"><span>Winner</span>-X</div>');
                $('.buttonBox').append('<button onclick="location.reload()">Restart</button>');
                $("body").css("background","rgba(0,0,0,0.4)");
            }
            else{
                $(".buttonBox").css({"visibility":"visible","z-index":"2000","opacity":"1"})
                $('.buttonBox').append('<div class ="winner"><span>Winner</span>-O</div>');
                $('.buttonBox').append('<button onclick="location.reload()">Restart</button>');
                $("body").css("background","rgba(0,0,0,0.4)");
            }
            play = false;
        }
    }
})

function findWinner(){
    rc1 = $('table tr:nth-child(1) td:nth-child(1)').text();
    rc2 = $('table tr:nth-child(1) td:nth-child(2)').text();
    rc3 = $('table tr:nth-child(1) td:nth-child(3)').text();
    rc4 = $('table tr:nth-child(2) td:nth-child(1)').text();
    rc5 = $('table tr:nth-child(2) td:nth-child(2)').text();
    rc6 = $('table tr:nth-child(2) td:nth-child(3)').text();
    rc7 = $('table tr:nth-child(3) td:nth-child(1)').text();
    rc8 = $('table tr:nth-child(3) td:nth-child(2)').text();
    rc9 = $('table tr:nth-child(3) td:nth-child(3)').text();

// rows check
    if((rc1 == rc2) && (rc2==rc3)){
        return rc3;
    }
    else if((rc4==rc5) &&( rc5 == rc6)){
        return rc6;
    }
    else if(( rc7==rc8 ) && (rc8 ==rc9 )){
        return rc9;
    }

// column check

    if((rc1 == rc4) && (rc4 == rc7)){
        return rc7;
    }
    else if(( rc2 == rc5 ) && (rc5 == rc8)){
        return rc8;
    }
    else if( ( rc3 == rc6) && (rc6 == rc9 )){
        return rc9;
    }

// diagonals check

    if( ( rc1 == rc5 )&& (rc5 == rc9)){
        return rc9;
    }
    else if((rc3 == rc5) && (rc5 == rc7)){
        return rc7;
    }

// no winner, so we return negative value

return -1;





}