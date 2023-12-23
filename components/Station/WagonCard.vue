<template>
    <div class="d-inline ml-2">
        <v-dialog
            v-model="dialog"
            overlay-color="black"
            overlay-opacity="0.7"
            width="500"
        >
            <template v-slot:activator="{ on, attrs }">
                <span
                    v-bind="attrs"
                    v-on="on"
                    class="d-inline-flex align-center justify-start"
                >
                    <v-chip
                        label
                        color="#D5D5D9"
                        class="ma-1 bad-chip"
                        :style="opacity"
                        x-small
                    >
                        {{ data.position }}
                    </v-chip>
                    <IconTrain
                        :type="data.type"
                        :fully="data.cargo != 'Empty'"
                        :color="color"
                        height="30"
                        :style="opacity"
                    />
                </span>
            </template>

            <v-card>
                <v-toolbar color="primary" dark>
                    Информация о вагоне №{{ data.inventoryNumber }}
                </v-toolbar>
                <v-divider></v-divider>
                <v-card-text class="pa-1">
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>Владелец вагона</v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-action>
                            {{ data.owner }}
                        </v-list-item-action>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>Дней до ремонта</v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-action>
                            {{ data.daysToRepair }}
                        </v-list-item-action>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>Тип вагона</v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-action>
                            {{ data.type }}
                        </v-list-item-action>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>Время простоя (в днях)</v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-action>
                            {{ data.idleDaysLength }}
                        </v-list-item-action>
                    </v-list-item>

                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer />
                    <v-btn
                        color="light"
                        nuxt
                        @click="close()"
                    >
                        Закрыть
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>


<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
    props: {
        data: Object,
    },
    data(){
        return {
            dialog: false,
        }
    },

    methods: {
        // Метод закрытия модального окна
        async close(){
            // Закрываем модальное окно
            this.dialog = false;
        }
    },

    computed: {

        opacity: function (){
            return [this.disabled ? {'opacity': 0.2} : {'opacity': 1}];
        },

        color: function(){
            let alt = this.OWNERS_BY_ALIAS(this.data.owner);
            // console.log(this.data.owner, alt.hex);
            return this.data.inventoryNumber == this.SEARCH_NUMBER
                ? '#0B2C62' : alt.hex;
        },

        disabled: function(){

            const ownerFilter = !this.SELECTED_LIST_OWNER.length == 0 &&
                                !this.SELECTED_LIST_OWNER.includes(this.data.owner);

            const wagonFilter = !this.SELECTED_LIST_WAGON.length == 0 &&
                                !this.SELECTED_LIST_WAGON.includes(this.data.type);

            return ownerFilter || wagonFilter;
        },

        ...mapGetters({
            OWNERS_BY_ALIAS: "owner/OWNERS_BY_ALIAS",
            SELECTED_LIST_OWNER: "owner/SELECTED_LIST",
            SELECTED_LIST_WAGON: "wagon/SELECTED_LIST",
            SEARCH_NUMBER: "board/SEARCH_NUMBER",
        }),
    }
}
</script>
