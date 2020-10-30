<script>
    import {Router, Route} from 'svelte-routing';

    // Components //
    import Visualizer from './Visualizer.svelte';
    import Profile from './Profile.svelte';
    import Resume from './Resume.svelte';

    export let url = "";
</script>


<Router url="{url}">
    <Visualizer />
    <Route path="/" component={Profile} />
    <Route path="resume" component={Resume} />
</Router>
