<script lang="ts">
	import { cn } from '@/utils';
	import { Marquee } from '../ui/components/marquee';

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
	const thirdRow = reviews.slice(0, reviews.length / 2);
	const fourthRow = reviews.slice(reviews.length / 2);
</script>

<div
	class="relative flex h-96 w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:300px]"
>
	<div
		class="flex flex-row items-center gap-4"
		style="transform: translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)"
	>
		<Marquee pauseOnHover vertical class="[--duration:20s]">
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
							<div class="text-sm font-medium dark:text-white">
								{review.name}
							</div>
							<p class="text-xs font-medium dark:text-white/40">
								{review.username}
							</p>
						</div>
					</div>
					<blockquote class="mt-2 text-sm">{review.body}</blockquote>
				</figure>
			{/each}
		</Marquee>
		<Marquee reverse pauseOnHover class="[--duration:20s]" vertical>
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
							<div class="text-sm font-medium dark:text-white">
								{review.name}
							</div>
							<p class="text-xs font-medium dark:text-white/40">
								{review.username}
							</p>
						</div>
					</div>
					<blockquote class="mt-2 text-sm">{review.body}</blockquote>
				</figure>
			{/each}
		</Marquee>
		<Marquee reverse pauseOnHover class="[--duration:20s]" vertical>
			{#each thirdRow as review (review.username)}
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
							<div class="text-sm font-medium dark:text-white">
								{review.name}
							</div>
							<p class="text-xs font-medium dark:text-white/40">
								{review.username}
							</p>
						</div>
					</div>
					<blockquote class="mt-2 text-sm">{review.body}</blockquote>
				</figure>
			{/each}
		</Marquee>
		<Marquee pauseOnHover class="[--duration:20s]" vertical>
			{#each fourthRow as review (review.username)}
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
							<div class="text-sm font-medium dark:text-white">
								{review.name}
							</div>
							<p class="text-xs font-medium dark:text-white/40">
								{review.username}
							</p>
						</div>
					</div>
					<blockquote class="mt-2 text-sm">{review.body}</blockquote>
				</figure>
			{/each}
		</Marquee>
	</div>
	<div
		class="from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b"
	></div>
	<div
		class="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t"
	></div>
	<div
		class="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"
	></div>
	<div
		class="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"
	></div>
</div>
