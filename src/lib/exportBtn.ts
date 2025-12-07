import { get } from "svelte/store";
import * as configMain from "./stores/configMain";

export function exportConfig() {
    const memoryVal = get(configMain.memory);
    const accelVal = get(configMain.accel);
    console.log("=== Export Config ===");
    console.log("Memory:", memoryVal);
    console.log("Accelerator:", accelVal);

    if (accelVal === "tcg") {
        console.log("TCG tb-size enabled:", get(configMain.tcgTbSizeToggle));
        console.log("TCG tb-size:", get(configMain.tcgTbSize));
        console.log("TCG mttcg:", get(configMain.tcgMttcgToggle));
    }

    console.log("CPU:", get(configMain.cpu));

    console.log("=====================");
}