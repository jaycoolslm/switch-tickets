<script lang="ts">
	export let image: {
		src: string;
		alt: string;
	};
	export let textLeft = false;
	export let title: string;
	export let text: string;
</script>

<section style={textLeft ? 'flex-direction: row-reverse' : ''}>
	<img src={image.src} alt={image.alt} />
	<div>
		<h2>{title}</h2>
		<p>{text}</p>
		<slot />
	</div>
</section>

<style lang="scss">
	section {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		margin: 4rem 0;
		gap: 2rem;
		img,
		div {
			width: 80vw;
			max-width: 400px;
			text-align: center;
			h2 {
				font-weight: 700;
			}
		}
	}

	@media screen and (min-width: 805px) {
		section {
			align-items: center;
			img,
			div {
				width: 40vw;
				text-align: left;
			}
		}
	}
</style>
