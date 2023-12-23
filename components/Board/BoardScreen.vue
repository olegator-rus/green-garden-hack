<template>
    <div>
        <BoardFilters />
        <v-row v-for="park in STATION_DATA(1)" :key="park.id">
            <v-col>
                <ParkCard :data="park" />
            </v-col>
        </v-row>
    </div>
</template>


<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
    props: {
        data: Object,
    },

    computed: mapGetters({
        UPDATE_KEY: "station/UPDATE_KEY",
        STATION_DATA: "station/STATION_DATA",
    }),

}
</script>
