<template>
    <v-text-field
        v-model="number"
        append-icon="mdi-magnify"
        label="Поиск по вагону"
        required
        hide-details
    ></v-text-field>
</template>


<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {

    computed:{
        ...mapGetters({
            SEARCH_NUMBER: "board/SEARCH_NUMBER",
        }),
        number:{
            get: function(){
                return this.SEARCH_NUMBER;
            },
            set: function(newNumber){
                this.updateNumber(newNumber);
            }
        }
    },
    methods: {
        ...mapMutations({
            updateNumber: "board/updateNumber",
        }),
    }
}
</script>
