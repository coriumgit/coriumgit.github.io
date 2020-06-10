/********************* 
 * Sequence Training *
 *********************/

import { PsychoJS } from './lib/core/PsychoJS.js';
import { Keyboard } from './lib/core/Keyboard.js';
import { TrialHandler } from './lib/data/TrialHandler.js';
import { Scheduler } from './lib/util/Scheduler.js';
import { Color } from './lib/util/Color.js';
import { Clock } from './lib/util/Clock.js'
import { MonotonicClock } from './lib/util/Clock.js';
import { CountdownTimer } from './lib/util/Clock.js'
import { addInfoFromUrl } from './lib/util/Util.js';
import { ImageStim } from './lib/visual/ImageStim.js'
import { TextStim } from './lib/visual/TextStim.js'
import { Rect } from './lib/visual/Rect.js'

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'Sequence Training';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(Instructions1RoutineBegin());
flowScheduler.add(Instructions1RoutineEachFrame());
flowScheduler.add(Instructions1RoutineEnd());
flowScheduler.add(Instructions2RoutineBegin());
flowScheduler.add(Instructions2RoutineEachFrame());
flowScheduler.add(Instructions2RoutineEnd());
flowScheduler.add(Instructions3RoutineBegin());
flowScheduler.add(Instructions3RoutineEachFrame());
flowScheduler.add(Instructions3RoutineEnd());
flowScheduler.add(Instructions4RoutineBegin());
flowScheduler.add(Instructions4RoutineEachFrame());
flowScheduler.add(Instructions4RoutineEnd());
flowScheduler.add(Instructions5RoutineBegin());
flowScheduler.add(Instructions5RoutineEachFrame());
flowScheduler.add(Instructions5RoutineEnd());
flowScheduler.add(Instructions6RoutineBegin());
flowScheduler.add(Instructions6RoutineEachFrame());
flowScheduler.add(Instructions6RoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin, trialsLoopScheduler);
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(The_EndRoutineBegin());
flowScheduler.add(The_EndRoutineEachFrame());
flowScheduler.add(The_EndRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name':'Pic_1.jpeg', 'path': 'resources/Pic_1.jpeg'},
    {'name':'Pic_2.jpeg', 'path': 'resources/Pic_2.jpeg'},
    {'name':'Pic_3.jpeg', 'path': 'resources/Pic_3.jpeg'},
    {'name':'Pic_4.jpeg', 'path': 'resources/Pic_4.jpeg'},
    {'name':'Pic_5.jpeg', 'path': 'resources/Pic_5.jpeg'},
    {'name':'Pic_6.jpeg', 'path': 'resources/Pic_6.jpeg'},
    {'name':'Protocol.xlsx', 'path': 'resources/Protocol.xlsx'}    
  ]
  });


var frameDur;
function updateInfo() {
  expInfo['date'] = MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.1.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var Instructions1Clock;
var Key_Instructions;
var Instructions_1;
var Instructions2Clock;
var Instructions_2;
var key_resp;
var Instructions3Clock;
var Instructions_3;
var key_resp_2;
var Instructions4Clock;
var Instructions_4;
var key_resp_3;
var Instructions5Clock;
var Instructions_5;
var key_resp_4;
var Instructions6Clock;
var Instructions_6;
var key_resp_5;
var trialClock;
var bkg;
var Sequenes_Visual;
var key_press_feedback;
var Trail_Break;
var Key_Response;
var The_EndClock;
var Text_The_End;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "Instructions1"
  Instructions1Clock = new Clock();
  Key_Instructions = new Keyboard({psychoJS: psychoJS, clock: new Clock(), waitForStart: true});
  
  Instructions_1 = new ImageStim({
    win : psychoJS.window,
    name : 'Instructions_1', units : undefined, 
    image : 'Pic_1.jpeg', mask : undefined,
    ori : 0, pos : [0, 0], size : [1.8, 1],
    color : new Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "Instructions2"
  Instructions2Clock = new Clock();
  Instructions_2 = new ImageStim({
    win : psychoJS.window,
    name : 'Instructions_2', units : undefined, 
    image : 'Pic_2.jpeg', mask : undefined,
    ori : 0, pos : [0, 0], size : [1.8, 1],
    color : new Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  key_resp = new Keyboard({psychoJS: psychoJS, clock: new Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instructions3"
  Instructions3Clock = new Clock();
  Instructions_3 = new ImageStim({
    win : psychoJS.window,
    name : 'Instructions_3', units : undefined, 
    image : 'Pic_3.jpeg', mask : undefined,
    ori : 0, pos : [0, 0], size : [1.8, 1],
    color : new Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  key_resp_2 = new Keyboard({psychoJS: psychoJS, clock: new Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instructions4"
  Instructions4Clock = new Clock();
  Instructions_4 = new ImageStim({
    win : psychoJS.window,
    name : 'Instructions_4', units : undefined, 
    image : 'Pic_4.jpeg', mask : undefined,
    ori : 0, pos : [0, 0], size : [1.8, 1],
    color : new Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  key_resp_3 = new Keyboard({psychoJS: psychoJS, clock: new Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instructions5"
  Instructions5Clock = new Clock();
  Instructions_5 = new ImageStim({
    win : psychoJS.window,
    name : 'Instructions_5', units : undefined, 
    image : 'Pic_5.jpeg', mask : undefined,
    ori : 0, pos : [0, 0], size : [1.8, 1],
    color : new Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  key_resp_4 = new Keyboard({psychoJS: psychoJS, clock: new Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instructions6"
  Instructions6Clock = new Clock();
  Instructions_6 = new ImageStim({
    win : psychoJS.window,
    name : 'Instructions_6', units : undefined, 
    image : 'Pic_6.jpeg', mask : undefined,
    ori : 0, pos : [0, 0], size : [1.8, 1],
    color : new Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  key_resp_5 = new Keyboard({psychoJS: psychoJS, clock: new Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new Clock();
  Sequenes_Visual = new TextStim({
    win: psychoJS.window,
    name: 'Sequenes_Visual',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  bkg = new Rect({
    win : psychoJS.window, 
    name : 'bkg', 
    units : 'norm', 
    pos: [0,0], 
    size : [4,4], 
    lineWidth : 0, 
    depth: -1, 
    fillColor : new Color([1.0, 1.0, 1.0])});

  key_press_feedback = new TextStim({
    win: psychoJS.window,
    name: 'Sequenes_Visual',
    text: 'default text',
    font: 'Arial',
    units: undefined,     
    pos: [-0.5, 0.4], height: 0.05, wrapWidth: 0.1, alignText:'center', ori: 0,
    color: new Color('white'),  opacity: 1,
    depth: 0.0 
  });

  Trail_Break = new TextStim({
    win: psychoJS.window,
    name: 'Trail_Break',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0,0], height: 0.06,  wrapWidth: undefined, ori: 0,
    color: new Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  Key_Response = new Keyboard({psychoJS: psychoJS, clock: new Clock(), waitForStart: true});
  
  // Initialize components for Routine "The_End"
  The_EndClock = new Clock();
  Text_The_End = new TextStim({
    win: psychoJS.window,
    name: 'Text_The_End',
    text: 'The End',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new Clock();  // to track the time since experiment started
  routineTimer = new CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var _Key_Instructions_allKeys;
var Instructions1Components;
function Instructions1RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Instructions1'-------
    t = 0;
    Instructions1Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Key_Instructions.keys = undefined;
    Key_Instructions.rt = undefined;
    _Key_Instructions_allKeys = [];
    // keep track of which components have finished
    Instructions1Components = [];
    Instructions1Components.push(Key_Instructions);
    Instructions1Components.push(Instructions_1);
    
    for (const thisComponent of Instructions1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var continueRoutine;
function Instructions1RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Instructions1'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Instructions1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Key_Instructions* updates
    if (t >= 0.0 && Key_Instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_Instructions.tStart = t;  // (not accounting for frame time here)
      Key_Instructions.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_Instructions.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_Instructions.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_Instructions.clearEvents(); });
    }

    if (Key_Instructions.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_Instructions.getKeys({keyList: ['space'], waitRelease: false});
      _Key_Instructions_allKeys = _Key_Instructions_allKeys.concat(theseKeys);
      if (_Key_Instructions_allKeys.length > 0) {
        Key_Instructions.keys = _Key_Instructions_allKeys[_Key_Instructions_allKeys.length - 1].name;  // just the last key pressed
        Key_Instructions.rt = _Key_Instructions_allKeys[_Key_Instructions_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *Instructions_1* updates
    if (t >= 0.0 && Instructions_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instructions_1.tStart = t;  // (not accounting for frame time here)
      Instructions_1.frameNStart = frameN;  // exact frame index
      
      Instructions_1.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instructions1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions1RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Instructions1'-------
    for (const thisComponent of Instructions1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "Instructions1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_allKeys;
var Instructions2Components;
function Instructions2RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Instructions2'-------
    t = 0;
    Instructions2Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    Instructions2Components = [];
    Instructions2Components.push(Instructions_2);
    Instructions2Components.push(key_resp);
    
    for (const thisComponent of Instructions2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Instructions2RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Instructions2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Instructions2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instructions_2* updates
    if (t >= 0.0 && Instructions_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instructions_2.tStart = t;  // (not accounting for frame time here)
      Instructions_2.frameNStart = frameN;  // exact frame index
      
      Instructions_2.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instructions2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions2RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Instructions2'-------
    for (const thisComponent of Instructions2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }   
    
    key_resp.stop();
    // the Routine "Instructions2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_2_allKeys;
var Instructions3Components;
function Instructions3RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Instructions3'-------
    t = 0;
    Instructions3Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    Instructions3Components = [];
    Instructions3Components.push(Instructions_3);
    Instructions3Components.push(key_resp_2);
    
    for (const thisComponent of Instructions3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Instructions3RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Instructions3'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Instructions3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instructions_3* updates
    if (t >= 0.0 && Instructions_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instructions_3.tStart = t;  // (not accounting for frame time here)
      Instructions_3.frameNStart = frameN;  // exact frame index
      
      Instructions_3.setAutoDraw(true);
    }

    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instructions3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions3RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Instructions3'-------
    for (const thisComponent of Instructions3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }    
    
    key_resp_2.stop();
    // the Routine "Instructions3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_3_allKeys;
var Instructions4Components;
function Instructions4RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Instructions4'-------
    t = 0;
    Instructions4Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    Instructions4Components = [];
    Instructions4Components.push(Instructions_4);
    Instructions4Components.push(key_resp_3);
    
    for (const thisComponent of Instructions4Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Instructions4RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Instructions4'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Instructions4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instructions_4* updates
    if (t >= 0.0 && Instructions_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instructions_4.tStart = t;  // (not accounting for frame time here)
      Instructions_4.frameNStart = frameN;  // exact frame index
      
      Instructions_4.setAutoDraw(true);
    }

    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }

    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instructions4Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Instructions4RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Instructions4'-------
    for (const thisComponent of Instructions4Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    
    key_resp_3.stop();
    // the Routine "Instructions4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_4_allKeys;
var Instructions5Components;
function Instructions5RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Instructions5'-------
    t = 0;
    Instructions5Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    // keep track of which components have finished
    Instructions5Components = [];
    Instructions5Components.push(Instructions_5);
    Instructions5Components.push(key_resp_4);
    
    for (const thisComponent of Instructions5Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Instructions5RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Instructions5'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Instructions5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instructions_5* updates
    if (t >= 0.0 && Instructions_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instructions_5.tStart = t;  // (not accounting for frame time here)
      Instructions_5.frameNStart = frameN;  // exact frame index
      
      Instructions_5.setAutoDraw(true);
    }

    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }

    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instructions5Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions5RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Instructions5'-------
    for (const thisComponent of Instructions5Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    
    key_resp_4.stop();
    // the Routine "Instructions5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_5_allKeys;
var Instructions6Components;
function Instructions6RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Instructions6'-------
    t = 0;
    Instructions6Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    // keep track of which components have finished
    Instructions6Components = [];
    Instructions6Components.push(Instructions_6);
    Instructions6Components.push(key_resp_5);
    
    for (const thisComponent of Instructions6Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Instructions6RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Instructions6'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Instructions6Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instructions_6* updates
    if (t >= 0.0 && Instructions_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instructions_6.tStart = t;  // (not accounting for frame time here)
      Instructions_6.frameNStart = frameN;  // exact frame index
      
      Instructions_6.setAutoDraw(true);
    }

    
    // *key_resp_5* updates
    if (t >= 0.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }

    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instructions6Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions6RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Instructions6'-------
    for (const thisComponent of Instructions6Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    
    key_resp_5.stop();
    // the Routine "Instructions6" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

var lastSequence;
var trials;
var currentLoop;
function trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'Protocol.xlsx',
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial of trials) {
    const snapshot = trials.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(trialRoutineBegin(snapshot));
    thisScheduler.add(trialRoutineEachFrame(snapshot));
    thisScheduler.add(trialRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  lastSequence = trials.getCurrentTrial().Sequences;

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}

var flashTime;
var trialComponents;
function trialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    if (Sequences != lastSequence) {
      flashTime = 0.05;
      lastSequence = Sequences;
    }
    else {
      flashTime = 0.0;
    }

    Sequenes_Visual.setText(Sequences);
    key_press_feedback.setText('');
    
    Key_Response.keys = [];
    Key_Response.rt = [];
    Key_Response.wasKeyReleased = false;

    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(Sequenes_Visual);
    trialComponents.push(key_press_feedback);
    trialComponents.push(Trail_Break);
    trialComponents.push(Key_Response);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

var frameRemains;
var txtHorizonIndent;
function trialRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'trial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Sequenes_Visual* updates
    if (t >= 0.0 && Sequenes_Visual.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Sequenes_Visual.tStart = t;  // (not accounting for frame time here)
      Sequenes_Visual.frameNStart = frameN;  // exact frame index
            
      bkg.setAutoDraw(true);      
    }

    frameRemains = flashTime - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (t >= frameRemains && Sequenes_Visual.status === PsychoJS.Status.NOT_STARTED) {
      bkg.setAutoDraw(false);
      Sequenes_Visual.setAutoDraw(true);
      key_press_feedback.setAutoDraw(true);
      key_press_feedback.pos = [-0.5, 0.4];
      txtHorizonIndent = 0.00965; 
    }

    frameRemains = flashTime + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Sequenes_Visual.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Sequenes_Visual.setAutoDraw(false);
      key_press_feedback.setAutoDraw(false);
    }
    
    // *Trail_Break* updates
    if (t >= flashTime + 4 && Trail_Break.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Trail_Break.tStart = t;  // (not accounting for frame time here)
      Trail_Break.frameNStart = frameN;  // exact frame index            
      Trail_Break.setAutoDraw(true);
    }

    frameRemains = flashTime + 4 + BreakTime - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Trail_Break.status === PsychoJS.Status.STARTED) {
      if (t < frameRemains) {
        Trail_Break.setText("Break: " + Math.ceil(BreakTime - (t - Trail_Break.tStart)) + " Seconds Remaining");    
      }
      else {
        Trail_Break.setAutoDraw(false);
      }
    }

    // *Key_Response* updates
    if (t >= 0.0 && Key_Response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_Response.tStart = t;  // (not accounting for frame time here)
      Key_Response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_Response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_Response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_Response.clearEvents(); });
    }

    frameRemains = flashTime + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Key_Response.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Key_Response.status = PsychoJS.Status.FINISHED;
  }

    if (Key_Response.status === PsychoJS.Status.STARTED) {
      if (Key_Response.wasKeyReleased) {
        let theseKeys = Key_Response.getKeys({keyList: ["1", "2", "3", "4"], waitRelease: false});      
        if (theseKeys.length > 0) {
          Key_Response.keys.push(theseKeys[theseKeys.length - 1].name);  // just the last key pressed
          Key_Response.rt.push(Math.round(theseKeys[theseKeys.length - 1].rt * 1000) / 1000);
          key_press_feedback.setText(key_press_feedback.text + "*");
          key_press_feedback.pos[0] = key_press_feedback.pos[0] + txtHorizonIndent;

          if (Key_Response.keys.length % 54 == 0) {
            key_press_feedback.setText(key_press_feedback.text + "\r");
            txtHorizonIndent = 0;
            key_press_feedback.pos[1] = key_press_feedback.pos[1] - 0.055;
          }                    
          
          Key_Response.wasKeyReleased = false;
        }
      }
      else if (Key_Response.getKeys({keyList: ["1", "2", "3", "4"], waitRelease: false}).length == 0) {
        Key_Response.wasKeyReleased = true;
      }
    }
        
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'trial'-------
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Key_Response.keys', Key_Response.keys);
    if (Key_Response.keys.length > 0) {  // we had a response
        psychoJS.experiment.addData('Key_Response.rt', Key_Response.rt);
        routineTimer.reset();
      }
    
    Key_Response.stop();    
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var The_EndComponents;
function The_EndRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'The_End'-------
    t = 0;
    The_EndClock.reset(); // clock
    frameN = -1;
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    The_EndComponents = [];
    The_EndComponents.push(Text_The_End);
    
    for (const thisComponent of The_EndComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function The_EndRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'The_End'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = The_EndClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Text_The_End* updates
    if (t >= 0.0 && Text_The_End.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Text_The_End.tStart = t;  // (not accounting for frame time here)
      Text_The_End.frameNStart = frameN;  // exact frame index
      
      Text_The_End.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Text_The_End.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Text_The_End.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of The_EndComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function The_EndRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'The_End'-------
    for (const thisComponent of The_EndComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(thisScheduler, loop) {
  // ------Prepare for next entry------
  return function () {
    if (typeof loop !== 'undefined') {
      // ------Check if user ended loop early------
      if (loop.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(loop);
        }
      thisScheduler.stop();
      } else {
        const thisTrial = loop.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(loop);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(trials) {
  return function () {
    psychoJS.importAttributes(trials.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
