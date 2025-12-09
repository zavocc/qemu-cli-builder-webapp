import { writable } from "svelte/store";

export const memory = writable(2048);

// writable function generic function, only accepts "kvm" or "tcg"... error if other string provided
export const accel = writable<"kvm" | "tcg">("kvm");
export const cpu = writable("max");

export const tcgTbSizeToggle = writable(false);
export const tcgTbSize = writable(512);
export const tcgMttcgToggle = writable(false);

export function resetTcgOptions() {
    tcgTbSizeToggle.set(false);
    tcgTbSize.set(512);
    tcgMttcgToggle.set(false);
}

// SMP
export const smpToggle = writable(false);

// Either simplified or detailed
export const smpConfigType = writable<"simplified" | "detailed">("simplified");

// Simplified SMP, just number
export const smpOverAll = writable(3);

// Detailed SMP
export const smpCpus = writable(3);
export const smpMaxCpus = writable(6);
export const smpCores = writable(3);
export const smpThreads = writable(1);
export const smpSockets = writable(1);