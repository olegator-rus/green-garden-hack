<template>
    <v-dialog
        v-model="dialog"
        overlay-color="black"
        overlay-opacity="0.7"
        width="500"
    >
        <template v-slot:activator="{ on, attrs }">
            <v-icon
                v-bind="attrs"
                v-on="on"
            >
                mdi-map-marker-multiple
            </v-icon>
        </template>

        <v-card>
            <v-toolbar color="primary" dark>
                Место назначения вагона
            </v-toolbar>
            <v-divider class="mb-6"></v-divider>
            <v-card-text>
                <v-row>
                    <v-col>
                        <StationChanger @stationSelected="close()" />
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
    methods: {
        ...mapMutations({
            changeShowMode: "station/changeShowMode"
        }),

        // Метод закрытия модального окна
        async close(){
            console.log('asdf');
            // Закрываем модальное окно
            this.dialog = false;
        }
    },
    computed: {
        ...mapGetters({
            SHOW_MODE: "station/SHOW_MODE"
        }),
        numberMode: {
            get() { return this.SHOW_MODE; },
            set() { this.changeShowMode(); },
        },
    },

    data () {
        return {
            dialog: false,
        };
    },
}
</script>
