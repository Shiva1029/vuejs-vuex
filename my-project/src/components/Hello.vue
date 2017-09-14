<template>
    <div class="hello">
        <button class="btn btn-info" @click="addWidget()">Add Widget</button>
        <div class="row" v-for="widget in getWidgets">
            <h4>{{ widget.name }}</h4>
            <span @click="deleteWidget(widget.id)">Delete</span>
            <div class="date">{{ widget.description }}</div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: 'hello',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            };
        },
        methods: {
            addWidget() {
                this.$store.commit({
                    type: 'addWidget'
                });
            },
            deleteWidget(id) {
                this.$store.commit({
                    type: 'deleteWidget',
                    userId: id
                });
            }
        },
        computed: {
            ...mapGetters({
                getWidgets: 'getWidgets',
                countTotalWidgets: 'countTotalWidgets'
            })
        }
    };
</script>

<style scoped>
</style>
