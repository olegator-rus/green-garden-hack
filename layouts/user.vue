<template>
    <v-app>
        <v-navigation-drawer v-model="drawer" :clipped="clipped" fixed app>
            <!-- Карточка пользователя -->
            <template v-slot:prepend>
                <v-list-item two-line>
                <v-list-item-avatar>
                    <v-avatar color="info" size="100">
                    {{ Array.from($auth.user.name)[0] }}
                    </v-avatar>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title>{{ $auth.user.name }}</v-list-item-title>
                    <v-list-item-subtitle v-if="$auth.user.roles.find(role => role.name === 'client')">Пользователь</v-list-item-subtitle>
                    <v-list-item-subtitle v-if="$auth.user.roles.find(role => role.name === 'manager')">Менеджер</v-list-item-subtitle>
                    <v-list-item-subtitle v-if="$auth.user.roles.find(role => role.name === 'admin')">Администратор</v-list-item-subtitle>
                </v-list-item-content>
                </v-list-item>
            </template>
            <v-divider></v-divider>

            <v-list>
                <v-list-item
                    v-for="(item, i) in menu"
                    :key="i"
                    :to="item.to"
                    router
                    exact
                >
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.title" />
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <template v-slot:append>
                <div class="pa-2">
                    <v-btn block @click="$auth.logout()">
                        Выйти из системы
                    </v-btn>
                </div>
            </template>
        </v-navigation-drawer>


        <v-app-bar :clipped-left="clipped" fixed app>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
            <img class="ml-6" :src="require('../assets/logo.png')" height="20" />
            <v-spacer />
        </v-app-bar>
        <v-main>
            <v-container v-if="!PRELOADER_STATUS">
                <Nuxt class="mb-14"/>
                <FooterArea />
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {

    data () {
        return {
            clipped: true,
            drawer: false,
        }
    },

    mounted(){
        // Если устройство мобильное, скрываем по-умолчанию боковое меню
        this.drawer =
            this.$vuetify.breakpoint.mobile ? false : true;
    },

    computed: {

        ...mapGetters({
            PRELOADER_STATUS: "layout/PRELOADER_STATUS",
        }),

        menu() {
            return [
                {
                    "icon": "mdi-chart-bar-stacked",
                    "title": "Управление станцией",
                    "to": "/manager/board"
                },
                {
                    "icon": "mdi-train",
                    "title": "Операции на станции",
                    "to": "/manager/operation"
                },
                {
                    "icon": "mdi-navigation-variant",
                    "title": "Оптимизация пути",
                    "to": "/manager/optimisation"
                },
            ];
        }
    },

    methods: {
        ...mapMutations({
            activatePreloader: 'layout/activatePreloader',
            deactivatePreloader: 'layout/deactivatePreloader'
        }),
    },

    async fetch(){
        await this.activatePreloader();
        await this.deactivatePreloader();
    }
}
</script>
