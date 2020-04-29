import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import Character from "./components/Character";
import Name from "./components/Name";
import AppGame from "./components/AppGame";
import bossFight from "./components/bossFight";
import WinScreen from "./components/WinScreen";
import LoseScreen from "./components/LoseScreen";

Vue.use(Router);

export default new Router({
	mode: "history",
	hashbang: false,
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			name: "home",
			component: Home,
		},
		{
			path: "/character",
			name: "character",
			component: Character,
		},
		{
			path: "/name",
			name: "name",
			component: Name,
		},
		{
			path: "/game",
			name: "game",
			component: AppGame,
		},
		{
			path: "/win-screen",
			name: "win-screen",
			component: WinScreen,
		},
		{
			path: "/lose-screen",
			name: "lose-screen",
			component: LoseScreen,
		},
		{
			path: "*",
			component: Home,
		},
		{
			path: "/bossFight",
			component: bossFight,
		},
	],
});
