const app = {
  data() {
    return {
      Hokkaido: [{
          name: 'Fort Goryokaku,Hakodate',
          url: './images/1.jpg',
          Like: false
        },
        {
          name: 'Mount Hakodate,Hakodate',
          url: './images/2.jpg',
          Like: false
        },
        {
          name: 'Otaru Canal Area,Otaru',
          url: './images/3.jpg',
          Like: false
        },
        {
          name: 'Furano Flower Field,Furano',
          url: './images/4.jpg',
          Like: false
        },
        {
          name: 'Furano Ski Area,Furano',
          url: './images/5.jpg',
          Like: false
        },
        {
          name: 'Abashiri Drift Ice,Abashiri',
          url: './images/6.jpg',
          Like: false
        },
        {
          name: 'Jigokudani noboribetsu,Noboribetsu',
          url: './images/7.jpg',
          Like: false
        },
        {
          name: 'Aoiike Blue Pond,Biei',
          url: './images/8.jpg',
          Like: false
        },
        {
          name: 'Asahiyama Zoo,Asahiyama',
          url: './images/9.jpg',
          Like: false
        },
        {
          name: 'Shiroi Koibito,Sapporo',
          url: './images/10.jpg',
          Like: false
        },
        {
          name: 'Sapporo TV Tower,Sapporo',
          url: './images/11.jpg',
          Like: false
        },
        {
          name: 'Mount Moiwa,Sapporo',
          url: './images/12.jpg',
          Like: false
        },
      ]
    }​​
  }​​,
  methods: {
    likeIt(index) {
      this.thaides[index].isLike = !this.thaides[index].isLike
    }
  },
  computed: {
    countLike() {
      return this.thaides.filter(t => t.isLike).length
    }
  }
}​​
var mountedApp = Vue.createApp(app).mount('#app')