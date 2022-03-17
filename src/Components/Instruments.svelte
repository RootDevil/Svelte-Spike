<script>
    let instruments = [
        'Guitar',
        'Piano',
        'Banjo',
        'Saxophone',
    ]
</script>

{#each instruments as instrument, i}
<label>
    <input type=checkbox bind:group={instruments} name="instruments" value={instrument} />
    {i + 1}: {instrument}
</label>
{/each}