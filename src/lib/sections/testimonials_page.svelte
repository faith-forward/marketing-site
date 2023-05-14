<script>
	import { lazyLoad } from '$lib/util/lazyLoad';
</script>

<div class="min-h-100v flex flex-col py-16 items-center px-4 tablet:px-16 desktop:px-32">
	<div class="flex flex-col tablet:w-3/5 items-center">
		<h2 class="text-4xl font-sans-bold text-boldGrey text-center leading-snug">
			Join a happy <br class="hidden" /> community of faith
		</h2>
		<p class="text-grey mt-4 leading-snug text-center text-lg font-sans-semi">
			Here are some testimonials from our 5 star app.
		</p>
	</div>
	<div
		class="flex flex-col laptop:flex-row relative top-0 laptop:top-[-64px] laptop:justify-between mt-8 laptop:mt-32 items-center laptop:items-start big-laptop:space-x-32 tablet:space-x-4"
	>
		<img
			use:lazyLoad={'/images/Testimonial 1.webp'}
			alt={`M. Jodan said this about Faith Forward: "Love it! Straight to the point. I would highly recommend!"`}
			class="w-3/5 laptop:w-[500px] test"
		/>
		<img
			use:lazyLoad={'/images/Testimonial 2.webp'}
			alt={`Mssmee said this about Faith Forward: "I really like how easit it is to get specific information pertaining to whatever emotion I'm feeling in the moment."`}
			id="testimonial2"
			class="w-3/5 laptop:w-[500px] mt-8 laptop:mt-[240px]"
		/>
	</div>
	<div
		class="flex flex-col laptop:flex-row relative top-0 laptop:top-[-64px] laptop:justify-between mt-8 laptop:mt-32 items-center laptop:items-start big-laptop:space-x-64 tablet:space-x-4"
	>
		<img
			use:lazyLoad={'/images/Testimonial 4.webp'}
			alt={`N.J. had this to say about Faith Forward: "If church was more like Faith Forward, I'd go to church."`}
			id="testimonial3"
			class="w-3/5 laptop:w-[500px] mt-8 laptop:mt-[-124px]"
		/>
		<img
			use:lazyLoad={'/images/Testimonial 3.webp'}
			alt={`N.J. had this to say about Faith Forward: "If church was more like Faith Forward, I'd go to church."`}
			id="testimonial3"
			class="w-3/5 laptop:w-[500px] mt-8 "
		/>
	</div>
	<img
		use:lazyLoad={'/images/Testimonial 5.webp'}
		alt={`N.J. had this to say about Faith Forward: "If church was more like Faith Forward, I'd go to church."`}
		id="testimonial3"
		class="w-3/5 laptop:w-[500px] mt-8 laptop:mt-[-32px]"
	/>
</div>

<style>
</style>
