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
                v-model="selected"
                show-select
                item-key="id"
                :headers="headers"
                :items="data"
                :hide-default-footer="true"
            >
                <template v-slot:item.wagons="{ item }">
                    <v-chip-group
                        column
                    >
                        <draggable class="py-3">
                            <WagonCard
                                v-for="wagon in item.wagons"
                                :data="wagon"
                                :key="wagon.id"
                                draggable
                            />
                        </draggable>
                    </v-chip-group>
                </template>
            </v-data-table>
        </v-card-text>
    </v-card>
</template>


<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
    props: {
        data: Object,
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
