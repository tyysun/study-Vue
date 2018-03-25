//实例化Vue对象
new Vue({
  el:"#vue-app",
  data:{
    // name:"tyy",
    // work:"study-vue",
    // web:"https://baidu.com",
    // webtag:'<a href="https://baidu.com">baidu</a>',
    // age:24,
    // x:0,
    // y:0,
    name:'',
    age:'',

  },
  methods:{
    sayHello: function(){
      return 'HELLO '+this.name
    },
    add: function(a){
      this.age = this.age + a
    },
    sub: function(b){
      this.age = this.age - b
    },
    XY: function(event){
      console.log(event)
      this.x = event.offsetX;
      this.y = event.offsetY
    },
    alert: function(){
      alert('hello world')
    },
    logName: function(){
      
      this.name = this.$refs.n.value;
    },
    logAge:function(){
      console.log('输入年龄')
    }
  }
})





// el:element 需要获取的元素，一定是HTML中的根容器元素
// data:用于数据的存储
// methods:用于存储各种方法