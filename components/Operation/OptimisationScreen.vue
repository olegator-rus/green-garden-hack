<template>
    <v-card :loading="LOADING_STATUS">
        <v-toolbar flat>
            <v-toolbar-title>
                <span>Оптимизация логистики вагонов</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <StationModal />
        </v-toolbar>

        <v-divider></v-divider>
        <v-card-text class="pa-0">
            <v-data-table
                :headers="headers"
                :items="ROUTES_LIST"
                @click:row="open()"
            >
                <template v-slot:item.wagon="{ item }">
                    <WagonCard
                        :data="item.wagon"
                    />
                </template>

                <template v-slot:item.task="{ item }">
                    <span class="d-block">В пути: {{ item.inWay }}</span>
                    <span class="d-block">Цена: {{ item.price }}</span>
                </template>

                <template v-slot:item.road="{ item }">
                    <v-stepper
                        :value="1"
                        color="primary"
                        v-for="(trainRoute, index) in item.routes"
                            :key="index"
                            flat tile style="background: #30303000;"
                    >
                        <v-stepper-header>
                            <template
                                v-for="(geoLocation, geoIndex) in trainRoute"
                            >
                                <v-stepper-step
                                    :key="geoIndex"
                                    :step="geoIndex+1"
                                >
                                    {{ geoLocation.name }}
                                    <small color="success" v-if="geoIndex == trainRoute.length - 1">Место прибытия</small>
                                    <small color="success" v-if="geoIndex != trainRoute.length - 1 && geoLocation.way">Путь «{{ geoLocation.way.name }}»</small>
                                </v-stepper-step>

                                <v-divider
                                    :key="geoIndex"
                                    v-if="geoIndex < trainRoute.length - 1"
                                ></v-divider>
                            </template>
                        </v-stepper-header>
                    </v-stepper>
                </template>
            </v-data-table>
        </v-card-text>


        <v-dialog
            v-model="dialog"
            overlay-color="black"
            overlay-opacity="0.7"
            width="500"
        >
            <v-card>
                <v-toolbar color="primary" dark>
                    Подтвердить отправление состава?
                </v-toolbar>
                <v-divider class="mb-6"></v-divider>
                <v-card-text>
                    <p class="pb-0">Вы уверены, что хотите отправить вагон выбранную локацию?</p>
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
                        @click="$toast.success('Вагон успешно зарегистрирован на отправку!'); close()"
                    >
                        Подтвердить отправку
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-card>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
    computed: {
        ...mapGetters({
            CURRENT_STATION: "station/CURRENT_STATION",
            ROUTES_LIST: "operation/ROUTES_LIST",
            OPERATION_LIST: "operation/OPERATION_LIST",
        }),
    },
    methods: {
        ...mapMutations({
            changeShowMode: "station/changeShowMode",
        }),
        open(){
            this.dialog = true;
        },
        close(){
            this.dialog = false;
        }
    },
    mounted(){
        this.changeShowMode();
    },
    data () {
        return {
            dialog: false,
            selected: [],
            headers: [
                {
                    width: '10%',
                    text: 'Вагон',
                    align: 'center',
                    sortable: false,
                    value: 'wagon',
                },

                {
                    width: '15%',
                    text: 'Данные',
                    align: 'center',
                    sortable: false,
                    value: 'task',
                },

                {
                    width: '75%',
                    text: 'Оптимальный маршрут',
                    value: 'road',
                    align: 'center',
                    sortable: false,
                },

            ],
        }
    }
}
</script>


