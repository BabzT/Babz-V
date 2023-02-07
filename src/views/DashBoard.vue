<template>
 <div class="dashboard">
  <h1 class="text-subtitle-1 text-grey">Dashboard</h1>
  <v-container class="my-5">
    <v-row class="mb-3">
        <v-btn variant="text" small color="grey">
            <v-icon icon="mdi-folder" start></v-icon>
            <span class="text-caption text-lowercase">By project name</span>
            <v-tooltip
                activator="parent"
                location="top"
            >
                Sort project by the name
            </v-tooltip>
        </v-btn>
        <v-btn variant="text" small color="grey">
            <v-icon icon="mdi-account" start></v-icon>
            <span class="text-caption text-lowercase">By person</span>
            <v-tooltip
                activator="parent"
                location="top"
            >
                Sort project by the author
            </v-tooltip>
        </v-btn>
    </v-row>

    <v-card variant="flat" v-for="project in projects" :key="project.title">
        <v-row class="pa-3">
            <v-col cols="12" md="6">
                <div class="caption text-grey">Project title</div>
                <div>{{project.title}}</div>
            </v-col>
            <v-col cols="6" sm="4" md="2">
                <div class="caption text-grey">Person</div>
                <div>{{project.person}}</div>
            </v-col>
            <v-col cols="6" sm="4" md="2">
                <div class="caption text-grey">Due by</div>
                <div>{{project.due}}</div>
            </v-col>
            <v-col cols="2" sm="4" md="2">
                <div class="text-right">
                    <v-chip small :class="`text-white ${project.status}`">
                        {{ project.status }}
                    </v-chip>
                </div>
            </v-col>
        </v-row>
        <v-divider></v-divider>
    </v-card>
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

<style>
.v-chip.complete{
  background: #3cd1c2;
}
.v-chip.pending{
  background: #ffaa2c;
}
.v-chip.overdue{
  background: #f83e70;
}
</style>

