<template>
    <div>
      <div class="notice_Area">
        <div class="swiper-container">
            <a href="#" class="noice_title">공지사항</a>
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <span class="notice_inner">
                <a href="#">MUSICstreaimg 친구 초대 이벤트 안내</a>
              </span>
            </div>
            <div class="swiper-slide">
              <span class="notice_inner">
                <a href="#">음악과 쇼핑 혜택을 하나로! 첫 구독 무료 혜택 받기!</a><i class="fa-solid fa-fire" style="color: #d51545; font-size:20px" ></i>
              </span>
            </div>
            <div class="swiper-slide">
              <span class="notice_inner">
                <a href="#">MUSICstreaimg 친구 초대 이벤트 안내</a>
              </span>
            </div>
            <div class="swiper-slide">
              <span class="notice_inner">
                <a href="#">음악과 쇼핑 혜택을 하나로! 첫 구독 무료 혜택 받기!</a><i class="fa-solid fa-fire" style="color: #d51545; font-size:20px" ></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
import Swiper from "swiper";

export default {
  mounted() {
    new Swiper(".swiper-container", {
      direction: "vertical",
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 2500,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  },
};
</script>

<style scoped>
    a {
        color: aliceblue;
        font-size: 1.1em;
    }
.noice_title {
        width: 80px;
        font-size: 1.2em;
        font-family: "맑은고딕";
        font-weight: bold;
        margin-left: 70px;
        position: absolute;
        padding-top: 20px;
    }
    .notice_inner i {
        position: absolute;
        left:420px;
        top: 0;
    }
.notice_Area {
  height:50px;
  overflow: hidden;
  margin-bottom: 20px;
}
.swiper-container {
  height: 100%;
  position: relative;
  width: 650px;
}
.swiper-slide {
  display: flex;
  align-items:flex-start;
  justify-content:left;
  padding-left: 170px;
padding-top: 20px;
}
.notice_inner {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  width:650px
}
</style>