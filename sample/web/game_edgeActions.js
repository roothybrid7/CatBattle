
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){var path=location.pathname;if(path.match("game.html")!==null){sym.play(0);}});
//Edge binding end
Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){function countByRollRandom(rollCount){var num=0;for(var i=0;i<rollCount;i++){num+=Math.round(Math.random());}
return num;}
function isOverFlowCount(threshold,rollCount){return countByRollRandom(rollCount)>threshold;}
var CAT_COLORS={blackcat:"b",whitecat:"w"};function playerActionNotify(command){var player=sym.getVariable("player"),enemy=sym.getVariable("enemy");sym.$("commandMenuArea").hide();player.action=command;enemy.action=isOverFlowCount(3,10)?"attack":"defence";var game=sym.getSymbol("game");game.getVariable("run")(command,player.suffix);}
function gameEnd(){var symbols=sym.getComposition().getSymbols(),player=sym.getVariable("player"),enemy=sym.getVariable("enemy");if(player.hp>0&&enemy.hp>0){return false;}else{if(player.hp<=0){sym.$("gameEndTitle").html("GAME OVER");sym.stop("gameEnd");}else if(enemy.hp<=0){sym.$("gameEndTitle").html("YOU WIN!");sym.stop("gameEnd");}
return true;}}
function onTurn(suffix){var game=sym.getSymbol("game"),player=sym.getVariable("player"),enemy=sym.getVariable("enemy");if(!gameEnd()){if(player.suffix===suffix){game.getVariable("run")(enemy.action,enemy.suffix);}else{sym.$("commandMenuArea").show();}}}
function getOpponentBySuffix(suffix){var player=sym.getVariable("player"),enemy=sym.getVariable("enemy");return(player.suffix===suffix)?enemy:player;}
function Cat(name,type){this.name=name||"player";this.type=type;this.suffix=CAT_COLORS[type]||CAT_COLORS.blackcat;this.maxHp=5000;this.hp=this.maxHp;this.power=300;this.action="";}
function createCat(name,type){return new Cat(name,type);}
function onOpenCommand(){sym.$("commandMenuArea").show();}
function onInit(){var game=sym.getSymbol("game"),args=sym.getVariable("args"),type=args&&args.type||"blackcat";sym.setVariable("player",createCat("player",type));for(var k in CAT_COLORS){if(k!==type){sym.setVariable("enemy",createCat("enemy",k));break;}}
game.play(0);}
function getDamageAndUpdate(suffix){var player=sym.getVariable("player"),enemy=sym.getVariable("enemy"),damage=0;var hitCounter=countByRollRandom(10);if(hitCounter>3){if(hitCounter>6){damage=500*(hitCounter-6);}
if(player.suffix===suffix){damage+=player.power;if(enemy.action==="defence"){damage=0;}
enemy.hp=enemy.hp-damage;}else{damage+=enemy.power;if(player.action==="defence"){damage=0;}
player.hp=player.hp-damage;}}else{damage="Miss!!";}
if(player.hp<0){player.hp=0;}
if(enemy.hp<0){enemy.hp=0;}
return damage;}
function onOpeningEnd(){var game=sym.getSymbol("game"),player=sym.getVariable("player");game.stop("player_"+player.type);}
sym.setVariable("createCat",createCat);sym.setVariable("playerActionNotify",playerActionNotify);sym.setVariable("onTurn",onTurn);sym.setVariable("onOpenCommand",onOpenCommand);sym.setVariable("onInit",onInit);sym.setVariable("getOpponentBySuffix",getOpponentBySuffix);sym.setVariable("getDamageAndUpdate",getDamageAndUpdate);sym.setVariable("onOpeningEnd",onOpeningEnd);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_attackBtn}","click",function(sym,e){sym.getVariable("playerActionNotify")("attack");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_defenceBtn}","click",function(sym,e){sym.getVariable("playerActionNotify")("defence");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","onError",function(sym,e){var compId=e.compId;console.log(compId,e,sym,e.originalEvent.target);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.stop();sym.getVariable("onInit")();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.getSymbol("background").$("fight_bg").css({opacity:0.3});sym.$("commandMenuArea").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_AgainBtn}","click",function(sym,e){sym.play(0);});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'backgroundArea'
(function(symbolName){})("background");
//Edge symbol end:'background'

//=========================================================

//Edge symbol: 'game'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){function hitted(_sym,accumulated){var offset=_sym.getLabelPosition("start");_sym.stop(offset+accumulated*1000);}
var nextAct={openingEnd:function(suffix){var stage=sym.getComposition().getStage();stage.getVariable("onOpeningEnd")();stage.getVariable("onOpenCommand")();},runEnd:function(suffix){var catAnimation=sym.getSymbol("catAnimation"),next=null;var damageValue=sym.getComposition().getStage().getVariable("getDamageAndUpdate")(suffix);console.log("Damage: "+damageValue);if(typeof damageValue==="number"){next="hit_"+suffix;}else{next="miss_"+suffix;}
catAnimation.$(suffix+"_hit_label").html(damageValue);catAnimation.play(next);},hitEnd:function(suffix){var stage=sym.getComposition().getStage(),charactor=stage.getVariable("getOpponentBySuffix")(suffix),prefix=charactor.name,maxHp=charactor.maxHp,hp=charactor.hp,accumulated=(maxHp-hp)/maxHp;hitted(sym.getSymbol(prefix+"LifeBar"),accumulated);sym.$(prefix+"Life").html(hp);sym.getSymbol("catAnimation").play("runback_"+suffix);},missEnd:function(suffix){sym.getSymbol("catAnimation").play("runback_"+suffix);},runbackEnd:function(suffix){var stage=sym.getComposition().getStage();stage.getVariable("onTurn")(suffix);}};function onEnd(label){var chunk=label.split("_"),labelName=chunk[0],suffix=chunk[1];var fn=nextAct[labelName];fn&&fn(suffix);}
function run(action,suffix){if(!action){sym.getSymbol("catAnimation").play(0);}else if(action==="attack"){sym.getSymbol("catAnimation").play("attack_"+suffix);}else{sym.getComposition().getStage().getVariable("onTurn")(suffix);}}
sym.setVariable("onEnd",onEnd);sym.setVariable("run",run);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.stop();sym.getSymbol("catAnimation").play(0);sym.getVariable("onEnd")("openingEnd");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.getSymbol("playerLifeBar").play(0);sym.getSymbol("enemyLifeBar").play(0);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){var stage=sym.getComposition().getStage(),player=stage.getVariable("player"),enemy=stage.getVariable("enemy");var childSymbols=sym.getChildSymbols();for(var i=0,l=childSymbols.length;i<l;i++){childSymbols[i].stop(0);}
sym.$("playerLife").html(player.hp);sym.$("enemyLife").html(enemy.hp);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4000,function(sym,e){var catAnimation=sym.getSymbol("catAnimation"),$wLabel=catAnimation.$("w_hit_label"),$bLabel=catAnimation.$("b_hit_label");var transform={"transform":"scaleX(-1)","-webkit-transform":"scaleX(-1)","-moz-transform":"scaleX(-1)","-o-transform":"scaleX(-1)","-ms-transform":"scaleX(-1)"};$wLabel.css(transform);$bLabel.css(transform);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3000,function(sym,e){var catAnimation=sym.getSymbol("catAnimation"),$wLabel=catAnimation.$("w_hit_label"),$bLabel=catAnimation.$("b_hit_label");var transform={"transform":"scaleX(1)","-webkit-transform":"scaleX(1)","-moz-transform":"scaleX(1)","-o-transform":"scaleX(1)","-ms-transform":"scaleX(1)"};$wLabel.css(transform);$bLabel.css(transform);});
//Edge binding end
})("game");
//Edge symbol end:'game'

//=========================================================

//Edge symbol: 'catAnimation_black'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4500,function(sym,e){sym.play("waiting");});
//Edge binding end
})("blackcatSprite");
//Edge symbol end:'blackcatSprite'

//=========================================================

//Edge symbol: 'catAnimation'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){var whitecat=sym.getSymbol("whitecat"),blackcat=sym.getSymbol("blackcat");if(!whitecat.isPlaying()){whitecat.play("waiting");}
if(!blackcat.isPlaying()){blackcat.play("waiting");}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.getSymbol("blackcat").stop("standup");sym.getSymbol("whitecat").play("waiting");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1083,function(sym,e){sym.getSymbol("blackcat").stop("running");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1667,function(sym,e){sym.getSymbol("blackcat").stop("standup");sym.getSymbol("whitecat").stop("standup");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2500,function(sym,e){sym.getSymbol("blackcat").stop("standup");sym.getSymbol("whitecat").stop("standing");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4000,function(sym,e){sym.getSymbol("blackcat").stop("standup");sym.getSymbol("whitecat").stop("standup");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4083,function(sym,e){sym.getSymbol("whitecat").stop("sitting");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4583,function(sym,e){sym.getSymbol("whitecat").stop("standup");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5000,function(sym,e){sym.getSymbol("whitecat").stop("sitting");sym.stop();var game=sym.getParentSymbol();game.getVariable("onEnd")("missEnd_b");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5500,function(sym,e){sym.getSymbol("blackcat").stop("standup");sym.getSymbol("whitecat").play("waiting");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5583,function(sym,e){sym.getSymbol("blackcat").stop("running");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6167,function(sym,e){sym.getSymbol("blackcat").stop("sitting");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6500,function(sym,e){sym.getSymbol("blackcat").play("waiting");sym.stop();var game=sym.getParentSymbol();game.getVariable("onEnd")("runbackEnd_b");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",7000,function(sym,e){sym.getSymbol("whitecat").stop("standup");sym.getSymbol("blackcat").play("waiting");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",7083,function(sym,e){sym.getSymbol("whitecat").stop("running");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",7667,function(sym,e){sym.getSymbol("whitecat").stop("standup");sym.getSymbol("blackcat").stop("standup");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",8500,function(sym,e){sym.getSymbol("whitecat").stop("standup");sym.getSymbol("blackcat").stop("standing");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",10000,function(sym,e){sym.getSymbol("whitecat").stop("standup");sym.getSymbol("blackcat").stop("standup");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",10083,function(sym,e){sym.getSymbol("blackcat").stop("sitting");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",10583,function(sym,e){sym.getSymbol("blackcat").stop("standup");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",11000,function(sym,e){sym.getSymbol("blackcat").stop("sitting");sym.stop();var game=sym.getParentSymbol();game.getVariable("onEnd")("missEnd_w");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",11500,function(sym,e){sym.getSymbol("whitecat").stop("standup");sym.getSymbol("blackcat").play("waiting");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",11583,function(sym,e){sym.getSymbol("whitecat").stop("running");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",12167,function(sym,e){sym.getSymbol("whitecat").stop("sitting");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",12500,function(sym,e){sym.getSymbol("whitecat").play("waiting");sym.stop();var game=sym.getParentSymbol();game.getVariable("onEnd")("runbackEnd_w");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3250,function(sym,e){sym.stop();var game=sym.getParentSymbol();game.getVariable("onEnd")("hitEnd_b");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",9250,function(sym,e){sym.stop();var game=sym.getParentSymbol();game.getVariable("onEnd")("hitEnd_w");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.stop();var game=sym.getParentSymbol();game.getVariable("onEnd")("runEnd_b");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.play("loop");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",8000,function(sym,e){sym.stop();var game=sym.getParentSymbol();game.getVariable("onEnd")("runEnd_w");});
//Edge binding end
})("catAnimation");
//Edge symbol end:'catAnimation'

//=========================================================

//Edge symbol: 'blackcatSprite_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4500,function(sym,e){sym.play("waiting");});
//Edge binding end
})("whitecatSprite");
//Edge symbol end:'whitecatSprite'

//=========================================================

//Edge symbol: 'playerLifeBar'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTimelineAction(compId,symbolName,"Default Timeline","complete",function(sym,e){});
//Edge binding end
})("playerLifeBar");
//Edge symbol end:'playerLifeBar'

//=========================================================

//Edge symbol: 'enemyLifeBar'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.stop();});
//Edge binding end
})("enemyLifeBar");
//Edge symbol end:'enemyLifeBar'
})(jQuery,AdobeEdge,"EDGE-CATGAME");