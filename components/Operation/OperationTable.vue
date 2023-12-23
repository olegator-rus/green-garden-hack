<template>
    <v-card :loading="LOADING_STATUS">
        <v-toolbar flat>
            <v-toolbar-title>
                <span>Операции на станции</span>
            </v-toolbar-title>
        </v-toolbar>

        <v-divider></v-divider>
        <v-card-text class="pa-0">
            <v-data-table
                :headers="headers"
                :items="OPERATION_LIST"
            >
                <template v-slot:item.id="{ item }">
                    {{ item.id }}
                    <v-icon :color="item.operationStatus ? 'success' : 'warning'">mdi-circle-medium</v-icon>
                </template>
                <template v-slot:item.locomotive="{ item }">
                    {{ item.locomotivesList[0].inventoryNumber }}
                </template>
                <template v-slot:item.startDate="{ item }">
                    {{ $moment(item.endDate).format("D.MM.YY HH:mm") }}
                </template>
                <template v-slot:item.endDate="{ item }">
                    {{ $moment(item.endDate).format("D.MM.YY HH:mm") }}
                </template>
            </v-data-table>
        </v-card-text>
    </v-card>
</template>


<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
    computed: {
        ...mapGetters({
            OPERATION_LIST: "operation/OPERATION_LIST",
        }),
    },
    data () {
        return {
            selected: [],
            headers: [
                {
                    width: '10%',
                    text: '№ операции',
                    align: 'start',
                    sortable: false,
                    value: 'id',
                },
                {
                    width: '15%',
                    text: 'Название операции',
                    align: 'start',
                    sortable: false,
                    value: 'operationName',
                },
                {
                    width: '15%',
                    text: 'Откуда',
                    align: 'start',
                    sortable: false,
                    value: 'departureStation.title',
                },
                {
                    width: '14%',
                    text: 'Куда',
                    value: 'destinationStation.title',
                    align: 'start',
                    sortable: false,
                },
                {
                    width: '12%',
                    text: '№ локомотива',
                    value: 'locomotive',
                    align: 'start',
                    sortable: false,
                },
                {
                    width: '4%',
                    text: 'Длительность',
                    value: 'normalMinutesLength',
                    align: 'start',
                    sortable: false,
                },
                {
                    width: '15%',
                    text: 'Начало',
                    value: 'startDate',
                    align: 'start',
                    sortable: false,
                },
                {
                    width: '15%',
                    text: 'Окончание',
                    value: 'endDate',
                    align: 'start',
                    sortable: false,
                },

            ],
        }
    }
}
</script>


