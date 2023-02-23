<script lang="ts">
</script>

<section>
	<form action="">
		<h3>Fill out the information below</h3>

		<div>
			<label for="name">Name</label>
			<input type="text" name="name" required />
		</div>

		<div>
			<label for="email">Email</label>
			<input type="email" name="email" required />
		</div>

		<div>
			<label for="mobile">Mobile</label>
			<input type="tel" name="mobile" required />
		</div>

		<div class="min-width-50">
			<label for="eventName">Event name</label>
			<input type="text" name="eventName" required />
		</div>

		<div class="min-width-50">
			<label for="eventType">Event type</label>
			<input type="text" name="eventType" required />
		</div>

		<div class="min-width-50">
			<label for="amount">Amount of tickets required</label>
			<input type="text" name="amount" required />
		</div>

		<div class="min-width-50">
			<label for="extra">Extra information</label>
			<input type="text" name="extra" required />
		</div>
		<button type="submit">Submit</button>
	</form>
</section>

<style lang="scss">
	section {
		padding: 0 2rem 2rem;
	}
	form {
		margin: 0 auto;
		background-color: #ff8a35;
		max-width: 700px;
		padding: 4rem 2rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 1rem;
		border-radius: 2rem;
		h3 {
			width: 100%;
			text-align: center;
			color: white;
		}
		label,
		input {
			display: block;
		}

		label {
			color: white;
			font-weight: 500;
			margin-bottom: 0.25rem;
		}

		input {
			border-radius: 1rem;
			border: none;
			width: 100%;
			padding: 0.25rem 0.5rem;
		}

		button {
			width: 100%;
			border: none;
			border-radius: 1rem;
			padding: 0.5rem;
			font-weight: 600;
			margin-top: 2rem;
		}

		.min-width-50 {
			min-width: 48%;
		}
	}

	@media screen and (max-width: 760px) {
		div {
			width: 100%;
		}
	}
</style>
