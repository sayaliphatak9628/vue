<template>
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->

    <div>
        <h1>Ninja Reaction Timer</h1>
        <button @click="start" :disabled="isPlaying">Play</button>
        <Block v-if="isPlaying" v-bind:delay="delay" @end="endGame" />
        <!-- <p v-if="showResults">Reaction Time: {{ score }} ms</p> -->
        <Result v-if="showResults" :score="score" />
    </div>
</template>

<script>
import Block from './components/Block.vue';
import Result from './components/Result.vue';

export default {
    name: 'App',
    components: {
        Block,
        Result,
    },
    data() {
        return {
            isPlaying: false,
            delay: null,
            score: null,
            showResults: false,
        };
    },
    methods: {
        start() {
            this.delay = 2000 + Math.random() * 5000;
            this.isPlaying = true;
            //    console.log(this.delay);
            this.showResults = false;
        },
        endGame(reactionTime) {
            this.score = reactionTime;
            this.isPlaying = false;
            this.showResults = true;
        },
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    /* font-family: Bradley Hand, cursive; */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #444;
    margin-top: 60px;
}

button {
    background: #0faf87;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 16px;
    letter-spacing: 1px;
    cursor: pointer;
    margin: 10px;
}

button[disabled] {
    opacity: 0.2;
    cursor: not-allowed;
}
</style>
