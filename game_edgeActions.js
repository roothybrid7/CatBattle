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
         var catAnimation = sym.getSymbol("game").getSymbol("catAnimation");
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