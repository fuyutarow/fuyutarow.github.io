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
                    title: "Honey5",
                    description: "五目並べ",
                    url: 'https://github.com/fuyutarow/honey5',
                    img: 'https://github.com/sktnkysh/honey5/raw/master/docs/honeycobm.gif'
                }

            ],
        }
    });
})();