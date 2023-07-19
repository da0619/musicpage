<template>
    <div>
        <div id="Section_7">
            <h2 class="genre_title">장르별 스테이션</h2>
            <a href="#" role="button" id="thema7" @click="openThemaModal"><i class="fa-solid fa-wand-magic-sparkles fa-rotate-270" style="color: #ffffff;"></i>테마</a>
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
                                        <div class="image-container">
                                        <v-img :src="boxList.url" :alt="boxList.alt" class="mood_image"></v-img>
                                        <div class="image-shadow"></div>
                                        </div>
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
                    url: 'https://music-phinf.pstatic.net/20190619_203/1560936694493OGVLu_PNG/dj_1_mood_SOMI_1.png?type=f360',
                    alt: "요즘k-pop",
                    audioUrl: require("../assets/mp3/aespa-02-Spicy.mp3"),
                },
                {
                    url: 'https://music-phinf.pstatic.net/20190619_228/1560936701048r3KSY_PNG/dj_1_mood_SOMI_2.png?type=f360',
                    alt: "힙터질때",
                    audioUrl: require("../assets/mp3/aespa-02-Spicy.mp3"),
                },
                {
                    url: 'https://music-phinf.pstatic.net/20190619_238/1560936707339rh1g3_PNG/dj_1_mood_SOMI_3.png?type=f360',
                    alt: "신났을때",
                    audioUrl: require("../assets/mp3/aespa-02-Spicy.mp3"),
                },
                {
                    url: 'https://music-phinf.pstatic.net/20190619_217/1560936767441LADoP_PNG/dj_1_mood_SOMI_4.png?type=f360',
                    alt: "우울할때",
                    audioUrl: require("../assets/mp3/aespa-02-Spicy.mp3"),
                },
                {
                    url: 'https://music-phinf.pstatic.net/20190619_256/1560936772985dKpDI_PNG/dj_1_mood_SOMI_5.png?type=f360',
                    alt: "사랑할때",
                    audioUrl: require("../assets/mp3/aespa-02-Spicy.mp3"),
                },
                {
                    url: 'https://music-phinf.pstatic.net/20190619_40/1560936779005XwP5i_PNG/dj_1_mood_SOMI_6.png?type=f360',
                    alt: "사랑했을때",
                    audioUrl: require("../assets/mp3/aespa-02-Spicy.mp3"),
                },
                {
                    url: 'https://music-phinf.pstatic.net/20190619_45/1560936795488L2JIa_PNG/dj_1_mood_SOMI_7.png?type=f360',
                    alt: "집중할때",
                    audioUrl: require("../assets/mp3/aespa-02-Spicy.mp3"),
                },
                {
                    url: 'https://music-phinf.pstatic.net/20190619_67/1560936800745t4MWx_PNG/dj_1_mood_SOMI_8.png?type=f360',
                    alt: "멍때릴때",
                    audioUrl: require("../assets/mp3/aespa-02-Spicy.mp3"),
                },
                {
                    url: 'https://music-phinf.pstatic.net/20190619_92/1560936806949rSd80_PNG/dj_1_mood_SOMI_9.png?type=f360',
                    alt: "운동할때",
                    audioUrl: require("../assets/mp3/aespa-02-Spicy.mp3"),
                },
                {
                    url: 'https://music-phinf.pstatic.net/20190619_92/1560936824680jTEDk_PNG/dj_1_mood_SOMI_10.png?type=f360',
                    alt: "휴식할때",
                    audioUrl: require("../assets/mp3/aespa-02-Spicy.mp3"),
                },
                {
                    url: 'https://music-phinf.pstatic.net/20190619_147/1560936829577UNUfs_PNG/dj_1_mood_SOMI_11.png?type=f360',
                    alt: "파티할때",
                    audioUrl: require("../assets/mp3/aespa-02-Spicy.mp3"),
                },
                {
                    url: 'https://music-phinf.pstatic.net/20190619_90/1560936837504yEA9O_PNG/dj_1_mood_SOMI_12.png?type=f360',
                    alt: "외로울때",
                    audioUrl: require("../assets/mp3/aespa-02-Spicy.mp3"),
                },
                {
                    url: 'https://music-phinf.pstatic.net/20190619_122/15609368554179Ut3c_PNG/dj_1_mood_SOMI_13.png?type=f360',
                    alt: "덜깼을때",
                    audioUrl: require("../assets/mp3/aespa-02-Spicy.mp3"),
                },
                {
                    url: 'https://music-phinf.pstatic.net/20190619_33/1560936861642tJRsd_PNG/dj_1_mood_SOMI_14.png?type=f360',
                    alt: "잠안올때",
                    audioUrl: require("../assets/mp3/aespa-02-Spicy.mp3"),
                },
            ],
        }
    },
    mounted() {
        this.$root.$emit('modal-image-click');
        this.audio = new Audio();
        this.audio.addEventListener("ended", () => {
            this.isPlaying = false;
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
                this.audio.src = audioUrl;
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
    margin-inline-start: 10px;
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

#Section_7 {
    width: 1550px;
    height: 600px;
    border: 0px solid gold;
}

a#thema7 {
    position: absolute;
    top: 0px;
    right: 0;
    padding: 12px 15px 0px 40px;
    border: 1px solid #787c8570;
    color: #ffffff;
    vertical-align: middle;
    font-size: 14px;
    width: 90px;
    height: 45px;
    /* text-align:center; */
    border-radius: 7px;
}

a#thema7 i {
    position:absolute;
    top: 16px;
    left: 20px;
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
    border: 0px solid rgb(48, 235, 235);
    height: 700px;
    float: left;
}

.mood_nav {
    position: absolute;
    top: 0;
    left: 0;
    border: 0px solid brown;
}

.list_item {
    float: left;
    width: 220px;
    padding: 0 20px 20px 0;
    vertical-align: top;
    box-sizing: border-box;
    border: 0px solid pink;
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
    border: 0px solid green;
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
