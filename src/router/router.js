import Vue from 'vue'
import  VueRouter from 'vue-router'

import MusicContents from './components/MusicContents.vue'
import SectionContents from './components/SectionContents.vue'
import Section2Contents from './components/Section2Contents.vue'
import Modal from '../components/modal/Modal.vue'
import SectionSubPage from './component/SectionSubPage'
import SectionSubPage2 from './component/SectionSubPage2'
import SectionSubPage3 from './component/SectionSubPage3'
import SectionSubPage4 from './component/SectionSubPage4'
import SectionSubPage5 from './component/SectionSubPage5'
import SectionSubPage6 from './component/SectionSubPage6'
import SectionSubPage7 from './component/SectionSubPage7'
import SectionSubPage8 from './component/SectionSubPage8'
import SectionSubPage9 from './component/SectionSubPage9'
const routes = [
    // 나머지 라우트 설정
    {
      path: '',
      name: 'SectionContents',
      component: SectionContents,
      props: true
    },
    {
      path: 'SectionSubPage/:box',
      name: 'SectionSubPage',
      component: SectionSubPage,
      props: true
    },
    {
      path: 'SectionSubPage2/:box',
      name: 'SectionSubPage2',
      component: SectionSubPage2,
      props: true
    },  
    {
      path: 'SectionSubPage3/:box',
      name: 'SectionSubPage3',
      component:SectionSubPage3,
      props: true
    }, 
    {
      path: 'SectionSubPage4/:box',
      name: 'SectionSubPage4',
      component:SectionSubPage4,
      props: true
    },
    {
      path: 'SectionSubPage5/:box',
      name: 'SectionSubPage5',
      component:SectionSubPage5,
      props: true
    },
    {
      path: 'SectionSubPage6/:box',
      name: 'SectionSubPage6',
      component:SectionSubPage6,
      props: true
    },
    {
      path: 'SectionSubPage7/:box',
      name: 'SectionSubPage7',
      component:SectionSubPage7,
      props: true
    },
    {
      path: 'SectionSubPage8/:box',
      name: 'SectionSubPage8',
      component:SectionSubPage8,
      props: true
    }
    ,
    {
      path: 'SectionSubPage9/:box',
      name: 'SectionSubPage9',
      component:SectionSubPage9,
      props: true
    }
  ]
  
  const router = new VueRouter({
    routes
  })

  export default router