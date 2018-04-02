Vue.component('greeting', {
  template: `<div>
            <p>hello {{name}} 我是Vue组件</p>
            <button v-on:click="changeName()">changeName</button>
            </div>`,
  data: function () {
    return {
      name: "tyy"
    }
  },
  methods: {
    changeName: function () {
      this.name = "yytyy";
    }
  }
})



new Vue({
  el: '#vue-app',
})