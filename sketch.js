function setup() {
  createCanvas(400, 300);
}
function draw() {
  background(mouseX,170,160);
	fill(134,0,0)
	rect(130,100,40,mouseX/2);
	rect(350,190,30,30);

	ellipse(50,120,mouseX/4);
	fill(228,153,65)
	rect(100,100,20,mouseX/4);

	rect(290,160,mouseX/2,30);

	ellipse(50,220,mouseX/3);
	fill(120,126,26)
	rect(320,160,mouseX/3,30);

	ellipse(250,220,mouseX/3);
	fill(120,126,206)
	ellipse(250,220,mouseX/4);
	rect(350,160,mouseX/4,30);
	fill(69,117,255)
	ellipse(250,120,mouseX/6);
	rect(350,130,30,mouseX/4);

	fill(228,182,129)
	line(mouseY,mouseY,25,158);
	rect(290,130,30,mouseX/4);
	fill(74,95,143)
	rect(290,190,mouseX/4,30);
	rect(120,130,mouseX/3,30);

	line(mouseY,145,195,145);
  line(200,mouseY,365,15);
	line(215,150,350,mouseY);
	ellipse(70,60,mouseX/4);
	fill(120,126,206)
	ellipse(70,60,mouseX/5);
	rect(320,130,mouseX/4,30);
	rect(320,190,30,mouseX/4);
}