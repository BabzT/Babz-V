<template>
  <div class="projects">
   <h1 class="text-subtitle-1 text-grey">Projects</h1>
   <v-container class="my-5">
    <v-expansion-panels>
      <v-expansion-panel v-for="project in projects" :key="project.title">
        <v-expansion-panel-title>
          {{project.title}}
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-card>
            <v-card-text class="px-4 text-grey">
              <div class="font-weight-bold">Due by {{project.due}}</div>
              <div>{{ project.content }}</div>
            </v-card-text>
        </v-card>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
  </div>
 </template>
 
 <script>
 import { defineComponent } from 'vue';
 
 export default defineComponent({
  data(){
    return {
        projects: [
            { title: 'Design a new website', person: 'The Brain user', due: '1st Jan 2023', status: 'pending', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
            { title: 'Code up the homepage', person: 'King of Vibes', due: '10th Jan 2023', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
            { title: 'Design video thumbnails', person: 'BabzTech', due: '20th Dec 2022', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
            { title: 'Create a community forum', person: 'King of Vibes', due: '20th Oct 2022', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        ]
    }
  }
 });
 </script>
