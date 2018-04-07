<template>

  <div id="app">
    <top />
    <home />
    <foot />
  </div>
  
</template>

<script>
import Top from './Top.vue'
import Home from './Home.vue'
import Foot from './Foot.vue'
import Contact from './Contact.vue'
import './Main.css'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    // <my-component> will only be available in parent's template
    'top': Top,
    'home' : Home,
    'foot' : Foot,
    'contact' : Contact
  }
}
</script>

