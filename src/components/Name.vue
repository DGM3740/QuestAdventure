<template>
    <!-- Stretches the height of the window -->
    <div class="main-container">
        <!-- Constrains the main content to 700px -->
        <div class="content-container">
            <p>What is your character's name?</p>
            <form action="/game">
                <input type="text" v-model="name" input placeholder="Enter name here...">
            </form>
            
            <router-link to="/game">
                <div class="button" @click="changeName(name)">ENTER</div>
            </router-link>            

        </div>
        <AppFooter />
    </div>
</template>

<script>
import AppFooter from './Footer.vue';

export default {
    components: {
        AppFooter
    },
    data () {
        return {
            name: ''
        }
    },
    methods: {
        changeName(name) {
            this.$store.dispatch("changeName", name);
        },
    }
    

}
</script>


<style scoped>
    input {
        width: 100%;
        font-family: 'CarbonBold', sans-serif;
        font-size: 20px;
        text-transform: uppercase;
        background-color: #1C1C1C;
        border: 1px solid #434343;
        padding: 20px 12px;
        color: white;
        margin-top: 16px;
    }

    input:focus {
        outline: none;
    }    
</style>
