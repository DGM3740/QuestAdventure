import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import store from "./store";
import VueRouter from "vue-router";
import router from "./router";

Vue.use(VueResource);

Vue.config.productionTip = false;

new Vue({
	store,
	router,
	render: (h) => h(App),
}).$mount("#app");

new Vue({
	router,
	template: `
  <html>
<head>
    <title>Monster Slayer</title>
    <script src="https://npmcdn.com/vue/dist/vue.js"></script>
    <link rel="stylesheet" href="css/foundation.min.css">
    <link rel="stylesheet" href="css/app.css">
</head>
<body>
<div id="app">
    <section class="row">
        <div class="small-6 columns">
            <h1 class="text-center">YOU</h1>
            <div class="healthbar">
                <div
                        class="healthbar text-center"
                        style="background-color: green; margin: 0; color: white;"
                        :style="{width: playerHealth + '%'}">
                    {{ playerHealth }}
                </div>
            </div>
        </div>
        <div class="small-6 columns">
            <h1 class="text-center">MONSTER</h1>
            <div class="healthbar">
                <div
                        class="healthbar text-center"
                        style="background-color: green; margin: 0; color: white;"
                        :style="{width: monsterHealth + '%'}">
                    {{ monsterHealth }}
                </div>
            </div>
        </div>
    </section>
    <section class="row controls" v-if="!gameIsRunning">
        <div class="small-12 columns">
            <button id="start-game" @click="startGame">START NEW GAME</button>
        </div>
    </section>
    <section class="row controls" v-else>
        <div class="small-12 columns">
            <button id="attack" @click="attack">ATTACK</button>
            <button id="special-attack" @click="specialAttack">SPECIAL ATTACK</button>
            <button id="heal" @click="heal">HEAL</button>
            <button id="give-up" @click="giveUp">GIVE UP</button>
        </div>
    </section>
    <section class="row log" v-if="turns.length > 0">
        <div class="small-12 columns">
            <ul>
                <li v-for="turn in turns"
                    :class="{'player-turn': turn.isPlayer, 'monster-turn': !turn.isPlayer}">
                    {{ turn.text }}
                </li>
            </ul>
        </div>
    </section>
</div>
<script src="app.js"></script>
</body>
</html>
  `,
}).$mount("#bossFight");
