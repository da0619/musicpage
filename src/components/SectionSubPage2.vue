<template>
    <div>
        <div id="Section_3">
            <h2 class="genre_title">장르별 스테이션</h2>
            <a href="#" role="button" id="thema3" @click="openThemaModal">테마</a>
            <modal v-if="showThemaModal === true" @close="closeThemaModal">
                <template #header>
                    <h3>Station Thema</h3>
                </template>
            </modal>
            <div class="mood_station">
                <h3>
                    <span class="mood_title">MOOD Station</span>
                </h3>
                <div class="mood_wrap">
                    <v-ul class="mood_nav">
                        <li class="list_item" v-for="boxList in boxArea" :key="boxList">
                            <div>
                                <div class="mood_area">
                                    <a href="#" class="link">
                                        <v-img :src="boxList.url" :alt="boxList.alt" class="mood_image"></v-img>
                                    </a>
                                    <a href="#" class="player" @click="toggleAudio(boxList.audioUrl)">
                                        <span class="playImg blind">스태이션재생하기</span>
                                        <img v-if="!isPlaying" src="../assets/image/player.png" class="playing">
                                        <img v-else src="../assets/image/stop.png" class="playing">
                                    </a>
                                    <div class="audio-bar" v-show="isPlaying">
                                        <div class="track">
                                            <div class="progress" :style="{ width: progressWidth }"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </v-ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Modal from './modal/Modal.vue'
import MusicContetnsVue from './MusicContents.vue'
import SectionContents from './SectionContents.vue'
import Section2Contents from './Section2Contents.vue'
export default {
    components: {
        Modal
    },
    data() {
        return {
            audio: null,
            isPlaying: false,
            showThemaModal: false,
            progressWidth: "0%",
            boxArea: [
                {
                    url: 'https://music-phinf.pstatic.net/20191107_283/1573110139442WEruO_PNG/dj_1_mood_1.png?type=f360',
                    alt: "요즘k-pop",
                    audioUrl: require("../assets/mp3/박재정-01-헤어지자 말해요.mp3"),
                },
                {
                    url: 'https://music-phinf.pstatic.net/20191107_286/1573110181373xtRih_PNG/dj_1_mood_2.png?type=f360',
                    alt: "힙터질때",
                    audioUrl: require("../assets/mp3/박재정-01-헤어지자 말해요.mp3"),
                },
                {
                    url: 'https://music-phinf.pstatic.net/20191107_38/1573110230060JeXSE_PNG/dj_1_mood_3.png?type=f360',
                    alt: "신났을때",
                    audioUrl: require("../assets/mp3/박재정-01-헤어지자 말해요.mp3"),
                },
                {
                    url: 'https://music-phinf.pstatic.net/20191107_56/1573110250647iic6L_PNG/dj_1_mood_4.png?type=f360',
                    alt: "우울할때",
                    audioUrl: require("../assets/mp3/박재정-01-헤어지자 말해요.mp3"),
                },
                {
                    url: 'https://music-phinf.pstatic.net/20191107_13/1573110255450nmmxJ_PNG/dj_1_mood_5.png?type=f360',
                    alt: "사랑할때",
                    audioUrl: require("../assets/mp3/박재정-01-헤어지자 말해요.mp3"),
                },
                {
                    url: 'https://music-phinf.pstatic.net/20191107_209/15731102605900bMNa_PNG/dj_1_mood_6.png?type=f360',
                    alt: "사랑했을때",
                    audioUrl: require("../assets/mp3/박재정-01-헤어지자 말해요.mp3"),
                },
                {
                    url: 'https://music-phinf.pstatic.net/20191107_74/1573111141754iJJdQ_PNG/dj_1_mood_7.png?type=f360',
                    alt: "집중할때",
                    audioUrl: require("../assets/mp3/박재정-01-헤어지자 말해요.mp3"),
                },
                {
                    url: 'https://music-phinf.pstatic.net/20191107_41/1573111147251PoAHC_PNG/dj_1_mood_8.png?type=f360',
                    alt: "멍때릴때",
                    audioUrl: require("../assets/mp3/박재정-01-헤어지자 말해요.mp3"),
                },
                {
                    url: 'https://music-phinf.pstatic.net/20191107_108/1573111157886zREm7_PNG/dj_1_mood_9.png?type=f360',
                    alt: "운동할때",
                    audioUrl: require("../assets/mp3/박재정-01-헤어지자 말해요.mp3"),
                },
                {
                    url: 'https://music-phinf.pstatic.net/20191107_114/1573111207402iBJVP_PNG/dj_1_mood_10.png?type=f360',
                    alt: "휴식할때",
                    audioUrl: require("../assets/mp3/박재정-01-헤어지자 말해요.mp3"),
                },
                {
                    url: 'https://music-phinf.pstatic.net/20191107_138/1573111212504HPhCz_PNG/dj_1_mood_11.png?type=f360',
                    alt: "파티할때",
                    audioUrl: require("../assets/mp3/박재정-01-헤어지자 말해요.mp3"),
                },
                {
                    url: 'https://music-phinf.pstatic.net/20191107_113/1573111218453RFJhs_PNG/dj_1_mood_12.png?type=f360',
                    alt: "외로울때",
                    audioUrl: require("../assets/mp3/박재정-01-헤어지자 말해요.mp3"),
                },
                {
                    url: 'https://music-phinf.pstatic.net/20191107_175/1573111232696E0kIJ_PNG/dj_1_mood_13.png?type=f360',
                    alt: "덜깼을때",
                    audioUrl: require("../assets/mp3/박재정-01-헤어지자 말해요.mp3"),
                },
                {
                    url: 'https://music-phinf.pstatic.net/20191107_233/1573111237925Tw74z_PNG/dj_1_mood_14.png?type=f360',
                    alt: "잠안올때",
                    audioUrl: require("../assets/mp3/박재정-01-헤어지자 말해요.mp3"),
                },
            ],
        }
    },
    mounted() {
        this.$root.$emit('modal-image-click');
        this.audio = new Audio("your-audio-url");
        this.audio.addEventListener("ended", () => {
            this.isPlaying = false
        });
    },
    methods: {
        changeComponent(componentName) {
            this.$emit('change-component', componentName); // 컴포넌트 변경 이벤트 발생
            this.audio.addEventListener("timeupdate", this.updateProgress);
        },
        openThemaModal() {
            this.showThemaModal = true;
        },
        closeThemaModal() {
            this.showThemaModal = false;
        },
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
            }
        },

        updateProgress() {
            const currentTime = this.audio.currentTime;
            const duration = this.audio.duration;
            this.progressWidth = `${(currentTime / duration) * 100}%`;
        },
    }
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
    padding-inline-start: 20px;
}

v-ul li {
    list-style: none;
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
    border: 1px solid rgb(240, 230, 229);
}

#Section_3 {
    width: 1550px;
    height: 600px;
    border: 2px solid gold;
}

a#thema3 {
    position: absolute;
    top: 0px;
    right: 0;
    padding: 13px 15px 10px 13px;
    border: 1px solid #787c8570;
    color: #ffffff;
    vertical-align: middle;
    font-size: 16px;
}

.mood_station span.mood_title {
    display: inline;
    padding-bottom: 10px;
    padding-left: 28px;
    font-size: 24px;
    font-weight: 600;
}

.mood_wrap {
    position: relative;
    width: 100%;
    border: 2px solid rgb(48, 235, 235);
    height: 700px;
    float: left;
}

.mood_nav {
    position: absolute;
    top: 0;
    left: 0;
    border: 5px solid brown;
}

.list_item {
    float: left;
    width: 220px;
    padding: 0 20px 20px 0;
    vertical-align: top;
    box-sizing: border-box;
    border: 1px solid pink;
}

.mood_area {
    position: relative;
}

.player {
    position: absolute;
    bottom: 0;
    left: 0;
}

.genre_station {
    border: 2px solid green;
    padding-top: 50px;
    position: relative;
    float: left;
}

.genre_station_title {
    display: inline-block;
    padding-bottom: 14px;
    font-size: 24px;
    line-height: 30px;
    font-weight: 700;
    letter-spacing: -.5px;
    vertical-align: top;
    color: #fff;
}

.mood_image {
    width: 100%;
    height: 100%;
}

#moodImg {
    width: 100%;
    height: 100%;
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
    background: -webkit-gradient(linear, left top, left bottom, from(transparent), to(rgba(0, 0, 0, .25)));
    background: linear-gradient(transparent, rgba(0, 0, 0, .25));
    opacity: 0;
    -webkit-transition: opacity .2s ease-in;
    transition: opacity .2s ease-in;
    content: "";
}

a.player span.playImg {
    position: relative;
}

a.player img.playing,
a.player img.stop {
    position: absolute;
    top: -40px;
    left: 0;
    width: 45px;
    padding: 2px 5px 2px 5px;
    display: none;
}

.mood_area:hover a.player img.playing,
.mood_area:focus a.player img.playing {
    display: block;
}

.mood_area:active a.player img.stop {
    display: block;
}

.mood_area:active a.player img.playing {
    display: none;
}</style>
