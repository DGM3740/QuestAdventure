<template>
  <div class="game-wrapper">
    <GameHeader
      class="game-header"
      v-if="hasDied === false"
      :weapon="weapon"
      :armor="armor"
      :potion="potion"
    />
    <!-- Stretches the height of the window -->
    <div class="main-container">
      <!-- Constrains the main content to 700px -->
      <div class="content-container">
        <div class="death-container" v-if="hasDied === true">
          <img src="../assets/skull.png" alt="sword" width="65px" />
          <br />
          <br />
          <p class="death-text">You died.</p>
          <br />
          <p>{{ currentStory.story }}</p>
          <br />
          <router-link to="/character">
            <div class="button" @click="changeName(name)">Start Over</div>
          </router-link>
        </div>

        <!-- Display the current story -->
        <p v-if="hasDied === false">{{ currentStory.story }}</p>

        <!-- Display the current choices -->
        <div class="choices-container" v-if="hasDied === false">
          <div
            v-for="choice in currentStory.choices"
            :key="choice.id"
            class="story-choice"
            @click="changeStory(choice.id)"
          >
            <img class="triangle" src="../assets/triangle.svg" width="7px" />
            <p>{{ choice.choiceText }}</p>
          </div>
        </div>
        <div class="bossFight-container">
          <div class="bossFight-container" v-if="bossFight === true">
            <router-link to="/bossFight">
              <div class="button" @click="changeName(name)">Boss Fight?</div>
            </router-link>
          </div>
        </div>
      </div>

      <AppFooter />
    </div>
  </div>
</template>

<script>
import AppFooter from "./Footer.vue";
import GameHeader from "./GameHeader.vue";

export default {
  components: {
    AppFooter,
    GameHeader
  },
  data() {
    return {
      // Set the first story to the first object in the store
      currentStory: this.$store.state.story[0],
      hasDied: false,
      weapon: false,
      armor: false,
      potion: false
    };
  },
  methods: {
    // This is how the story gets updated when the user selects a choice
    changeStory(thisID) {
      this.currentStory = this.$store.state.story[thisID];
      if (this.currentStory.death === true) {
        this.hasDied = true;
      }
      if (this.currentStory.weapon === true) {
        this.weapon = true;
      }
      if (this.currentStory.armor === true) {
        this.armor = true;
      }
      if (this.currentStory.potion === true) {
        this.potion = true;
      }
      if (this.currentStory.bossFight === true) {
        this.bossFight = true;
      }
    }
  }
};
</script>

<style scoped>
.death-text {
  color: #ff5757;
}

.death-container {
  text-align: center;
}

.game-wrapper {
  height: 100%;
}

.main-container {
  height: 100% !important;
}

.choices-container {
  border-top: 1px solid #4e4e4e;
  margin-top: 70px;
}

.story-choice {
  padding: 26px 0px;
  border-bottom: 1px solid #4e4e4e;
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.story-choice p {
  opacity: 0.3;
}

.triangle {
  position: absolute;
  margin-left: -36px;
  opacity: 0;
}

.story-choice:hover .triangle {
  opacity: 1;
}

.story-choice:hover p {
  opacity: 1;
}

.game-header {
  position: absolute;
  top: 0;
}

.resetbutton {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 25px;
}
</style>
