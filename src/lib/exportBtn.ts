import { get } from "svelte/store";
import * as configMain from "./stores/configMain";

function constructQemuArgsMain() {
    const args: string[] = [];

    // Memory
    args.push("-m", String(get(configMain.memory)));

    // Accelerator
    const accel = get(configMain.accel);

    if (accel === "tcg") {
       let constructedBaseAccel = "tcg";
        if (get(configMain.tcgTbSizeToggle)) {
            constructedBaseAccel += `,tb-size=${get(configMain.tcgTbSize)}`;
        }
        if (get(configMain.tcgMttcgToggle)) {
            constructedBaseAccel += ",thread=multi";
        }
        args.push("-accel", constructedBaseAccel);
    } else {
        args.push("-accel", accel);
    }

    // CPU
    args.push("-cpu", String(get(configMain.cpu)));

    // SMPs
    // TODO: more extensive checks
    if (get(configMain.smpToggle)) {
        if (get(configMain.smpConfigType) === "simplified") {
            args.push("-smp", String(get(configMain.smpOverAll)));
        } else {
            const smpString = `cpus=${get(configMain.smpCpus)},maxcpus=${get(configMain.smpMaxCpus)},cores=${get(configMain.smpCores)},threads=${get(configMain.smpThreads)},sockets=${get(configMain.smpSockets)}`;
            args.push("-smp", smpString);
        }
    }

    return args;
}

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

    console.log(`Constructed QEMU Args: qemu-system-x86_64 ${constructQemuArgsMain().join(" ")}`);
}