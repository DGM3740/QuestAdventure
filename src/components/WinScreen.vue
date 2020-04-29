<template>
  <div class="main-container">
      <div class="content-container">
        <img src="../assets/crown.png" alt="Simple Dungeon Logo" width="90px" />
        <p>Congratulations, you won!<br/>You slayed the dragon and helped the goblin village.</p>
        <br /><br />
        <router-link class="button" to="/">Back to Home</router-link>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from './Footer.vue';

export default {
    components: {
        AppFooter
    }


}
</script>

<style scoped>
.content-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

img {
  margin-bottom: 60px;
}

p {
  max-width: 616px;
}

.click {
  padding: 7px 12px;
  border-radius: 5px;
  margin: 12px 0;
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  color: rgb(105, 105, 105);
}


</style>
