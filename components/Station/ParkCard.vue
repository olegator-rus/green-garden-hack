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
                :items="data"
                :hide-default-footer="true"
            >
                <!-- @change.self="handleDragAndDrop($event, item)" -->
                <template v-slot:item.wagons="{ item }">
                    <draggable
                        :value="item.wagons"
                        :key="item.id"
                    >
                        <WagonCard
                            v-for="wagon in item.wagons"
                            :key="wagon.id"
                            :data="wagon"
                            class="py-2"
                        />
                    </draggable>
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
    methods: {
        ...mapMutations({
            updateStationWagon: "station/updateStationWagon",
        }),
        handleDragAndDrop: function (event, el){
            const eventType = Object.keys(event)[0];
            const chosenFrame = event[eventType].element;
            this.updateStationWagon(
                {
                    parkId: el.park.id,
                    stationId: el.station.id,
                    oldIndex: event.moved.oldIndex,
                    newIndex: event.moved.newIndex
                }
            );

        }
    },
    data () {
        return {

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
                    width: '95%',
                    value: 'wagons',
                    align: 'start',
                    sortable: false,
                },
            ],
        }
    }
}
</script>
