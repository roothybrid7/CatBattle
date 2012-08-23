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
         // 背景の不透明度を下げる
         sym.getSymbol("background").$("fight_bg").css({opacity: 0.3});
         
         // TEST: コードによるアニメーションテスト
         var game = sym.getSymbol("game");
         //game.$("commandMenuArea").hide();
         // カラー選択
         //game.stop("playerWhite");
         var catAnimation = game.getSymbol("catAnimation");
         catAnimation.play();

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // TODO: Define functions and object.
         
         /**
          * Cat color prefix.
          * @type {Object.<string, string>}
          */
         var COLORS = {
           blackcat: "b",
           whitecat: "w"
         };
         
         /**
          * Cat charactor object.
          * @param {string} color
          *     A cat color[blackcat, whitecat].
          * @constructor
          */
         function Cat(color) {
           this.suffix = COLORS[color] || COLORS.blackcat;
           this.hp = 3000;
           this.power = 300;
           this.guard = 200;
         }
         
         function playerActionNotify(action) {
           var game = sym.getSymbol("game");
           game.setVariable("playerAction", action);
           game.getVariable("run")();
         }
         
         sym.setVariable("playerActionNotify", playerActionNotify);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_attackBtn}", "click", function(sym, e) {
         sym.$("commandMenuArea").hide();
         sym.getVariable("playerActionNotify")("attack");
         
         //sym.getSymbol("game").getSymbol("catAnimation").play("run_b");
         // TODO: get catAnimation and play run.
         // get player.

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_defenceBtn}", "click", function(sym, e) {
         sym.$("commandMenuArea").hide();
         sym.getVariable("playerActionNotify")("defence");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "onError", function(sym, e) {
         var compId = e.compId;
         console.log(compId, e, sym, e.originalEvent.target);

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
   
      

      

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         //シンボル変数の値を設定
         sym.setVariable("playerTurn", true);
         
         // TODO:
         // 1. Check player action and decide enemy action.
         // 2. player cat animation.
         // 2.1. Attack
         // 2.1.1. run
         // 2.1.2. hit OR miss.
         // 2.1.3. make label string.(setVariable(miss OR 0000) -> catAnimation);
         // 2.2. Defence
         // 2.2.1. nothing animation.
         // 3. enemy cat animation.
         // 3.1. Attack
         // 3.2. Defence
         function attack() {
           var playerTurn = sym.getVariable("playerTurn"),
               player = sym.getParentSymbol().getVariable("player") || "b";
           if (playerTurn) {
             sym.getSymbol("catAnimation").play("attack_" + player);
           }
           playerTurn = !!!playerTurn;
           sym.getVariable("playerTurn", playerTurn);
         }
         
         function run() {
           var playerAction = sym.getVariable("playerAction"),
               fn = sym.getVariable(playerAction);
           fn && fn();
         }
         
         sym.setVariable("attack", attack);
         sym.setVariable("run", run);

      });
      //Edge binding end

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
         var whitecat = sym.getSymbol("whitecat"),
             blackcat = sym.getSymbol("blackcat");
         
         if (!whitecat.isPlaying()) {
           whitecat.play("waiting");
         }
         if (!blackcat.isPlaying()) {
           blackcat.play("waiting");
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // 黒猫の攻撃アニメーション
         sym.getSymbol("blackcat").stop("standup");
         sym.getSymbol("whitecat").play("waiting");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1083, function(sym, e) {
         // 黒猫の攻撃アニメーション2: running.
         sym.getSymbol("blackcat").stop("running");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1667, function(sym, e) {
         // 黒猫の攻撃アニメーション: 相対
         sym.getSymbol("blackcat").stop("standup");
         sym.getSymbol("whitecat").stop("standup");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         // 黒猫の攻撃: ヒット
         sym.getSymbol("blackcat").stop("standup");
         sym.getSymbol("whitecat").stop("standing");
         
         // TODO:Set label and animation.

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         // 黒猫の攻撃: ミス
         sym.getSymbol("blackcat").stop("standup");
         sym.getSymbol("whitecat").stop("standup");
         
         // Set label and animation.

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4083, function(sym, e) {
         // 白猫かわす
         sym.getSymbol("whitecat").stop("sitting");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4583, function(sym, e) {
         sym.getSymbol("whitecat").stop("standup");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.getSymbol("whitecat").stop("sitting");
         sym.play("runback_b");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5500, function(sym, e) {
         sym.getSymbol("blackcat").stop("standup");
         sym.getSymbol("whitecat").play("waiting");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5583, function(sym, e) {
         sym.getSymbol("blackcat").stop("running");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6167, function(sym, e) {
         sym.getSymbol("blackcat").stop("sitting");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6500, function(sym, e) {
         sym.getSymbol("blackcat").play("waiting");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         // 白猫の攻撃アニメーション開始
         sym.getSymbol("whitecat").stop("standup");
         sym.getSymbol("blackcat").play("waiting");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7083, function(sym, e) {
         // 猫の攻撃アニメーション2: running.
         sym.getSymbol("whitecat").stop("running");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7667, function(sym, e) {
         // 猫の攻撃アニメーション: 相対
         sym.getSymbol("whitecat").stop("standup");
         sym.getSymbol("blackcat").stop("standup");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8500, function(sym, e) {
// 猫の攻撃: ヒット
sym.getSymbol("whitecat").stop("standup");
sym.getSymbol("blackcat").stop("standing");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         // 猫の攻撃: ミス
         sym.getSymbol("whitecat").stop("standup");
         sym.getSymbol("blackcat").stop("standup");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10083, function(sym, e) {
         // 猫かわす
         sym.getSymbol("blackcat").stop("sitting");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10583, function(sym, e) {
         sym.getSymbol("blackcat").stop("standup");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11000, function(sym, e) {
         sym.getSymbol("blackcat").stop("sitting");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11500, function(sym, e) {
         sym.getSymbol("whitecat").stop("standup");
         sym.getSymbol("blackcat").play("waiting");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11583, function(sym, e) {
         sym.getSymbol("whitecat").stop("running");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12167, function(sym, e) {
         sym.getSymbol("whitecat").stop("sitting");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12500, function(sym, e) {
         sym.getSymbol("whitecat").play("waiting");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3250, function(sym, e) {
sym.play("runback_b");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9250, function(sym, e) {

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();
         sym.play("hit_b");

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.play("loop");

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