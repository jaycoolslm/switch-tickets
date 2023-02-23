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
	title="On-demand ticket brokers"
	text="We are the easiest way to get your hands on those tickets you’ve been wanting.  All you have to do is submit your ticket request and we will work hard to ensure we find it for you."
/>

<TextImage
	textLeft
	image={{ src: '/home/anyEvent.png', alt: 'Switch Ticket Events' }}
	title="Any event, anywhere"
	text="When you submit your request, we will ask you for information on the event such as its name and the amount of tickets you require. Once you submit, we will find those tickets and contact you so you can buy them."
>
	<button
		style="
		background-color: black;
		border: none;
		color: white;
		border-radius: 2rem;
		padding: 0.5rem 1.5rem;
		font-family: 'Archivo', sans-serif;
	">Start now</button
	>
</TextImage>

<Form />

<ResellersSection />
