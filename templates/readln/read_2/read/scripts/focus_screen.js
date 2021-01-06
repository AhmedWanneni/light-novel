$(".close-focus").click(function(){
	$('#focus-screen').css("display","none");
});
var i=0;
$("#a-plus-focus").click(function() {
	
var size = $("#focus-screen>.content>p").css('font-size');
			size =parseInt(size);
			
			i++;
			i = size + i;
			
	$("#focus-screen>.content>p").css("font-size",i+"px");
	i=0;
});
$("#a-moins-focus").click(function (){
	var size = $("#focus-screen>.content>p").css('font-size');
			size =parseInt(size);
			
			i--;
			i = size + i;
			
	$("#focus-screen>.content>p").css("font-size",i+"px");
	i=0;
});
// ============ setting focus ===================
$(".setting-focus-btn").click(function(){
	$(".setting-focus").css("display","block");

});

// ============== report focus ====================
$(".report-focus-btn").click(function(){
	$(".report-focus").css("display","block");
});

// ================ change fonts from settings ==========================



$(".setting-focus>table>tbody>tr>td>#content-width").click(function() {
	var content_width = $(".setting-focus>table>tbody>tr>td>#content-width").val();
	$(".content-f>p").css("width",content_width+"rem");
	$(".setting-focus>table>tbody>tr:nth-child(1)>td>span").html(content_width);
});

$(".setting-focus>table>tbody>tr>td>#content-size").click(function() {
	var content_size = $(".settings>table>tbody>tr>td>#content-size").val();
	$(".content-f>p").css("font-size",content_size-5+"px");
	$(".setting-focus>table>tbody>tr:nth-child(2)>td>span").html(content_size);
});

$(".setting-focus>table>tbody>tr>td>#content-line-space").click(function() {
	var content_line_space = $(".setting-focus>table>tbody>tr>td>#content-line-space").val();
	$(".content-f>p").css("line-height",content_line_space*1.2 +"px");
	$(".setting-focus>table>tbody>tr:nth-child(3)>td>span").html(content_line_space);
});

$(".setting-focus>div>#content-family").click(function() {
	var content_family = $(".setting-focus>div>#content-family").val();
	$(".content-f>p").css("font-family",content_family);
});

$(".setting-focus>table>tbody>tr>td>#content-letter-spacing").click(function() {
	var content_letter_spacing = $(".setting-focus>table>tbody>tr>td>#content-letter-spacing").val();
	$(".content-f>p").css("letter-spacing",content_letter_spacing/10+"px");
	$(".settings>table>tbody>tr:nth-child(4)>td>span").html(content_letter_spacing);
});
$(".setting-focus>div>button:nth-child(2)").click(function(){
	$(".content-f>p").css("width","46rem");
	$(".content-f>p").css("font-size","16px");
	$(".content-f>p").css("line-height","2rem");
	$(".content-f>p").css("font-family","'Poppins', sans-serif");
	$(".content-f>p").css("letter-spacing","0px");
});
$(".setting-focus>div>button:nth-child(1)").click(function(){
	$(".setting-focus").css("display","block");
});
// Display  all  option in  focus screen
$("#focus-screen").mousemove(function (event){
$(".previous-btn-focus").css("display","block");
$(".next-btn-focus").css("display","block");

/*setTimeout(function (){
	$(".next-btn-focus").css("display","none");
$(".previous-btn-focus").css("display","none");
},3000);*/

if( (event.pageX>1180 && event.pageX<3000) &&  (event.pageY>503 && event.pageY<643) )
	{
		$("#a-plus-focus").css("right","1rem");
		$("#a-moins-focus").css("right","1rem");
	}
	else{
		$("#a-plus-focus").css("right","-5rem");
		$("#a-moins-focus").css("right","-5rem");
	}
});