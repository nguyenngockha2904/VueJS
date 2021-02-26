<!-- HTML here -->
<template> 
  <div>
   <a href=""> xin chào mày:)) {{msg}}</a>
  </div>
</template>
<!-- Javascript here -->
<script>
export default {
  name: "KhaComponent",
  props: {
    msg: Number
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
