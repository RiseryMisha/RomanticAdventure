// =====================================
// storage.js
// =====================================

const STORAGE_KEY = "mexicoRouteProgress";

const Storage = {

    getCurrentStep() {
        const value = parseInt(localStorage.getItem(STORAGE_KEY), 10);
        return isNaN(value) ? 1 : value;
    },

    saveCurrentStep(step) {
        localStorage.setItem(STORAGE_KEY, step);
    },

    completeStep() {
        if (currentStep >= 24) return;

        currentStep++;

        this.saveCurrentStep(currentStep);

        updateProgressUI();
        updateMapDisplay();
        selectLocation(currentStep);
    },

    unlockStep(step) {
        if (step !== currentStep) return;

        if (currentStep < 24) {
            currentStep++;
            this.saveCurrentStep(currentStep);
        }

        updateProgressUI();
        updateMapDisplay();
        selectLocation(currentStep);
    },

    reset() {
        localStorage.removeItem(STORAGE_KEY);

        currentStep = 1;

        updateProgressUI();
        updateMapDisplay();
        selectLocation(currentStep);
    }

};
