<template>
    <!-- Stretches the height of the window -->
    <div class="main-container">

        <!-- Reset Button -->
        <div class="resetbutton">
            <router-link class="button" to="/Home">RESET</router-link>
        </div>

        <!-- Constrains the main content to 700px -->
        <div class="content-container">
            
            <p>What is your character's name?</p>
            <form @submit="formEntry(name)">
                <input type="text" v-model="name" input placeholder="Enter name here...">
            </form>
            
            <router-link to="/game">
                <div class="button" @click="changeName(name)">Change Name</div>
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
        formEntry(name) {
            this.$store.dispatch("changeName", name);
            this.$router.push('/game');
        }
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
        margin-bottom: 12px;
    }

    input:focus {
        outline: none;
    }    

    .resetbutton {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 5px;
        position: absolute;
        top: 20px;
        right: 20px;
    }

    .main-container {
        position: relative;
    }

</style>
