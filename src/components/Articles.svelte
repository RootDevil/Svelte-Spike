<script>
  import axios from "axios";

  import TopicNav from "./TopicNav.svelte";

  let topic = null;
  let promise;

  $: promise = axios.get("https://slurpy-nc-news.herokuapp.com/api/articles", {
    params: {
      topic: topic,
    },
  });
</script>

<TopicNav bind:topic={topic} />
{#await promise}
  <p>Loading...</p>
{:then { data: { articles } }}
  {#each articles as { articleId, title, topic }}
    <p key={articleId}>{title}, {topic}</p>
  {/each}
{/await}
