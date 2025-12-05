<script>
    let tb_size_toggle = $state(false);
    let mttcg_toggle = $state(false);
    let tb_size = $state(512);
</script>

<div class="flex flex-row space-x-4">
    <label for="tb_size_toggle">
        <input 
            type="checkbox" 
            id="tb_size_toggle"
            bind:checked={tb_size_toggle}
        />
        Enable Translation Block Cache setting (tb-size)
    </label>
</div>

<!-- Check if we have tb_size_toggle set to true -->
{#if tb_size_toggle}
    <div class="flex flex-row space-x-4">
        <label for="tb_size">TB Size</label>
        <input 
            type="number" 
            id="tb_size" 
            bind:value={tb_size} 
            placeholder="TB Size in MB" 
            min="128" 
            max="2048" 
            step="128" 
        />
    </div>
{/if}

<div class="flex flex-row space-x-4">
    <label for="mttcg_toggle">
        <input 
            type="checkbox" 
            id="mttcg_toggle"
            bind:checked={mttcg_toggle}
        />
        {#if mttcg_toggle}
        MTTCG activated
        {:else}
        Enable Multi-Threaded TCG (mttcg) NOTE: This works best on weak-on-strong configuration
        {/if}
    </label>
</div>

