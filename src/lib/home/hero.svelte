<section>
	<h1>Any <span>Time</span>, Any Ticket</h1>
	<a href="#form">Source Tickets</a>

	<img src="/tick.svg" alt="Switch Tickets" />
</section>

<style lang="scss">
	section {
		background-image: linear-gradient(180deg, #fcb879 0%, #e88225 100%);
		// min-height: 50vh;
		padding: 5vw;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		h1 {
			margin-top: 1rem;
		}
		h1,
		span {
			color: white;
			font-family: var(--header-font);
			font-size: 5rem;
			font-weight: 700;
			max-width: 500px;
		}

		span {
			position: relative;

			&::after {
				content: '';
				position: absolute;
				width: 100%;
				height: 100%;
				left: 0;
				top: 5.5rem;

				border: solid 2px #000;
				border-color: #000 transparent transparent transparent;
				border-radius: 13em/3em;
			}
		}

		@media screen and (max-width: 494px) {
			h1,
			span {
				font-size: 3rem;
			}

			span::after {
				top: 3rem;
			}
		}

		a {
			text-decoration: none;
			background-color: black;
			border: none;
			color: white;
			border-radius: 2rem;
			padding: 0.5rem 1.5rem;
			font-family: 'Archivo', sans-serif;
			margin-bottom: 1rem;
		}

		img {
			position: absolute;
			top: 0;
			right: 0;
			// max-height: 50vh;
			height: 100%;
		}
	}

	@media screen and (max-width: 805px) {
		section {
			align-items: center;
			h1 {
				// text-align: center;
			}
			img {
				display: none;
			}
		}
	}
</style>
