<script lang="ts">
	import Hero from '$lib/home/hero.svelte';
	import TextImage from '$lib/home/textImage.svelte';
	import Form from '$lib/home/form.svelte';
	import ResellersSection from '$lib/home/resellersSection.svelte';
</script>

<svelte:head>
	<title>Switch Tickets</title>
	<meta
		name="description"
		content="Looking to make a second income by reselling tickets? Join Resellers Academy by Switch Tickets today and learn everything there is to know, including which events will be profitable and how much profit you’ll be making."
	/>
</svelte:head>

<Hero />

<TextImage
	image={{ src: '/home/ticketBrokers.png', alt: 'Switch Ticket Brokers' }}
	title="On Demand Ticket Brokers"
	text="We make it easy for you to get your hands on those tickets you've been wanting. All you have to do, is submit a ticket request, and we will work hard to find them for you."
/>

<TextImage
	textLeft
	image={{ src: '/home/anyEvent.png', alt: 'Switch Ticket Events' }}
	title="Any Event, Anywhere"
	text="We ensure that our clients make it to any event they desire, no matter where in the world that might be."
>
	<a
		style="
		background-color: black;
		border: none;
		color: white;
		border-radius: 2rem;
		margin: 0.75rem 0;
		display: inline-block;
		padding: 0.75rem 1.5rem;
		font-family: 'Archivo', sans-serif;
		text-decoration: none;
	"
		href="#form">Start Now</a
	>
</TextImage>

<Form />

<ResellersSection />
