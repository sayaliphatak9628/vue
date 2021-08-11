//console.log('Hello,vue');
const app = Vue.createApp({
    // template : "<h2>This is vue</h2>"

    data() {
        //also known as properties
        return {
            url: 'https://www.thenetninja.co.uk',
            showBooks: true,
            // title: 'The final empire',
            // author: 'Brandon Sanderson',
            // age: 45,
            // x: 0,
            // y: 0,
            books: [
                {
                    title: 'name of the wind',
                    author: 'patrick rothfus',
                    img: 'assets/book1.jpeg',
                    isFav: true,
                },
                {
                    title: 'the way of kings',
                    author: 'brandon sanderson',
                    img: 'assets/book2.jpeg',
                    isFav: false,
                },
                {
                    title: 'the final empire',
                    author: 'brandon sanderson',
                    img: 'assets/book3.jpeg',
                    isFav: true,
                },
            ],
        };
    },
    methods: {
        // changeTitle(title) {
        //     // console.log('you clicked me!');
        //     //  this.title = 'words of radiance';
        //     this.title = title;
        // },
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        },
        // handleEvents(e, data) {
        //     //console.log('events');
        //     console.log(e, e.type); //check in console
        //     if (data) {
        //         console.log(data);
        //     }
        // },
        // handleMouseMove(e) {
        //     this.x = e.offsetX;
        //     this.y = e.offsetY;
        // },

        toggleFav(book) {
            book.isFav = !book.isFav;
        },
    },

    computed: {
        filteredBooks() {
            return this.book.filter((book) => book.isFav);
        },
    },
});

app.mount('#app');
