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
                                class="py-2"
                            />
                        </draggable>
                    </template>
                </template>

                <template v-slot:item.limits="{ item }">
                    <b>{{ item.wagons.length }} / {{ item.maxCarriagesCount }}</b>
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
                    width: '85%',
                    value: 'wagons',
                    align: 'start',
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
