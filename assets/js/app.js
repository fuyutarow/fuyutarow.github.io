(function() {

"use strict";

const data = {
  profile : {
    bio : "量子情報",
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
      title : "arXimedes.io",
      date : 2019,
      img : "images/arXimedes-thumnail.png",
      url : '//arximedes.netlify.com',
      web : '//arximedes.netlify.com',
      description : `
６時間くらいで一気につくったarXivの論文を検索するためのWebアプリ．
Netlifyでホスティング.
            `,
    },
    {
      title : "ポートフォリオサイト",
      date : 2019,
      github : "//github.com/fuyutarow/fuyutarow.github.io",
      description : `
このサイトです．GitHub Pagesでホスティング．
[HTML5 UP](//html5up.net)のデザインを使っています．
この構成なら，Nodeを知らない人でもfreeのHTML，CSSのデザインを持ってきてVueで柔軟にポートフォリオをつくることができると思います．
            `,
    },
    {
      title : "Responder-exmaples",
      date : 2019,
      github : "//github.com/fuyutarow/Responder-template",
      description : `
ResopnderとDjango DB migrationの連携．
ResponderのおかげでWebSocketで双方向通信も，GraphQLも簡単に導入できて，しかもDBとのマイグレーションだけDjangoを用いています．
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
ポモドーロアプリです．Vue, Electronでつくりました．(PWAでつくればよかった...)．インストール方法今度書きます．
            `,
    },
    {
      title : "機械学習支援アプリケーション",
      date : 2018,
      description : `
インターン先で開発しています．そのうち公開できる日を楽しみにしています．DRF(Django Rest Framework), PostgreSQL, Vue, Docker, Tensorflow, scikit-learn
            `,
    },
    {
      title : "強化学習ハッカソン",
      date : 2017,
      url : "//fuyutarow.github.io/dobutsu-shogi/",
      youtube : "//www.youtube.com/watch?v=KwddVMbK4oQ",
      description : `
学部3年の夏，[第3回全脳アーキテクチャ・ハッカソン](https://wba-initiative.org/2755/)に出場しました．この１ヵ月間，ずっと海馬の勉強をしていました．
        `,
    },
    {
      title : "アフィリエイト",
      date : 2016,
      description : `
アフィリエイトサイトを運用して, WordPress, Nginx, Docker
            `,
    },
    {
      title : "Honey5",
      date : 2017,
      img : '//github.com/sktnkysh/honey5/raw/master/docs/honeycobm.gif',
      url : "//fuyutarow.github.io/honey5/",
      github : '//github.com/fuyutarow/honey5',
      description : `
六方格子上の五目並べ．
一人で遊べるように簡単なゲームAI(Minmax)が相手をしてくれます．
            `,
    },
    {
      title : "どうぶつしょうぎ",
      date : 2016,
      url : "//fuyutarow.github.io/dobutsu-shogi/",
      github : "//github.com/fuyutarow/dobutsu-shogi",
      description : `
どうぶつしょうぎ
一人で遊べるように簡単なゲームAI(Minmax)が相手をしてくれます．
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
      date : 2015,
      img : "images/danmaku-thumnail.png",
      url : "//fuyutarow.github.io/danmaku",
      github : "//github.com/fuyutarow/danmaku",
      description : `
個人的に作ったプログラムのうち現存する最古のもの．
これ以前のものは，GitHubにあげる習慣がなくて失われてしまった...
Arduinoのプログラムとか，ライフゲームのプログラムとか結構作ってたのになあ...
            `,
    },
    {
      title : "Cacco",
      date : 2016,
      description : `
[Cacco inc.](//cacco.co.jp)でインターン, Djangoアプリ開発をしていました．当時，Pythonでインターンを受け入れてくださった数少ない企業様でした．お世話になりました．
            `,
    },
    {
      title : "水中ロボコンinJAMSTEC 2015",
      date : 2015,
      img : "images/iruka-2015.gif",
      description : "水中ロボコン",
    },
  ],
}

             Vue.use(VueMarkdown);

const vm = new Vue({
  el : '#app',
  data : data,
});

})();
