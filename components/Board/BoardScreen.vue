<template>
    <div>
        <BoardFilters />

        <v-row v-for="park in STATION_DATA(CURRENT_STATION?.id)" :key="park.id">
            <v-col>
                <ParkCard :data="park" />
            </v-col>
        </v-row>
    </div>
</template>


<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import draggable from "vuedraggable";

export default {
    props: {
        data: Object,
    },

    computed: mapGetters({
        CURRENT_STATION: "station/CURRENT_STATION",
        UPDATE_KEY: "station/UPDATE_KEY",
        STATION_DATA: "station/STATION_DATA",
    }),

    data () {
        return {
            stationId: null,
        };
    },
}
</script>
