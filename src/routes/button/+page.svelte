<script>
    import * as PatternYardSvelteUI from "$lib/index.js";
</script>

<h1>Button</h1>
<PatternYardSvelteUI.Button>
    Button
</PatternYardSvelteUI.Button>
<br>
<PatternYardSvelteUI.Button link="https://example.com">
    Link
</PatternYardSvelteUI.Button>
<PatternYardSvelteUI.Button link="https://example.com" noredirect>
    Link noredirect
</PatternYardSvelteUI.Button>
<br>
<PatternYardSvelteUI.Button kind="border">
    kind border
</PatternYardSvelteUI.Button>
<PatternYardSvelteUI.Button kind="highlighted">
    kind highlighted
</PatternYardSvelteUI.Button>
<br>
<PatternYardSvelteUI.Button icon="/favicon.svg">
    Icon
</PatternYardSvelteUI.Button>
<br>
<PatternYardSvelteUI.Button theme="dark">
    Theme Dark
</PatternYardSvelteUI.Button>
<br>
<PatternYardSvelteUI.Button color="red">
    Red
</PatternYardSvelteUI.Button>
<PatternYardSvelteUI.Button color="gold">
    Gold
</PatternYardSvelteUI.Button>
<PatternYardSvelteUI.Button color="#ff00ff">
    #ff00ff
</PatternYardSvelteUI.Button>
<PatternYardSvelteUI.Button color="rgb(0, 255, 0)">
    rgb(0, 255, 0)
</PatternYardSvelteUI.Button>
<br>
<PatternYardSvelteUI.Button kind="highlighted" color="#ff00ff">
    kind highlighted + color #ff00ff
</PatternYardSvelteUI.Button>
<PatternYardSvelteUI.Button theme="dark" kind="border">
    Theme Dark + kind border
</PatternYardSvelteUI.Button>
<PatternYardSvelteUI.Button kind="border" color="#ff00ff">
    kind border + color #ff00ff (shouldnt change)
</PatternYardSvelteUI.Button>
