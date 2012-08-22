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
      transform: [{},{},{},['0.661','0.429']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/fight_bg.png']
   },
   {
      rect: ['50','10','540','105','undefined','undefined'],
      transform: {},
      stroke: [0,'rgba(0,0,0,1)','none'],
      id: 'headerDebugArea',
      opacity: 0.3,
      type: 'rect',
      fill: ['rgba(43,218,181,1.00)']
   },
   {
      rect: ['50','85','540','225','undefined','undefined'],
      transform: {},
      stroke: [0,'rgb(0, 0, 0)','none'],
      id: 'contentDebugArea',
      opacity: 0.3,
      type: 'rect',
      fill: ['rgba(192,192,192,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '399.99484px'],
            ["style", "width", '639.99928px']
         ],
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
   },
   {
      id: 'catAnimation_black',
      type: 'rect',
      rect: ['-426','210','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'catAnimation_black',
      symbolName: 'catAnimation_black'
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
            ["transform", "scaleY", '0.27276'],
            ["transform", "scaleX", '0.46808'],
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
            { id: "eid26", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_catAnimation_black}', [] ], ""], position: 0 }         ]
      }
   }
},
"catAnimation_black": {
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
      rect: ['867px','1px','512px','503px','auto','auto'],
      id: 'blackcat',
      type: 'image',
      clip: ['rect(0px 100px 503px 0px)'],
      fill: ['rgba(0,0,0,0)','images/blackcat.png','0px','0px']
   },
   {
      rect: ['15px','0px','512px','503px','auto','auto'],
      transform: [{},{},{},['-1']],
      id: 'whitecat',
      type: 'image',
      clip: ['rect(0px 80px 503px 0px)'],
      fill: ['rgba(0,0,0,0)','images/whitecat.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_blackcat}": [
            ["style", "top", '1px'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '866.9px'],
            ["style", "clip", [0,80,503,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${symbolSelector}": [
            ["style", "height", '504px'],
            ["style", "width", '1390.9333494023px']
         ],
         "${_whitecat}": [
            ["style", "top", '0px'],
            ["transform", "scaleX", '-1'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '15.21px'],
            ["style", "clip", [0,80,503,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: false,
         timeline: [
            { id: "eid10", tween: [ "style", "${_blackcat}", "clip", [0,80,503,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,80,503,0]}], position: 250, duration: 0 },
            { id: "eid11", tween: [ "style", "${_blackcat}", "clip", [0,100,503,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,80,503,0]}], position: 500, duration: 0 },
            { id: "eid13", tween: [ "style", "${_blackcat}", "clip", [0,100,503,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,100,503,0]}], position: 750, duration: 0 },
            { id: "eid15", tween: [ "style", "${_blackcat}", "clip", [0,100,503,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,100,503,0]}], position: 1000, duration: 0 },
            { id: "eid18", tween: [ "style", "${_whitecat}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 1250, duration: 0 },
            { id: "eid19", tween: [ "style", "${_whitecat}", "background-position", [-205,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 1500, duration: 0 },
            { id: "eid21", tween: [ "style", "${_whitecat}", "background-position", [-90,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-205,0]}], position: 1750, duration: 0 },
            { id: "eid24", tween: [ "style", "${_whitecat}", "background-position", [-300,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-90,0]}], position: 2000, duration: 0 },
            { id: "eid17", tween: [ "style", "${_whitecat}", "clip", [0,80,503,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,80,503,0]}], position: 1250, duration: 0 },
            { id: "eid20", tween: [ "style", "${_whitecat}", "clip", [0,100,503,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,80,503,0]}], position: 1500, duration: 0 },
            { id: "eid22", tween: [ "style", "${_whitecat}", "clip", [0,100,503,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,100,503,0]}], position: 1750, duration: 0 },
            { id: "eid25", tween: [ "style", "${_whitecat}", "clip", [0,100,503,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,100,503,0]}], position: 2000, duration: 0 },
            { id: "eid1", tween: [ "style", "${_blackcat}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 250, duration: 0 },
            { id: "eid2", tween: [ "style", "${_blackcat}", "background-position", [-205,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 500, duration: 0 },
            { id: "eid12", tween: [ "style", "${_blackcat}", "background-position", [-90,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-205,0]}], position: 750, duration: 0 },
            { id: "eid14", tween: [ "style", "${_blackcat}", "background-position", [-300,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-90,0]}], position: 1000, duration: 0 }         ]
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
