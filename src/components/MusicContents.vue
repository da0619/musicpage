<template>
    <div>
        <div id="container">
            <section class="genre_contents">
                <component :is="currentComponent"></component>
                <component :is="currentComponent_share"></component>
            </section>
        </div>
    </div>
</template>


<script>
import SectionContents from './SectionContents.vue'
import Section2Contents from './Section2Contents.vue'
import SectionSubPage from './SectionSubPage.vue'
import SectionSubPage2 from './SectionSubPage2.vue'
import SectionSubPage3 from './SectionSubPage3.vue'
import SectionSubPage4 from './SectionSubPage4.vue'
import SectionSubPage5 from './SectionSubPage5.vue'
import SectionSubPage6 from './SectionSubPage6.vue'
import SectionSubPage7 from './SectionSubPage7.vue'
import SectionSubPage8 from './SectionSubPage8.vue'
import SectionSubPage9 from './SectionSubPage9.vue'
import Modal from './modal/Modal.vue'
export default {
    components: {
        SectionContents,
        Section2Contents,
        SectionSubPage,
        SectionSubPage2,
        SectionSubPage3,
        SectionSubPage4,
        SectionSubPage5,
        SectionSubPage6,
        SectionSubPage7,
        SectionSubPage8,
        SectionSubPage9,
        Modal,
    },
    data() {
        return {
            currentComponent: SectionContents,
            currentComponent_share: Section2Contents,
            showThemaModal: false,
        }
    },
    mounted() {
        this.$root.$on('change-component', this.changeComponent);
    },
    methods: {
        changeComponent(componentName) {
            // 이미지를 클릭하여 다른 컴포넌트를 보여줄 때 해당 컴포넌트로 변경

            if (componentName === 'subPage') {
                this.currentComponent = SectionSubPage;
            } else if (componentName === 'subPage2') {
                this.currentComponent = SectionSubPage2;
            } else if (componentName === 'subPage3') {
                this.currentComponent = SectionSubPage3;
            }else if (componentName === 'subPage4') {
                this.currentComponent = SectionSubPage4;
            }else if (componentName === 'subPage5') {
                this.currentComponent = SectionSubPage5;
            }else if (componentName === 'subPage6') {
                this.currentComponent = SectionSubPage6;
            }else if (componentName === 'subPage7') {
                this.currentComponent = SectionSubPage7;
            }else if (componentName === 'subPage8') {
                this.currentComponent = SectionSubPage7;
            }else if (componentName === 'subPage9') {
                this.currentComponent = SectionSubPage7;
            }else {
                // 기본 컴포넌트(SectionContents)로 변경
                this.currentComponent = SectionContents;
            }
            this.showThemaModal = true;
        },
        
    }
};

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

div#container {
    width: 1555px;
    height: auto;
    float: right;
    border: 0px solid blue;
    border-left: 0px solid rgba(128, 128, 128, 0.781);
    padding: 70px 0 55px;
    margin: 0 auto;
    position: relative;
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

.mood_station span.mood_title {
    display: inline;
    padding-bottom: 14px;
    font-size: 24px;
    font-weight: 600;
    line-height: 40px;
}

.mood_wrap {
    position: relative;
    width: 100%;
    border: 0px solid rgb(48, 235, 235);
    height: auto;
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
    width: 210px;
    padding: 0 15px 15px 0;
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
