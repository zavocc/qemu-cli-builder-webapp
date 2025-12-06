import { get } from "svelte/store";
import {
    memory,
    accel,
    tcgTbSizeToggle,
    tcgTbSize,
    tcgMttcgToggle
} from "./stores/configMain";

export function exportConfig() {
    // get() reads current store value without subscribing
    const memoryVal = get(memory);
    const accelVal = get(accel);

    console.log("=== Export Config ===");
    console.log("Memory:", memoryVal);
    console.log("Accelerator:", accelVal);

    if (accelVal === "tcg") {
        console.log("TCG tb-size enabled:", get(tcgTbSizeToggle));
        console.log("TCG tb-size:", get(tcgTbSize));
        console.log("TCG mttcg:", get(tcgMttcgToggle));
    }

    console.log("=====================");
}