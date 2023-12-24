<template>
    <v-card :loading="LOADING_STATUS">
        <v-toolbar flat>
            <v-toolbar-title>
                <span>Справочник станций</span>
            </v-toolbar-title>
        </v-toolbar>

        <v-divider></v-divider>
        <v-card-text class="pa-0">
            <v-data-table
                :headers="headers"
                :items="STATION_LIST"
            >
                <template v-slot:item.id="{ item }">
                    {{ item.id }}
                </template>
                <template v-slot:item.title="{ item }">
                    {{ item.title }}
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
            STATION_LIST: "station/STATION_LIST",
        }),
    },
    data () {
        return {
            headers: [
                {
                    width: '20%',
                    text: 'ID станции',
                    align: 'start',
                    sortable: true,
                    value: 'id',
                },
                {
                    width: '80%',
                    text: 'Название станции',
                    align: 'start',
                    sortable: false,
                    value: 'title',
                },
            ],
        }
    }
}
</script>


