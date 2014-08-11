
/**
 * Screen object for myscreen.
 * @constructor
 */
function Screen() {

}

/**
 * Private function to get URL parameters
 * @returns an array of the params from the URL
 */
function getURLParams() {
	var args = location.search;
	if (args.length > 0) {
		args = args.substring(1);
		return args.split('&');
	} else {
		return [];
	}
}

/**
 * Setups up screen object
 * @returns the setup screen object
 */
function initScreen() {
	var screen = {};
	
	screen.screenWidth = window.screen.width; // width in pixels
	screen.screenHeight = window.screen.height; // height in pixels
	screen.ppi; // pixels per inch
	screen.data = {}; // some sort of data object TODO: more notes
	screen.events = {};
	screen.thisPhase; // current running phase
	screen.htmlPages = []; // all html pages to be used
	screen.psiTurk; // psiTurk object
//	this.keyboard = {};
//	this.keyboard.state = jglGetKeys; // pointer to keyboard status function
//	this.keyboard.backtick = '`';
//	this.mouse = jglGetMouse; // pointer to mouse status function
	screen.assignmentID; // assignmentID given by turk
	screen.hitID; // hitID given by turk
	screen.workerID; // workerID given by turk
	screen.startTime = jglGetSecs(); // start time, used for random state
	screen.numTasks = 0; // number of tasks
	var params = getURLParams();
	if (! isEmpty(params)) {
		screen.assignmentID = params[0].substring(params[0].indexOf('='));
		screen.hitID = params[1].substring(params[1].indexOf('='));
		screen.workerID = params[2].substring(params[2].indexOf('='));
	} else {
		console.error("init Screen: could not get assignmentID, hitID, or workerID");
	}
	
	screen.userHitEsc = 0;
	
	screen.tick = 0;
	screen.totaltick = 0;
	screen.totalflip = 0;
//	screen.volnum = 0;
	screen.intick = 0;
	screen.fliptime = Infinity;
	screen.dropcount = 0;
	screen.checkForDroppedFrames = 1;
	screen.dropThreshold = 1.05;
	screen.ppi = 127;
	screen.flushMode = 0;
	
	screen.framesPerSecond = 60;
	screen.frametime = 1 / screen.framesPerSecond;
	
	window.segTimeout = [];
	window.drawInterval = null;
	window.tnum = 0;
	
	return screen;
	
}