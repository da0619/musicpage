<template>
    <div>
        <footer id="footer">
            <h2 class="blind">footer</h2>
            <notice></notice>
            
            <div>
            <span><span></span></span>
            <span><span></span></span>
            <span><span></span></span>
            </div>
            <div>
                <address>
                <span>
                    <span></span>
                </span>
                <span>
                    <span></span>
                    </span>
                <span>
                    <span>
                        <a href=""></a>
                    </span>
                </span>
                <span>
                    <span></span>
                </span>
            </address>
            </div>
            <div>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
            </div>
            <div>
                <a href="#"><span></span></a>
                <a href="#"><span></span></a>
                <a href="#"><span></span></a>
            </div>
        </footer>
        <div>
            <h2 class="blind">플레이어</h2>
        <div>
            <div>
                <a href="">
                    <img src="">
                        <span></span>
                </a>
            </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import MusicContetnsVue from './MusicContents.vue'
import SectionContents from './SectionContents.vue'
import Section2Contents from './Section2Contents.vue'
import Notice from './notice/Notcie.vue'
export default {
    components: { Notice,}
}
</script>

<style>
* {
    margin:0;
    padding: 0;
}
.blind{
    display: none;
}
a {
    text-decoration: none;
    color: #000000;
}
v-ul li {
    list-style: none;
}
footer{
    width: 1690px;
    height: 300px;
    border: 2px solid darkmagenta;
    float: right;
    display: block;
    position: absolute;
    top:1700px;
    right: -7.7%;
    margin: 0;
}
</style>