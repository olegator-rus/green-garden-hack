<template>
    <v-select
        v-model="types"
        :items="TYPES_LIST"
        label="Выбрать тип вагона"
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
        types:{
            get: function(){
                return this.SELECTED_LIST;
            },
            set: function(newWagon){
                this.updateSelectorWagon(newWagon);
            }
        }
    },
    methods: {
        ...mapMutations({
            updateSelectorWagon: "wagon/updateSelectorWagon",
        }),
    }
}
</script>
