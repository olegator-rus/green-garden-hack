<template>
    <div class="v-list-horizontal">
        <v-chip
            v-for="(item, index) in OWNERS_UNIQUE"
            :key="index"
            class="ma-2"
            :color="item.hex"
            label
            text-color="black"
        >
            <v-icon left>
                mdi-train
            </v-icon>
            {{ item.name }}
        </v-chip>
    </div>
</template>


<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
    computed: mapGetters({
        OWNERS_UNIQUE: "owner/OWNERS_UNIQUE",
    }),

}
</script>
