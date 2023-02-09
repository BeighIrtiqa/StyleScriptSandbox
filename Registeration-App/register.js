document.querySelector(".lname").addEventListener("change", function() {
    var fname = document.querySelector(".fname").value;
    var mname = document.querySelector(".mname").value;
    var lname = document.querySelector(".lname").value;
    
    document.querySelector(".result").innerHTML = "Hi " + fname + " " + mname + " " + lname + "!!";
  });

  
        
        
        
        $(".step").click( function() {
            $(this).addClass("active").prevAll().addClass("active");
            $(this).nextAll().removeClass("active");
        });
        
        $(".step01").click( function() {
            $("#line-progress").css("width", "3%");
            $(".discovery").addClass("active").siblings().removeClass("active");
        });
        
        $(".step02").click( function() {
            $("#line-progress").css("width", "25%");
            $(".strategy").addClass("active").siblings().removeClass("active");
        });
        
        $(".step03").click( function() {
            $("#line-progress").css("width", "50%");
            $(".creative").addClass("active").siblings().removeClass("active");
        });
        
        $(".step04").click( function() {
            $("#line-progress").css("width", "75%");
            $(".production").addClass("active").siblings().removeClass("active");
        });
        
        $(".step05").click( function() {
            $("#line-progress").css("width", "100%");
            $(".analysis").addClass("active").siblings().removeClass("active");
        });