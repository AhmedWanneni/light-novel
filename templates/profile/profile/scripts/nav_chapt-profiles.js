
$(".profile-reading>.col-md-12>.profile-reading-nav>button:nth-child(1)").click(function (){
    $(".finish").css("display","block");
    $(".profile-reading>.col-md-12>.ln").css("display","none");
    $(".profile-reading>.col-md-12>.badges").css("display","none");
    $(".profile-reading>.col-md-12>.uploaded-chapters").css("display","none");
    $(".profile-reading>.col-md-12>.profile-reading-nav>button:nth-child(1)").css("border-left","solid 1px #8080806e");

     // ===================================== for others =============================================
     $(".profile-reading>.col-md-12>.profile-reading-nav>button:nth-child(n)").css("height","2.5rem");
     $(".profile-reading>.col-md-12>.profile-reading-nav>button:nth-child(n)").css("background-color","#F8F9FA");
     $(".profile-reading>.col-md-12>.profile-reading-nav>button:nth-child(n+2)").css("border-top","solid 1px #8080806e");
     
     // ===================================== after others============================================
     $(".profile-reading>.col-md-12>.profile-reading-nav>button:nth-child(1)").css("height","3rem");
     $(".profile-reading>.col-md-12>.profile-reading-nav>button:nth-child(1)").css("background-color","#fff");
     $(".profile-reading>.col-md-12>.profile-reading-nav>button:nth-child(1)").css("border-top","solid #563d7c");
});

$(".profile-reading>.col-md-12>.profile-reading-nav>button:nth-child(2)").click(function (){
    $(".finish").css("display","none");
    $(".profile-reading>.col-md-12>.ln").css("display","block");
    $(".profile-reading>.col-md-12>.badges").css("display","none");
    $(".profile-reading>.col-md-12>.uploaded-chapters").css("display","none");
    // ===================================== for others =============================================
    $(".profile-reading>.col-md-12>.profile-reading-nav>button:nth-child(n)").css("height","2.5rem");
    $(".profile-reading>.col-md-12>.profile-reading-nav>button:nth-child(n)").css("background-color","#F8F9FA");
    $(".profile-reading>.col-md-12>.profile-reading-nav>button:nth-child(n+3)").css("border-top","solid 1px #8080806e");
    $(".profile-reading>.col-md-12>.profile-reading-nav>button:nth-child(1)").css("border-top","solid 1px #8080806e");
    // ===================================== after others============================================
    $(".profile-reading>.col-md-12>.profile-reading-nav>button:nth-child(2)").css("height","3rem");
    $(".profile-reading>.col-md-12>.profile-reading-nav>button:nth-child(2)").css("background-color","#fff");
    $(".profile-reading>.col-md-12>.profile-reading-nav>button:nth-child(2)").css("border","none");
    $(".profile-reading>.col-md-12>.profile-reading-nav>button:nth-child(2)").css("border-top","solid #563d7c");
   
    

});

$(".profile-reading>.col-md-12>.profile-reading-nav>button:nth-child(3)").click(function (){
    $(".finish").css("display","none");
    $(".profile-reading>.col-md-12>.ln").css("display","none");
    $(".profile-reading>.col-md-12>.badges").css("display","block");
    $(".profile-reading>.col-md-12>.uploaded-chapters").css("display","none");
   
       // ===================================== for others =============================================
       $(".profile-reading>.col-md-12>.profile-reading-nav>button:nth-child(n)").css("height","2.5rem");
       $(".profile-reading>.col-md-12>.profile-reading-nav>button:nth-child(n)").css("background-color","#F8F9FA");
       $(".profile-reading>.col-md-12>.profile-reading-nav>button:nth-last-child(n+2)").css("border-top","solid 1px #8080806e");
       $(".profile-reading>.col-md-12>.profile-reading-nav>button:nth-last-child(1)").css("border-top","solid 1px #8080806e");
       // ===================================== after others============================================
       $(".profile-reading>.col-md-12>.profile-reading-nav>button:nth-child(3)").css("height","3rem");
       $(".profile-reading>.col-md-12>.profile-reading-nav>button:nth-child(3)").css("background-color","#fff");
       $(".profile-reading>.col-md-12>.profile-reading-nav>button:nth-child(3)").css("border","none");
       $(".profile-reading>.col-md-12>.profile-reading-nav>button:nth-child(3)").css("border-top","solid #563d7c");


});

$(".profile-reading>.col-md-12>.profile-reading-nav>button:nth-child(4)").click(function (){
    $(".finish").css("display","none");
    $(".profile-reading>.col-md-12>.ln").css("display","none");
    $(".profile-reading>.col-md-12>.badges").css("display","none");
    $(".profile-reading>.col-md-12>.uploaded-chapters").css("display","block");
    
       // ===================================== for others =============================================
       $(".profile-reading>.col-md-12>.profile-reading-nav>button:nth-child(n)").css("height","2.5rem");
       $(".profile-reading>.col-md-12>.profile-reading-nav>button:nth-child(n)").css("background-color","#F8F9FA");
       $(".profile-reading>.col-md-12>.profile-reading-nav>button:nth-last-child(n+1)").css("border-top","solid 1px #8080806e");
       
       // ===================================== after others============================================
       $(".profile-reading>.col-md-12>.profile-reading-nav>button:nth-child(4)").css("height","3rem");
       $(".profile-reading>.col-md-12>.profile-reading-nav>button:nth-child(4)").css("background-color","#fff");
       $(".profile-reading>.col-md-12>.profile-reading-nav>button:nth-child(4)").css("border","none");
       $(".profile-reading>.col-md-12>.profile-reading-nav>button:nth-child(4)").css("border-top","solid #563d7c");


});


						
$(".upload-profile-img").mouseover(function (){
    
  
    $(".upload-profile-img-btn").css("display","block");
    
    $(".upload-profile-img").css("opacity","1");
    $(".upload-profile-img>strong").css("display","block");
});

$(".upload-profile-img").mouseout(function (){
   
    $(".upload-profile-img").css("opacity","0");
    $(".upload-profile-img-btn").css("display","none");
    
    $(".upload-profile-img>strong").css("display","none ");
});

//================== Heart react  ==============================
// from database 
$(".finish>.chapters>table>tbody>tr>td:nth-child(4)>svg:nth-child(2)").click(function() {
    

    $.ajax({
        data : {
            id : $(this).parent().parent().attr("id"),
            favori : 1,
        },
        type : "POST",
        url : "/profile" //profile
    
    }).done(function(data){
        if(data.error){
            console.log("erreur en favori");
        }
        else{
            $(this).parent().find("svg:nth-child(1)").css("display","inline");
            $(this).parent().find("svg:nth-child(2)").css("display","none");
        }
    });

    
});

$(".finish>.chapters>table>tbody>tr>td:nth-child(4)>svg:nth-child(1)").click(function() {
   
    
    
    
    $.ajax({
        data : {
            id : $(this).parent().parent().attr("id"),
            favori : 0,
        },
        type : "POST",
        url : "/profile" //profile
    
    }).done(function(data){
        if(data.error){
            console.log("erreur en favori");
        }
        else{
            $(this).parent().find("svg:nth-child(2)").css("display","inline");
            $(this).parent().find("svg:nth-child(1)").css("display","none");
        }
    });
});

$(".finish>.chapters>table>tbody>tr>td:nth-child(5)>svg:nth-child(2)").click(function() {
   

    $.ajax({
        data : {
            id : $(this).parent().parent().attr("id"),
            favori : 1,
        },
        type : "POST",
        url : "/profile" //profile
    
    }).done(function(data){
        if(data.error){
            console.log("erreur en favori");
        }
        else{
            $(this).parent().find("svg:nth-child(1)").css("display","inline");
            $(this).parent().find("svg:nth-child(2)").css("display","none");
        }
    });

    
});

$(".ln>.chapters>table>tbody>tr>td:nth-child(5)>svg:nth-child(1)").click(function() {
   
    

    
    $.ajax({
        data : {
            id : $(this).parent().parent().attr("id"),
            favori : 0,
        },
        type : "POST",
        url : "/profile" //profile
    
    }).done(function(data){
        if(data.error){
            console.log("erreur en favori");
        }
        else{
            $(this).parent().find("svg:nth-child(2)").css("display","inline");
            $(this).parent().find("svg:nth-child(1)").css("display","none");
        }
    });
});


$(".ln>.chapters>table>tbody>tr>td:nth-child(5)>svg:nth-child(2)").click(function() {
    

    $.ajax({
        data : {
            id : $(this).parent().parent().attr("id"),
            favori : 1,
        },
        type : "POST",
        url : "/profile" //profile
    
    }).done(function(data){
        if(data.error){
            console.log("erreur en favori");
        }
        else{
            $(this).parent().find("svg:nth-child(1)").css("display","inline");
            $(this).parent().find("svg:nth-child(2)").css("display","none");
        }
    });

    
});
/*=====================Edit====================*/
$(".table-setting-profile>.row:nth-child(4)>.col-md-1>a").click(function (){
    $(".focus-background").css("display","block");
    $(".up_username").css("display","block");
});

$(".table-setting-profile>.row:nth-child(6)>.col-md-1>a").click(function (){
    $(".focus-background").css("display","block");
    $(".up_email").css("display","block");
});

$(".focus-background>.close-focus").click(function (){
    $(this).parent().css("display","none"); 
    $(".up_username").css("display","none");
    $(".up_email").css("display","none");
});

$(".cancel-f1").click(function (){
    $(this).parent().parent().css("display","none"); 
    $(".up_username").css("display","none");
    $(".up_email").css("display","none");
});

$(".cancel-f2").click(function (){
    $(this).parent().parent().css("display","none"); 
    $(".up_username").css("display","none");
    $(".up_email").css("display","none");
});