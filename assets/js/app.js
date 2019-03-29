(function(){
    "use strict";
    var vm = new Vue({
        el: '#app',
        data: {
            profile: {
                bio: "量子情報",
                img: "https://avatars3.githubusercontent.com/u/14998939?s=460&v=4",
                twitter: "https://twitter.com/sktnkysh",
                github: "https://github.com/fuyutarow",
                email: "fuyutarow@gmail.com",
            },
            readme: " 大学院生です．量子推定に関する分野で，特に量子情報幾何を研究しています．",
            projects: [
                { 
                    title: "強化学習",
                    description: "小脳",
                    date: 2016,
                    url: "https://fuyutarow.github.io/dobutsu-shogi/",
                    youtube: "https://www.youtube.com/watch?v=KwddVMbK4oQ",
                },
                {
                    title: "tomatowk",
                    github: "https://github.com/fuyutarow/tomatowk",
                },
                { 
                    title: "dotfiles",
                    github: "https://github.com/fuyutarow/dotfiles",
                },
                { 
                    title: "どうぶつしょうぎ",
                    description: "どうぶつしょうぎ",
                    date: 2016,
                    url: "https://fuyutarow.github.io/dobutsu-shogi/",
                    github: "https://github.com/fuyutarow/dobutsu-shogi",
                },
                { 
                    title: "ローレンツ・アトラクタ",
                    description: "ルンゲクッタ",
                    date: 2016,
                    url: "https://fuyutarow.github.io/lorenz_attractor/",
                    github: "https://github.com/fuyutarow/lorenz_attractor",
                    img: "https://github.com/fytroo/lorenz_attractor/raw/images/lorenz_attractor.gif",
                },
                { 
                    title: "Honey5",
                    description: "五目並べ",
                    date: 2017,
                    url: "https://fuyutarow.github.io/honey5/",
                    github: 'https://github.com/fuyutarow/honey5',
                    img: 'https://github.com/sktnkysh/honey5/raw/master/docs/honeycobm.gif'
                },
                { 
                    title: "水中ロボコンinJAMSTEC 2015",
                    description: "水中ロボコン",
                },
            ],
        }
    });
})();
