<template>
    <div>
        <div class="info_area">
            <span class="item">
                <span>뮤직(주) 대표이사</span>심다영
            </span>
            <span class="item">
                <span>사업자등록번호</span>220-12-12345
            </span>
            <span class="item">
                <span>통신판매업신고번호</span>제124-서울노원-0555호
            </span>

                <address>
                <span class="item">
                    <span>주소</span>서울 노원구 상계동 1길 34, 6F
                </span>
                <span class="item">
                    <span>대표전화</span>1588-0000 
                    </span>
                <span class="item">
                    <span>이메일
                        <a href="#" class="email_link">aaaa3498@naver.com</a>
                    </span>
                </span>
                <span class="item">서비스제공
                    <span>코리아아카데미</span>
                </span>
            </address>
        </div>
        <div class="terms">
            <a href="#"><strong>개인정보처리방침</strong></a>
            <a href="#">뮤직이용약관</a>
            <a href="#">고객센터</a>
            <a href="#">사업자정보 확인</a>
            <a href="#">ⓒMusic Corp.</a>
        </div>
        <div class="sns">
            <a href="https://ko-kr.facebook.com/" target="_blank" class="facebook"><i class="fa-brands fa-square-facebook" style="color: #616161;"></i><span class="blind">페이스북</span></a>
            <a href="https://www.instagram.com/" target="_blank" class="facebook"><i class="fa-brands fa-instagram" style="color: #636363;"></i><span class="blind">인스타그램</span></a>
            <a href="https://www.google.co.kr/?hl=ko" target="_blank" class="facebook"><i class="fa-brands fa-square-google-plus" style="color: #575757;"></i><span class="blind">구글</span></a>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
*{
    padding: auto;
    margin: auto;
}
span {
    color: #d9d9d9bf;
}
a {
        color:#d5d5d5ba;;
        font-size: 1em;
    }
.info_area{
    width: 1540px;
    margin-left: 70px;
    border-top: 1px solid #e8e3e31e;
    padding-top: 30px;
    line-height: 35px;
}
.item span {
    color: #aeadad7a;
    font-size: 1em;
    padding: 10px 15px 5px 15px;
}

address {
    font-style:normal;
}
div.terms a:hover{
    text-decoration: underline;
    text-decoration-color: #cfc8c870;
}
div.terms {
    margin-left: 55px;
    padding-bottom: 5px;
    padding-top: 30px;
}
div.terms a {
    padding:10px 30px 10px 30px;
    font-size:0.9em;
    font-weight: 100;
    line-height: 25px;
}
div.terms a  strong{
    font-weight: bold;
}

.sns {
    position: absolute;
    right:67px;
    top: 15px;
}
.sns a {
    padding: 15px 15px 15px 15px;
}
.sns a i {
    font-size: 35px;
}
</style>