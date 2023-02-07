<template>
    <v-btn
        variant="flat"
        class="bg-success my-3"
    >
      Add new project
      <v-dialog
        activator="parent"
        max-width="600px"
      >
        <v-card>
            <v-card-title>
                Add a New Project
            </v-card-title>
          <v-card-text>
            <v-form class="px-3" ref="form">
                <v-text-field
                    bg-color="white"
                    label="Title"
                    v-model="title"
                    :rules="inputRules"
                    prepend-icon="mdi-folder"
                ></v-text-field>
                <v-textarea 
                    label="Information"
                    bg-color="white"
                    v-model="content"
                    :rules="inputRules"
                    prepend-icon="mdi-pencil"
                ></v-textarea>
            </v-form>
          </v-card-text>

          <v-card-actions>
            <v-btn @click="submit" class="bg-success mx-0 mt-3" :loading="loading">
                ADD PROJECT
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-btn>
</template>

<script>
    export default {
        data(){
            return {
                title:'',
                content:'',
                inputRules: [
                    v => v.length >= 5 || 'Minimum characters must be 5'
                ],
                loading:false
            }
        },
        methods: {
            submit(){
                
                if(this.$refs.form.validate()){
                    this.loading = true
                    console.log(this.title, this.content);
                }
                setTimeout(() => {
                    this.loading = false;
                }, 3000);
                this.$emit('projectAdded');
            }
        }
    }
</script>