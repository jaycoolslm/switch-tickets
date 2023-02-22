<script lang="ts">
	import Nav from '$lib/global/nav.svelte';
	import Footer from '$lib/global/Footer.svelte';
</script>

<body>
	<Nav />
	<slot />
	<Footer />
</body>

<style lang="scss">
	body {
		margin-top: 10vh;
		background-color: #eee;
		overflow-x: hidden;
	}
	body::-webkit-scrollbar {
		display: none;
	}
</style>
