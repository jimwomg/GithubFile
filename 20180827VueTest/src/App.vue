<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  background: #000
}
hr{
  margin: 0;
}
p{
  margin: 0;
  padding: 10px;
}
input{
  margin-bottom: 10px;
}
</style>
