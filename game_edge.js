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
         rect: ['35','40','200','25','undefined','undefined'],
         borderRadius: ['10px','10px','10px','10px'],
         transform: {},
         id: 'enemyLifeBar',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,0,0,1.00)']
      },
      {
         rect: ['305','39','200','25','undefined','undefined'],
         borderRadius: ['10px','10px','10px','10px'],
         transform: {},
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
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_enemyText}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '35px'],
            ["style", "font-family", 'Spirax, serif']
         ],
         "${_enemyLife}": [
            ["style", "top", '65px'],
            ["style", "text-align", 'right'],
            ["style", "font-family", 'Peralta, serif'],
            ["style", "opacity", '1'],
            ["style", "left", '35px'],
            ["style", "font-size", '24px']
         ],
         "${_playerText}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '435px'],
            ["style", "font-family", 'Spirax, serif']
         ],
         "${_playerLife}": [
            ["style", "top", '65px'],
            ["style", "text-align", 'right'],
            ["style", "font-family", 'Peralta, serif'],
            ["style", "opacity", '1'],
            ["style", "left", '435px'],
            ["style", "font-size", '24px']
         ],
         "${symbolSelector}": [
            ["style", "height", '300px'],
            ["style", "width", '540px']
         ],
         "${_enemyLifeBar}": [
            ["color", "background-color", 'rgba(255,0,0,1)'],
            ["style", "top", '40px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '25px'],
            ["transform", "scaleX", '1'],
            ["style", "-webkit-transform-origin", [100,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '35px'],
            ["style", "width", '200px']
         ],
         "${_playerLifeBar}": [
            ["color", "background-color", 'rgba(255,0,0,1)'],
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["style", "top", '39.99px'],
            ["transform", "scaleX", '1'],
            ["style", "height", '25px'],
            ["style", "left", '305px'],
            ["style", "width", '200px']
         ],
         "${_lifeBarArea}": [
            ["color", "background-color", 'rgba(43,218,181,0.8984)'],
            ["style", "height", '105px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
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
