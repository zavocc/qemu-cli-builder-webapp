<script>
    import { exportConfig } from "../exportBtn";
</script>

<header id="tophdr" class="header">
    <div class="px-5 py-2 flex justify-between">
        <h1>QEMU Command Line Builder</h1>
        <button
            class="border border-blue-200 rounded-full p-1 text-xs hover:bg-blue-200 hover:text-blue-900"
            onclick={exportConfig}
        >
            Export
        </button>
    </div>
</header>