<template>
    <div class="team">
     <h1 class="text-subtitle-1 text-grey">Team</h1>
     <v-container class="my-5">
        <v-row>
            <v-col cols="12" sm="6" md="4" v-for="person in team" :key="person.name">
                <v-card variant="flat" class="text-center ma-3">
                    <v-avatar size="100" class="mt-4 bg-grey-lighten-2">
                        <v-img 
                            :src="person.avatar"
                        >
                        </v-img>
                    </v-avatar>
                    <v-card-text>
                        <div class="text-h6">{{ person.name }}</div>
                        <div class="text-grey">{{ person.role }}</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="grey">
                            <v-icon start icon="mdi-message"></v-icon>
                            <span>Message</span>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    </div>
   </template>
   
   <script setup>
    const team = [
        { name: 'King of Vibes', role: 'CEO', avatar:'/avatar-1.png' },
        { name: 'Dean Ann', role: 'Graphic designer', avatar:'/avatar-2.png' },
        { name: 'BabzTech', role: 'Web developer', avatar:'/avatar-4.png' },
        { name: 'Gouken', role: 'Social media maverick', avatar:'/avatar-5.png' },
        { name: 'Rebby', role: 'Sales guru', avatar:'/avatar-3.png'}
      ]
   </script>