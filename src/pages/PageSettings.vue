<script setup lang="ts">
import { reactive } from "vue";

import ButtonAsync from "@/components/common/ButtonAsync.vue";
import ModalChangeHandle from "@/components/ModalChangeHandle.vue";
import ModalMigration from "@/components/ModalMigration.vue"; //// Assuming I have a modal for migration
import { updateSettings,useSettings } from "@/lib/settings";
<<<<<<< Updated upstream
=======
import { deleteSession } from "@/lib/bsky";
import { initiateMigration, checkMigrationStatus } from "@/lib/migration"; // These are hypothetical functions you'd create

>>>>>>> Stashed changes

const settings = useSettings();
const state = reactive({
  showsModalChangeHandle: false,
  showsMigrationModal: false,  // Migration 
  loadingModalChangeHandle: false,
  migrationInProgress: false, // Migration
});
<<<<<<< Updated upstream
=======
const logout = () => {
  deleteSession();
  location.reload();
};

const startMigration = async () => {
  // Example function to start migration
  state.migrationInProgress = true;
  state.showsMigrationModal = true;
  await initiateMigration();
};

const migrationStatus = ref('');

watch(() => state.showsMigrationModal, async (newValue) => {
  if (!newValue) return;
  migrationStatus.value = await checkMigrationStatus();
});

>>>>>>> Stashed changes
</script>

<template>
  <div class="form-group">
    <label class="form-switch">
      <input
        type="checkbox"
        :checked="settings.enableRelativeTime"
        @change="updateSettings({
            enableRelativeTime: !settings.enableRelativeTime,
          })
        "
      />
      <i class="form-icon"></i>Enable relative time
    </label>
  </div>
  <div>
<<<<<<< Updated upstream
    <ButtonAsync
      class="btn"
      :force-loading="state.loadingModalChangeHandle"
      @click="state.showsModalChangeHandle = true"
    >
      Edit your handle...
    </ButtonAsync>
  </div>
=======
<ButtonAsync
  class="btn btn-link change-handle" 
  :force-loading="state.loadingModalChangeHandle"
  @click="state.showsModalChangeHandle = true"
>
  Edit your handle...
</ButtonAsync>
</div>

<button class="btn btn-link migrate-button" @click="startMigration"> 
    Migrate Account
     
<button class="btn btn-link logout-button" @click="logout">
  Logout
</button>
>>>>>>> Stashed changes
  <Suspense
    @pending="state.loadingModalChangeHandle = true"
    @resolve="state.loadingModalChangeHandle = false"
    @fallback="state.loadingModalChangeHandle = false"
  >
    <ModalChangeHandle
      v-if="state.showsModalChangeHandle"
      @close="state.showsModalChangeHandle = false"
    />

    <ModalMigration
      v-if="state.showsMigrationModal"
      :status="migrationStatus"
      @close="state.showsMigrationModal = false"
    />

  </Suspense>
</template>
<<<<<<< Updated upstream
=======
<style scoped>
.btn-link.logout-button {
  padding: 8px 16px; 
  font-size: 16px; 
  background-image: linear-gradient(145deg, #6e48aa, #9d50bb); 
  color: white;
  border: none; 
  border-radius: 5px; 
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); 
  transition: all 0.3s ease; 
  cursor: pointer; 
  margin-top: 30px;
}

.btn-link.logout-button:hover, .btn-link.logout-button:focus {
  background-image: linear-gradient(to right, #9d50bb, #6e48aa); 
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3); 
}
.btn-link.change-handle {
   padding: 8px 16px; 
  font-size: 16px; 
  background-image: linear-gradient(145deg, #6e48aa, #9d50bb); 
  color: white;
  border: none; 
  border-radius: 5px; 
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); 
  transition: all 0.3s ease;
  cursor: pointer;
  margin-top: .9em;
  }
  .btn-link.change-handle:hover .btn-link.change-handle:focus {
      background-image: linear-gradient(to right, #9d50bb, #6e48aa); 
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }

    .btn-link.migrate-button { 
  padding: 8px 16px;
  font-size: 16px;
  background-image: linear-gradient(145deg, #9d50bb, #6e48aa);
  color: white;
  border: none;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  cursor: pointer;
  margin-top: 1em;
}
.btn-link.migrate-button:hover, .btn-link.migrate-button:focus {
  background-image: linear-gradient(to right, #6e48aa, #9d50bb);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}
</style>

>>>>>>> Stashed changes
