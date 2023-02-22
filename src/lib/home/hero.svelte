<section>
	<h1>Any ticket, any time</h1>
	<button>Get my tickets</button>

	<img src="/tick.svg" alt="Switch Tickets" />
</section>

<style lang="scss">
	section {
		background-image: linear-gradient(180deg, #fcb879 0%, #e88225 100%);
		min-height: 80vh;
		padding-left: 5vw;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		h1 {
			color: white;
			font-family: 'Prompt', sans-serif;
			font-size: 5rem;
			font-weight: 700;
			max-width: 500px;
		}
		button {
			background-color: black;
			border: none;
			color: white;
			border-radius: 2rem;
			padding: 0.5rem 1.5rem;
			font-family: 'Archivo', sans-serif;
		}

		img {
			position: absolute;
			top: 0;
			right: 0;
			max-height: 80vh;
		}
	}

	@media screen and (max-width: 805px) {
		section {
			align-items: center;
			h1 {
				text-align: center;
			}
			img {
				display: none;
			}
		}
	}
</style>
