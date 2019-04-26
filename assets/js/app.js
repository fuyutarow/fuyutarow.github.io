(function(){


"use strict";


const data = {
    profile: {
        bio: "量子情報",
        img: "images/yasuna+.gif",
        // img: "https://avatars3.githubusercontent.com/u/14998939?s=460&v=4",
        twitter: "https://twitter.com/sktnkysh",
        github: "https://github.com/fuyutarow",
        email: "fuyutarow@gmail.com",
    },
    readme: `
大学院生です．量子推定に関する分野で，特に量子情報幾何をテーマに研究しています．

パラメータ推定に興味を持っています．
統計や量子論に限らず，機械学習，制御理論，信号処理など，パラメータ推定という観点から一纏めに理解したいです．


いくつかプログラムを組んだりソフトウェアを作ったりしていました．
以下にいくつか掲載します．
    `,
    projects: [
        {
            title: "[arXimedes.io](arXimedes.net)",
            description: `
６時間くらいで一気につくったarXivの論文を検索するためのWebアプリ．
            `,
            web: 'arximdes.net',
            date: 2019,
        },
        {
            title: "ポートフォリオサイト",
            description: `
このサイトです．github.ioでホスティング．この売りはNodeを立てていないのがポイントだと思います．ネットにはひろくHTML
Vueの強みを活かせるのはこういうポートフォリオサイトかなと思います．
[HTML5 UP](https://html5up.net)
            `,
            github: "https://github.com/fuyutarow/Responder-template",
            date: 2019,
        },
        {
            title: "都々逸サーバ GraphQL API",
            description: `
私は都々逸が好きです．
Responder-templateでつくりました．
        `,
            github: "https://github.com/fuyutarow/Responder-template",
            date: 2019,
        },
        {
            title: "Responder-exmaples",
            description: `
ResopnderとDjango DB migrationの連携．
ASGIなWebSocketで双方向通信\
も，GraphQLも，
        `,
            github: "https://github.com/fuyutarow/Responder-template",
            date: 2019,
        },
        {
            title: "dotfiles",
            github: "https://github.com/fuyutarow/dotfiles",
            description: `
私のdotfiles
        `,
        },
        {
            title: "機械学習支援アプリケーション",
            description: `
インターン先で開発しています．そのうち公開できる日を楽しみにしています．DRF(Django Rest Framework), PostgreSQL, Vue, Docker, Tensorflow, scikit-learn
            `,
            date: 2018,
        },
        {
            title: "強化学習",
            description: `
学部3年の夏，第3回全脳アーキテクチャハッカソンで，海馬の勉強をしていました．
        `,
            date: 2017,
            url: "https://fuyutarow.github.io/dobutsu-shogi/",
            youtube: "https://www.youtube.com/watch?v=KwddVMbK4oQ",
        },
        {
            title: "アフィリエイト",
            description: `
アフィリエイトサイトを運用して, WordPress, Nginx, Docker
            `,
            date: 2016,
        },
        {
            title: "tomatowk",
            github: "https://github.com/fuyutarow/tomatowk",
            date: 2018,
        },
        {
            title: "Honey5",
            description: `
六方格子上の五目並べ
素朴なMinmaxがゲームAIとして走っています．
            `,
            date: 2017,
            url: "https://fuyutarow.github.io/honey5/",
            github: 'https://github.com/fuyutarow/honey5',
            img: 'https://github.com/sktnkysh/honey5/raw/master/docs/honeycobm.gif'
        },
        {
            title: "どうぶつしょうぎ",
            description: `
どうぶつしょうぎ
素朴なMinmaxがゲームAIとして走っています．
            `,
            date: 2016,
            url: "https://fuyutarow.github.io/dobutsu-shogi/",
            github: "https://github.com/fuyutarow/dobutsu-shogi",
        },
        {
            title: "ローレンツ・アトラクタ",
            description: `
ルンゲクッタ法でローレンツ方程式の数値解を求めています．
            `,
            date: 2016,
            url: "https://fuyutarow.github.io/lorenz_attractor/",
            github: "https://github.com/fuyutarow/lorenz_attractor",
            img: "https://github.com/fytroo/lorenz_attractor/raw/images/lorenz_attractor.gif",
        },
        {
            title: "Cacco",
            description: `
[Cacco inc.](//cacco.co.jp)でインターン, Djangoアプリ開発をしていました．当時，Pythonでインターンを受け入れてくださった数少ない企業様でした．お世話になりました．
            `,
            date: 2016,
        },
        {
            title: "水中ロボコンinJAMSTEC 2015",
            description: "水中ロボコン",
            date: 2015,
        },
    ],
}


Vue.use(VueMarkdown);

const vm = new Vue({
    el: '#app',
    data: data,
});

})();
