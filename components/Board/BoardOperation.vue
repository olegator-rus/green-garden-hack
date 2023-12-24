<template>
    <v-dialog
        v-model="dialog"
        overlay-color="black"
        overlay-opacity="0.7"
        width="900"
    >
        <template v-slot:activator="{ on, attrs }">
            <v-btn
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
            >
                Операция на станции
            </v-btn>
        </template>

        <v-card>
            <v-toolbar color="primary" dark>
               Регистрация операции
            </v-toolbar>
            <v-divider class="mb-6"></v-divider>
            <v-card-text>
                <v-row>
                    <v-col>
                        <p>Идентификатор операции - {{ form.id }}</p>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="6">
                        <v-row>
                            <v-col cols="6">
                                <v-menu
                                    v-model="ui.start_date"
                                    :close-on-content-click="false"
                                    :nudge-right="40"
                                    transition="scale-transition"
                                    offset-y
                                    min-width="auto"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                            v-model="form.start_date"
                                            label="Дата начала операции"
                                            disabled
                                            readonly
                                            clearable
                                            locale="ru-RU"
                                            v-bind="attrs"
                                            v-on="on"
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker
                                        v-model="form.start_date"
                                        @input="ui.start_date = false"
                                    ></v-date-picker>
                                </v-menu>
                            </v-col>
                            <v-col cols="6">
                                <v-menu
                                    v-model="ui.end_date"
                                    :close-on-content-click="false"
                                    :nudge-right="40"
                                    transition="scale-transition"
                                    offset-y
                                    min-width="auto"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                            v-model="form.end_date"
                                            label="Дата конца операции"
                                            readonly
                                            clearable
                                            locale="ru-RU"
                                            v-bind="attrs"
                                            v-on="on"
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker
                                        v-model="form.end_date"
                                        @input="ui.end_date = false"
                                    ></v-date-picker>
                                </v-menu>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="6">
                                <v-text-field
                                    type="time"
                                    v-model="form.start_time"
                                    disabled
                                    label="Время начала операции"
                                    clearable
                                    required
                                ></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field
                                    type="time"
                                    v-model="form.end_time"
                                    label="Время конца операции"
                                    clearable
                                    required
                                ></v-text-field>
                            </v-col>

                        </v-row>
                    </v-col>
                    <v-col cols="6">
                        <v-textarea
                            v-model="form.comment"
                            label="Комментарии"
                            rows="4"
                            hide-details="true"
                            no-resize
                            outlined
                        ></v-textarea>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="4">
                        <v-select
                            v-model="form.type"
                            :items="OPERATION_TYPES"
                            label="Вид операции"
                            item-text="name"
                            item-value="id"
                            persistent-hint
                            hide-details="true"
                        ></v-select>
                    </v-col>
                    <v-col cols="4">
                        <v-select
                            v-model="form.operation"
                            :items="OPERATION_LIST"
                            label="Операции"
                            persistent-hint
                            item-text="name"
                            item-value="id"
                            hide-details="true"
                        ></v-select>
                    </v-col>
                    <v-col cols="4">
                        <v-select
                            v-model="form.reason"
                            :items="OPERATION_REASONS"
                            label="Причина"
                            persistent-hint
                            item-text="title"
                            item-value="id"
                            hide-details="true"
                        ></v-select>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="4">
                        <v-select
                            v-model="form.station_departure"
                            :items="STATION_LIST"
                            label="Станция отправления"
                            persistent-hint
                            item-text="title"
                            item-value="id"
                            hide-details="true"
                        ></v-select>
                    </v-col>
                    <v-col cols="4">
                        <v-select
                            v-model="form.park_departure"
                            :disabled="!form.station_departure"
                            :items="PARKS_BY_STATION(form.station_departure)"
                            label="Парк отправления"
                            persistent-hint
                            item-text="name"
                            item-value="id"
                            hide-details="true"
                        ></v-select>
                    </v-col>
                    <v-col cols="4">
                        <v-select
                            v-model="form.way_departure"
                            :disabled="!form.station_departure"
                            :items="WAYS_BY_STATION(form.station_departure)"
                            label="Путь отправления"
                            persistent-hint
                            item-text="name"
                            item-value="id"
                            hide-details="true"
                        ></v-select>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="4">
                        <v-select
                            v-model="form.station_arrival"
                            :items="STATION_LIST"
                            label="Станция прибытия"
                            persistent-hint
                            item-text="title"
                            item-value="id"
                            hide-details="true"
                        ></v-select>
                    </v-col>
                    <v-col cols="4">
                        <v-select
                            v-model="form.park_arrival"
                            :items="PARKS_BY_STATION(form.station_arrival)"
                            :disabled="!form.station_arrival"
                            label="Парк прибытия"
                            persistent-hint
                            item-text="name"
                            item-value="id"
                            hide-details="true"
                        ></v-select>
                    </v-col>
                    <v-col cols="4">
                        <v-select
                            v-model="form.way_arrival"
                            :disabled="!form.station_arrival"
                            :items="WAYS_BY_STATION(form.station_arrival)"
                            label="Путь прибытия"
                            persistent-hint
                            item-text="name"
                            item-value="id"
                            hide-details="true"
                        ></v-select>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="6">
                        <v-select
                            v-model="form.machinist"
                            :items="MACHINISTS_LIST"
                            label="Машинист (ФИО)"
                            persistent-hint
                            item-text="name"
                            item-value="id"
                            hide-details="true"
                        ></v-select>
                    </v-col>
                    <v-col cols="6">
                        <v-select
                            disabled
                            label="Локомотив"
                            persistent-hint
                            item-text="name"
                            item-value="id"
                            hide-details="true"
                        ></v-select>
                    </v-col>
                </v-row>

            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-spacer />
                <v-btn
                    color="light"
                    nuxt
                    @click="close()"
                >
                    Отменить
                </v-btn>
                <v-btn
                    color="primary"
                    nuxt
                    @click="close()"
                >
                    Сохранить
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
    computed: {
        ...mapGetters({
            MACHINISTS_LIST: "operation/MACHINISTS_LIST",
            PARKS_BY_STATION: "station/PARKS_BY_STATION",
            WAYS_BY_STATION: "station/WAYS_BY_STATION",
            STATION_LIST: "station/STATION_LIST",
            OPERATION_LIST: "operation/OPERATION_LIST",
            OPERATION_TYPES: "operation/OPERATION_TYPES",
            OPERATION_REASONS: "operation/OPERATION_REASONS",
        }),
    },
    methods: {
        async close(){
            this.dialog = false;
        }
    },

    data () {
        return {
            dialog: false,
            form: {
                machinist: null,
                comment: null,
                id: null,
                start_date: null,
                end_date: null,
                start_time: null,
                end_time: null,
                type: null,
                operation: null,
                reason: null,
                station_departure: null,
                station_arrival: null,
                park_departure: null,
                park_arrival: null,
                way_departure: null,
                way_arrival: null,
            },
            ui: {
                start_date: false,
                end_date: false,
            }
        };
    },

    mounted(){
        this.form.start_date = this.$moment().format("YYYY-MM-DD");
        this.form.start_time = this.$moment().format("h:mm");;
        this.form.id = Math.floor(Math.random() * (100000000 - 100000) + 100000);
    }
}
</script>

