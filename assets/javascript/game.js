$(document).ready(function() {
    console.log("ready!");

    var Random = Math.floor(Math.random() *101 + 19);
                    
    $("#target").text(Random);

    var num1= Math.floor(Math.random() * 11 + 1)
    var num2= Math.floor(Math.random() * 11 + 1)
    var num3= Math.floor(Math.random() * 11 + 1)
    var num4= Math.floor(Math.random() * 11 + 1)

    var userTotal= 0; 
    var wins= 0;
    var losses = 0;

    $('#wins').text("Wins: " + wins);
    $('#losses').text("Losses: " + losses);

    function reset(){
        Random=Math.floor(Math.random()*101+19);
        console.log(Random)
        $('#target').text(Random);
        num1= Math.floor(Math.random()*11+1);
        num2= Math.floor(Math.random()*11+1);
        num3= Math.floor(Math.random()*11+1);
        num4= Math.floor(Math.random()*11+1);
        userTotal= 0;
        $('#score').text(userTotal);
    } 

    function win(){
        $('#declare').text("You won!");
        wins++; 
        $('#wins').text("Wins: " + wins);
        reset();
    }    

    function loss(){
        $('#declare').text("You lost!");
        losses++;
        $('#losses').text("Losses: " + losses);
        reset()
    }

    $("#btn1").on ('click', function(){
        userTotal = userTotal + num1;
        console.log("New userTotal= " + userTotal);
        $("#score").text(userTotal); 
            if (userTotal == Random){
              win();
            }
            else if (userTotal > Random){
              loss();
            }   
      })  

    $("#btn2").on ('click', function(){
        userTotal = userTotal + num2;
        console.log("New userTotal= " + userTotal);
        $("#score").text(userTotal); 
            if (userTotal == Random){
                win();
            } else if (userTotal > Random){
                loss();
            } 
    })   

    $("#btn3").on ('click', function(){
        userTotal = userTotal + num3;
        console.log("New userTotal= " + userTotal);
        $("#score").text(userTotal);
            if (userTotal == Random){
            win();
        } else if (userTotal > Random){
            loss();
        } 
    })  

    $("#btn4").on ('click', function(){
        userTotal = userTotal + num4;
        console.log("New userTotal= " + userTotal);
        $("#score").text(userTotal); 
            if (userTotal == Random){
              win();
            }
            else if (userTotal > Random){
              loss();
            }   
      })  
      
});