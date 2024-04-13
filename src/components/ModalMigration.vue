<script setup lang="ts">
import { ref, defineEmits } from "vue";
import ButtonAsync from "@/components/common/ButtonAsync.vue";
import { initiateMigration, checkMigrationStatus } from "@/lib/migration";

const emits = defineEmits<{
  (ev: "close"): void;
}>();

const migrationStatus = ref("Ready to start migration.");
const migrationError = ref("");

const close = () => {
  emits("close");
};

const startMigration = async () => {
  migrationError.value = "";
  try {
    migrationStatus.value = "Initiating migration...";
    await initiateMigration();
    migrationStatus.value = "Migration in progress...";
    // Optionally, check the migration status dynamically
    const status = await checkMigrationStatus();
    migrationStatus.value = `Migration completed: ${status}`;
    setTimeout(close, 3000);  // Close automatically after showing status
  } catch (error: any) {
    console.error(error);
    migrationError.value = error.message || "An error occurred during migration.";
    migrationStatus.value = "Migration failed.";
  }
};
</script>

<template>
  <div class="modal active">
    <a class="modal-overlay" @click="close"></a>
    <div class="modal-container">
      <div class="modal-header">
        <button class="btn btn-clear float-right" @click="close"></button>
        <h5 class="modal-title">Account Migration</h5>
      </div>
      <div class="modal-body">
        <div class="content">
          <p>{{ migrationStatus }}</p>
          <p v-if="migrationError" class="form-input-hint text-error">
            {{ migrationError }}
          </p>
          <div v-if="migrationStatus === 'Ready to start migration.'">
            <p>Make sure you have backed up all important data before proceeding.</p>
            <p>Migration cannot be undone, and you might not be able to revert to the old account.</p>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <ButtonAsync
          class="btn btn-primary"
          :on-click="startMigration"
          :disabled="migrationStatus !== 'Ready to start migration.'"
        >
          Start Migration
        </ButtonAsync>
        <button class="btn btn-link" @click="close">Close</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  background-color: rgba(0, 0, 0, 0.6);
}
.modal-container {
  max-width: 600px; /* Adjust based on your design needs */
}
.text-error {
  color: #0ef055;
}
</style>
