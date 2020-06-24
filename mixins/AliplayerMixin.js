export const AliplayerMixin = {
    data() {
        return {
            playerReady: false,
            checkingPlayerReady: null
        };
    },
    watch: {
        playerReady() {
            if (this.afterPlayerReady) {
                this.afterPlayerReady();
            }
            clearInterval(this.checkingPlayerReady);
        }
    },
    head() {
        return {
            script: [{
                src: "https://g.alicdn.com/de/prismplayer/2.8.2/aliplayer-h5-min.js",
                defer: true
            }],
            link: [{
                rel: "stylesheet",
                href: "/aliplayer-min.css"
            }]
        };
    },
    methods: {
        afterPlayerReady() {
            for (let i = 0, size = this.contents.videos.length; i < size; i++) {
                new Aliplayer({
                    id: `player-${i}`,
                    source: `${this.contents.videos[i].src}`,
                    width: "100%",
                    height: "500px",
                    autoplay: false,
                    isLive: false,
                    cover: `${this.contents.videos[i].cover}`,
                    rePlay: false,
                    playsinline: true,
                    preload: true,
                    language: "zh-cn",
                    controlBarVisibility: "hover",
                    useH5Prism: true,
                    skinLayout: [{
                            name: "bigPlayButton",
                            align: "blabs",
                            x: 30,
                            y: 80
                        },
                        {
                            name: "H5Loading",
                            align: "cc"
                        },
                        {
                            name: "errorDisplay",
                            align: "tlabs",
                            x: 0,
                            y: 0
                        },
                        {
                            name: "infoDisplay"
                        },
                        {
                            name: "tooltip",
                            align: "blabs",
                            x: 0,
                            y: 56
                        },
                        {
                            name: "thumbnail"
                        },
                        {
                            name: "controlBar",
                            align: "blabs",
                            x: 0,
                            y: 0,
                            children: [{
                                    name: "progress",
                                    align: "blabs",
                                    x: 0,
                                    y: 44
                                },
                                {
                                    name: "playButton",
                                    align: "tl",
                                    x: 15,
                                    y: 12
                                },
                                {
                                    name: "timeDisplay",
                                    align: "tl",
                                    x: 10,
                                    y: 7
                                },
                                {
                                    name: "fullScreenButton",
                                    align: "tr",
                                    x: 10,
                                    y: 12
                                },
                                {
                                    name: "volume",
                                    align: "tr",
                                    x: 5,
                                    y: 10
                                }
                            ]
                        }
                    ]
                });
            }
        }
    },
    mounted() {
        let localThis = this;
        this.checkingPlayerReady = setInterval(() => {
            if (window.Aliplayer) {
                localThis.playerReady = true;
            }
        }, 500);
    }
};