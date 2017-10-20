$(document).ready(function(){
  
  var sessionLength =parseInt($("#num").html());
  
  var breakLength =parseInt($("#num1").html());
  
  $("#res").hide();
  
  $(".time").click(function(){
   
   var counter = setInterval(timer,1000);
    var count = sessionLength;
    $("#inc,#dec,#inc1,#dec1").hide();
    count *= 60;
    function timer(){
      count -=1;
      if(count === 0)
        {
          clearInterval(counter);
          var startBreak = setInterval(breakTimer,1000);
          breakLength *= 60;
        }
      if(count%60 >= 10)
        {
          $("#len").html(Math.floor(count/60) + ":"+count%60);
        }
      else
        {
          $("#len").html(Math.floor(count/60) + ":0"+count%60);
        }
      function breakTimer(){
      $("#timeType").html("Break");
      breakLength -= 1;
      if(breakLength === 0)
        {
          clearInterval(startBreak);
          $("#inc,#dec,#inc1,#dec1").show();
          sessionLength = 25;
          breakLength = 5
          $("#num").html(sessionLength);
          $("#num1").html(breakLength);
          $("#len").html(sessionLength);
          $("#timeType").html("Session");
          
          
        }
        if(breakLength%60 >= 10)
        {
          $("#len").html(Math.floor(breakLength/60) + ":"+breakLength%60);
        }
      else
        {
          $("#len").html(Math.floor(breakLength/60) + ":0"+breakLength%60);
        }  
    }
     
      
    }
    
    
  });

  $("#len").html(sessionLength);
  
  $("#dec").click(function(){
    if(sessionLength > 1){
    sessionLength -= 1;
    }
    $("#num").html(sessionLength);
    $("#len").html(sessionLength);
  })
  
   $("#inc").click(function(){
    
    sessionLength += 1;
   
    $("#num").html(sessionLength);
    $("#len").html(sessionLength);
  })
  
  $("#dec1").click(function(){
    if(breakLength > 1){
    breakLength -= 1;
    }
    $("#num1").html(breakLength);
   
  })
  
   $("#inc1").click(function(){
    
    breakLength += 1;
   
    $("#num1").html(breakLength);
   
  })
});