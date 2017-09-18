import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        counter: 4,
        widgets: [
            {
                id: 1,
                name: 'widget1',
                description: 'widget1 description.',
            },
            {
                id: 2,
                name: 'widget2',
                description: 'widget2 description.',
            },
            {
                id: 3,
                name: 'widget3',
                description: 'widget3 description.',
            }]
    },
    getters: {
        getWidgets: (state) => {
            return state.widgets;
        },
        countTotalWidgets: (state) => {
            return state.widgets.length;
        }
    },
    mutations: {
        addWidget: (state) => {
            const widget = {
                id: state.counter,
                name: 'widget' + state.counter,
                description: 'widget' + state.counter + ' description'
            };
            state.widgets.push(widget);
            state.counter++;
        },
        deleteWidget: (state, id) => {
            const wid = state.widgets.find(widget => {
                return widget.id == id.userId;
            });
            state.widgets.splice(state.widgets.indexOf(wid), 1);
        }
    }
});