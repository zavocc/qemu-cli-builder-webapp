<script lang="ts">
    import type { Snippet } from 'svelte';
    
    let { children, class: extraClass = "" }: { children: Snippet; class?: string } = $props();
</script>

<div class="flex flex-row space-x-4 {extraClass}">
    {@render children()}
</div>
