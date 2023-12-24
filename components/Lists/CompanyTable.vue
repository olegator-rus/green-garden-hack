<template>
    <v-card :loading="LOADING_STATUS">
        <v-toolbar flat>
            <v-toolbar-title>
                <span>Справочник компаний (перевозчиков)</span>
            </v-toolbar-title>
        </v-toolbar>

        <v-divider></v-divider>
        <v-card-text class="pa-0">
            <v-data-table
                :headers="headers"
                :items="LEGEND_LIST"
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
            LEGEND_LIST: "owner/LEGEND_LIST",
        }),
    },
    data () {
        return {
            headers: [
                {
                    width: '55%',
                    text: 'Название перевозчика',
                    align: 'start',
                    sortable: true,
                    value: 'name',
                },
                {
                    width: '15%',
                    text: 'Код перевозчика',
                    align: 'start',
                    sortable: true,
                    value: 'alias',
                },
                {
                    width: '10%',
                    text: 'Знач. час.',
                    align: 'start',
                    sortable: false,
                    value: 'dolgostoy_value',
                },
            ],
        }
    }
}
</script>


