<template>
    <div class="container">
        <h1>Get JSON</h1>
        <ul>
            <li v-for="post in posts" :key="post.id">
                {{ post.id }} -- {{ post.title }}
            </li>
        </ul>
    </div>
</template>

<script>
    import $ from 'jquery'

    export default {
        name: 'getJSON',
        data() {
            return {
                posts: []
            }
        },
        mounted() {
            $.getJSON('https://jsonplaceholder.typicode.com/posts', data => {
                this.posts = data;
            })
            .fail(() => { alert('getJSON request failed!') })
        }
    }

</script>

<style scoped>
    .container {
        color: black;
    }
    ul {
    list-style-type: none;
    }

</style>