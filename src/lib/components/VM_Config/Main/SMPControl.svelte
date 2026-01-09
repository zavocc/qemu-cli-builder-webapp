<script>
    import { 
        smpConfigType, 
        smpOverAll,  
        smpCpus,
        smpMaxCpus,
        smpCores,
        smpThreads,
        smpSockets
    } from "../../../stores/configMain.js";
</script>

<div class="divform">
    <label for="smpConfigType">SMP configuration type</label>
    <select id="smpConfigType" name="smpConfigType" bind:value={$smpConfigType} class="w-32">
        <option value="simplified">Simplified</option>
        <option value="detailed">Detailed</option>
    </select>
</div>


<!-- If it's simplified, only show a very simplified setting -->
{#if $smpConfigType === "simplified"}
    <div class="divform">
        <label for="smpOverAll">Total vCPUs</label>
        <input 
            type="number" 
            id="smpOverAll" 
            bind:value={$smpOverAll} 
            placeholder="3" 
            min="1" 
            step="1"
            class="w-20"
        />
    </div>
{:else}
    <div class="divform">
        <label for="noCpus">No. of CPUs</label>
        <input 
            type="number" 
            id="noCpus" 
            bind:value={$smpCpus} 
            placeholder="3" 
            min="1" 
            step="1"
            class="w-20"
        />
    </div>

    <div class="divform">
        <label for="noMaxCpus">No. of Maximum CPUs</label>
        <input 
            type="number" 
            id="noMaxCpus" 
            bind:value={$smpMaxCpus} 
            placeholder="6" 
            min="1" 
            step="1"
            class="w-20"
        />
    </div>

    <div class="divform">
        <label for="noCores">No. of Cores</label>
        <input 
            type="number" 
            id="noCores" 
            bind:value={$smpCores} 
            placeholder="3" 
            min="1" 
            step="1"
            class="w-20"
        />
    </div>

    <div class="divform">
        <label for="noThreads">No. of Threads</label>
        <input 
            type="number" 
            id="noThreads" 
            bind:value={$smpThreads} 
            placeholder="1" 
            min="1" 
            step="1"
            class="w-20"
        />
    </div>

    <div class="divform">
        <label for="noSockets">No. of Sockets</label>
        <input 
            type="number" 
            id="noSockets" 
            bind:value={$smpSockets} 
            placeholder="1" 
            min="1" 
            step="1"
            class="w-20"
        />
    </div>
{/if}
