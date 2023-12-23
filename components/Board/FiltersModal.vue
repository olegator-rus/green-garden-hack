<template>
    <v-dialog
        v-model="dialog"
        overlay-color="black"
        overlay-opacity="0.7"
        width="500"
    >
        <template v-slot:activator="{ on, attrs }">
            <v-icon
                class="mr-4"
                v-bind="attrs"
                v-on="on"
            >
                mdi-filter-cog-outline
            </v-icon>
        </template>

        <v-card>
            <v-toolbar color="primary" dark>
                Фильтрация составов
            </v-toolbar>
            <v-divider class="mb-6"></v-divider>
            <v-card-text>
                <v-row>
                    <v-col>
                        <BoardOwnersSelector />
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <BoardWagonSelector />
                    </v-col>
                </v-row>

                <v-row>
                    <v-col>
                        <BoardFixDays />
                    </v-col>
                </v-row>

                <v-row>
                    <v-col>
                        <v-switch
                            v-model="numberMode"
                            :label="`Отображать номера вагонов`"
                        ></v-switch>
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
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
    methods: {
        ...mapMutations({
            changeShowMode: "station/changeShowMode"
        }),

        // Метод закрытия модального окна
        async close(){
            // Закрываем модальное окно
            this.dialog = false;
        }
    },
    computed: {
        ...mapGetters({
            SHOW_MODE: "station/SHOW_MODE"
        }),
        numberMode: {
            get() { return this.SHOW_MODE; },
            set() { this.changeShowMode(); },
        },
    },

    data () {
        return {
            dialog: false,
        };
    },
}
</script>
