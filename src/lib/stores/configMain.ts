import { writable } from "svelte/store";

export const memory = writable(2048);
export const accel = writable("kvm");

export const tcgTbSizeToggle = writable(false);
export const tcgTbSize = writable(512);
export const tcgMttcgToggle = writable(false);

export function resetTcgOptions() {
    tcgTbSizeToggle.set(false);
    tcgTbSize.set(512);
    tcgMttcgToggle.set(false);
}
