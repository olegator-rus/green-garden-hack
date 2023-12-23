<template>
    <v-card :loading="LOADING_STATUS">
        <v-toolbar flat>
            <v-toolbar-title>
                <!--
                    Нулевой элемент всегда сущесвтует,
                    так как пустые элементы не группируются
                -->
                <span>Парк «{{ data[0].park?.name}}»</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <small><img class="mr-2" :src="require('../../assets/label.png')" height="8" /> Простой более 5 часов ({{ waitWagons }})</small>
        </v-toolbar>

        <v-divider></v-divider>
        <v-card-text class="pa-0">
            <v-data-table
                ref="table"
                v-model="selected"
                show-select
                item-key="id"
                :headers="headers"
                :items="dnd"
                :hide-default-footer="true"
            >
                <!-- @change.self="handleDragAndDrop($event, item)" -->
                <template v-slot:item.wagons="{ item }">
                    <template v-for="(wagon, index) in item.wagons">
                        <draggable
                            :list="item.wagons"
                            class="d-inline"
                            :key="wagon.id"
                            group="my-group"
                        >
                            <WagonCard
                                :index="index+1"
                                :data="wagon"
                            />
                        </draggable>
                    </template>
                </template>

                <template v-slot:item.limits="{ item }">
                    <b>{{ item.wagons.length }} / {{ item.maxCarriagesCount }}</b>
                </template>

                <template v-slot:item.train_right="{ item }">
                    <div v-for="train in item.locomotives.filter((item) => item.direction == 'LEFT')" :key="train.inventoryNumber">
                        <small>{{ train.inventoryNumber }}</small>
                        <img :src="require('../../assets/train.svg')" height="30" />
                    </div>
                </template>

                <template v-slot:item.train_left="{ item }">
                    <div v-for="train in item.locomotives.filter((item) => item.direction == 'RIGHT')" :key="train.inventoryNumber">
                        <small>{{ train.inventoryNumber }}</small>
                        <img :src="require('../../assets/train.svg')" height="28" />
                    </div>
                </template>


            </v-data-table>
        </v-card-text>
    </v-card>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import draggable from 'vuedraggable';

export default {
    components: {
        draggable,
    },

    props: {
        data: Object,
    },
    mounted(){
        this.dnd = JSON.parse(JSON.stringify(this.data));
    },
    computed: {
        waitWagons(){
            let result = 0;
            this.dnd.forEach(item => {
                item.wagons.forEach(wagon => {
                    if(wagon.idleDaysLength > 5 ){
                        result++;
                    }
                });
            });

            return result;
        }
    },
    methods: {
        ...mapMutations({
            updateStationWagon: "station/updateStationWagon",
        }),
        handleDragAndDrop: function (event, el){
            const eventType = Object.keys(event)[0];
            const chosenFrame = event[eventType].element;
            console.log(event, chosenFrame);
            // this.updateStationWagon(
            //     {
            //         // parkId: el.park.id,
            //         // stationId: el.station.id,
            //         // oldIndex: event.moved.oldIndex,
            //         // newIndex: event.moved.newIndex
            //     }
            // );

        }
    },
    data () {
        return {
            dnd: [],
            selected: [],
            headers: [
                {
                    width: '5%',
                    text: 'Путь',
                    align: 'start',
                    sortable: false,
                    value: 'way.name',
                },
                {
                    width: '4%',
                    text: 'Лок.',
                    value: 'train_right',
                    align: 'center',
                    sortable: false,
                },
                {
                    width: '77%',
                    value: 'wagons',
                    align: 'start',
                    sortable: false,
                },
                {
                    width: '4%',
                    text: 'Лок.',
                    value: 'train_left',
                    align: 'center',
                    sortable: false,
                },
                {
                    width: '10%',
                    text: 'Вместимость',
                    value: 'limits',
                    align: 'center',
                    sortable: false,
                },

            ],
        }
    }
}
</script>
