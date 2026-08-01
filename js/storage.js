// ===============================
// STORAGE.JS
// Работа с сохранениями игры
// ===============================

const STORAGE_KEY = "mexicoRouteProgress";

const Storage = {

    getProgress() {
        const value = parseInt(localStorage.getItem(STORAGE_KEY));

        if (isNaN(value))
            return 1;

        return value;
    },

    saveProgress(step) {
        localStorage.setItem(STORAGE_KEY, step);
    },

    completeCurrentStep() {

        if (currentStep >= 24)
            return;

        currentStep++;

        this.saveProgress(currentStep);

        updateProgressUI();
        updateMapDisplay();
        selectLocation(currentStep);
    },

    resetGame() {

        localStorage.removeItem(STORAGE_KEY);

        currentStep = 1;

        updateProgressUI();
        updateMapDisplay();
        selectLocation(currentStep);
    }

};
