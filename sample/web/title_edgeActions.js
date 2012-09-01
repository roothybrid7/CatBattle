
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTimelineAction(compId,symbolName,"Default Timeline","play",function(sym,e){sym.getSymbol("menu").play(0);});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//=========================================================

//Edge symbol: 'backgroundArea'
(function(symbolName){})("background");
//Edge symbol end:'background'

//=========================================================

//=========================================================

//Edge symbol: 'catAnimation_black'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4500,function(sym,e){sym.play("waiting");});
//Edge binding end
})("blackcatSprite");
//Edge symbol end:'blackcatSprite'

//=========================================================

//=========================================================

//Edge symbol: 'blackcatSprite_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4500,function(sym,e){sym.play("waiting");});
//Edge binding end
})("whitecatSprite");
//Edge symbol end:'whitecatSprite'

//=========================================================

//Edge symbol: 'menu'
(function(symbolName){})("menu");
//Edge symbol end:'menu'
})(jQuery,AdobeEdge,"EDGE-CATTITLE");