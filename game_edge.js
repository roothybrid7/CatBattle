/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['\'Peralta\', serif']='<link href=\'http://fonts.googleapis.com/css?family=Peralta\' rel=\'stylesheet\' type=\'text/css\'>';
   fonts['\'Spirax\', serif']='<link href=\'http://fonts.googleapis.com/css?family=Spirax\' rel=\'stylesheet\' type=\'text/css\'>';


var resources = [
];
var symbols = {
"stage": {
   version: "0.1.7",
   minimumCompatibleVersion: "0.1.7",
   build: "0.11.0.164",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'background',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'game',
            type:'rect',
            rect:['50','10','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'game',
            symbolName:'game'
         },
         {
            id:'background',
            symbolName:'background'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["style", "height", '400px'],
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '640px']
         ],
         "${_game}": [
            ["style", "top", '10px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"background": {
   version: "0.1.7",
   minimumCompatibleVersion: "0.1.7",
   build: "0.11.0.164",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-163','-265','967','931','undefined','undefined'],
      id: 'fight_bg',
      transform: [{1:0,0:0},{},{},['0.661','0.429']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/fight_bg.png']
   },
   {
      type: 'rect',
      rect: ['50','10','540','105','undefined','undefined'],
      transform: {},
      id: 'headerDebugArea',
      opacity: 0.3,
      stroke: [0,'rgba(0,0,0,1)','none'],
      fill: ['rgba(43,218,181,1.00)']
   },
   {
      type: 'rect',
      rect: ['50','85','540','225','undefined','undefined'],
      transform: {},
      id: 'contentDebugArea',
      opacity: 0.3,
      stroke: [0,'rgb(0, 0, 0)','none'],
      fill: ['rgba(192,192,192,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_headerDebugArea}": [
            ["color", "background-color", 'rgba(43,218,181,1.00)'],
            ["style", "top", '10px'],
            ["style", "height", '105px'],
            ["style", "opacity", '0.3'],
            ["style", "left", '50px'],
            ["style", "width", '540px']
         ],
         "${_contentDebugArea}": [
            ["style", "height", '225px'],
            ["style", "opacity", '0.3'],
            ["style", "top", '85px'],
            ["color", "background-color", 'rgba(192,192,192,1.00)']
         ],
         "${_fight_bg}": [
            ["transform", "scaleX", '0.66184'],
            ["style", "top", '-265.5px'],
            ["transform", "scaleY", '0.42964'],
            ["style", "left", '-163.5px']
         ],
         "${symbolSelector}": [
            ["style", "height", '399.99484px'],
            ["style", "width", '639.99928px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"game": {
   version: "0.1.7",
   minimumCompatibleVersion: "0.1.7",
   build: "0.11.0.164",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0','0','540','105','undefined','undefined'],
      id: 'lifeBarArea',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(43,218,181,0.90)'],
      c: [
      {
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
         transform: {},
         borderRadius: ['10px','10px','10px','10px'],
         rect: ['35','40','200','25','undefined','undefined'],
         id: 'enemyLifeBar',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,0,0,1.00)']
      },
      {
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
         transform: {},
         borderRadius: ['10px','10px','10px','10px'],
         rect: ['305','39','200','25','undefined','undefined'],
         id: 'playerLifeBar',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,0,0,1.00)']
      },
      {
         font: ['Spirax, serif',24,'rgba(0,0,0,1)','normal','none',''],
         type: 'text',
         rect: ['35','0px','0','0','undefined','undefined'],
         id: 'enemyText',
         text: 'Enemy',
         transform: {},
         tag: 'p'
      },
      {
         font: ['Spirax, serif',24,'rgba(0,0,0,1)','normal','none',''],
         type: 'text',
         rect: ['435px','0px','0','0','undefined','undefined'],
         id: 'playerText',
         text: 'Player',
         transform: {},
         tag: 'p'
      },
      {
         type: 'text',
         rect: ['35','65px','0','0','undefined','undefined'],
         transform: {},
         align: 'right',
         id: 'enemyLife',
         text: '3000',
         font: ['Peralta, serif',24,'rgba(0,0,0,1)','normal','none','normal'],
         tag: 'p'
      },
      {
         type: 'text',
         rect: ['435','65px','0','0','undefined','undefined'],
         transform: {},
         align: 'right',
         id: 'playerLife',
         text: '3000',
         font: ['Peralta, serif',24,'rgba(0,0,0,1)','normal','none','normal'],
         tag: 'p'
      }]
   },
   {
      rect: ['109px','122px','321','178','undefined','undefined'],
      transform: {},
      id: 'commandMenuArea',
      stroke: [0,'rgb(240, 41, 121)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,0.00)'],
      c: [
      {
         type: 'image',
         boxShadow: ['',0,0,0,0,'rgba(0,0,0,0)'],
         id: 'serif_pink',
         rect: ['-127','-191','580','559','undefined','undefined'],
         transform: [{1:0,0:0},{},{},['0.468','0.272']],
         fill: ['rgba(0,0,0,0)','images/serif_pink.png']
      },
      {
         type: 'rect',
         borderRadius: ['10px','10px','10px','10px'],
         id: 'defenceBtn',
         opacity: 1,
         cursor: ['pointer'],
         rect: ['77','74','160','31','undefined','undefined'],
         transform: {},
         stroke: [3,'rgb(240, 41, 121)','solid'],
         fill: ['rgba(241,132,176,1.00)'],
         c: [
         {
            type: 'image',
            id: 'blackcat_stamp2',
            rect: ['-31px','-22px','99','65','undefined','undefined'],
            transform: [{1:0,0:0},{},{},['0.444','0.461']],
            fill: ['rgba(0,0,0,0)','images/blackcat_stamp.png']
         },
         {
            transform: {},
            id: 'defenceText',
            text: 'Defence',
            cursor: ['pointer'],
            rect: ['41px','0px','103','0','undefined','undefined'],
            font: ['Spirax, serif',24,'rgba(0,0,0,1.00)','normal','none','normal'],
            type: 'text',
            align: 'center',
            tag: 'p'
         }]
      },
      {
         type: 'rect',
         borderRadius: ['10px','10px','10px','10px'],
         id: 'attackBtn',
         opacity: 1,
         cursor: ['pointer'],
         rect: ['77','30','160','31','undefined','undefined'],
         transform: {},
         stroke: [3,'rgb(240, 41, 121)','solid'],
         fill: ['rgba(241,132,176,1.00)'],
         c: [
         {
            type: 'image',
            id: 'blackcat_stamp',
            rect: ['-31','-21','99','65','undefined','undefined'],
            transform: [{1:0,0:0},{},{},['0.444','0.461']],
            fill: ['rgba(0,0,0,0)','images/blackcat_stamp.png']
         },
         {
            transform: {},
            id: 'attackText',
            text: 'Attack',
            cursor: ['pointer'],
            rect: ['41px','0px','103','0','undefined','undefined'],
            font: ['Spirax, serif',24,'rgba(0,0,0,1.00)','normal','none','normal'],
            type: 'text',
            align: 'center',
            tag: 'p'
         }]
      }]
   },
   {
      id: 'catAnimation',
      type: 'rect',
      rect: ['0','81','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'catAnimation',
      symbolName: 'catAnimation'
   }   ]
   },
   states: {
      "Base State": {
         "${_enemyLife}": [
            ["style", "top", '65px'],
            ["style", "text-align", 'right'],
            ["style", "font-family", 'Peralta, serif'],
            ["style", "opacity", '1'],
            ["style", "left", '35px'],
            ["style", "font-size", '24px']
         ],
         "${_catAnimation}": [
            ["style", "top", '80px']
         ],
         "${_lifeBarArea}": [
            ["color", "background-color", 'rgba(43,218,181,0.8984)'],
            ["style", "height", '105px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_serif_pink}": [
            ["transform", "scaleX", '0.46808'],
            ["style", "top", '-191.25px'],
            ["transform", "scaleY", '0.27276'],
            ["style", "left", '-127.56px']
         ],
         "${_attackText}": [
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "font-size", '24px'],
            ["style", "top", '0.38px'],
            ["style", "text-align", 'center'],
            ["style", "width", '103px'],
            ["transform", "scaleX", '1'],
            ["style", "font-family", 'Spirax, serif'],
            ["style", "text-decoration", 'none'],
            ["style", "left", '41px']
         ],
         "${_playerLifeBar}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["subproperty", "boxShadow.blur", '3px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '305px'],
            ["style", "width", '200px'],
            ["style", "top", '39.99px'],
            ["transform", "scaleY", '1'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "height", '25px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["color", "background-color", 'rgba(255,0,0,1)']
         ],
         "${symbolSelector}": [
            ["style", "height", '300px'],
            ["style", "width", '540px']
         ],
         "${_enemyLifeBar}": [
            ["style", "-webkit-transform-origin", [100,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["subproperty", "boxShadow.blur", '3px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '35px'],
            ["style", "width", '200px'],
            ["style", "top", '40px'],
            ["transform", "scaleY", '1'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "height", '25px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["color", "background-color", 'rgba(255,0,0,1)']
         ],
         "${_blackcat_stamp}": [
            ["style", "top", '-20.5px'],
            ["transform", "scaleY", '0.46153'],
            ["transform", "scaleX", '0.44444'],
            ["style", "opacity", '1'],
            ["style", "left", '-30.5px']
         ],
         "${_defenceText}": [
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "font-size", '24px'],
            ["style", "top", '0.02px'],
            ["style", "text-align", 'center'],
            ["transform", "scaleX", '1'],
            ["style", "width", '103px'],
            ["style", "font-family", 'Spirax, serif'],
            ["style", "text-decoration", 'none'],
            ["style", "left", '41px']
         ],
         "${_enemyText}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '35px'],
            ["style", "font-family", 'Spirax, serif']
         ],
         "${_playerText}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '435px'],
            ["style", "font-family", 'Spirax, serif']
         ],
         "${_attackBtn}": [
            ["color", "background-color", 'rgba(241,132,176,1)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '3px'],
            ["style", "width", '160px'],
            ["style", "top", '30.62px'],
            ["transform", "skewX", '0deg'],
            ["style", "opacity", '1'],
            ["color", "border-color", 'rgb(240, 41, 121)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '77px']
         ],
         "${_commandMenuArea}": [
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["color", "background-color", 'rgba(192,192,192,0)'],
            ["transform", "scaleY", '1'],
            ["style", "top", '122px'],
            ["style", "height", '178px'],
            ["style", "opacity", '1'],
            ["style", "left", '109px'],
            ["style", "width", '321px']
         ],
         "${_playerLife}": [
            ["style", "top", '65px'],
            ["style", "text-align", 'right'],
            ["style", "font-family", 'Peralta, serif'],
            ["style", "opacity", '1'],
            ["style", "left", '435px'],
            ["style", "font-size", '24px']
         ],
         "${_enemyTextCopy}": [
            ["style", "top", '-24px'],
            ["style", "opacity", '1'],
            ["style", "left", '35px'],
            ["style", "font-family", 'Spirax, serif']
         ],
         "${_playerTextCopy}": [
            ["style", "top", '-24px'],
            ["style", "opacity", '1'],
            ["style", "left", '434.99px'],
            ["style", "font-family", 'Spirax, serif']
         ],
         "${_playerLifeCopy}": [
            ["style", "top", '41px'],
            ["style", "font-family", 'Peralta, serif'],
            ["style", "opacity", '1'],
            ["style", "left", '435px'],
            ["style", "font-size", '24px']
         ],
         "${_defenceBtn}": [
            ["color", "background-color", 'rgba(241,132,176,1)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '3px'],
            ["style", "width", '160px'],
            ["style", "top", '74.99px'],
            ["transform", "skewX", '0deg'],
            ["style", "cursor", 'pointer'],
            ["color", "border-color", 'rgb(240, 41, 121)'],
            ["style", "opacity", '1'],
            ["style", "left", '77px']
         ],
         "${_enemyLifeCopy}": [
            ["style", "top", '41px'],
            ["style", "font-family", 'Peralta, serif'],
            ["style", "opacity", '1'],
            ["style", "left", '35px'],
            ["style", "font-size", '24px']
         ],
         "${_blackcat_stamp2}": [
            ["style", "top", '-22.48px'],
            ["transform", "scaleY", '0.46153'],
            ["transform", "scaleX", '0.44444'],
            ["style", "opacity", '1'],
            ["style", "left", '-30.5px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"blackcatSprite": {
   version: "0.1.7",
   minimumCompatibleVersion: "0.1.7",
   build: "0.11.0.164",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'image',
      rect: ['10px','10px','512px','503px','auto','auto'],
      id: 'cat',
      transform: {},
      clip: ['rect(0px 100px 503px 0px)'],
      fill: ['rgba(0,0,0,0)','images/blackcat.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_defenceText}": [
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "font-size", '24px'],
            ["style", "top", '-23px'],
            ["style", "left", '41.02px'],
            ["style", "width", '103px'],
            ["style", "font-family", 'Spirax, serif'],
            ["style", "text-decoration", 'none'],
            ["transform", "scaleX", '1']
         ],
         "${_cat}": [
            ["style", "-webkit-transform-origin", [50,18], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,18],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,18],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,18],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,18],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["style", "left", '10px'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "clip", [0,80,90,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "top", '10px']
         ],
         "${_attackText}": [
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "font-size", '24px'],
            ["style", "top", '-23.99px'],
            ["style", "left", '41.02px'],
            ["transform", "scaleX", '1'],
            ["style", "font-family", 'Spirax, serif'],
            ["style", "text-decoration", 'none'],
            ["style", "width", '103px']
         ],
         "${symbolSelector}": [
            ["style", "height", '110px'],
            ["style", "width", '120px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4500,
         autoPlay: false,
         labels: {
            "sitting": 0,
            "standup": 1000,
            "running": 2000,
            "standing": 3000,
            "waiting": 4000
         },
         timeline: [
            { id: "eid150", tween: [ "style", "${_cat}", "-webkit-transform-origin", [50,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,18]}], position: 4000, duration: 0 },
            { id: "eid1792", tween: [ "style", "${_cat}", "-moz-transform-origin", [50,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,18]}], position: 4000, duration: 0 },
            { id: "eid1793", tween: [ "style", "${_cat}", "-ms-transform-origin", [50,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,18]}], position: 4000, duration: 0 },
            { id: "eid1794", tween: [ "style", "${_cat}", "msTransformOrigin", [50,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,18]}], position: 4000, duration: 0 },
            { id: "eid1795", tween: [ "style", "${_cat}", "-o-transform-origin", [50,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,18]}], position: 4000, duration: 0 },
            { id: "eid10", tween: [ "style", "${_cat}", "clip", [0,80,90,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,80,90,0]}], position: 0, duration: 0 },
            { id: "eid11", tween: [ "style", "${_cat}", "clip", [0,100,90,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,80,503,0]}], position: 1000, duration: 0 },
            { id: "eid13", tween: [ "style", "${_cat}", "clip", [0,100,90,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,100,90,0]}], position: 2000, duration: 0 },
            { id: "eid15", tween: [ "style", "${_cat}", "clip", [0,100,90,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,100,503,0]}], position: 3000, duration: 0 },
            { id: "eid56", tween: [ "style", "${_cat}", "clip", [0,80,90,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,100,90,0]}], position: 4000, duration: 0 },
            { id: "eid63", tween: [ "transform", "${_cat}", "scaleY", '0.95', { fromValue: '1'}], position: 4000, duration: 250 },
            { id: "eid64", tween: [ "transform", "${_cat}", "scaleY", '1', { fromValue: '0.95'}], position: 4250, duration: 250 },
            { id: "eid1", tween: [ "style", "${_cat}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid2", tween: [ "style", "${_cat}", "background-position", [-205,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 1000, duration: 0 },
            { id: "eid12", tween: [ "style", "${_cat}", "background-position", [-90,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-205,0]}], position: 2000, duration: 0 },
            { id: "eid14", tween: [ "style", "${_cat}", "background-position", [-300,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-90,0]}], position: 3000, duration: 0 },
            { id: "eid57", tween: [ "style", "${_cat}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-300,0]}], position: 4000, duration: 0 }         ]
      }
   }
},
"catAnimation": {
   version: "0.1.7",
   minimumCompatibleVersion: "0.1.7",
   build: "0.11.0.164",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'blackcat',
      type: 'rect',
      rect: ['auto','auto','auto','auto','0px','0px']
   },
   {
      id: 'whitecat',
      type: 'rect',
      rect: ['0','auto','auto','auto','auto','0px']
   },
   {
      id: 'blackcat_stamp',
      type: 'image',
      rect: ['21px','110px','99px','65px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/blackcat_stamp.png','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'blackcat',
      symbolName: 'blackcatSprite'
   },
   {
      id: 'whitecat',
      symbolName: 'whitecatSprite'
   }   ]
   },
   states: {
      "Base State": {
         "${_whitecat}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '0px'],
            ["transform", "scaleX", '-1'],
            ["style", "right", 'auto'],
            ["style", "left", '0px']
         ],
         "${_blackcat}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "right", '0px'],
            ["style", "left", 'auto']
         ],
         "${_blackcat_stamp}": [
            ["style", "top", '110px'],
            ["style", "opacity", '0'],
            ["style", "left", '21px']
         ],
         "${symbolSelector}": [
            ["style", "height", '219px'],
            ["style", "width", '540px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5750,
         autoPlay: false,
         labels: {
            "playerAttack": 500,
            "playerAttackEnd": 1250,
            "playerHit": 2000,
            "playerHitEnd": 2500,
            "playerMiss": 3500,
            "playerRunback": 5000
         },
         timeline: [
            { id: "eid1673", tween: [ "style", "${_whitecat}", "left", '-49px', { fromValue: '0px'}], position: 3500, duration: 250 },
            { id: "eid1697", tween: [ "style", "${_whitecat}", "left", '0px', { fromValue: '-49px'}], position: 4000, duration: 250 },
            { id: "eid1691", tween: [ "style", "${_whitecat}", "left", '0px', { fromValue: '0px'}], position: 5000, duration: 0 },
            { id: "eid1218", tween: [ "style", "${_blackcat}", "right", '88.16px', { fromValue: '0px'}], position: 500, duration: 250 },
            { id: "eid1232", tween: [ "style", "${_blackcat}", "right", '270px', { fromValue: '88.16px'}], position: 750, duration: 250 },
            { id: "eid1245", tween: [ "style", "${_blackcat}", "right", '320px', { fromValue: '270px'}], position: 1000, duration: 250 },
            { id: "eid1702", tween: [ "style", "${_blackcat}", "right", '0px', { fromValue: '320px'}], position: 5083, duration: 667 },
            { id: "eid1652", tween: [ "style", "${_blackcat_stamp}", "opacity", '1', { fromValue: '0.000000'}], position: 2000, duration: 250 },
            { id: "eid1654", tween: [ "style", "${_blackcat_stamp}", "opacity", '0', { fromValue: '1'}], position: 2250, duration: 250 },
            { id: "eid1674", tween: [ "style", "${_blackcat_stamp}", "opacity", '1', { fromValue: '0.000000'}], position: 3750, duration: 250 },
            { id: "eid1675", tween: [ "style", "${_blackcat_stamp}", "opacity", '0', { fromValue: '1'}], position: 4000, duration: 250 },
            { id: "eid1692", tween: [ "style", "${_whitecat}", "right", 'auto', { fromValue: 'auto'}], position: 5000, duration: 0 },
            { id: "eid1700", tween: [ "transform", "${_blackcat}", "scaleX", '-1', { fromValue: '1'}], position: 5000, duration: 83 },
            { id: "eid1705", tween: [ "transform", "${_blackcat}", "scaleX", '1', { fromValue: '-1'}], position: 5750, duration: 0 },
            { id: "eid1213", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_blackcat}', ['standup'] ], ""], position: 500 },
            { id: "eid1227", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_blackcat}', ['running'] ], ""], position: 750 },
            { id: "eid1254", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_blackcat}', ['standup'] ], ""], position: 1250 },
            { id: "eid1339", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_whitecat}', ['standup'] ], ""], position: 1250 },
            { id: "eid1640", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_whitecat}', ['standing'] ], ""], position: 2000 },
            { id: "eid1641", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_blackcat}', ['standup'] ], ""], position: 2000 },
            { id: "eid1663", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_whitecat}', ['standup'] ], ""], position: 3500 },
            { id: "eid1664", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_blackcat}', ['standup'] ], ""], position: 3500 },
            { id: "eid1680", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_whitecat}', ['sitting'] ], ""], position: 3583.3333333333 },
            { id: "eid1710", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_whitecat}', ['standup'] ], ""], position: 4083 },
            { id: "eid1711", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_whitecat}', ['sitting'] ], ""], position: 4166.6666666667 },
            { id: "eid1712", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_whitecat}', ['sitting'] ], ""], position: 5000 },
            { id: "eid1713", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_blackcat}', ['running'] ], ""], position: 5083 },
            { id: "eid1714", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_blackcat}', ['standing'] ], ""], position: 5500 },
            { id: "eid1715", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_blackcat}', ['sitting'] ], ""], position: 5750 }         ]
      }
   }
},
"whitecatSprite": {
   version: "0.1.7",
   minimumCompatibleVersion: "0.1.7",
   build: "0.11.0.164",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'image',
      rect: ['10px','10px','512px','503px','auto','auto'],
      id: 'cat',
      transform: {},
      clip: ['rect(0px 100px 503px 0px)'],
      fill: ['rgba(0,0,0,0)','images/whitecat.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_attackText}": [
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "font-size", '24px'],
            ["style", "top", '-23.99px'],
            ["style", "width", '103px'],
            ["transform", "scaleX", '1'],
            ["style", "font-family", 'Spirax, serif'],
            ["style", "text-decoration", 'none'],
            ["style", "left", '41.02px']
         ],
         "${_cat}": [
            ["style", "-webkit-transform-origin", [50,18], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,18],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,18],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,18],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,18],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["style", "top", '10px'],
            ["style", "clip", [0,80,90,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '10px'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_defenceText}": [
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "font-size", '24px'],
            ["style", "top", '-23px'],
            ["transform", "scaleX", '1'],
            ["style", "width", '103px'],
            ["style", "font-family", 'Spirax, serif'],
            ["style", "text-decoration", 'none'],
            ["style", "left", '41.02px']
         ],
         "${symbolSelector}": [
            ["style", "height", '110px'],
            ["style", "width", '120px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4500,
         autoPlay: false,
         labels: {
            "sitting": 0,
            "standup": 1000,
            "running": 2000,
            "standing": 3000,
            "waiting": 4000
         },
         timeline: [
            { id: "eid63", tween: [ "transform", "${_cat}", "scaleY", '0.95', { fromValue: '1'}], position: 4000, duration: 250 },
            { id: "eid64", tween: [ "transform", "${_cat}", "scaleY", '1', { fromValue: '0.95'}], position: 4250, duration: 250 },
            { id: "eid10", tween: [ "style", "${_cat}", "clip", [0,80,90,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,80,90,0]}], position: 0, duration: 0 },
            { id: "eid11", tween: [ "style", "${_cat}", "clip", [0,100,90,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,80,503,0]}], position: 1000, duration: 0 },
            { id: "eid13", tween: [ "style", "${_cat}", "clip", [0,100,90,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,100,90,0]}], position: 2000, duration: 0 },
            { id: "eid15", tween: [ "style", "${_cat}", "clip", [0,100,90,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,100,503,0]}], position: 3000, duration: 0 },
            { id: "eid56", tween: [ "style", "${_cat}", "clip", [0,80,90,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,100,90,0]}], position: 4000, duration: 0 },
            { id: "eid150", tween: [ "style", "${_cat}", "-webkit-transform-origin", [50,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,18]}], position: 4000, duration: 0 },
            { id: "eid1796", tween: [ "style", "${_cat}", "-moz-transform-origin", [50,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,18]}], position: 4000, duration: 0 },
            { id: "eid1797", tween: [ "style", "${_cat}", "-ms-transform-origin", [50,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,18]}], position: 4000, duration: 0 },
            { id: "eid1798", tween: [ "style", "${_cat}", "msTransformOrigin", [50,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,18]}], position: 4000, duration: 0 },
            { id: "eid1799", tween: [ "style", "${_cat}", "-o-transform-origin", [50,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,18]}], position: 4000, duration: 0 },
            { id: "eid1", tween: [ "style", "${_cat}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid2", tween: [ "style", "${_cat}", "background-position", [-205,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 1000, duration: 0 },
            { id: "eid12", tween: [ "style", "${_cat}", "background-position", [-90,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-205,0]}], position: 2000, duration: 0 },
            { id: "eid14", tween: [ "style", "${_cat}", "background-position", [-300,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-90,0]}], position: 3000, duration: 0 },
            { id: "eid57", tween: [ "style", "${_cat}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-300,0]}], position: 4000, duration: 0 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-6391929");
