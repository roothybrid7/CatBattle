/***********************
* Adobe Edge コンポジションアクション
*
* このファイルを編集する際には注意が必要です。必ず関数シグニチャと
* 「Edge」で始まるコメントを保持して、 Adobe Edge 内からこれらのアクションを
* 操作可能な状態にしておいてください。
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // よく使用する Edge クラスのエイリアス

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // TEST: コードによるアニメーションテスト
         var game = sym.getSymbol("game");
         var catAnimation = game.getSymbol("catAnimation");
         catAnimation.play();

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // TODO: Define functions and object.

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

//=========================================================
   //Edge symbol: 'backgroundArea'
   (function(symbolName) {

   })("background");
   //Edge symbol end:'background'

   //=========================================================
   
   //Edge symbol: 'game'
   (function(symbolName) {   
   
      

      

   })("game");
   //Edge symbol end:'game'

   //=========================================================
   
   //Edge symbol: 'catAnimation_black'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         sym.play("waiting");

      });
      //Edge binding end

   })("blackcatSprite");
   //Edge symbol end:'blackcatSprite'

   //=========================================================
   
   //Edge symbol: 'catAnimation'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // 繰り返しアニメーション 猫待機状態
         sym.getSymbol("whitecat").play("waiting");
         sym.getSymbol("blackcat").play("waiting");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // 黒猫の攻撃アニメーション
         sym.getSymbol("blackcat").stop("standup");
         sym.getSymbol("whitecat").play("waiting");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 583, function(sym, e) {
         // 黒猫の攻撃アニメーション2: running.
         sym.getSymbol("blackcat").stop("running");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1167, function(sym, e) {
         // 黒猫の攻撃アニメーション: 相対
         sym.getSymbol("blackcat").stop("standup");
         sym.getSymbol("whitecat").stop("standup");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // 黒猫の攻撃: ヒット
         sym.getSymbol("blackcat").stop("standup");
         sym.getSymbol("whitecat").stop("standing");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         // 黒猫の攻撃: ミス
         sym.getSymbol("blackcat").stop("standup");
         sym.getSymbol("whitecat").stop("standup");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3583, function(sym, e) {
         // 白猫かわす
         sym.getSymbol("whitecat").stop("sitting");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4083, function(sym, e) {
         sym.getSymbol("whitecat").stop("standup");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4250, function(sym, e) {
         sym.getSymbol("whitecat").stop("sitting");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.getSymbol("blackcat").stop("standup");
         sym.getSymbol("whitecat").play("waiting");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5083, function(sym, e) {
         sym.getSymbol("blackcat").stop("running");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5667, function(sym, e) {
         sym.getSymbol("blackcat").stop("sitting");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5756, function(sym, e) {
         sym.getSymbol("blackcat").play("waiting");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6500, function(sym, e) {
         // 白猫の攻撃アニメーション開始
         sym.getSymbol("whitecat").stop("standup");
         sym.getSymbol("blackcat").play("waiting");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6583, function(sym, e) {
         // 猫の攻撃アニメーション2: running.
         sym.getSymbol("whitecat").stop("running");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7167, function(sym, e) {
         // 猫の攻撃アニメーション: 相対
         sym.getSymbol("whitecat").stop("standup");
         sym.getSymbol("blackcat").stop("standup");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
// 猫の攻撃: ヒット
sym.getSymbol("whitecat").stop("standup");
sym.getSymbol("blackcat").stop("standing");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9500, function(sym, e) {
         // 猫の攻撃: ミス
         sym.getSymbol("whitecat").stop("standup");
         sym.getSymbol("blackcat").stop("standup");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9583, function(sym, e) {
         // 猫かわす
         sym.getSymbol("blackcat").stop("sitting");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10083, function(sym, e) {
         sym.getSymbol("blackcat").stop("standup");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10250, function(sym, e) {
         sym.getSymbol("blackcat").stop("sitting");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11000, function(sym, e) {
         sym.getSymbol("whitecat").stop("standup");
         sym.getSymbol("blackcat").play("waiting");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11083, function(sym, e) {
         sym.getSymbol("whitecat").stop("running");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11667, function(sym, e) {
         sym.getSymbol("whitecat").stop("sitting");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11750, function(sym, e) {
         sym.getSymbol("whitecat").play("waiting");

      });
      //Edge binding end

   })("catAnimation");
   //Edge symbol end:'catAnimation'

   //=========================================================
   
   //Edge symbol: 'blackcatSprite_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         sym.play("waiting");

      });
         //Edge binding end

      })("whitecatSprite");
   //Edge symbol end:'whitecatSprite'

})(jQuery, AdobeEdge, "EDGE-6391929");