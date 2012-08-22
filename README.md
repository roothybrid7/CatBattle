#Game

##Symbols

Stage
  - menu(modal)
  - game
    - commands
    - lifebars
    - catsAnimation
      L: 0px
      T: 210px
      W: 540px
      H: 300px
  - background

###background

- 背景用Symbol
- エレメントやSymbol配置用のガイド領域を追加したもの(header, contents)

###blackcatSprite, whitecatSprite

- Sprite画像を持ったSymbol
- 黒猫いろいろな姿を静止状態で表したもの
- 各状態をclipで切り出して使うが、それをTimeline上に並べている
  - 使用する場合は、Edge APIを使いTimeline上に設定したラベルを通してSprite画像を取得する
    - 例: `sym.stop("running");` 走っている画像を取得

###game

- ゲーム用Symbol
- ゲーム全体のアニメーションやユーザ入力を行う
- spriteSymbolを使ってアニメーションを行ったり
- コマンド入力などの制御を行ったり
