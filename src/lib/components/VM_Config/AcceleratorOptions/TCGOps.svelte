<script>
    import { tcgTbSizeToggle, tcgTbSize, tcgMttcgToggle } from "../../../stores/configMain.js";
</script>

<div class="flex flex-row space-x-4">
    <label for="tb_size_toggle">
        <input 
            type="checkbox" 
            id="tb_size_toggle"
            bind:checked={$tcgTbSizeToggle}
        />
        Enable Translation Block Cache setting (tb-size)
    </label>
</div>

<!-- Check if we have tb_size_toggle set to true -->
{#if $tcgTbSizeToggle}
    <div class="flex flex-row space-x-4">
        <label for="tb_size">TB Size</label>
        <input 
            type="number" 
            id="tb_size" 
            bind:value={$tcgTbSize} 
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
            bind:checked={$tcgMttcgToggle}
        />
        {#if $tcgMttcgToggle}
        MTTCG activated
        {:else}
        Enable Multi-Threaded TCG (mttcg) NOTE: This works best on weak-on-strong configuration
        {/if}
    </label>
</div>

