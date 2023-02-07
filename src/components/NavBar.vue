<template>
        <v-snackbar v-model="snackbar" :timeout="4000" location="top" color="success">
            <span>Awesome!!!</span>
        </v-snackbar>
        <v-toolbar class="fixed-bar">
            <v-app-bar-nav-icon class="text-grey" @click="drawer = !drawer">

            </v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase text-grey">
                <span class="font-weight-light">Babz</span>
                <span>Tech</span>
            </v-toolbar-title>

            <div class="text-center">
                <v-menu
                    open-on-click
                >
                <template v-slot:activator="{ props }">
                    <v-btn
                        color="grey"
                        v-bind="props"
                    >
                        <v-icon icon="mdi-chevron-down" left></v-icon>
                        Menu
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item
                    v-for="(link, index) in links"
                    :key="index"
                    :to="link.route"
                    >
                    <v-list-item-title>{{ link.text }}</v-list-item-title>
                    </v-list-item>
                </v-list>
                </v-menu>
            </div>

            <v-btn color="red">
                <span>Sign out</span>
                <v-icon
                    end
                    icon="mdi-exit-to-app"
                ></v-icon>
            </v-btn>
            <v-navigation-drawer location="right" v-model="drawer" class="bg-primary">
                <v-col class="d-flex flex-column align-center justify-center">
                    <v-avatar size="100" class="mt-5">
                        <v-img
                            src="/avatar-1.png"
                        ></v-img>
                    </v-avatar>
                    <p class="text-white text-subtitle-2">
                        BabzTech
                    </p>
                    <Popup @projectAdded="snackbar = true"/>
                </v-col>
                <v-list>
                    <v-list-item v-for="link in links" :key="link.text" :to="link.route">
                        <v-list-item-title class="text-white">
                            <v-icon :icon="link.icon" start class="text-white"></v-icon>
                            {{ link.text }}
                        </v-list-item-title>

                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
        </v-toolbar>
</template>

<script setup>
import {ref} from 'vue';
import Popup from './PopUp.vue';

const drawer = ref(false)
const snackbar = ref(false)

const links = [
    { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/' },
    { icon: 'mdi-folder', text: 'My Projects', route: '/projects' },
    { icon: 'mdi-account', text: 'Team', route: '/team' },
]

</script>

<style scoped>
.fixed-bar {
  position: fixed;
  width: 100%;
  position: -webkit-sticky; /* for Safari */
  
  z-index: 2;
}
</style>