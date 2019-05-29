(function() {

"use strict";

const data = {
  profile : {
    img : "images/yasuna+.gif",
    twitter : "//twitter.com/sktnkysh",
    github : "//github.com/fuyutarow",
    email : "fuyutarow@gmail.com",
  },
  readme : `
大学院生です．量子推定に関する分野で，特に量子情報幾何をテーマに研究しています．

パラメータ推定に興味を持っています．
統計や量子論に限らず，機械学習，制御理論，信号処理など，パラメータ推定という観点から一纏めに理解したいです．

いくつかプログラムを組んだりソフトウェアを作ったりしていました．
以下にいくつか掲載します．
    `,
  projects : [
    {
      title : "convert-json-env",
      date : 2019,
      github : '//github.com/fuyutarow/convert-json-env',
      description : `
A CLI tool for converting JSON to env file.

VueアプリをNetlifyにホスティングする際に，firebaseの設定を環境変数として定義する必要がありました．
このツールにより，firebaseの設定ファイル(JSON)から速やかにenv形式に変更できます．

需要はともかく，私にとってはじめてのnpmパッケージです．
            `,
    },
    {
      title : "arXimedes.io",
      date : 2019,
      img : "images/arXimedes-thumnail.png",
      url : '//arximedes.io',
      web : '//arximedes.io',
      description : `
鋭意開発中．arXivの論文:newspaper:を検索するためのWebアプリ(PWA)．
AndroidでもiPhoneでもMacでもWindowsでもインストールできます．

予定している仕様
- firebase経由でsocial login
- Google Play, App Store, Windows Storeで配信

TypeScript, Vue, [Vuetify](//vuetifyjs.com/en/), [Netlify](//www.netlify.com)
            `,
    },
    {
      title : "ポートフォリオサイト",
      date : 2019,
      github : "//github.com/fuyutarow/fuyutarow.github.io",
      description : `
このサイトです．

フリーのHTML/CSSテンプレートにVueを組み込んでポートフォリオを作成しています．

[HTML5 UP](//html5up.net)を使用．GitHub Pagesでホスティング．
            `,
    },
    {
      title : "Responder-exmaples",
      date : 2019,
      github : "//github.com/fuyutarow/Responder-template",
      description : `
ResopnderとDjango DB migrationの連携．
[Responder](https://python-responder.org/en/latest/)はPythonのモダンなWebフレームワークで，WebSocket，GraphQLに対応しています．
DBとのマイグレーションにだけDjangoを用いています．

この構成でなにか機械学習アプリケーションを立てたい...
        `,
    },
    {
      title : "dotfiles",
      github : "//github.com/fuyutarow/dotfiles",
      description : `
私のdotfiles
        `,
    },
    {
      title : "tomatowk",
      date : 2018,
      img : "images/tomatowk-thumnail.png",
      url : "//github.com/fuyutarow/tomatowk/tree/electron",
      github : "//github.com/fuyutarow/tomatowk/tree/electron",
      description : `
:tomato:ポモドーロアプリ:rocket:です．Vue, Electronでつくりました．(PWAでつくればよかった...)．インストール方法今度書きます．
            `,
    },
    {
      title : "機械学習支援アプリケーション",
      date : 2018,
      description : `
インターン先で開発しています．公開できる日を楽しみにしています．DRF(Django Rest Framework), PostgreSQL, Vue, Docker, Tensorflow, scikit-learn
            `,
    },
    {
      title : "強化学習ハッカソン",
      date : 2017,
      url : "//fuyutarow.github.io/dobutsu-shogi/",
      youtube : "//www.youtube.com/watch?v=KwddVMbK4oQ",
      description : `
学部3年の夏，[第3回全脳アーキテクチャ・ハッカソン](https://wba-initiative.org/2755/)に出場しました．
        `,
    },
    {
      title : "Honey5",
      date : 2017,
      img : '//github.com/sktnkysh/honey5/raw/master/docs/honeycobm.gif',
      url : "//fuyutarow.github.io/honey5/",
      github : '//github.com/fuyutarow/honey5',
      description : `
六方格子:bee:上の五目並べ．
一人で遊べるように簡単なゲームAI(Minmax)が相手をしてくれます．

TypeScript, React
            `,
    },
    {
      title : "どうぶつしょうぎ",
      date : 2017,
      img : 'images/doubutsu-shogi.png',
      url : "//fuyutarow.github.io/dobutsu-shogi/",
      github : "//github.com/fuyutarow/dobutsu-shogi",
      description : `
どうぶつしょうぎ:elephant:
一人で遊べるように簡単なゲームAI(Minmax)が相手をしてくれます．

TypeScript, React
            `,
    },
    {
      title : "アフィリエイト",
      date : 2016,
      description : `
友達とアフィリエイトサイトを運用していました．
３ヶ月で100万PVを達成しました:v:

Google Analytics, WordPress, Nginx, Docker
            `,
    },
    {
      title : "ローレンツ・アトラクタ",
      date : 2016,
      img :
          "//github.com/fytroo/lorenz_attractor/raw/images/lorenz_attractor.gif",
      url : "//fuyutarow.github.io/lorenz_attractor/",
      github : "//github.com/fuyutarow/lorenz_attractor",
      description : `
ルンゲクッタ法でローレンツ方程式の数値解を求めています．
space打鍵でパラメータがランダムに変わり，アトラクタの形状が変化します．
            `,
    },
    {
      title : "だんまく",
      date : 2016,
      img : "images/danmaku-thumnail.png",
      url : "//fuyutarow.github.io/danmaku",
      github : "//github.com/fuyutarow/danmaku",
      description : `
ゼロプレイヤーゲーム．AliceとBobが弾幕を撃ち合う様子を眺めて楽しみます．
個人的に作ったプログラムのうち現存する最古のもの．

学部１年の頃は他にもいくつかプログラムを組んでいました．
Webスクレイピング，Arduino上のプログラム，Unity，デスクトップマスコット，enchant.js，Qt上でライフゲームなどいろいろ．
自作PCを組んで自宅サーバを立てたり．
ただ当時はGitHubでレポジトリとして保存する習慣がなく，これらのプログラムはすべて消失してしまいました... :disappointed_relieved:
            `,
    },
    {
      title : "Cacco",
      date : 2016,
      description : `
[Cacco inc.](//cacco.co.jp)でインターン, Djangoアプリ開発をしていました．
            `,
    },
    {
      title : "水中ロボコンinJAMSTEC 2015",
      date : 2015,
      video : "images/iruka-2015.mp4",
      description : `
大学の仲間と水中ロボコンに出ました．イルカ:dolphin:型の水中ロボコンを開発して

動画は自分がプロトタイプとしてつくったものです．(これは水中で動きません)

工業科出身の友達の技術や考え方に，終始感銘を受けました．このプロジェクトのおかげで友達ができました:smile: そして大学での過ごし方を方向づける大きな契機になりました．
      `
    },
    {
      title : "Udacity",
      date : 2015,
      description : `
はじめてのプログラミングは，[Udacity](//www.udacity.com)という学習サイトで[Webクローラ・スクレイピング](//www.youtube.com/watch?v=CDXOcvUNBaA)というレッスンで学びました．

大学入学前の１ヵ月でWindows Vista，Cygwin上でPython2.6を実行させていた記憶があります．
            `,
    },
  ],
}

             Vue.use(VueMarkdown);

const vm = new Vue({
  el : '#app',
  data : data,
});

})();
