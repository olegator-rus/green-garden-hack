<template>
    <v-select
        v-model="owners"
        :items="OWNERS_LIST"
        label="Выбрать владельцев"
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
            OWNERS_LIST: "owner/OWNERS_LIST",
            SELECTED_LIST: "owner/SELECTED_LIST",
        }),
        owners:{
            get: function(){
                return this.SELECTED_LIST;
            },
            set: function(newNumber){
                this.updateSelectorOwners(newNumber);
            }
        }
    },
    methods: {
        ...mapMutations({
            updateSelectorOwners: "owner/updateSelectorOwners",
        }),
    }
}
</script>
