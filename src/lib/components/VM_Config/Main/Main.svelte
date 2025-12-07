<script>
    import AcceleratorOptions_TCGOps from "./TCGOps.svelte";
    import { memory, accel, cpu } from "../../../stores/configMain.js";
    import { cpuLists } from "./CPULists.ts";

    // Reset CPU to a valid option when accelerator changes
    $: if ($accel === "tcg" && $cpu === "host") {
        $cpu = "max";
    }
</script>

<div class="flex flex-col space-y-4">
    <h1 class="text-xl">Machine and configuration</h1>
    <!-- Memory -->
    <div class="flex flex-row space-x-4">
        <label for="memory">Memory (MB)</label>
        <input type="number" bind:value={$memory} placeholder="Memory in MB" min="128" max="2147483648" step="128" />
    </div>
    <!-- Accelerator  -->
    <div class="flex flex-row space-x-4">
        <label for="accel">Acceleration</label>
        <select id="accel" name="accel" bind:value={$accel}>
            <option value="kvm">KVM</option>
            <option value="tcg">TCG</option>
        </select>
    </div>

    <!-- Expand accelerator-specific options -->
    {#if $accel === "tcg"}
        <AcceleratorOptions_TCGOps />
    {/if}

    <!-- CPU -->
    <!-- TODO: CPU flags, etc... For now we give users few choices -->
            
    <div class="flex flex-row space-x-4">
        <label for="cpu">CPU</label>
        <select id="cpu" name="cpu" bind:value={$cpu}>
            {#each cpuLists as cpuOption}
            {#if !(cpuOption.requiresKVM && $accel !== "kvm")}
                <option value={cpuOption.value}>{cpuOption.friendlyLabel}</option>
            {/if}
            {/each}
        </select>
    </div>
</div>