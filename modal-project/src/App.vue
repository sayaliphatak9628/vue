<template>
    <h1>{{ title }}</h1>

    <!-- template refs -->
    <!-- <input type="text" ref="name" />
    <button @click="handleClick">click me</button> -->

    <!-- passing data with props -->
    <!-- <Modal
        header="Sign up for the Giveaway!"
        text="Grab your ninja swag for half price!"
    /> -->

    <!-- data binding -->
    <!-- <Modal :header="header" :text="text" theme="sale" /> -->

    <!-- custom events -->
    <teleport to=".modals" v-if="showModal">
        <!--teleport to index.html page, replace div with 'teleport to=".modals"' -->
        <!-- <Modal :header="header" :text="text" theme="sale" @close="toggleModal"/> -->
        <Modal theme="sale" @close="toggleModal">
            <template v-slot:links>
                <button><a href="#">sign up </a></button> |
                <button><a href="#">more info</a></button>
            </template>
            <h1>Ninja Giveaway!</h1>
            <p>Grab your ninja swag for half price!</p>
        </Modal>
    </teleport>
    <p>Welcome...</p>
    <button @click="toggleModal">open modal</button>

    <!-- challenge -->
    <div v-if="showModalTwo">
        <!-- <Modal :header="header" :text="text" theme="sale" @close="toggleModal"/> -->
        <Modal @close="toggleModal2">
            <h1>Sign up for the newsletter!</h1>
            <p>For updates,promocodes</p>
        </Modal>
    </div>
    <button @click="toggleModal2">open modal two</button>
</template>

<script>
import Modal from './components/Modal.vue';

export default {
    name: 'App',
    components: {
        Modal,
    },

    data() {
        return {
            title: 'My first vue app :)',
            header: 'Sign up for the Giveaway!',
            text: 'Grab your ninja swag for half price!',
            showModal: false,
            showModalTwo: false,
        };
    },

    methods: {
        handleClick() {
            console.log(this.$refs.name);
            this.$refs.name.classList.add('active');
            this.$refs.name.focus();
        },

        toggleModal() {
            this.showModal = !this.showModal;
        },
        toggleModal2() {
            this.showModalTwo = !this.showModalTwo;
        },
    },
};
</script>

<style>
#app,
.modals {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

h1 {
    border-bottom: 1px solid #ddd;
    display: inline-block;
    padding-bottom: 10px;
}
</style>
