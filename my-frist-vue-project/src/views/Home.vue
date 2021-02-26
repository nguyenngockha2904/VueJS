<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <HelloWorld msg="Kha" />
    <KhaComponent/>
  </div>
</template> 
<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import KhaComponent from '../components/KhaComponent.vue';
export default {
  name: "Home",
  components: {
    HelloWorld,
    KhaComponent
  }
};
</script>
