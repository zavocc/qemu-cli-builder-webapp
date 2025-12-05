<script>
    import AcceleratorOptions_TCGOps from "./AcceleratorOptions/TCGOps.svelte";

    let memory = $state(2048);
    let accel = $state("kvm");
</script>

<div class="flex flex-col space-y-4">
    <h1 class="text-xl">Machine and configuration</h1>
    <!-- Memory -->
    <div class="flex flex-row space-x-4">
        <label for="memory">Memory (MB)</label>
        <input type="number" bind:value={memory} placeholder="Memory in MB" min="128" max="2147483648" step="128" />
    </div>
    <!-- Accelerator  -->
    <div class="flex flex-row space-x-4">
        <label for="accel">Acceleration</label>
        <select id="accel" name="accel" bind:value={accel}>
            <option value="kvm">KVM</option>
            <option value="tcg">TCG</option>
        </select>
    </div>

    <!-- Expand accelerator-specific options -->
    {#if accel === "tcg"}
        <AcceleratorOptions_TCGOps />
    {/if}
</div>