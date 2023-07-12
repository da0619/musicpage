<template>
<div id="App">
    <MusicHeader></MusicHeader>
    <MusicContents></MusicContents>
    <MusicFooter></MusicFooter>
</div>
</template>

<script>
import MusicHeader from './components/MusicHeader.vue';
import MusicContents from './components/MusicContents.vue';
import MusicFooter from './components/MusicFooter.vue';
export default {
    components: { MusicHeader, MusicContents, MusicFooter}
}
</script>

<style>
* {
    margin:0;
    padding: 0;
}
body {
    background: #000000;
}
div#App {
    width: 1800px;
    height: 100%;
    border: 2px solid rgba(255, 252, 252, 0.685);
    margin: 0 auto;
    position: relative;
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
</style>