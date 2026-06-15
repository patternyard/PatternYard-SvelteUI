<script>
    import { page } from "$app/state";

    import * as PatternYardSvelteUI from "$lib/index.js";
</script>

{#each Object.keys(PatternYardSvelteUI) as key}
    <a href={`/${key.toLowerCase()}${page.url.search}`}>{key}</a>
{/each}
