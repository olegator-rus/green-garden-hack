<template>
    <v-card :loading="LOADING_STATUS">
        <v-toolbar flat>
            <v-toolbar-title>
                Выбор станции
            </v-toolbar-title>
        </v-toolbar>

        <v-divider></v-divider>
        <v-card-text>
            <v-form v-model="valid">
                <!-- Поле выбора проекта -->
                <v-row>
                    <v-col>
                        <v-select
                            :disabled="!STATION_LIST_COUNT"
                            v-model="stationId"
                            :items="STATION_SELECT_LIST"
                            :rules="rules.station"
                            label="Текущая станция"
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
                    :disabled="!valid || !STATION_LIST_COUNT"
                    @click="selectStation"
                >
                    Выбрать станцию
                </v-btn>
            </v-form>
        </v-card-text>
    </v-card>
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
        rules: {
            station: [
                value => {
                    if (value) return true;
                    return 'Необходимо выбрать станцию.'
                },
            ],
        }
    }),
    methods: {
        ...mapMutations({
            setCurrentStation: "station/setCurrentStation",
            startLoading: "station/startLoading",
            finishLoading: "station/finishLoading",
        }),
        async selectStation(){
            this.startLoading();
            localStorage.setItem("station-id", this.stationId);
            this.setCurrentStation(this.stationId);
            this.finishLoading();
            // Преадресуем пользователя
            this.$router.push({ path: `/manager/board` });
        },
    },

}
</script>

