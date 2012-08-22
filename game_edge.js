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
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '400px'],
            ["style", "width", '640px']
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
      transform: [{1:0,0:0},{},{},['0.661','0.429']],
      id: 'fight_bg',
      type: 'image',
      rect: ['-163','-265','967','931','undefined','undefined'],
      fill: ['rgba(0,0,0,0)','images/fight_bg.png']
   },
   {
      transform: {},
      rect: ['50','10','540','105','undefined','undefined'],
      type: 'rect',
      id: 'headerDebugArea',
      stroke: [0,'rgba(0,0,0,1)','none'],
      opacity: 0.3,
      fill: ['rgba(43,218,181,1.00)']
   },
   {
      transform: {},
      rect: ['50','85','540','225','undefined','undefined'],
      type: 'rect',
      id: 'contentDebugArea',
      stroke: [0,'rgb(0, 0, 0)','none'],
      opacity: 0.3,
      fill: ['rgba(192,192,192,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_fight_bg}": [
            ["style", "top", '-265.5px'],
            ["style", "left", '-163.5px'],
            ["transform", "scaleY", '0.42964'],
            ["transform", "scaleX", '0.66184']
         ],
         "${_contentDebugArea}": [
            ["style", "height", '225px'],
            ["style", "opacity", '0.3'],
            ["color", "background-color", 'rgba(192,192,192,1.00)'],
            ["style", "top", '85px']
         ],
         "${_headerDebugArea}": [
            ["color", "background-color", 'rgba(43,218,181,1.00)'],
            ["style", "top", '10px'],
            ["style", "height", '105px'],
            ["style", "opacity", '0.3'],
            ["style", "left", '50px'],
            ["style", "width", '540px']
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
         transform: {},
         rect: ['35','40','200','25','undefined','undefined'],
         borderRadius: ['10px','10px','10px','10px'],
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
         id: 'enemyLifeBar',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,0,0,1.00)']
      },
      {
         transform: {},
         rect: ['305','39','200','25','undefined','undefined'],
         borderRadius: ['10px','10px','10px','10px'],
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
         id: 'playerLifeBar',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,0,0,1.00)']
      },
      {
         rect: ['35','0px','0','0','undefined','undefined'],
         transform: {},
         font: ['Spirax, serif',24,'rgba(0,0,0,1)','normal','none',''],
         id: 'enemyText',
         text: 'Enemy',
         type: 'text',
         tag: 'p'
      },
      {
         rect: ['435px','0px','0','0','undefined','undefined'],
         transform: {},
         font: ['Spirax, serif',24,'rgba(0,0,0,1)','normal','none',''],
         id: 'playerText',
         text: 'Player',
         type: 'text',
         tag: 'p'
      },
      {
         transform: {},
         rect: ['35','65px','0','0','undefined','undefined'],
         font: ['Peralta, serif',24,'rgba(0,0,0,1)','normal','none','normal'],
         align: 'right',
         id: 'enemyLife',
         text: '3000',
         type: 'text',
         tag: 'p'
      },
      {
         transform: {},
         rect: ['435','65px','0','0','undefined','undefined'],
         font: ['Peralta, serif',24,'rgba(0,0,0,1)','normal','none','normal'],
         align: 'right',
         id: 'playerLife',
         text: '3000',
         type: 'text',
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
         rect: ['-127','-191','580','559','undefined','undefined'],
         transform: [{},{},{},['0.468','0.272']],
         id: 'serif_pink',
         boxShadow: ['',0,0,0,0,'rgba(0,0,0,0)'],
         type: 'image',
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
            rect: ['-31px','-22px','99','65','undefined','undefined'],
            id: 'blackcat_stamp2',
            transform: [{},{},{},['0.444','0.461']],
            type: 'image',
            fill: ['rgba(0,0,0,0)','images/blackcat_stamp.png']
         },
         {
            type: 'text',
            id: 'defenceText',
            text: 'Defence',
            cursor: ['pointer'],
            rect: ['41px','0px','103','0','undefined','undefined'],
            transform: {},
            font: ['Spirax, serif',24,'rgba(0,0,0,1.00)','normal','none','normal'],
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
            rect: ['-31','-21','99','65','undefined','undefined'],
            id: 'blackcat_stamp',
            transform: [{},{},{},['0.444','0.461']],
            type: 'image',
            fill: ['rgba(0,0,0,0)','images/blackcat_stamp.png']
         },
         {
            type: 'text',
            id: 'attackText',
            text: 'Attack',
            cursor: ['pointer'],
            rect: ['41px','0px','103','0','undefined','undefined'],
            transform: {},
            font: ['Spirax, serif',24,'rgba(0,0,0,1.00)','normal','none','normal'],
            align: 'center',
            tag: 'p'
         }]
      }]
   }],
   symbolInstances: [
   ]
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
         "${_playerTextCopy}": [
            ["style", "top", '-24px'],
            ["style", "opacity", '1'],
            ["style", "left", '434.99px'],
            ["style", "font-family", 'Spirax, serif']
         ],
         "${_lifeBarArea}": [
            ["color", "background-color", 'rgba(43,218,181,0.8984)'],
            ["style", "height", '105px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_serif_pink}": [
            ["style", "top", '-191.25px'],
            ["style", "left", '-127.56px'],
            ["transform", "scaleY", '0.27276'],
            ["transform", "scaleX", '0.46808']
         ],
         "${_defenceBtn}": [
            ["color", "background-color", 'rgba(241,132,176,1)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '3px'],
            ["style", "width", '160px'],
            ["style", "top", '74.99px'],
            ["transform", "skewX", '0deg'],
            ["style", "left", '77px'],
            ["color", "border-color", 'rgb(240, 41, 121)'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer']
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
            ["color", "background-color", 'rgba(255,0,0,1)'],
            ["style", "height", '25px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)']
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
            ["color", "background-color", 'rgba(255,0,0,1)'],
            ["style", "height", '25px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)']
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
            ["style", "left", '41px'],
            ["style", "width", '103px'],
            ["style", "font-family", 'Spirax, serif'],
            ["style", "text-decoration", 'none'],
            ["transform", "scaleX", '1']
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
            ["style", "left", '77px'],
            ["color", "border-color", 'rgb(240, 41, 121)'],
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '1']
         ],
         "${_commandMenuArea}": [
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '122px'],
            ["transform", "scaleY", '1'],
            ["color", "background-color", 'rgba(192,192,192,0)'],
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
         "${_playerLifeCopy}": [
            ["style", "top", '41px'],
            ["style", "font-family", 'Peralta, serif'],
            ["style", "opacity", '1'],
            ["style", "left", '435px'],
            ["style", "font-size", '24px']
         ],
         "${_attackText}": [
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "font-size", '24px'],
            ["style", "top", '0.38px'],
            ["style", "text-align", 'center'],
            ["style", "left", '41px'],
            ["transform", "scaleX", '1'],
            ["style", "font-family", 'Spirax, serif'],
            ["style", "text-decoration", 'none'],
            ["style", "width", '103px']
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
      rect: ['10px','10px','512px','503px','auto','auto'],
      transform: {},
      id: 'cat',
      type: 'image',
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
            ["transform", "scaleX", '1'],
            ["style", "width", '103px'],
            ["style", "font-family", 'Spirax, serif'],
            ["style", "text-decoration", 'none'],
            ["style", "left", '41.02px']
         ],
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
            ["style", "top", '10px'],
            ["style", "-webkit-transform-origin", [50,18], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,18],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,18],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,18],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,18],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["style", "clip", [0,80,90,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '10px'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
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
         duration: 2000,
         autoPlay: false,
         labels: {
            "sitting": 250,
            "standup": 500,
            "running": 750,
            "standing": 1000,
            "waiting": 1500
         },
         timeline: [
            { id: "eid10", tween: [ "style", "${_cat}", "clip", [0,80,90,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,80,90,0]}], position: 250, duration: 0 },
            { id: "eid11", tween: [ "style", "${_cat}", "clip", [0,100,90,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,80,503,0]}], position: 500, duration: 0 },
            { id: "eid13", tween: [ "style", "${_cat}", "clip", [0,100,90,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,100,90,0]}], position: 750, duration: 0 },
            { id: "eid15", tween: [ "style", "${_cat}", "clip", [0,100,90,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,100,503,0]}], position: 1000, duration: 0 },
            { id: "eid56", tween: [ "style", "${_cat}", "clip", [0,80,90,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,100,90,0]}], position: 1500, duration: 0 },
            { id: "eid63", tween: [ "transform", "${_cat}", "scaleY", '0.95', { fromValue: '1'}], position: 1500, duration: 250 },
            { id: "eid64", tween: [ "transform", "${_cat}", "scaleY", '1', { fromValue: '0.95'}], position: 1750, duration: 250 },
            { id: "eid1", tween: [ "style", "${_cat}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 250, duration: 0 },
            { id: "eid2", tween: [ "style", "${_cat}", "background-position", [-205,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 500, duration: 0 },
            { id: "eid12", tween: [ "style", "${_cat}", "background-position", [-90,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-205,0]}], position: 750, duration: 0 },
            { id: "eid14", tween: [ "style", "${_cat}", "background-position", [-300,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-90,0]}], position: 1000, duration: 0 },
            { id: "eid57", tween: [ "style", "${_cat}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-300,0]}], position: 1500, duration: 0 },
            { id: "eid150", tween: [ "style", "${_cat}", "-webkit-transform-origin", [50,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,18]}], position: 1500, duration: 0 },
            { id: "eid250", tween: [ "style", "${_cat}", "-moz-transform-origin", [50,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,18]}], position: 1500, duration: 0 },
            { id: "eid251", tween: [ "style", "${_cat}", "-ms-transform-origin", [50,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,18]}], position: 1500, duration: 0 },
            { id: "eid252", tween: [ "style", "${_cat}", "msTransformOrigin", [50,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,18]}], position: 1500, duration: 0 },
            { id: "eid253", tween: [ "style", "${_cat}", "-o-transform-origin", [50,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,18]}], position: 1500, duration: 0 }         ]
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
      rect: ['10px','10px','512px','503px','auto','auto'],
      transform: {},
      id: 'cat',
      type: 'image',
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
            ["style", "left", '41.02px'],
            ["transform", "scaleX", '1'],
            ["style", "font-family", 'Spirax, serif'],
            ["style", "text-decoration", 'none'],
            ["style", "width", '103px']
         ],
         "${_cat}": [
            ["style", "top", '10px'],
            ["transform", "scaleY", '1'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '10px'],
            ["style", "clip", [0,80,90,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "-webkit-transform-origin", [50,18], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,18],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,18],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,18],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,18],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${symbolSelector}": [
            ["style", "height", '110px'],
            ["style", "width", '120px']
         ],
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
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: false,
         labels: {
            "sitting": 250,
            "standup": 500,
            "running": 750,
            "standing": 1000,
            "waiting": 1500
         },
         timeline: [
            { id: "eid63", tween: [ "transform", "${_cat}", "scaleY", '0.95', { fromValue: '1'}], position: 1500, duration: 250 },
            { id: "eid64", tween: [ "transform", "${_cat}", "scaleY", '1', { fromValue: '0.95'}], position: 1750, duration: 250 },
            { id: "eid10", tween: [ "style", "${_cat}", "clip", [0,80,90,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,80,90,0]}], position: 250, duration: 0 },
            { id: "eid11", tween: [ "style", "${_cat}", "clip", [0,100,90,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,80,503,0]}], position: 500, duration: 0 },
            { id: "eid13", tween: [ "style", "${_cat}", "clip", [0,100,90,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,100,90,0]}], position: 750, duration: 0 },
            { id: "eid15", tween: [ "style", "${_cat}", "clip", [0,100,90,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,100,503,0]}], position: 1000, duration: 0 },
            { id: "eid56", tween: [ "style", "${_cat}", "clip", [0,80,90,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,100,90,0]}], position: 1500, duration: 0 },
            { id: "eid150", tween: [ "style", "${_cat}", "-webkit-transform-origin", [50,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,18]}], position: 1500, duration: 0 },
            { id: "eid254", tween: [ "style", "${_cat}", "-moz-transform-origin", [50,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,18]}], position: 1500, duration: 0 },
            { id: "eid255", tween: [ "style", "${_cat}", "-ms-transform-origin", [50,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,18]}], position: 1500, duration: 0 },
            { id: "eid256", tween: [ "style", "${_cat}", "msTransformOrigin", [50,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,18]}], position: 1500, duration: 0 },
            { id: "eid257", tween: [ "style", "${_cat}", "-o-transform-origin", [50,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,18]}], position: 1500, duration: 0 },
            { id: "eid1", tween: [ "style", "${_cat}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 250, duration: 0 },
            { id: "eid2", tween: [ "style", "${_cat}", "background-position", [-205,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 500, duration: 0 },
            { id: "eid12", tween: [ "style", "${_cat}", "background-position", [-90,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-205,0]}], position: 750, duration: 0 },
            { id: "eid14", tween: [ "style", "${_cat}", "background-position", [-300,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-90,0]}], position: 1000, duration: 0 },
            { id: "eid57", tween: [ "style", "${_cat}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-300,0]}], position: 1500, duration: 0 }         ]
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
