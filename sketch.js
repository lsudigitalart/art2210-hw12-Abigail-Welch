//REDO OF ASSIGNMENT 7


var pieces;
var radius;
var fft;
var analyzer;
var soundFile;


function preload() {
  soundFile = loadSound('Nobody.mp3');
}


function setup() {
	createCanvas(800, 800);

	analyzer = new p5.Amplitude();
	fft = new p5.FFT();
}

function mousePressed() {
    if (!soundFile.isPlaying()) {
      soundFile.play();
    }
    startTime = millis();
  
  }
  
function draw() {

	background(0);

	translate(350, 350);

	level = analyzer.getLevel();
	fft.analyze();

	var bass = fft.getEnergy(100, 150);
	var mid = fft.getEnergy("mid");

	var mapMid = map(mid, 0, 255, -100, 200);
	var scaleMid = map(mid, 0, 255, 1, 1.5);

	var mapbass = map(bass, 0, 255, 50, 200);
	var scalebass = map(bass, 0, 255, 0.05, 1.2);

	pieces = 20;
	radius = 100;

	for (i = 0; i < pieces; i += 0.1) {

		rotate(TWO_PI / (pieces / 2));

		noFill();

		//BASS TONES
		push();
		stroke(68, 24, 201);
		strokeWeight(1.5);
		rotate (frameCount/100)
		line(mapbass/2, mapbass/12, 10, 100);
		pop();

		push();
		stroke(55, 52, 235, 10);
		strokeWeight(0.5);
		rotate (frameCount/100)
		scale (2);
		line(mapbass/2, mapbass/2, 10, 100);
		pop();


		//MID TONES
		push();
		stroke(201, 24, 163);
		strokeWeight(0.2);
		rotate (frameCount/300)
		line(mapMid + i / 2, mapMid - i * 2, 10, 7);
		pop();


	}

}
