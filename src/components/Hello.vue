<template>
    <div class="hello">
        <b-container class="addTopMarginHeader">
            <b-row>
                <button class="btn btn-info" @click="addWidget()">Add Widget</button>
            </b-row>
            <b-row>
                <b-col>
                    <div class="addTopMargin" v-for="widget in getWidgets">
                        <div><h4>{{ widget.name }}</h4></div>
                        <div class="date">{{ widget.description }}</div>
                        <div @click="deleteWidget(widget.id)" class="delWidget">Delete</div>
                    </div>
                </b-col>
            </b-row>
            <b-row>
                <h2>Total Widgets: {{countTotalWidgets}}</h2>
            </b-row>
        </b-container>
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
    .addTopMarginHeader {
        margin-top: 52px;
    }
    .addTopMargin {
        margin-top: 12px;
    }
    .delWidget {
        cursor: pointer;
        color: blue;
    }
</style>
