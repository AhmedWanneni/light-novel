
var checked_or_not = "";
$(".fa").click(function (){
   var checked_or_not = $(this).attr("class"); 

  if(checked_or_not == "fa fa-star")
     $(this).addClass("checked");
  else
     $(this).removeClass("checked");
});

// ADD to favorite 
$(".anchor>svg:nth-child(2)").click(function (){
  $(this).css("display","none");
  $(".anchor>svg:nth-child(1)").css("display","inline");
});

$(".anchor>svg:nth-child(1)").click(function (){
  $(this).css("display","none");
  $(".anchor>svg:nth-child(2)").css("display","inline");
});

$("#x1").click(function (){
$("head").append('<link rel="stylesheet" type="text/css" href="styles/dark_mode.css">');
});