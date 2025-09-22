<script lang="ts">
	import Marquee from '$lib/registry/ui/components/marquee/marquee.svelte';
	import AuroraText from '$lib/registry/ui/text-animations/aurora-text/aurora-text.svelte';
	import WordRotate from '$lib/registry/ui/text-animations/word-rotate/word-rotate.svelte';
	import { cn } from '$lib/utils';
	const reviews = [
		{
			name: 'Jack',
			username: '@jack',
			body: "I've never seen anything like this before. It's amazing. I love it.",
			img: 'https://avatar.vercel.sh/jack'
		},
		{
			name: 'Jill',
			username: '@jill',
			body: "I don't know what to say. I'm speechless. This is amazing.",
			img: 'https://avatar.vercel.sh/jill'
		},
		{
			name: 'John',
			username: '@john',
			body: "I'm at a loss for words. This is amazing. I love it.",
			img: 'https://avatar.vercel.sh/john'
		},
		{
			name: 'Jane',
			username: '@jane',
			body: "I'm at a loss for words. This is amazing. I love it.",
			img: 'https://avatar.vercel.sh/jane'
		},
		{
			name: 'Jenny',
			username: '@jenny',
			body: "I'm at a loss for words. This is amazing. I love it.",
			img: 'https://avatar.vercel.sh/jenny'
		},
		{
			name: 'James',
			username: '@james',
			body: "I'm at a loss for words. This is amazing. I love it.",
			img: 'https://avatar.vercel.sh/james'
		}
	];

	const firstRow = reviews.slice(0, reviews.length / 2);
	const secondRow = reviews.slice(reviews.length / 2);
</script>

<h1>Welcome to SvelteKit</h1>
<p>
	Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the
	documentation
</p>

<div
	class="relative flex w-full flex-col items-center justify-center overflow-hidden"
>
	<Marquee pauseOnHover>
		{#each firstRow as review (review.username)}
			<figure
				class={cn(
					'relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
					// light styles
					'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
					// dark styles
					'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
				)}
			>
				<div class="flex flex-row items-center gap-2">
					<img
						class="rounded-full"
						width="32"
						height="32"
						alt=""
						src={review.img}
					/>
					<div class="flex flex-col">
						<figcaption class="text-sm font-medium dark:text-white">
							{review.name}
						</figcaption>
						<p class="text-xs font-medium dark:text-white/40">
							{review.username}
						</p>
					</div>
				</div>
				<blockquote class="mt-2 text-sm">{review.body}</blockquote>
			</figure>
		{/each}
	</Marquee>

	<Marquee pauseOnHover reverse>
		{#each secondRow as review (review.username)}
			<figure
				class={cn(
					'relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
					// light styles
					'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
					// dark styles
					'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
				)}
			>
				<div class="flex flex-row items-center gap-2">
					<img
						class="rounded-full"
						width="32"
						height="32"
						alt=""
						src={review.img}
					/>
					<div class="flex flex-col">
						<figcaption class="text-sm font-medium dark:text-white">
							{review.name}
						</figcaption>
						<p class="text-xs font-medium dark:text-white/40">
							{review.username}
						</p>
					</div>
				</div>
				<blockquote class="mt-2 text-sm">{review.body}</blockquote>
			</figure>
		{/each}
	</Marquee>

	<div
		class="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"
	></div>
	<div
		class="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"
	></div>
</div>

<WordRotate
	class="text-4xl font-bold text-black dark:text-white"
	words={['Word', 'Rotate']}
/>

<h1 class="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
	Ship <AuroraText>beautiful</AuroraText>
</h1>
