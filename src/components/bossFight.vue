<template>
  <div id="app">
    <section class="row">
      <div class="small-6 columns">
        
        <img src="../assets/dragon.gif" />

        <h1 class="text-center">YOU</h1>        
        <div class="healthbar">
          <div
            class="healthbar text-center"
            style="background-color: #0EDA84; margin: 0; color: white;"
            :style="{width: playerHealth + '%'}"
          >{{ playerHealth }}</div>
        </div>
      </div>
      <br /><br />
      <div class="small-6 columns">
        <h1 class="text-center">MONSTER</h1>
        <div class="healthbar">
          <div
            class="healthbar text-center"
            style="background-color: #FF5757; margin: 0; color: white;"
            :style="{width: monsterHealth + '%'}"
          >{{ monsterHealth }}</div>
        </div>
      </div>
    </section>
    <br/>
    <section class="row controls" v-if="!gameIsRunning">
      <div class="small-12 columns">
        <button id="start-game" class="button" @click="startGame">START BATTLE</button>
      </div>
    </section>
    <section class="row controls" v-else>
      <div class="small-12 columns">
        <button id="attack" class="button" @click="attack">ATTACK</button>
        <button id="special-attack" class="button" @click="specialAttack">SPECIAL ATTACK</button>
        <button id="heal" class="button" @click="heal">HEAL</button>
        <button id="give-up" class="button" @click="giveUp">GIVE UP</button>
      </div>
    </section>
    <!-- <section class="row log" v-if="turns.length > 0">
        <div class="small-12 columns">
            <ul>
                <li v-for="turn in turns"
                    :class="{'player-turn': turn.isPlayer, 'monster-turn': !turn.isPlayer}">
                    {{ turn.text }}
                </li>
            </ul>
        </div>
    </section>-->
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from './Footer';

export default {
  components: { AppFooter },
  data: () => ({
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: []
  }),
  methods: {
    startGame() {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = [];
    },

    attack() {
      var damage = this.calculateDamage(3, 10);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: "Player hits Monster for " + damage
      });
      if (this.checkWin()) {
        return;
      }

      this.monsterAttacks();
    },

    specialAttack() {
      var damage = this.calculateDamage(10, 20);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: "Player hits Monster hard for " + damage
      });
      if (this.checkWin()) {
        return;
      }
      this.monsterAttacks();
    },
    
    heal() {
      if (this.playerHealth <= 90) {
        this.playerHealth += 10;
      } else {
        this.playerHealth = 100;
      }
      this.turns.unshift({
        isPlayer: true,
        text: "Player heals for 10"
      });
      this.monsterAttacks();
    },

    giveUp() {
      this.gameIsRunning = false;
      this.$router.push({ path: 'lose-screen' });
    },

    monsterAttacks() {
      var damage = this.calculateDamage(5, 12);
      this.playerHealth -= damage;
      this.checkWin();
      this.turns.unshift({
        isPlayer: false,
        text: "Monster hits Player for " + damage
      });
    },

    calculateDamage(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },

    checkWin() {
      if (this.monsterHealth <= 0) {
        this.$router.push({ path: 'win-screen' });
        this.gameIsRunning = false;
        // if (confirm("You won! New Game?")) {
        //   this.startGame();
        // } else {
        //   this.gameIsRunning = false;
        // }
        return true;
      } else if (this.playerHealth <= 0) {        
        this.gameIsRunning = false;
        this.$router.push({ path: 'lose-screen' });
        // if (confirm("You lost! New Game?")) {
        //   this.startGame();
        // } else {
        //   this.gameIsRunning = false;
        // }
        return true;
      }
      return false;
    }
  }
};
</script>


<style scoped>
.home-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.button {
  margin: 20px 5px;
  padding-bottom: 10px;
}

.button:focus {
  outline: none;
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

.healthbar {
  max-width: 700px;
  border-radius: 20px;;
  margin: auto;
}
</style>
