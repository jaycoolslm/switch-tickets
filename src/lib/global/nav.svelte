<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount, onDestroy } from 'svelte';

	interface Links {
		name: string;
		slug: string;
	}

	let links: Links[] = [
		{ name: 'Home', slug: '/' },
		{ name: 'Resellers Academy', slug: '/resellers-academy' },
		{ name: 'Contact Us', slug: '/contact' },
		{ name: 'Terms of Service', slug: '/terms-of-service' },
		{ name: 'Privacy Policy', slug: 'privacy-policy' }
	];

	let hamburgerActive: boolean = false;
</script>

<nav id="navbar">
	<div>
		<a href="/">
			<img src="/logo.png" alt="Switch Tickets Logo" />
		</a>

		<button
			class={hamburgerActive ? 'hamburger hamburger--spin is-active' : 'hamburger hamburger--spin'}
			type="button"
			on:click={() => (hamburgerActive = !hamburgerActive)}
		>
			<span class="hamburger-box">
				<span class="hamburger-inner" />
			</span>
		</button>
	</div>

	<ul class={hamburgerActive ? 'open' : 'closed'}>
		{#each links as link}
			<li>
				<a on:click={() => (hamburgerActive = false)} href={link.slug}>{link.name}</a>
			</li>
		{/each}
	</ul>
</nav>

<style lang="scss">
	nav {
		width: 100vw;
		display: block;
		position: fixed;
		top: 0;
		transition: all 0.3s ease;
		z-index: 102;
		div {
			min-width: 100vw;
			background-color: white;
			position: relative;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			z-index: 100;
			height: 10vh;

			a {
				z-index: 101;
				img {
					position: absolute;
					left: 50%;
					transform: translate(-50%, -50%);
					height: 10vh;
				}
			}
		}

		ul {
			z-index: 99;
			position: absolute;
			top: 10vh;
			left: 100%;
			padding-top: 1rem;
			height: calc(100vh - 10vh);
			background-color: white;
			display: flex;
			flex-direction: column;
			width: 100vw;
			max-width: 500px;
			// z-index: 100;
			// align-items: center;
			// justify-content: space-evenly;
			gap: 1rem;
			transition: all 0.7s ease;
			list-style: none;
			&.open {
				transform: translateX(-100%);
			}
			li {
				width: fit-content;
				&::after {
					content: '';
					display: block;
					width: 0;
					height: 2px;
					background: none repeat scroll 0 0 black;
					transition: all ease 0.2s;
				}
				&:hover::after {
					width: 100%;
				}

				a {
					text-decoration: none;
					font-size: 2em;
					color: #2b2b2b;
				}
			}
		}

		/* HAMBURGER ANIMATION */

		.hamburger {
			padding: 15px 15px;
			margin-right: 10px;
			display: inline-block;
			cursor: pointer;
			transition-property: opacity, filter;
			transition-duration: 0.15s;
			transition-timing-function: linear;
			font: inherit;
			color: inherit;
			text-transform: none;
			background-color: transparent;
			border: 0;
			overflow: visible;
			z-index: 100;
		}

		.hamburger:hover {
			opacity: 0.7;
		}

		.hamburger.is-active:hover {
			opacity: 0.7;
		}

		.hamburger.is-active .hamburger-inner,
		.hamburger.is-active .hamburger-inner::before,
		.hamburger.is-active .hamburger-inner::after {
			background-color: #000;
		}

		.hamburger-box {
			width: 40px;
			height: 24px;
			display: inline-block;
			position: relative;
		}

		.hamburger-inner {
			display: block;
			top: 50%;
			margin-top: -2px;
		}

		.hamburger-inner,
		.hamburger-inner::before,
		.hamburger-inner::after {
			width: 40px;
			height: 4px;
			background-color: #000;
			border-radius: 4px;
			position: absolute;
			transition-property: transform;
			transition-duration: 0.15s;
			transition-timing-function: ease;
		}

		.hamburger-inner::before,
		.hamburger-inner::after {
			content: '';
			display: block;
		}

		.hamburger-inner::before {
			top: -10px;
		}

		.hamburger-inner::after {
			bottom: -10px;
		}

		.hamburger--spin .hamburger-inner {
			transition-duration: 0.22s;
			transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
		}

		.hamburger--spin .hamburger-inner::before {
			transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;
		}

		.hamburger--spin .hamburger-inner::after {
			transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
		}

		.hamburger--spin.is-active .hamburger-inner {
			transform: rotate(225deg);
			transition-delay: 0.12s;
			transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
		}

		.hamburger--spin.is-active .hamburger-inner::before {
			top: 0;
			opacity: 0;
			transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
		}

		.hamburger--spin.is-active .hamburger-inner::after {
			bottom: 0;
			transform: rotate(-90deg);
			transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
		}
	}
</style>
