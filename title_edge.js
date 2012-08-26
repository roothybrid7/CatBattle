/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['\'Peralta\', serif']='<link href=\'http://fonts.googleapis.com/css?family=Peralta\' rel=\'stylesheet\' type=\'text/css\'    >';
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
            id:'menu',
            type:'rect',
            rect:['50','10','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'menu',
            symbolName:'menu'
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
            { id: "eid235", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_menu}', [] ], ""], position: 0 }         ]
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
      transform: [{},{},{},['0.662','0.43']],
      id: 'fight_bg',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/fight_bg.png','0%','0%','100%','100%']
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
         "${_contentDebugArea}": [
            ["style", "top", '85px'],
            ["style", "height", '225px'],
            ["style", "opacity", '0.3'],
            ["color", "background-color", 'rgba(192,192,192,1.00)'],
            ["style", "display", 'block']
         ],
         "${_headerDebugArea}": [
            ["color", "background-color", 'rgba(43,218,181,1.00)'],
            ["style", "top", '10px'],
            ["style", "height", '105px'],
            ["style", "display", 'block'],
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
            { id: "eid3074", tween: [ "style", "${_contentDebugArea}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid3075", tween: [ "style", "${_headerDebugArea}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }         ]
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
            { id: "eid442", tween: [ "style", "${_cat}", "-moz-transform-origin", [50,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,18]}], position: 4000, duration: 0 },
            { id: "eid443", tween: [ "style", "${_cat}", "-ms-transform-origin", [50,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,18]}], position: 4000, duration: 0 },
            { id: "eid444", tween: [ "style", "${_cat}", "msTransformOrigin", [50,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,18]}], position: 4000, duration: 0 },
            { id: "eid445", tween: [ "style", "${_cat}", "-o-transform-origin", [50,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,18]}], position: 4000, duration: 0 },
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
      transform: {},
      type: 'image',
      id: 'cat',
      rect: ['10px','10px','512px','503px','auto','auto'],
      clip: ['rect(0px 100px 503px 0px)'],
      fill: ['rgba(0,0,0,0)','images/whitecat.png','0px','0px']
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
            { id: "eid446", tween: [ "style", "${_cat}", "-moz-transform-origin", [50,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,18]}], position: 4000, duration: 0 },
            { id: "eid447", tween: [ "style", "${_cat}", "-ms-transform-origin", [50,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,18]}], position: 4000, duration: 0 },
            { id: "eid448", tween: [ "style", "${_cat}", "msTransformOrigin", [50,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,18]}], position: 4000, duration: 0 },
            { id: "eid449", tween: [ "style", "${_cat}", "-o-transform-origin", [50,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,18]}], position: 4000, duration: 0 },
            { id: "eid1", tween: [ "style", "${_cat}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid2", tween: [ "style", "${_cat}", "background-position", [-205,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 1000, duration: 0 },
            { id: "eid12", tween: [ "style", "${_cat}", "background-position", [-90,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-205,0]}], position: 2000, duration: 0 },
            { id: "eid14", tween: [ "style", "${_cat}", "background-position", [-300,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-90,0]}], position: 3000, duration: 0 },
            { id: "eid57", tween: [ "style", "${_cat}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-300,0]}], position: 4000, duration: 0 }         ]
      }
   }
},
"menu": {
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
      rect: ['109','auto','320','200','0px','undefined'],
      transform: {},
      id: 'menuListArea',
      stroke: [0,'rgb(240, 41, 121)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,0.00)'],
      c: [
      {
         rect: ['10px','auto','300px','180px','0px','auto'],
         id: 'serif_pink',
         transform: {},
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/serif_pink.png','0px','0px','100%','100%']
      },
      {
         type: 'rect',
         borderRadius: ['10px','10px','10px','10px'],
         id: 'whiteBtn',
         opacity: 1,
         cursor: ['pointer'],
         rect: ['77','111','160','31','undefined','undefined'],
         transform: {},
         stroke: [3,'rgb(240, 41, 121)','solid'],
         fill: ['rgba(241,132,176,1.00)'],
         c: [
         {
            type: 'text',
            id: 'whiteText',
            text: 'White cat',
            cursor: ['pointer'],
            rect: ['auto','0px','103','0','15px','auto'],
            transform: {},
            font: ['Spirax, serif',24,'rgba(0,0,0,1.00)','normal','none','normal'],
            align: 'right',
            tag: 'p'
         },
         {
            id: 'whitecat_stamp',
            type: 'image',
            rect: ['0px','-6px','50px','35px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/blackcat_stamp.png','0px','0px']
         }]
      },
      {
         type: 'rect',
         borderRadius: ['10px','10px','10px','10px'],
         id: 'blackBtn',
         opacity: 1,
         cursor: ['pointer'],
         rect: ['77','67','160','31','undefined','undefined'],
         transform: {},
         stroke: [3,'rgb(240, 41, 121)','solid'],
         fill: ['rgba(241,132,176,1.00)'],
         c: [
         {
            type: 'text',
            id: 'blackText',
            text: 'Black cat',
            cursor: ['pointer'],
            rect: ['auto','0px','103','30px','15px','auto'],
            transform: {},
            font: ['Spirax, serif',24,'rgba(0,0,0,1.00)','normal','none','normal'],
            align: 'right',
            tag: 'p'
         },
         {
            id: 'blackcat_stamp',
            type: 'image',
            rect: ['0px','-6px','50px','35px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/blackcat_stamp.png','0px','0px']
         }]
      },
      {
         rect: ['110','26','0','0','undefined','undefined'],
         transform: {},
         font: ['Peralta, serif',32,'rgba(0,0,0,1.00)','normal','none','normal'],
         id: 'playText',
         text: 'play?',
         align: 'center',
         type: 'text'
      }]
   },
   {
      rect: ['0','0','540','105','undefined','undefined'],
      transform: {},
      id: 'menuTitleArea',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(43,218,181,1.00)'],
      c: [
      {
         transform: [{},{},['0','-5']],
         rect: ['139','29px','0','70px','undefined','undefined'],
         font: ['Peralta, serif',48,'rgba(248,0,0,1.00)','normal','none',''],
         align: 'center',
         id: 'menuTitle',
         text: 'Cat Fight',
         type: 'text',
         tag: 'h1'
      },
      {
         display: 'none',
         type: 'rect',
         rect: ['auto','11px','auto','auto','-21px','auto'],
         id: 'blackcatSprite'
      },
      {
         display: 'none',
         type: 'rect',
         rect: ['0','0','auto','auto','auto','auto'],
         id: 'whitecatSprite'
      }]
   }],
   symbolInstances: [
   {
      id: 'blackcatSprite',
      symbolName: 'blackcatSprite'
   },
   {
      id: 'whitecatSprite',
      symbolName: 'whitecatSprite'
   }   ]
   },
   states: {
      "Base State": {
         "${_playText}": [
            ["style", "top", '26.79px'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "font-family", 'Peralta, serif'],
            ["style", "left", '110.01px'],
            ["style", "font-size", '32px']
         ],
         "${_menuListArea}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "bottom", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '109.99px'],
            ["style", "width", '320px'],
            ["style", "top", 'auto'],
            ["transform", "scaleY", '0'],
            ["style", "height", '200px'],
            ["color", "background-color", 'rgba(192,192,192,0.00)']
         ],
         "${_whitecatSprite}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '-5px'],
            ["transform", "scaleX", '-1'],
            ["style", "left", '-20px'],
            ["style", "display", 'none']
         ],
         "${_whiteBtn}": [
            ["color", "background-color", 'rgba(241,132,176,1)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '3px'],
            ["style", "width", '160px'],
            ["style", "top", '111px'],
            ["transform", "skewX", '0deg'],
            ["style", "left", '77px'],
            ["color", "border-color", 'rgb(240, 41, 121)'],
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '1']
         ],
         "${_blackcatSprite}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '-5px'],
            ["style", "display", 'none'],
            ["style", "right", '-20px'],
            ["style", "left", 'auto']
         ],
         "${_menuTitleArea}": [
            ["color", "background-color", 'rgba(43,218,181,1.00)'],
            ["style", "top", '0px'],
            ["style", "height", '105px'],
            ["style", "opacity", '0'],
            ["style", "left", '800px'],
            ["style", "width", '540px']
         ],
         "${_blackBtn}": [
            ["color", "background-color", 'rgba(241,132,176,1)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '3px'],
            ["style", "width", '160px'],
            ["style", "top", '67.99px'],
            ["transform", "skewX", '0deg'],
            ["style", "left", '77px'],
            ["color", "border-color", 'rgb(240, 41, 121)'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer']
         ],
         "${_whiteText}": [
            ["style", "bottom", 'auto'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "font-size", '24px'],
            ["style", "top", '0px'],
            ["style", "right", '15px'],
            ["style", "text-align", 'right'],
            ["style", "left", 'auto'],
            ["transform", "scaleX", '1'],
            ["style", "font-family", 'Spirax, serif'],
            ["style", "text-decoration", 'none'],
            ["style", "width", '103px']
         ],
         "${_serif_pink}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '0px'],
            ["style", "height", '180px'],
            ["style", "left", '10.02px'],
            ["style", "width", '300px']
         ],
         "${symbolSelector}": [
            ["style", "height", '300px'],
            ["style", "width", '540px']
         ],
         "${_blackText}": [
            ["style", "width", '103px'],
            ["style", "bottom", 'auto'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "font-size", '24px'],
            ["style", "top", '0px'],
            ["style", "right", '15px'],
            ["style", "text-align", 'right'],
            ["style", "left", 'auto'],
            ["style", "height", '30px'],
            ["style", "font-family", 'Spirax, serif'],
            ["style", "text-decoration", 'none'],
            ["transform", "scaleX", '1']
         ],
         "${_whitecat_stamp}": [
            ["style", "top", '-6px'],
            ["style", "height", '34.983333587646px'],
            ["style", "left", '0.02px'],
            ["style", "width", '50px']
         ],
         "${_blackcat_stamp}": [
            ["style", "height", '34.983333587646px'],
            ["style", "top", '-5.97px'],
            ["style", "left", '0px'],
            ["style", "width", '50px']
         ],
         "${_menuTitle}": [
            ["color", "color", 'rgba(248,0,0,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '139px'],
            ["style", "font-size", '48px'],
            ["style", "top", '29.42px'],
            ["transform", "scaleY", '0'],
            ["style", "text-align", 'center'],
            ["transform", "scaleX", '0'],
            ["style", "height", '70.000610351562px'],
            ["style", "font-family", 'Peralta, serif'],
            ["transform", "skewY", '-5deg'],
            ["style", "white-space", 'normal']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1250,
         autoPlay: false,
         timeline: [
            { id: "eid285", tween: [ "style", "${_blackcatSprite}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0, easing: "easeOutQuart" },
            { id: "eid118", tween: [ "style", "${_menuTitleArea}", "left", '0px', { fromValue: '800px'}], position: 0, duration: 500, easing: "easeOutElastic" },
            { id: "eid157", tween: [ "transform", "${_menuListArea}", "scaleY", '1', { fromValue: '0'}], position: 250, duration: 500, easing: "easeOutQuart" },
            { id: "eid165", tween: [ "transform", "${_menuTitle}", "scaleY", '1', { fromValue: '0'}], position: 500, duration: 500, easing: "easeInOutElastic" },
            { id: "eid121", tween: [ "style", "${_menuTitleArea}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutElastic" },
            { id: "eid163", tween: [ "transform", "${_menuTitle}", "scaleX", '1', { fromValue: '0'}], position: 500, duration: 500, easing: "easeInOutElastic" },
            { id: "eid159", tween: [ "style", "${_menuListArea}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 250, duration: 500, easing: "easeOutQuart" },
            { id: "eid450", tween: [ "style", "${_menuListArea}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 250, duration: 500, easing: "easeOutQuart" },
            { id: "eid451", tween: [ "style", "${_menuListArea}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 250, duration: 500, easing: "easeOutQuart" },
            { id: "eid452", tween: [ "style", "${_menuListArea}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 250, duration: 500, easing: "easeOutQuart" },
            { id: "eid453", tween: [ "style", "${_menuListArea}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 250, duration: 500, easing: "easeOutQuart" },
            { id: "eid161", tween: [ "style", "${_menuListArea}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 500, easing: "easeOutQuart" },
            { id: "eid167", tween: [ "style", "${_menuTitle}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500, easing: "easeInOutElastic" },
            { id: "eid284", tween: [ "style", "${_whitecatSprite}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0, easing: "easeOutQuart" },
            { id: "eid233", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_whitecatSprite}', ['waiting'] ], ""], position: 1250 },
            { id: "eid234", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_blackcatSprite}', ['waiting'] ], ""], position: 1250 }         ]
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
})(jQuery, AdobeEdge, "EDGE-76607325");
