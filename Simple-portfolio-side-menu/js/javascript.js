function openSlideMenu(){
	document.getElementById('menu').style.width='250px';
	document.getElementById('content').style.marginLeft = '250px';
}
function closeSlideMenu(){
	document.getElementById('menu').style.width='0';
	document.getElementById('content').style.marginLeft = '0';
}
var typed= new Typed('.typing',{
	strings:["Font-End Web Developer", " UX/UI Designser","Freelancer"],
	loop:true,
	typeSpeed:50,
	backSpeed:50,
	backDelay:1000,
});
var typed= new Typed('.typing2',{
	strings:["Font-End Web Developer","Freelancer"," UX/UI Designser"],
	loop:true,
	typeSpeed:50,
	backSpeed:50,
	backDelay:1000,
});