# Phase 0 - 12-5-2025
Rudimentary phase of development.

This is a Svelte application that constructs QEMU command line arguments into script using easy to use interface, it is designed to be faster and straightforward to use, to make it easier for virtualization enthusiasts, sysadmins, or beginners to get started with QEMU.

Dependencies and frameworks used:
- Svelte v5 with runes.
- Tailwind CSS
- ESLint / Prettier (preference and optional)

Project structure:
Work is done in [src](./src) directory.

For the main user-facing entrypoint of the application, it's in [+page.svelte](./src/routes/+page.svelte).

Components are placed in [components](./src/lib/components/) directory. Inside the directory, it contains:
- Svelte components, for site elements like headers, buttons, and more, but not the main functionality.
- The [VM_Config](./src/lib/components/VM_Config/) directory is a bunch of components organizing each configuration types into components. These are the main components for the webapp, such as machine/CPU/accelerator options, drives, drivers and peripherals, and advanced/misc. Used for organizational purposes, for example for setting memory and accelerator options belongs to [Main.svelte](./src/lib/components/VM_Config/Main.svelte) but not drives.
    These components are bunch of dropdowns and controls that uses runes and states to parse and store command line arguments that can be exported. And it is rendered in the `+main.svelte` file.

## Roadmaps and accomplishments
In this phase, it focuses more on core application implementation and structuring, this includes:
- [X] Setting up components
- [X] Setting up the main page for users to interact with
- [X] Header with export button (non-functional)
- [ ] STEP 1: Centralized state management and parsing for each VM_Config components to command-line parameters, proper runes and directives to persist runes based on user input
    Status: Currently, runes works at each components, and it does persist because of directives like `bind:value`, but I'm still working on centralization and parsing when export button is clicked, maybe export button, maybe default values? But, fuck, none of these centralization stuff is implemented but it kept the state when user twiddling with buttons I guess.
- [ ] STEP 2: Make export button work after working with STEP 1

But the goal here is to make export button work and centralize states, starting with parsing `Main.svelte` runes into script with export button.

# Phase 1 - Adding more configs
TBA