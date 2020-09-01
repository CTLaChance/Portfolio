<script>
    import Visualizer from './Visualizer.svelte';
    import Profile from './Profile.svelte';
    import Resume from './Resume.svelte';

    let resume_visible = true;
</script>

<Visualizer />

{#if resume_visible}
    <Resume />
{:else}
    <Profile />
{/if}
