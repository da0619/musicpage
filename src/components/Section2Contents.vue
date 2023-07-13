<template>
    <div>
        <div class="genre_station">
            <h3>
                <span class="genre_station_title">Genre Station</span>
            </h3>
            <div>
                <v-ul class="genre_nav">
                    <li v-for="moodBox in moodThema" :key="moodBox" class="list_item">
                        <div class="play_area">
                            <div class="genre_area">
                                <a href="#">
                              <v-img v-bind:src="moodBox.url" v-bind:alt="moodBox.alt" id="genreImg"></v-img>
                            </a>
                            <a href="#" class="player" @click="toggleAudio(boxList.audioUrl)">
                                        <span class="playImg blind">스태이션재생하기</span>
                                        <img v-if="!isPlaying" src="../assets/image/player.png" class="playing">
                                        <img v-else src="../assets/image/stop.png" class="playing">
                                    </a>
                                    <div class="audio-bar" v-show="isPlaying">
                                        <div class="track">
                                        <div class="progress" :style="{width:progressWidth}"></div>
                                        </div>
                                    </div>
                                    </div>
                        </div>
                    </li>
                </v-ul>
            </div>
        </div>
    </div>
</template>


<script>
import Section2Contents from './Section2Contents.vue';
import MusicContetnsVue from './MusicContents.vue'
import SectionContents from './SectionContents.vue';
export default {
    data() {
    return {
        audio: null,
        isPlaying: false,
    moodThema: [
                {
                    url: 'https://music-phinf.pstatic.net/20190717_280/1563371916540i7TdP_PNG/dj_3_genre_1.png?type=f360',
                    alt: '요즘k-pop',
                    audioUrl: require("../assets/mp3/aespa-02-Spicy.mp3"),
                },
                {
                    url: 'https://music-phinf.pstatic.net/20190717_294/1563371930617qgT9H_PNG/dj_3_genre_2.png?type=f360',
                    alt: '요즘pop',
                    audioUrl: require("../assets/mp3/aespa-02-Spicy.mp3"),
                },
                {
                    url: 'https://music-phinf.pstatic.net/20190717_279/1563371941301koKcB_PNG/dj_3_genre_3.png?type=f360',
                    alt: '여자아이돌',
                    audioUrl: require("../assets/mp3/aespa-02-Spicy.mp3"),
                },
                {
                    url: 'https://music-phinf.pstatic.net/20190717_99/1563371956581gtQrS_PNG/dj_3_genre_4.png?type=f360',
                    alt: '남자아이돌',
                    audioUrl: require("../assets/mp3/aespa-02-Spicy.mp3"),
                    
                },
                {
                    url: 'https://music-phinf.pstatic.net/20190717_231/1563371969001XG9e6_PNG/dj_3_genre_5.png?type=f360',
                    alt: '슬픈발라드',
                    audioUrl: require("../assets/mp3/aespa-02-Spicy.mp3"),
                },
                {
                    url: 'https://music-phinf.pstatic.net/20190717_232/1563371979830g7WlP_PNG/dj_3_genre_6.png?type=f360',
                    alt: '편안한앤비',
                    audioUrl: require("../assets/mp3/aespa-02-Spicy.mp3"),
                },
                {
                    url: 'https://music-phinf.pstatic.net/20190717_19/1563371989398zXTlJ_PNG/dj_3_genre_7.png?type=f360',
                    alt: '요즘국힙',
                    audioUrl: require("../assets/mp3/aespa-02-Spicy.mp3"),
                },
                {
                    url: 'https://music-phinf.pstatic.net/20190717_156/1563372004386TBVUz_PNG/dj_3_genre_8.png?type=f360',
                    alt: '요즘외힙',
                    audioUrl: require("../assets/mp3/aespa-02-Spicy.mp3"),
                },
                {
                    url: 'https://music-phinf.pstatic.net/20190717_4/15633720146099qp8G_PNG/dj_3_genre_9.png?type=f360',
                    alt: '요즘락',
                    audioUrl: require("../assets/mp3/aespa-02-Spicy.mp3"),
                },
                {
                    url: 'https://music-phinf.pstatic.net/20190717_174/1563372025425QcCYF_PNG/dj_3_genre_10.png?type=f360',
                    alt: '락레전드',
                    audioUrl: require("../assets/mp3/aespa-02-Spicy.mp3"),
                },
                {
                    url: 'https://music-phinf.pstatic.net/20200408_95/1586329462461vEXWy_PNG/dj_3_genre_27_EDM.png?type=f360',
                    alt: 'EDM',
                    audioUrl: require("../assets/mp3/aespa-02-Spicy.mp3"),
                },
                {
                    url: 'https://music-phinf.pstatic.net/20200408_23/15863294839281Xdrt_PNG/dj_3_genre_28_TECHNO.png?type=f360',
                    alt: 'TECHNO',
                    audioUrl: require("../assets/mp3/aespa-02-Spicy.mp3"),
                },
                {
                    url: 'https://music-phinf.pstatic.net/20190717_96/1563372036114l44fO_PNG/dj_3_genre_11.png?type=f360',
                    alt: '재즈보컬',
                    audioUrl: require("../assets/mp3/aespa-02-Spicy.mp3"),
                },
                {
                    url: 'https://music-phinf.pstatic.net/20190717_200/1563372046523807as_PNG/dj_3_genre_12.png?type=f360',
                    alt: '재즈피아노',
                    audioUrl: require("../assets/mp3/aespa-02-Spicy.mp3"),
                },
                {
                    url: 'https://music-phinf.pstatic.net/20190717_144/1563372056614GXUwM_PNG/dj_3_genre_13.png?type=f360',
                    alt: '국내인디',
                    audioUrl: require("../assets/mp3/aespa-02-Spicy.mp3"),
                },
                {
                    url: 'https://music-phinf.pstatic.net/20190717_194/1563372066530GVknv_PNG/dj_3_genre_14.png?type=f360',
                    alt: '해외인디',
                    audioUrl: require("../assets/mp3/aespa-02-Spicy.mp3"),
                },
                {
                    url: 'https://music-phinf.pstatic.net/20190717_71/1563372076149daOFL_PNG/dj_3_genre_15.png?type=f360',
                    alt: '90년대가요',
                    audioUrl: require("../assets/mp3/aespa-02-Spicy.mp3"),
                },
                {
                    url: 'https://music-phinf.pstatic.net/20190717_25/1563372086749r0Jfe_PNG/dj_3_genre_16.png?type=f360',
                    alt: '90년대pop',
                    audioUrl: require("../assets/mp3/aespa-02-Spicy.mp3"),
                },
                {
                    url: 'https://music-phinf.pstatic.net/20190717_12/1563372097890NSssB_PNG/dj_3_genre_17.png?type=f360',
                    alt: '80년대가요',
                    audioUrl: require("../assets/mp3/aespa-02-Spicy.mp3"),
                },
                {
                    url: 'https://music-phinf.pstatic.net/20190717_109/15633721096810fFma_PNG/dj_3_genre_18.png?type=f360',
                    alt: '80년대pop',
                    audioUrl: require("../assets/mp3/aespa-02-Spicy.mp3"),
                },
                {
                    url: 'https://music-phinf.pstatic.net/20190717_294/15633721206892HiBL_PNG/dj_3_genre_19.png?type=f360',
                    alt: '60,70년대가요',
                    audioUrl: require("../assets/mp3/aespa-02-Spicy.mp3"),
                },
                {
                    url: 'https://music-phinf.pstatic.net/20190717_261/1563372129689dcr5i_PNG/dj_3_genre_20.png?type=f360',
                    alt: '60,70년대pop',
                    audioUrl: require("../assets/mp3/aespa-02-Spicy.mp3"),
                },
                {
                    url: 'https://music-phinf.pstatic.net/20190717_160/1563372138920EHpAE_PNG/dj_3_genre_21.png?type=f360',
                    alt: '드라마OST',
                    audioUrl: require("../assets/mp3/aespa-02-Spicy.mp3"),
                },
                {
                    url: 'https://music-phinf.pstatic.net/20190717_113/1563372147355UlM0D_PNG/dj_3_genre_22.png?type=f360',
                    alt: '영화OST',
                    audioUrl: require("../assets/mp3/aespa-02-Spicy.mp3"),
                },
            ],

methods: {
    toggleAudio(audioUrl) {
      if (this.audio && this.audio.src === audioUrl) {
        if (this.isPlaying) {
          this.audio.pause();
          this.isPlaying = false;
        } else {
          this.audio.play();
          this.isPlaying = true;
        }
      } else {
        if (this.audio) {
          this.audio.pause();
        }
        this.audio = new Audio(audioUrl);
        this.audio.play();
        this.isPlaying = true;
      }},
},
    components: { Section2Contents }
}
    },
    mounted() {
    this.$root.$emit('modal-image-click');
    this.audio = new Audio("your-audio-url");
    this.audio.addEventListener("ended", () => {
      this.isPlaying = false;
    });
  },
}
</script>


<style scope>
* {
    margin: 0;
    padding: 0;
}

.blind {
    display: none;
}

a {
    text-decoration: none;
    color: #000000;
}

v-ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}

v-ul li {
    list-style: none;
}

.genre_contents {
    /* border: 2px solid blueviolet; */
    width: 1500px;
    height: auto;
    margin: 0 auto;
    position: absolute;
    padding-left: 75px;
}

h3 {
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    font-family: "맑은고딕";
}

h2.genre_title {
    padding-bottom: 20px;
    letter-spacing: -.5px;
    color: #ffffff;
    font-size: 2em;
    line-height: 39px;
    border: 0px solid rgb(240, 230, 229);
}

.list_item {
    float: left;
    width: 220px;
    padding: 0 20px 20px 0;
    vertical-align: top;
    box-sizing: border-box;
    border: 0px solid pink;
}

.player {
    position: absolute;
    bottom: 0;
    left: 0;
}

.genre_station {
    border: 0px solid green;
    padding-top: 50px;
    position: relative;
    float: left;
    width: 1550px;
    height: auto;
}

.genre_station_title {
    display: inline-block;
    padding-left: 28px;
    font-size: 2em;
    font-weight: 700;
    letter-spacing: -.5px;
    vertical-align: top;
    color: #fff;
}

.mood_image {
    width: 100%;
    height: 100%;
}
#genreImg {
    width:100%;
    height: 100%;
}
.play_area{
    position: relative;
}
v-ul .genre_nav {
    position: absolute;
    left: 0;
    top: 0;
}
.link:after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 90px;
    background: -webkit-gradient(linear,left top,left bottom,from(transparent),to(rgba(0,0,0,.25)));
    background: linear-gradient(transparent,rgba(0,0,0,.25));
    opacity: 0;
    -webkit-transition: opacity .2s ease-in;
    transition: opacity .2s ease-in;
    content: "";
}
a.player span.playImg{
    position: relative;
}
a.player img.playing,a.player img.stop{
position: absolute;
top: 0px;
left: 0;
width: 45px;
padding: 2px 5px 2px 5px;
display: none;
}
.genre_area:hover a.player img.playing,.genre_area:focus a.player img.playing{
    display: block;
}
.genre_area:active a.player img.stop{
display: block;
}
.genre_area:active a.player img.playing {
    display: none;
}
</style>
