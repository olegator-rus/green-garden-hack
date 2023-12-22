<template>
    <div>
        <BoardFilters />
        <v-row v-for="(park, index) in STATION_DATA(1)" :key="index">
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
        STATION_DATA: "station/STATION_DATA",
    }),

}
</script>
