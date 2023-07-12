<template>
    <div id="wrap">
    <header id="header">
                <div class="header_wrap">
                    <div class="logo">
                        <h1>로고</h1>
                        <a href="#">
                        </a>
                    </div>
                    <div class="header_contents">
                        <div class="login">
                            <a href="#"><i class="fa-brands fa-waze" style="color: #bfbfbf;"></i>
                                <span>로그인</span>
                            </a>
                        </div>
                        <div class="membership_join">
                            <a href="#"><p>로그인하고 할인 멤버십 확인</p></a>
                        </div>
                        <div class="membership">
                            <a href="#"><i class="fa-solid fa-hand-holding-heart" style="color:#ffffff;;"></i><p>멤버십 구독</p></a>
                        </div>
                        <div class="serach">
                                <input type="search" role="combobox" title="검색창" placeholder="Music 검색">
                                    <i class="fa-solid fa-magnifying-glass" style="color: #bfbfbf;"></i>
                            <a href="#"></a>
                        </div>
                        <div class="menu">
                            <v-ul>
                                <li class="menu_item">
                                    <a href="#" class="today"><i class="fa-solid fa-ranking-star" style="color:#d6d6d6;"></i>
                                        <span>투데이</span>
                                    </a>
                                </li>
                                <li class="menu_item" >
                                    <a href="#" class="chart"><i class="fa-solid fa-trophy"></i>
                                        <span>차트</span>
                                    </a>
                                </li>
                                <li class="menu_item">
                                    <a href="#" class="newMusic"><i class="fa-brands fa-hotjar" style="color: #d6d6d6;;"></i>
                                        <span>최신앨범</span>
                                    </a>
                                </li>
                                <li class="menu_item">
                                    <a href="#"  class="stationMusic"><i class="fa-solid fa-masks-theater" style="color: #d6d6d6;"></i>
                                        <span>장르별 스테이션</span>
                                    </a>
                                </li>
                                <li class="menu_item">
                                    <a href="#"  class="ad_event"><i class="fa-solid fa-gifts" style="color: #d6d6d6"></i>
                                        <span>EVENT MAG</span>
                                    </a>
                                </li>
                                <li class="menu_item">
                                    <a href="#" class="month"><i class="fa-brands fa-sketch" style="color: #d6d6d6"></i>
                                        <span>이달의 노래</span>
                                    </a>
                                </li>
                                <li class="menu_item">
                                    <a href="#" class="keep"><i class="fa-solid fa-dumpster-fire" style="color: #d6d6d6"></i>
                                        <span>보관함</span><br>
                                    </a>
                                </li>
                                <div class="line">
                                <li class="menu_item item2">
                                    <a href="#" class="service"><i class="fa-solid fa-shapes" style="color:#d6d6d6;"></i>
                                        <span>서비스안내</span>
                                    </a>
                                </li>
                                <li class="menu_item item2" >
                                    <a href="#" class="myPlay"><i class="fa-solid fa-house-user" style="color:#d6d6d6;"></i>
                                        <span>MY플레이</span>
                                    </a>
                                </li>
                                <li class="menu_item item2" >
                                    <a href="#" class="magazine">
                                        <i class="fa-solid fa-icons" style="color:#d6d6d6;"></i><span>Magazine</span>
                                    </a>
                                </li>
                                <li class="menu_item item2">
                                    <a href="#"  class="video"><i class="fa-solid fa-film" style="color:#d6d6d6;"></i>
                                        <span>뮤직비디오</span>
                                    </a>
                                </li>
                            </div>
                            </v-ul>
                        </div>
                    </div>
                    <div class="installation">
                            <a href="#"><p>데스크톱앱 설치</p></a>
                    </div>
                </div>
            </header>
    </div>
</template>

<script>

export default {

}
</script>

<style scope>
* {
    margin:0;
    padding: 0;
}
header {
    background: #000000;
    width: 245px;
    height: 1500px;
    border: 3px solid red;
    display: block;
    position: fixed;
    float: left;
}
.blind{
    display: none;
}
a {
    text-decoration: none;
    color: #bfbfbf;
}
span, p {
    color :  #bfbfbf;
}
v-ul li {
    list-style: none;
}
div.login {
    width: 200px;
    height: 60px;
    border-bottom: 1px solid rgba(85, 85, 85, 0.39);
    border-top: 1px solid rgba(85, 85, 85, 0.39);
    text-align: center;
    vertical-align: middle;
    padding: 10px 5px 5px 0px;
    margin-left: 20px;
    position: relative;
}
div.login a{
    padding: 10px 35px 10px 5px;
}
div.login .fa-waze{
    font-size:33px;
    padding-right:10px;
}
div.login span {
    font-size : 1.2em;
}
.serach input {
    border: 1px solid gary;
    background-color: rgba(85, 85, 85, 0.39);
    text-align: center;
    height: 45px;
    border-radius:4px;
    position: absolute;
    right:15px;
    font-size:1.2em;
}
.serach {
    position: relative;
}
.fa-solid {
    position: absolute;
    left: 42px;
    top:17px;
    vertical-align: middle;
}
.membership_join {
    width: 300px;
    height: 60px;
    text-align: center;
    padding-right: 50px;
    padding-top: 20px;
}
.membership_join a p {
    font-size: 0.9em;
}
.membership {
    width: 205px;
    height: 46px;
    border: 0px solid red;
    position: relative;
    margin-bottom: 20px;
    margin-left: 17px;
    border-radius: 7px;
    background: linear-gradient(to right, #d27f11, #c30758);
}
.membership a p {
    text-align: center;
    vertical-align: middle;
    padding-top: 10px;
    margin-left: 20px;
    color:#ffffff;
    font-weight: 700;
}
.membership .fa-hand-holding-heart {
font-size: 21px;
position: absolute;
left:35px;
top: 10px;
}
div.menu {
    width: 220px;
    height: auto;
    position: relative;
    margin-top:80px;
}
div.menu v-ul {
    position: absolute;
    top: 0;
    left: 0;
}
div.menu v-ul li.menu_item {
width: 220px;
height: 45px;
border: 1px solid gold;
vertical-align: middle;
padding-top: 10px;
}
div.menu v-ul li.menu_item a span {
    font-size: 1em;
    font-weight: 600;
    font-family: "'Gothic A1', sans-serif;"
}
div.menu v-ul li.menu_item a span:hover{
    color:#ffffff;
}
div.menu v-ul li.menu_item a.magazine{
    position: relative;
    padding-left: 45px;
}
div.menu v-ul li.menu_item a.magazine .fa-icons{
    left: 10px;
    top: 0px;
    font-size: 20px;
}
div.menu v-ul li.menu_item a.chart {
    position: relative;
    padding-left: 45px;
}
div.menu v-ul li.menu_item a.chart .fa-trophy{
    left:10px;
    top: -1px;
    font-size: 20px;
    color: #d6d6d6;
}
div.menu v-ul li.menu_item a.today{
    position: relative;
    padding-left: 45px;
}
div.menu v-ul li.menu_item a.today .fa-ranking-star{
    left:10px;
    top: -4px;
    font-size: 20px;
}
div.menu v-ul li.menu_item a.stationMusic {
    position: relative;
    padding-left: 45px;
}
div.menu v-ul li.menu_item a.stationMusic .fa-masks-theater{
    left:10px;
    top: -4px;
    font-size: 20px;
}
div.menu v-ul li.menu_item a.myPlay{
    position: relative;
    padding-left: 45px;
}
div.menu v-ul li.menu_item a.myPlay .fa-house-user{
    left:10px;
    top: -4px;
    font-size: 20px;
}
div.menu v-ul li.menu_item a.ad_event {
    position: relative;
    padding-left: 45px;
}
div.menu v-ul li.menu_item a.ad_event .fa-gifts{
    left:10px;
    top: -4px;
    font-size: 20px;
}
div.menu v-ul li.menu_item a.month {
    position: relative;
    padding-left: 10px;
}
div.menu v-ul li.menu_item a.month .fa-sketch{
    left:5px;
    top: -4px;
    font-size: 20px;
    padding-right: 10px;
}
div.menu v-ul li.menu_item a.newMusic {
    position: relative;
    padding-left: 10px;
}
div.menu v-ul li.menu_item a.newMusic .fa-hotjar{
    left:5px;
    top: -4px;
    font-size: 20px;
    padding-right: 10px;
}
div.menu v-ul li.menu_item a.video {
    position: relative;
    padding-left: 45px;
}
div.menu v-ul li.menu_item a.video .fa-film{
    left:10px;
    top: -4px;
    font-size: 20px;
}
div.menu v-ul li.menu_item a.service{
    position: relative;
    padding-left: 45px;
}
div.menu v-ul li.menu_item a.service .fa-shapes{
    left:10px;
    top: -4px;
    font-size: 20px;
}
div.menu v-ul li.menu_item a.keep {
    position: relative;
    padding-left: 45px;
    padding-bottom: 30px;
    width: 200px;
    border-bottom:1px solid rgba(85, 85, 85, 0.39);
    display: block;
}

div.menu v-ul li.menu_item a.keep .fa-dumpster-fire{
    left:10px;
    top: -4px;
    font-size: 20px;
}
div.menu v-ul div.line {
margin-top: 30px;
}

div.installation{
    position: absolute;
    bottom: 35%;
    left: 0;
    border:1px solid rgba(85, 85, 85, 0.39);
    padding: 10px 25px 10px 25px;
    margin-left: 35px;
    font-size: 1em;
    border-radius: 7px;
}
div.installation:hover {
    border:1px solid #ffffff;
}
div.installation a p:hover {
    color:#ffffff;
}
</style>
