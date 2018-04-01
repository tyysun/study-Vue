//实例化Vue对象
new Vue({
  el: "#vue-app-one",
  data: {
    name: "tyy",
    work: "study-vue",
    web: "https://baidu.com",
    webtag: '<a href="https://baidu.com">baidu</a>',
    age: 24,
    x: 0,
    y: 0,
  },
  methods: {
    sayHello: function () {
      return 'HELLO ' + this.name
    },
    add: function (a) {
      this.age = this.age + a
    },
    sub: function (b) {
      this.age = this.age - b
    },
    XY: function (event) {
      console.log(event)
      this.x = event.offsetX;
      this.y = event.offsetY
    },
    alert: function () {
      alert('hello world')
    },
    logName: function () {

      console.log('输入姓名')
    },
    logAge: function () {
      console.log('输入年龄')
    }
  }
});

new Vue({
  el: "#vue-app-two",
  data: {
    name: '',
    age: '',
  },
  methods: {
    logName: function () {
      this.name = this.$refs.n.value;
    }
  }

})
var three = new Vue({
  el: "#vue-app-three",
  data: {
    error: false,

  }
})
new Vue({
  el: '#vue-app-four',
  data: {
    body: ['Sery', 'May', 'Bob', 'Jerry', 'Tim'],
    users: [{ name: "apple", age: 30 },
    { name: "bpple", age: 31 },
    { name: "cpple", age: 32 },
    { name: "dpple", age: 33 },
    { name: "epple", age: 34 }]
  }
})



// el:element 需要获取的元素，一定是HTML中的根容器元素
// data:用于数据的存储
// methods:用于存储各种方法