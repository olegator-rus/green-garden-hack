<template>
    <div>
        <v-row>
            <v-col>
                <v-select
                    :disabled="!STATION_LIST_COUNT"
                    v-model="stationId"
                    :items="STATION_SELECT_LIST"
                    label="Cтанция назначения"
                    no-data-text="Нет станции для выбора"
                    item-text="title"
                    item-value="id"
                    outlined
                ></v-select>
            </v-col>
        </v-row>
        <v-btn
            color="primary"
            block
            :disabled="stationId == null || !STATION_LIST_COUNT"
            @click="selectStation"
        >
            Выбрать станцию
        </v-btn>
    </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
    computed: mapGetters({
        STATION_LIST_COUNT: "station/STATION_LIST_COUNT",
        STATION_SELECT_LIST: "station/STATION_SELECT_LIST",
        LOADING_STATUS: "station/LOADING_STATUS",
    }),
    data: () => ({
        valid: false,
        stationId: null,
    }),
    methods: {
        ...mapMutations({
            updateArrival: "operation/updateArrival",
            startLoading: "station/startLoading",
            finishLoading: "station/finishLoading",
        }),

        selectStation(){
            this.updateArrival(this.stationId);
            this.$emit('stationSelected')
        }
    },

}
</script>

