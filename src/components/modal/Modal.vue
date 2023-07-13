<template>
    <transition name="modal">
        <div @keyup.esc="$emit('close')">
        <div v-if="showThemaModal=true" class="modal-mask" @click="closeThemaModal">
            <div class="modal-container">
                <div class="modal-header">
                    <slot name="header">Station Thema</slot>
                </div>

                <div class="modal-body">
                    <slot name="body">
                        <div>
                            <ul class="img_list" style="width:450px; height:600px; marign:0 auto">
                                <li v-for="(box,index) in thema" :key="index"
                                    style="width: 120px; float:left; padding:25px 0px 20px 10px; box-sizing:border-box;">
                                    <a href="#">
                                        <figure>
                                            <v-img :src="box.url" :alt="box.alt" @click="changeComponent(box.component)"
                                                style=" width:110px; height:110px;" id="teleport"></v-img>
                                            <figcaption>
                                                <p>
                                                    <span class="img_name">{{ box.name }}</span><br />
                                                    <span class="artist_enter">{{ box.enter }}</span>
                                                </p>
                                            </figcaption>
                                        </figure>
                                    </a>
                                </li>
                            </ul>
                            <div>
                                <a href="#" role="button" id="thema" @click="showThemaModal=true" class="blind"></a>
                                <teleport to="body">
                                    <!-- use the modal component, pass in the prop -->
                                    <modal :show="showThemaModal" >
                                        <template #header>
                                            <h3>Station Thema</h3>
                                        </template>
                                    </modal>
                                </teleport>
                            </div>
                        </div>
                    </slot>
                </div>

                <div class="modal-footer">
                    <slot name="footer">
                        <button class="modal-default-button" @click="closeThemaModal" type="button">
                            <sapn class="blind" >OK</sapn>
                            <!-- <i class="fa-solid fa-xmark" style="color: #ffffff;"></i> -->
                        </button>
                    </slot>
                </div>
            </div>
        </div>
    </div>
    </transition>
</template>

<script>

export default {
    data() {
        return {
            showThemaModal: false,
            thema: [
                {
                    url: 'https://music-phinf.pstatic.net/20191202_84/1575273368910ItDE8_PNG/theme_main_cover_%C5%A9%B7%AF%BD%AC.png?type=f360',
                    name: "Crush'S",
                    alt: '크러쉬',
                    enter: 'P NATION',
                    component: 'subPage'
                },

                {
                    url: 'https://music-phinf.pstatic.net/20191107_199/157311124354381Rks_PNG/theme_main_cover_%C1%F6%C4%DA.png?type=f360',
                    name: "ZICO'S",
                    alt: 'zico',
                    enter: 'KOZ Entertainment',
                    component:'subPage2'
                },

                {
                    url: 'https://music-phinf.pstatic.net/20191007_300/1570427186702YOjus_PNG/theme_main_cover_ateez.png?type=f360',
                    name: "ATEEZ'S",
                    alt: '에이티즈',
                    enter: 'KQ Entertainment',
                    component:'subPage3'
                },
                {
                    url: 'https://music-phinf.pstatic.net/20190826_70/1566794131127nR67y_PNG/theme_main_cover.png?type=f360',
                    name: "선미'S",
                    alt: '선미',
                    enter: 'MAKEUS ENT',
                    component:'subPage4'
                },
                {
                    url: 'https://music-phinf.pstatic.net/20190626_73/1561535818419BXoTF_PNG/theme_main_cover_idle.png?type=f360',
                    name: "(여자)I_DLE'S",
                    alt: '여자아이들',
                    enter: 'CUBE Entertainment',
                    component:'subPage5'
                },
                {
                    url: 'https://music-phinf.pstatic.net/20190619_12/1560936868356ERlYS_PNG/dj_1_SOMI_Theme.png?type=f360',
                    name: "전소미'S",
                    alt: '전소미',
                    enter: '더블랙레이블',
                    component:'subPage6',
                },
                {
                    url: 'https://music-phinf.pstatic.net/20181221_239/1545377669832rlmQ4_PNG/mood_0_cover.png?type=f360',
                    name: "MUSIC기본'S",
                    alt: '기본테마',
                    enter: 'MUSICstreaimg',
                    component:'subPage7'
                },
                {
                    url: 'https://music-phinf.pstatic.net/20181204_198/15439174677851ADA0_PNG/mood_0_cover.png?type=f360',
                    name: "레트로테마",
                    alt: '레트로',
                    enter: 'jychoioioi',
                    component:'subPage8'
                },
                {
                    url: 'https://music-phinf.pstatic.net/20181204_115/1543919643299EmntM_PNG/mood_0_cover.png?type=f360',
                    name: "VIVID MUSIC",
                    alt: 'VIVID',
                    enter: 'INDI',
                    component:'subPage9'
                },
            ]
        }
    },
    methods: {
        changeComponent(componentName) {
            this.showThemaModal = true;
            this.$root.$emit('change-component', componentName);
            this.$router.push({ name: 'SectionSubPage', params: { box:box.index } });
            this.$router.push({ name: 'SectionSubPage2', params: { box:box.index} });
            this.$router.push({ name: 'SectionSubPage3', params: { box:box.index} });
            this.$router.push({ name: 'SectionSubPage4', params: { box:box.index} });
            this.$router.push({ name: 'SectionSubPage5', params: { box:box.index} });
            this.$router.push({ name: 'SectionSubPage6', params: { box:box.index} });
            this.$router.push({ name: 'SectionSubPage7', params: { box:box.index} });
            this.$router.push({ name: 'SectionSubPage8', params: { box:box.index} });
            this.$router.push({ name: 'SectionSubPage9', params: { box:box.index} });
        },
        openThemaModal() {
        this.showThemaModal = true;
        },                           // 모달 창 열기/ 닫기
        closeThemaModal() {
            this.showThemaModal = false;
        },
    }

}
</script>

<style>
ul li {
    list-style: none;
}

.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    transition: opacity 0.3s ease;
    text-align: center;
}

.modal-container {
    width: 510px;
    height: 720px !important;
    margin: 0 auto;
    padding: 20px 30px;
    background-color: #222;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    vertical-align: middle;
    position: fixed;
    top: 200px;
    left: 40%;
}

.modal-header h3 {
    margin-top: 0;
    color: #ffffff;
    font-size: 1.8em;
}

.modal-body {
    margin: 20px 0;
    position: relative;
}

.modal-default-button {
    position: absolute;
    right: 55px;
    top: 58px;
}

.modal-default-button i {
    display: block;
    font-size: 1.5em;
}

.modal-enter-from {
    opacity: 0;
}

.modal-leave-to {
    opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}

.img_list {
    border: 1px solid rgba(227, 227, 75, 0.903);
}

figcaption {
    height: auto;
}

figcaption p span {
    color: #ffffff;
    text-align: center;
}

.artist_enter {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all;
    padding-top: 4px;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: -.2px;
    color: #999
}
</style>