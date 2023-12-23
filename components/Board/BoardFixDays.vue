<template>
    <v-select
        v-model="selected"
        :items="items"
        label="Кол-во дней до ремонта"
        item-text="name"
        item-value="id"
        multiple
        persistent-hint
        hide-details="true"
    ></v-select>
</template>


<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
    computed:{
        ...mapGetters({
            TYPES_LIST: "wagon/TYPES_LIST",
            SELECTED_LIST: "wagon/SELECTED_LIST",
        }),
    },
    data(){
        return {
            selected: [],
            items: [
                { 'name': 'от 1 до 5', 'id': 1 },
                { 'name': 'от 5 до 10', 'id': 2 },
                { 'name': 'от 10 до 20', 'id': 3 },
                { 'name': 'от 20 до 50', 'id': 4 },
                { 'name': 'от 50 до 100', 'id': 5 },
                { 'name': 'от 100 дней', 'id': 6 }
            ]
        }
    },
    methods: {
        ...mapMutations({
            updateSelectorWagon: "wagon/updateSelectorWagon",
        }),
    }
}
</script>
