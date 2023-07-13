<template>
    <div>
        <footer id="footer">
            <div class="footer_area">
            <h2 class="blind">footer</h2>
            <notice></notice>
            <info></info>
        </div>
        </footer>

    </div>
</template>
  
<script>
import MusicContetnsVue from './MusicContents.vue'
import SectionContents from './SectionContents.vue'
import Section2Contents from './Section2Contents.vue'
import Notice from './footer/Notcie.vue'
import Info from './footer/Info.vue'
export default {
    components: { Notice, Info,}
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
    border: 0px solid darkmagenta;
    float: right;
    display: block;
    position: absolute;
    top:1700px;
    right: -7.7%;
    margin: 0;
    background-color: #111;
}
.footer_area{
position: relative;
}
</style>