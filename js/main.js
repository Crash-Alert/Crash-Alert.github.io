$(document).ready(function(){
  var speed = 400;
  $("a#dat").click(function(){
   console.log("log"); 
   $("body,html").animate({scrollTop: $("#data").offset().top}, speed);
}};
  )};
});
