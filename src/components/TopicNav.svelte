<script>
  import axios from "axios";

  export let topic;
  let promise;

  promise = axios.get("https://slurpy-nc-news.herokuapp.com/api/topics");

  const setTopic = (event) => {
    topic = event.target.value;
  };
</script>

<nav>
  <button on:click={setTopic}>ALL</button>
  {#await promise then { data: { topics } }}
    {#each topics as { slug }}
      <button value={slug} on:click={setTopic}>{slug.toUpperCase()}</button>
    {/each}
  {/await}
</nav>
