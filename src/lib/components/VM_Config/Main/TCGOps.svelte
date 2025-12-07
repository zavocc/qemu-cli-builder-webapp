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

<div class="flex flex-row space-x-4 items-center">
    <label for="mttcg_toggle" class="flex items-center space-x-2">
        <input 
            type="checkbox" 
            id="mttcg_toggle"
            bind:checked={$tcgMttcgToggle}
        />
        <span>
            {#if $tcgMttcgToggle}
            MTTCG activated
            {:else}
            Enable Multi-Threaded TCG
            {/if}
        </span>
    </label>

    <!-- Tooltip trigger -->
    <div class="relative group cursor-help">
        <span class="inline-flex items-center justify-center w-4 h-4 rounded-full bg-gray-300 text-xs text-gray-800">
            ?
        </span>
        <!-- Tooltip content -->
        <div class="absolute left-1/2 -translate-x-1/2 mt-2 w-64 rounded bg-gray-800 text-white text-xs p-2 shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none z-10">
            Multi-Threaded TCG is typically used for weak-on-strong
            setups (e.g. ARM guest on x86 host).
        </div>
    </div>
</div>

