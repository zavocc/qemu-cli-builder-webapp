<script>
	import Header from "$lib/components/Header.svelte";
	import VM_Config_Main from "$lib/components/VM_Config/Main.svelte";
</script>
<Header />
<p class="text-xs">App that lets you generate QEMU configs, currently supports x86_64</p>

<p class="text-xl">This app is work in progress</p>

<!-- This container is for buttons -->
<div class="flex flex-col space-y-2 my-4 p-4">
	<VM_Config_Main />
</div>