/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['\'Peralta\', serif']='<link href=\'http://fonts.googleapis.com/css?family=Peralta\' rel=\'stylesheet\' type=\'text/css\'>';
   fonts['\'Spirax\', serif']='<link href=\'http://fonts.googleapis.com/css?family=Spirax\' rel=\'stylesheet\' type=\'text/css\'>';
   fonts['serif']='';


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
         },
         {
            id:'commandMenuArea',
            type:'rect',
            rect:['200px','110px','321','178','undefined','undefined'],
            fill:["rgba(192,192,192,0.00)"],
            stroke:[0,"rgb(240, 41, 121)","none"],
            transform:[],
            c:[
            {
               id:'serif_pink',
               type:'image',
               rect:['-127','-191','580','559','undefined','undefined'],
               fill:["rgba(0,0,0,0)",im+"serif_pink.png"],
               boxShadow:["",0,0,0,0,"rgba(0,0,0,0)"],
               transform:[[],[],[],['0.468','0.272']]
            },
            {
               id:'defenceBtn',
               type:'rect',
               rect:['77','74','160','31','undefined','undefined'],
               cursor:['pointer'],
               borderRadius:["10px","10px","10px","10px"],
               opacity:1,
               fill:["rgba(241,132,176,1.00)"],
               stroke:[3,"rgb(240, 41, 121)","solid"],
               transform:[],
               c:[
               {
                  id:'blackcat_stamp2',
                  type:'image',
                  rect:['-31px','-22px','99','65','undefined','undefined'],
                  fill:["rgba(0,0,0,0)",im+"blackcat_stamp.png"],
                  transform:[[],[],[],['0.444','0.461']]
               },
               {
                  id:'defenceText',
                  type:'text',
                  tag:'p',
                  rect:['41px','0px','103','0','undefined','undefined'],
                  cursor:['pointer'],
                  text:"Defence",
                  align:"center",
                  font:['Spirax, serif',24,"rgba(0,0,0,1.00)","normal","none","normal"],
                  transform:[]
               }]
            },
            {
               id:'attackBtn',
               type:'rect',
               rect:['77','30','160','31','undefined','undefined'],
               cursor:['pointer'],
               borderRadius:["10px","10px","10px","10px"],
               opacity:1,
               fill:["rgba(241,132,176,1.00)"],
               stroke:[3,"rgb(240, 41, 121)","solid"],
               transform:[],
               c:[
               {
                  id:'blackcat_stamp',
                  type:'image',
                  rect:['-31','-21','99','65','undefined','undefined'],
                  fill:["rgba(0,0,0,0)",im+"blackcat_stamp.png"],
                  transform:[[],[],[],['0.444','0.461']]
               },
               {
                  id:'attackText',
                  type:'text',
                  tag:'p',
                  rect:['41px','0px','103','0','undefined','undefined'],
                  cursor:['pointer'],
                  text:"Attack",
                  align:"center",
                  font:['Spirax, serif',24,"rgba(0,0,0,1.00)","normal","none","normal"],
                  transform:[]
               }]
            }]
         },
         {
            id:'gameEndArea',
            display:'none',
            type:'rect',
            rect:['0px','0px','640px','400px','auto','auto'],
            fill:["rgba(0,0,0,0.60)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            c:[
            {
               id:'gameEndTitle',
               type:'text',
               rect:['0%','5%','640px','auto','auto','auto'],
               text:"GAME OVER",
               align:"center",
               font:['Peralta, serif',[2.5,"em"],"rgba(255,255,255,1.00)","700","none","normal"]
            },
            {
               id:'BackBtn',
               type:'rect',
               rect:['0%','50%','640px','52px','auto','auto'],
               cursor:['pointer'],
               fill:["rgba(0,0,0,0.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               c:[
               {
                  id:'Back',
                  type:'text',
                  rect:['0px','0px','640px','auto','auto','auto'],
                  text:"Back<br>",
                  align:"center",
                  font:['Peralta, serif',[2.5,"em"],"rgba(255,255,255,1)","bold","none","normal"]
               }]
            },
            {
               id:'AgainBtn',
               type:'rect',
               rect:['0%','35%','640px','52px','auto','auto'],
               cursor:['pointer'],
               fill:["rgba(0,0,0,0.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               c:[
               {
                  id:'Again',
                  type:'text',
                  rect:['0px','0px','640px','auto','auto','auto'],
                  text:"Again",
                  align:"center",
                  font:['Peralta, serif',[2.5,"em"],"rgba(255,255,255,1)","bold","none","normal"]
               }]
            }]
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
         "${_game}": [
            ["style", "top", '10px']
         ],
         "${_blackcat_stamp}": [
            ["style", "top", '-20.5px'],
            ["transform", "scaleY", '0.46153'],
            ["transform", "scaleX", '0.44444'],
            ["style", "opacity", '1'],
            ["style", "left", '-30.5px']
         ],
         "${_gameEndArea}": [
            ["color", "background-color", 'rgba(0,0,0,0.60)'],
            ["style", "display", 'none'],
            ["style", "height", '400px']
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
         "${_gameEndTitle}": [
            ["style", "letter-spacing", '0em'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '0%'],
            ["style", "font-size", '2.5em'],
            ["style", "top", '4.95%'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "word-spacing", '1em'],
            ["style", "width", '640px']
         ],
         "${_Back}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '640px']
         ],
         "${_Again}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '640px']
         ],
         "${_BackBtn}": [
            ["color", "background-color", 'rgba(0,0,0,0)'],
            ["style", "cursor", 'pointer'],
            ["style", "top", '50%'],
            ["style", "left", '0%'],
            ["style", "width", '640px']
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
            ["style", "top", '110px'],
            ["transform", "scaleY", '1'],
            ["color", "background-color", 'rgba(192,192,192,0)'],
            ["style", "height", '178px'],
            ["style", "opacity", '1'],
            ["style", "left", '200.08px'],
            ["style", "width", '321px']
         ],
         "${_AgainBtn}": [
            ["style", "top", '35%'],
            ["style", "cursor", 'pointer'],
            ["color", "background-color", 'rgba(0,0,0,0.00)'],
            ["style", "left", '0%'],
            ["style", "width", '640px']
         ],
         "${_Stage}": [
            ["style", "height", '400px'],
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '640px']
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
         duration: 1000,
         autoPlay: true,
         labels: {
            "init": 500,
            "gameEnd": 1000
         },
         timeline: [
            { id: "eid14447", tween: [ "style", "${_gameEndArea}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 }         ]
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
      transform: [{1:0,0:0},{},{},['0.662','0.43']],
      id: 'fight_bg',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/fight_bg.png','0%','0%','100%','100%']
   },
   {
      transform: {},
      rect: ['50','10','540','105','undefined','undefined'],
      type: 'rect',
      stroke: [0,'rgba(0,0,0,1)','none'],
      display: 'none',
      opacity: 0.3,
      id: 'headerDebugArea',
      fill: ['rgba(43,218,181,1.00)']
   },
   {
      transform: {},
      rect: ['50','85','540','225','undefined','undefined'],
      type: 'rect',
      stroke: [0,'rgb(0, 0, 0)','none'],
      display: 'none',
      opacity: 0.3,
      id: 'contentDebugArea',
      fill: ['rgba(192,192,192,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_contentDebugArea}": [
            ["style", "top", '85px'],
            ["style", "height", '225px'],
            ["style", "opacity", '0.3'],
            ["color", "background-color", 'rgba(192,192,192,1.00)'],
            ["style", "display", 'none']
         ],
         "${_headerDebugArea}": [
            ["color", "background-color", 'rgba(43,218,181,1.00)'],
            ["style", "top", '10px'],
            ["style", "height", '105px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0.3'],
            ["style", "left", '50px'],
            ["style", "width", '540px']
         ],
         "${symbolSelector}": [
            ["style", "height", '399.99484px'],
            ["style", "width", '639.99928px']
         ],
         "${_fight_bg}": [
            ["style", "top", '-265.5px'],
            ["transform", "scaleY", '0.42964'],
            ["transform", "scaleX", '0.66184'],
            ["style", "opacity", '1'],
            ["style", "left", '-163.5px']
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
            { id: "eid3074", tween: [ "style", "${_contentDebugArea}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid3075", tween: [ "style", "${_headerDebugArea}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }         ]
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
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
      id: 'lifeBarArea',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(43,218,181,1.00)'],
      c: [
      {
         display: 'none',
         type: 'rect',
         rect: ['35','40','auto','auto','auto','auto'],
         id: 'enemyLifeBar'
      },
      {
         display: 'none',
         type: 'rect',
         rect: ['305','40','auto','auto','auto','auto'],
         id: 'playerLifeBar'
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
      id: 'catAnimation',
      type: 'rect',
      rect: ['0px','80px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'enemyLifeBar',
      symbolName: 'enemyLifeBar'
   },
   {
      id: 'playerLifeBar',
      symbolName: 'playerLifeBar'
   },
   {
      id: 'catAnimation',
      symbolName: 'catAnimation'
   }   ]
   },
   states: {
      "Base State": {
         "${_enemyText}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '35px'],
            ["style", "font-family", 'Spirax, serif']
         ],
         "${_enemyLife}": [
            ["style", "top", '65px'],
            ["style", "text-align", 'right'],
            ["style", "font-family", 'Peralta, serif'],
            ["style", "opacity", '0'],
            ["style", "left", '35px'],
            ["style", "font-size", '24px']
         ],
         "${_catAnimation}": [
            ["style", "top", '80px'],
            ["style", "left", '0px'],
            ["transform", "scaleX", '1']
         ],
         "${_lifeBarArea}": [
            ["color", "background-color", 'rgba(43,218,181,1.00)'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "top", '349px'],
            ["style", "height", '105px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)']
         ],
         "${_playerText}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '435px'],
            ["style", "font-family", 'Spirax, serif']
         ],
         "${_enemyLifeBar}": [
            ["style", "display", 'none']
         ],
         "${_playerLife}": [
            ["style", "top", '65px'],
            ["style", "text-align", 'right'],
            ["style", "font-family", 'Peralta, serif'],
            ["style", "opacity", '0'],
            ["style", "left", '435px'],
            ["style", "font-size", '24px']
         ],
         "${_enemyTextCopy}": [
            ["style", "top", '-24px'],
            ["style", "opacity", '1'],
            ["style", "left", '35px'],
            ["style", "font-family", 'Spirax, serif']
         ],
         "${symbolSelector}": [
            ["style", "height", '300px'],
            ["style", "width", '540px']
         ],
         "${_playerLifeCopy}": [
            ["style", "top", '41px'],
            ["style", "font-family", 'Peralta, serif'],
            ["style", "opacity", '1'],
            ["style", "left", '435px'],
            ["style", "font-size", '24px']
         ],
         "${_playerLifeBar}": [
            ["style", "display", 'none']
         ],
         "${_enemyLifeCopy}": [
            ["style", "top", '41px'],
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
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4000,
         autoPlay: false,
         labels: {
            "openingEnd": 2000,
            "playerBlack": 3000,
            "playerWhite": 4000
         },
         timeline: [
            { id: "eid2439", tween: [ "transform", "${_catAnimation}", "scaleX", '1', { fromValue: '1'}], position: 3000, duration: 0 },
            { id: "eid2441", tween: [ "transform", "${_catAnimation}", "scaleX", '-1', { fromValue: '1'}], position: 4000, duration: 0 },
            { id: "eid13821", tween: [ "style", "${_playerLifeBar}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid12326", tween: [ "style", "${_playerLife}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid12328", tween: [ "style", "${_enemyLife}", "opacity", '0.73000001907349', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid12312", tween: [ "style", "${_lifeBarArea}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid12330", tween: [ "style", "${_playerText}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid12332", tween: [ "style", "${_enemyText}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid13822", tween: [ "style", "${_enemyLifeBar}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid12309", tween: [ "style", "${_lifeBarArea}", "top", '0px', { fromValue: '349px'}], position: 0, duration: 500 }         ]
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
      transform: {},
      type: 'image',
      id: 'cat',
      rect: ['10px','10px','512px','503px','auto','auto'],
      clip: ['rect(0px 100px 503px 0px)'],
      fill: ['rgba(0,0,0,0)','images/blackcat.png','0px','0px']
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
            { id: "eid14696", tween: [ "style", "${_cat}", "-moz-transform-origin", [50,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,18]}], position: 4000, duration: 0 },
            { id: "eid14697", tween: [ "style", "${_cat}", "-ms-transform-origin", [50,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,18]}], position: 4000, duration: 0 },
            { id: "eid14698", tween: [ "style", "${_cat}", "msTransformOrigin", [50,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,18]}], position: 4000, duration: 0 },
            { id: "eid14699", tween: [ "style", "${_cat}", "-o-transform-origin", [50,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,18]}], position: 4000, duration: 0 },
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
      id: 'white_stamp',
      type: 'image',
      rect: ['auto','auto','88px','60px','25px','35px'],
      fill: ['rgba(0,0,0,0)','images/whitecat_stamp.png','0px','0px']
   },
   {
      id: 'black_stamp',
      type: 'image',
      rect: ['21px','auto','99px','65px','auto','44px'],
      fill: ['rgba(0,0,0,0)','images/blackcat_stamp.png','0px','0px']
   },
   {
      rect: ['440px','auto','13.5%','12.8%','110px','auto'],
      font: ['Arial, Helvetica, sans-serif',24,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'center',
      id: 'b_hit_label',
      text: 'Miss!!',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['auto','auto','13.5%','12.8%','27px','110px'],
      font: ['Arial, Helvetica, sans-serif',24,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'center',
      id: 'w_hit_label',
      text: 'Miss!!',
      display: 'none',
      type: 'text'
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
         "${_black_stamp}": [
            ["style", "top", 'auto'],
            ["style", "opacity", '0'],
            ["style", "left", '25px'],
            ["style", "bottom", '44px']
         ],
         "${_w_hit_label}": [
            ["style", "bottom", '150px'],
            ["style", "right", '26.9px'],
            ["style", "left", 'auto'],
            ["style", "width", '13.54%'],
            ["style", "top", 'auto'],
            ["style", "height", '12.79%'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'normal'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "text-decoration", 'none'],
            ["style", "opacity", '0']
         ],
         "${symbolSelector}": [
            ["style", "height", '219px'],
            ["style", "width", '540px']
         ],
         "${_blackcat}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "right", '0px'],
            ["style", "left", 'auto']
         ],
         "${_b_hit_label}": [
            ["style", "bottom", '150px'],
            ["style", "right", 'auto'],
            ["style", "left", '27px'],
            ["style", "width", '13.54%'],
            ["style", "top", 'auto'],
            ["style", "opacity", '0.000000'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "height", '12.79%'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "text-decoration", 'none'],
            ["style", "font-style", 'normal']
         ],
         "${_white_stamp}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '44px'],
            ["style", "right", '35px'],
            ["style", "left", 'auto'],
            ["style", "opacity", '0']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 13000,
         autoPlay: false,
         labels: {
            "loop": 250,
            "loopEnd": 500,
            "attack_b": 1000,
            "runEnd_b": 2000,
            "hit_b": 2500,
            "hitEnd_b": 3250,
            "miss_b": 4000,
            "missEnd_b": 5000,
            "runback_b": 5500,
            "runbackEnd_b": 6500,
            "attack_w": 7000,
            "runEnd_w": 8000,
            "hit_w": 8500,
            "hitEnd_w": 9250,
            "miss_w": 10000,
            "missEnd_w": 11000,
            "runback_w": 11500,
            "runbackEnd_w": 12500,
            "timelineEnd": 13000
         },
         timeline: [
            { id: "eid1673", tween: [ "style", "${_whitecat}", "left", '-49px', { fromValue: '0px'}], position: 4000, duration: 250 },
            { id: "eid1697", tween: [ "style", "${_whitecat}", "left", '0px', { fromValue: '-49px'}], position: 4500, duration: 250 },
            { id: "eid1891", tween: [ "style", "${_whitecat}", "left", '88px', { fromValue: '0px'}], position: 7000, duration: 250 },
            { id: "eid1903", tween: [ "style", "${_whitecat}", "left", '270px', { fromValue: '88px'}], position: 7250, duration: 250 },
            { id: "eid1904", tween: [ "style", "${_whitecat}", "left", '320.33px', { fromValue: '270px'}], position: 7500, duration: 250 },
            { id: "eid2002", tween: [ "style", "${_whitecat}", "left", '0px', { fromValue: '320.33px'}], position: 11583, duration: 667 },
            { id: "eid1218", tween: [ "style", "${_blackcat}", "right", '88.16px', { fromValue: '0px'}], position: 1000, duration: 250 },
            { id: "eid1232", tween: [ "style", "${_blackcat}", "right", '270px', { fromValue: '88.16px'}], position: 1250, duration: 250 },
            { id: "eid1245", tween: [ "style", "${_blackcat}", "right", '320px', { fromValue: '270px'}], position: 1500, duration: 250 },
            { id: "eid1702", tween: [ "style", "${_blackcat}", "right", '0px', { fromValue: '320px'}], position: 5583, duration: 667 },
            { id: "eid1940", tween: [ "style", "${_blackcat}", "right", '-49.31px', { fromValue: '0px'}], position: 10000, duration: 250 },
            { id: "eid1952", tween: [ "style", "${_blackcat}", "right", '0px', { fromValue: '-49.31px'}], position: 10500, duration: 250 },
            { id: "eid5917", tween: [ "style", "${_b_hit_label}", "bottom", '110px', { fromValue: '150px'}], position: 2750, duration: 250, easing: "easeOutBounce" },
            { id: "eid5918", tween: [ "style", "${_b_hit_label}", "bottom", '110px', { fromValue: '150px'}], position: 4500, duration: 250, easing: "easeOutBounce" },
            { id: "eid5840", tween: [ "style", "${_w_hit_label}", "bottom", '110px', { fromValue: '150px'}], position: 8750, duration: 250, easing: "easeOutBounce" },
            { id: "eid5856", tween: [ "style", "${_w_hit_label}", "bottom", '110px', { fromValue: '150px'}], position: 10500, duration: 250, easing: "easeOutBounce" },
            { id: "eid5910", tween: [ "style", "${_b_hit_label}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0, easing: "easeOutBounce" },
            { id: "eid5911", tween: [ "style", "${_b_hit_label}", "display", 'none', { fromValue: 'block'}], position: 3250, duration: 0, easing: "easeOutBounce" },
            { id: "eid5912", tween: [ "style", "${_b_hit_label}", "display", 'block', { fromValue: 'none'}], position: 4500, duration: 0, easing: "easeOutBounce" },
            { id: "eid5913", tween: [ "style", "${_b_hit_label}", "display", 'block', { fromValue: 'block'}], position: 4750, duration: 0, easing: "easeOutBounce" },
            { id: "eid5914", tween: [ "style", "${_b_hit_label}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0, easing: "easeOutBounce" },
            { id: "eid1700", tween: [ "transform", "${_blackcat}", "scaleX", '-1', { fromValue: '1'}], position: 5500, duration: 83 },
            { id: "eid1705", tween: [ "transform", "${_blackcat}", "scaleX", '1', { fromValue: '-1'}], position: 6250, duration: 0 },
            { id: "eid5915", tween: [ "style", "${_b_hit_label}", "opacity", '1', { fromValue: '0.000000'}], position: 2750, duration: 250 },
            { id: "eid5916", tween: [ "style", "${_b_hit_label}", "opacity", '1', { fromValue: '0.000000'}], position: 4500, duration: 250 },
            { id: "eid2000", tween: [ "transform", "${_whitecat}", "scaleX", '1', { fromValue: '-1'}], position: 11500, duration: 83 },
            { id: "eid2001", tween: [ "transform", "${_whitecat}", "scaleX", '-1', { fromValue: '1'}], position: 12250, duration: 0 },
            { id: "eid1652", tween: [ "style", "${_black_stamp}", "opacity", '1', { fromValue: '0.000000'}], position: 2500, duration: 250 },
            { id: "eid1654", tween: [ "style", "${_black_stamp}", "opacity", '0', { fromValue: '1'}], position: 2750, duration: 250 },
            { id: "eid1674", tween: [ "style", "${_black_stamp}", "opacity", '1', { fromValue: '0.000000'}], position: 4250, duration: 250 },
            { id: "eid1675", tween: [ "style", "${_black_stamp}", "opacity", '0', { fromValue: '1'}], position: 4500, duration: 250 },
            { id: "eid5838", tween: [ "style", "${_w_hit_label}", "opacity", '1', { fromValue: '0.000000'}], position: 8750, duration: 250 },
            { id: "eid5857", tween: [ "style", "${_w_hit_label}", "opacity", '1', { fromValue: '0.000000'}], position: 10500, duration: 250 },
            { id: "eid5860", tween: [ "style", "${_w_hit_label}", "display", 'block', { fromValue: 'none'}], position: 8750, duration: 0, easing: "easeOutBounce" },
            { id: "eid5861", tween: [ "style", "${_w_hit_label}", "display", 'none', { fromValue: 'block'}], position: 9250, duration: 0, easing: "easeOutBounce" },
            { id: "eid5858", tween: [ "style", "${_w_hit_label}", "display", 'block', { fromValue: 'none'}], position: 10500, duration: 0, easing: "easeOutBounce" },
            { id: "eid5859", tween: [ "style", "${_w_hit_label}", "display", 'block', { fromValue: 'block'}], position: 10750, duration: 0, easing: "easeOutBounce" },
            { id: "eid5862", tween: [ "style", "${_w_hit_label}", "display", 'none', { fromValue: 'block'}], position: 11000, duration: 0, easing: "easeOutBounce" },
            { id: "eid1929", tween: [ "style", "${_white_stamp}", "opacity", '1', { fromValue: '0.000000'}], position: 8500, duration: 250 },
            { id: "eid1931", tween: [ "style", "${_white_stamp}", "opacity", '0', { fromValue: '1'}], position: 8750, duration: 250 },
            { id: "eid1947", tween: [ "style", "${_white_stamp}", "opacity", '1', { fromValue: '0.000000'}], position: 10250, duration: 250 },
            { id: "eid1948", tween: [ "style", "${_white_stamp}", "opacity", '0', { fromValue: '1'}], position: 10500, duration: 250 }         ]
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
            { id: "eid14700", tween: [ "style", "${_cat}", "-moz-transform-origin", [50,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,18]}], position: 4000, duration: 0 },
            { id: "eid14701", tween: [ "style", "${_cat}", "-ms-transform-origin", [50,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,18]}], position: 4000, duration: 0 },
            { id: "eid14702", tween: [ "style", "${_cat}", "msTransformOrigin", [50,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,18]}], position: 4000, duration: 0 },
            { id: "eid14703", tween: [ "style", "${_cat}", "-o-transform-origin", [50,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,18]}], position: 4000, duration: 0 },
            { id: "eid1", tween: [ "style", "${_cat}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid2", tween: [ "style", "${_cat}", "background-position", [-205,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 1000, duration: 0 },
            { id: "eid12", tween: [ "style", "${_cat}", "background-position", [-90,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-205,0]}], position: 2000, duration: 0 },
            { id: "eid14", tween: [ "style", "${_cat}", "background-position", [-300,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-90,0]}], position: 3000, duration: 0 },
            { id: "eid57", tween: [ "style", "${_cat}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-300,0]}], position: 4000, duration: 0 }         ]
      }
   }
},
"playerLifeBar": {
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
      transform: {},
      rect: ['0px','-1px','200','25','undefined','undefined'],
      borderRadius: ['10px','10px','10px','10px'],
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)'],
      id: 'bar',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,0,0,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_bar}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["subproperty", "boxShadow.blur", '3px'],
            ["transform", "scaleX", '0'],
            ["style", "left", '0px'],
            ["style", "width", '200px'],
            ["style", "top", '-0.98px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["transform", "scaleY", '1'],
            ["color", "background-color", 'rgba(255,0,0,1)'],
            ["style", "height", '25px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px']
         ],
         "${symbolSelector}": [
            ["style", "height", '25px'],
            ["style", "width", '200px']
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
            "openingEnd": 500,
            "start": 1000,
            "end": 2000
         },
         timeline: [
            { id: "eid11818", tween: [ "transform", "${_bar}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutBounce" },
            { id: "eid11821", tween: [ "transform", "${_bar}", "scaleX", '0', { fromValue: '1'}], position: 1000, duration: 1000 }         ]
      }
   }
},
"enemyLifeBar": {
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
      transform: {},
      rect: ['0px','0px','200','25','undefined','undefined'],
      borderRadius: ['10px','10px','10px','10px'],
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.648438)'],
      id: 'bar',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,0,0,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_bar}": [
            ["style", "-webkit-transform-origin", [100,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["subproperty", "boxShadow.blur", '3px'],
            ["transform", "scaleX", '0'],
            ["style", "left", '0px'],
            ["style", "width", '200px'],
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)'],
            ["transform", "scaleY", '1'],
            ["color", "background-color", 'rgba(255,0,0,1)'],
            ["style", "height", '25px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px']
         ],
         "${symbolSelector}": [
            ["style", "height", '25px'],
            ["style", "width", '200px']
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
            "openingEnd": 500,
            "start": 1000,
            "end": 2000
         },
         timeline: [
            { id: "eid11850", tween: [ "transform", "${_bar}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutBounce" },
            { id: "eid11861", tween: [ "transform", "${_bar}", "scaleX", '0', { fromValue: '1'}], position: 1000, duration: 1000 }         ]
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
