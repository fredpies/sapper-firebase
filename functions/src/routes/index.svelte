<script>

	import Test from '../components/Test.svelte'

</script>

<style lang="postcss">

	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {

		margin: 0 0 1em 0;

		img {
			max-width: 400px;
			margin: 0 0 1em 0;
		}

	}

</style>

<template lang="pug">

	svelte:head: title Sapper Boilerplate
	h1 Success !
	figure.grid.grid-columns-1.sm--grid-columns-2
		img(src='great-success.png' alt='Borat')
		figcaption.sm--font-bold HIGH FIVE!

	Test
	br
	a(href="About") This is route to "About"


</template>




