#Game

##Web-fonts

```CSS
'Peralta', serif
<link href='http://fonts.googleapis.com/css?family=Peralta' rel='stylesheet' type='text/css'    >

'Spirax', serif
<link href='http://fonts.googleapis.com/css?family=Spirax' rel='stylesheet' type='text/css'>
```

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
- 静止時のアニメーション含む
- 黒猫いろいろな姿を静止状態で表したもの
- 各状態をclipで切り出して使うが、それをTimeline上に並べている
  - 使用する場合は、Edge APIを使いTimeline上に設定したラベルを通してSprite画像を取得する
    - 例: `sym.stop("running");` 走っている画像を取得

###catsAnimation_playerBlack, catsAnimation_playerWhite

- 2匹の猫のSprite画像を使ってAnimationさせるSymbol
- 様々なアクションを実装する(攻撃 -> 攻撃くらう、回避)
- player選択によって、symbolを変更する(game symbolのコードで変更)
- アクション完了後に、game symbolに通知する必要がある

###game

- ゲーム用Symbol
- ゲーム全体のアニメーションやユーザ入力を行う
- spriteSymbolを使ってアニメーションを行ったり
- コマンド入力などの制御を行ったり


###コードで動的にanimateする

1. jQuery.animateを使う(jquery.easing pluing拡張)[GPUではなくCPU処理なので複雑なアニメーションはちょっと]
2. jQuery.cssでcss3アニメーションを行う(ベンダープレフィックスとか位置計算とか大変)
3. あらかじめ自前でCSSファイルを作成しておいて、Edgeのアクション関数内で、jQuery.addClassとかを使ってCSS3アニメーションを適用する
  - cssファイルに記述するので、2よりはミスが減る
  - htmlファイルにcssを読み込ませる必要がある
4. Edge内部で使用している独自拡張したCSS3アニメーションを行うjQuery関数を使う(jQuery.rotate, jQuery.transform, jQuery.translate等)
  - Edge API Documentに記載がないので使っていいものかわからない

