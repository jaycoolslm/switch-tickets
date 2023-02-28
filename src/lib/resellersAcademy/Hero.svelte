<script lang="ts">
</script>

<section>
	<!-- <header>
        <img src="/logo.png" alt="Switch Tickets Logo">
    </header> -->
	<div class="">
		<h1 class="text-center">LEARN HOW TO RESELL TICKETS WITH</h1>
		<img src="/reseller-academy.png" alt="Switch Tickets" />
		<!-- <div class="row align-items-center justify-content-center">
            <h1  class="col-lg-6 text-center text-lg-start px-2">LEARN HOW TO RESELL TICKETS WITH</h1>
            <img class="col-lg-6" src="/reseller-academy.png" alt="Switch Tickets">
        </div> -->
	</div>
	<a
		class="btn"
		style="margin-top: 2rem; width: 80%"
		href="https://resellersacademy.switch-tickets.com/">JOIN NOW</a
	>

	<!-- <img class="smoke" src="/smoke.png" alt="Switch Tickets"> -->
</section>

<style lang="scss">
	section {
		background-color: #e0e0e0;
		position: relative;
		padding-bottom: 4rem;
		header {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			img {
				height: 200px;
			}
		}

		div {
			padding-top: 2rem;
			h1 {
				font-family: var(--header-font);
				font-size: 3rem;
				color: var(--dark);
			}
			img {
				display: block;
				width: 80vw;
				max-width: 500px;
				// max-height: 50vh;
				margin: 0 auto;
			}

			@media screen and (max-width: 400px) {
				h1 {
					font-size: 2rem;
				}
			}
		}

		img.smoke {
			position: absolute;
			bottom: -20px;
			left: 0;
			width: 70vw;
		}
	}
</style>
