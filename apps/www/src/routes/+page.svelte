<script lang="ts">
	import Marquee from '$lib/registry/ui/components/marquee/marquee.svelte';
	import AnimatedShinyText from '$lib/registry/ui/text-animations/animated-shiny-text/animated-shiny-text.svelte';
	import AuroraText from '$lib/registry/ui/text-animations/aurora-text/aurora-text.svelte';
	import TypingAnimation from '$lib/registry/ui/text-animations/typing-animation/typing-animation.svelte';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import { cn } from '$lib/utils';
	import NumberTicker from '$lib/registry/ui/text-animations/number-ticker/number-ticker.svelte';
	import BorderBeam from '$lib/registry/ui/special-effects/border-beam/border-beam.svelte';
	import {
		Card,
		CardContent,
		CardDescription,
		CardFooter,
		CardHeader,
		CardTitle
	} from '@/components/ui/card';
	import { Button } from '@/components/ui/button';
	import {
		BellIcon,
		CalendarIcon,
		FileInputIcon,
		FileTextIcon,
		GlobeIcon,
		Play,
		SkipBack,
		SkipForward
	} from '@lucide/svelte/icons';
	import { Label } from '@/components/ui/label';
	import { Input } from '@/components/ui/input';
	import { BentoCard, BentoGrid } from '@/registry/ui/components/bento-grid';

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

	const features = [
		{
			icon: FileTextIcon,
			name: 'Save your files',
			description: 'We automatically save your files as you type.',
			href: '/',
			cta: 'Learn more',
			class: 'lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3'
		},
		{
			icon: FileInputIcon,
			name: 'Full text search',
			description: 'Search through all your files in one place.',
			href: '/',
			cta: 'Learn more',
			class: 'lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3'
		},
		{
			icon: GlobeIcon,
			name: 'Multilingual',
			description: 'Supports 100+ languages and counting.',
			href: '/',
			cta: 'Learn more',
			class: 'lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4'
		},
		{
			icon: CalendarIcon,
			name: 'Calendar',
			description: 'Use the calendar to filter your files by date.',
			href: '/',
			cta: 'Learn more',
			class: 'lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2'
		},
		{
			icon: BellIcon,
			name: 'Notifications',
			description:
				'Get notified when someone shares a file or mentions you in a comment.',
			href: '/',
			cta: 'Learn more',
			class: 'lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4'
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

<!-- <WordRotate
	class="text-4xl font-bold text-black dark:text-white"
	words={['Word', 'Rotate']}
/> -->

<h1 class="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
	Ship <AuroraText>beautiful</AuroraText>
</h1>

<div class="z-10 flex min-h-64 items-center justify-center">
	<div
		class={cn(
			'group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800'
		)}
	>
		<AnimatedShinyText
			shimmerWidth={200}
			class="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
		>
			<span>✨ Introducing Magic UI</span>
			<ArrowRight
				class="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
			/>
		</AnimatedShinyText>
	</div>
</div>

<!-- Typing Animation Examples -->
<div class="flex flex-col gap-8 py-12 items-center">
	<h2 class="text-2xl font-bold">Typing Animation Examples</h2>

	<!-- Basic typing animation -->
	<TypingAnimation
		text="Welcome to the future of UI components!"
		class="text-2xl font-semibold"
	/>

	<!-- Typing animation with custom duration -->
	<TypingAnimation
		text="This types slower..."
		duration={200}
		class="text-lg text-gray-600 dark:text-gray-400"
	/>

	<!-- Typing animation with delay -->
	<TypingAnimation
		text="This has a 1 second delay before starting"
		delay={1000}
		duration={80}
		class="text-lg text-blue-600 dark:text-blue-400"
	/>

	<!-- Typing animation with view trigger -->
	<TypingAnimation
		text="This starts when you scroll to it!"
		startOnView={true}
		duration={60}
		class="text-xl font-bold text-green-600 dark:text-green-400"
	/>

	<!-- Different HTML element -->
	<TypingAnimation
		text="This is rendered as an h1 element"
		as="h1"
		duration={90}
		class="text-3xl font-extrabold text-purple-600 dark:text-purple-400"
	/>

	<!-- With motion props for additional effects -->
	<TypingAnimation
		text="This has motion effects too!"
		motionProps={{ scale: [0.8, 1], opacity: [0, 1] }}
		duration={100}
		delay={500}
		class="text-xl font-semibold text-orange-600 dark:text-orange-400"
	/>
</div>

<div class="grid w-full grid-cols-1 gap-12 py-12 md:grid-cols-2">
	<div class="flex flex-col gap-8 items-center">
		<h2 class="text-2xl font-bold">Number Ticker Examples Up</h2>
		<NumberTicker
			value={100}
			class="text-8xl font-medium tracking-tighter whitespace-pre-wrap text-black dark:text-white"
		/>
	</div>
	<div class="flex flex-col gap-8 items-center border">
		<h2 class="text-2xl font-bold">Number Ticker Examples Down</h2>
		<NumberTicker
			value={100}
			direction="down"
			class="text-8xl font-medium tracking-tighter whitespace-pre-wrap text-black dark:text-white"
		/>
		<BorderBeam />
	</div>
	<div class="flex flex-col gap-8 items-center border">
		<h2 class="text-2xl font-bold">Number Ticker Examples Default</h2>
		<NumberTicker value={100} />
		<BorderBeam />
	</div>
</div>

<div class="flex items-center justify-center py-12">
	<div class="relative h-[500px] w-xl overflow-hidden">
		<BorderBeam />
	</div>
</div>

<div class="grid w-full grid-cols-1 gap-12 py-12 md:grid-cols-2">
	<Card class="relative w-[350px] overflow-hidden">
		<CardHeader>
			<CardTitle>Now Playing</CardTitle>
			<CardDescription>Stairway to Heaven - Led Zeppelin</CardDescription>
		</CardHeader>
		<CardContent>
			<div class="flex flex-col items-center gap-4">
				<div
					class="h-48 w-48 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500"
				></div>
				<div class="bg-secondary h-1 w-full rounded-full">
					<div class="bg-primary h-full w-1/3 rounded-full"></div>
				</div>
				<div class="text-muted-foreground flex w-full justify-between text-sm">
					<span>2:45</span>
					<span>8:02</span>
				</div>
			</div>
		</CardContent>
		<CardFooter class="flex justify-center gap-4">
			<Button variant="outline" size="icon" class="rounded-full">
				<SkipBack class="size-4" />
			</Button>
			<Button size="icon" class="rounded-full">
				<Play class="size-4" />
			</Button>
			<Button variant="outline" size="icon" class="rounded-full">
				<SkipForward class="size-4" />
			</Button>
		</CardFooter>
		<BorderBeam
			duration={6}
			size={400}
			class="from-transparent via-red-500 to-transparent"
		/>
		<BorderBeam
			duration={6}
			delay={3}
			size={400}
			borderWidth={2}
			class="from-transparent via-blue-500 to-transparent"
		/>
	</Card>

	<Card class="relative w-[350px] overflow-hidden">
		<CardHeader>
			<CardTitle>Login</CardTitle>
			<CardDescription>
				Enter your credentials to access your account.
			</CardDescription>
		</CardHeader>
		<CardContent>
			<form>
				<div class="grid w-full items-center gap-4">
					<div class="flex flex-col space-y-1.5">
						<Label for="email">Email</Label>
						<Input id="email" type="email" placeholder="Enter your email" />
					</div>
					<div class="flex flex-col space-y-1.5">
						<Label for="password">Password</Label>
						<Input
							id="password"
							type="password"
							placeholder="Enter your password"
						/>
					</div>
				</div>
			</form>
		</CardContent>
		<CardFooter class="flex justify-between">
			<Button variant="outline">Register</Button>
			<Button>Login</Button>
		</CardFooter>
		<BorderBeam duration={8} size={100} />
	</Card>

	<Card class="relative w-[350px] overflow-hidden">
		<CardHeader>
			<CardTitle>Login</CardTitle>
			<CardDescription>
				Enter your credentials to access your account.
			</CardDescription>
		</CardHeader>
		<CardContent>
			<form>
				<div class="grid w-full items-center gap-4">
					<div class="flex flex-col space-y-1.5">
						<Label for="email">Email</Label>
						<Input id="email" type="email" placeholder="Enter your email" />
					</div>
					<div class="flex flex-col space-y-1.5">
						<Label for="password">Password</Label>
						<Input
							id="password"
							type="password"
							placeholder="Enter your password"
						/>
					</div>
				</div>
			</form>
		</CardContent>
		<CardFooter class="flex justify-between">
			<Button variant="outline">Register</Button>
			<Button>Login</Button>
		</CardFooter>
		<BorderBeam
			duration={4}
			size={300}
			reverse
			class="from-transparent via-green-500 to-transparent"
		/>
	</Card>

	<Button class="relative overflow-hidden" size="lg" variant="outline">
		Buy Now
		<BorderBeam
			size={40}
			initialOffset={20}
			class="from-transparent via-yellow-500 to-transparent"
			transition={{
				type: 'spring',
				stiffness: 60,
				damping: 20
			}}
		/>
	</Button>
</div>

<div class="py-12">
	<h2 class="mb-8 text-center text-3xl font-bold">Bento Grid with Snippets</h2>

	<BentoGrid class="lg:grid-rows-3">
		{#each features as feature (feature.name)}
			<BentoCard
				icon={feature.icon}
				name={feature.name}
				description={feature.description}
				href={feature.href}
				cta={feature.cta}
				class={feature.class}
			>
				{#snippet background()}
					<div
						class="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20 opacity-60"
					></div>
				{/snippet}
			</BentoCard>
		{/each}
	</BentoGrid>

	<div class="mt-12">
		<h3 class="mb-4 text-center text-xl font-semibold">
			Custom Backgrounds Per Card
		</h3>
		<BentoGrid class="lg:grid-rows-3">
			<BentoCard
				icon={FileTextIcon}
				name="Save your files"
				description="We automatically save your files as you type."
				href="/"
				cta="Learn more"
				class="lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3"
			>
				{#snippet background()}
					<div
						class="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 opacity-20 blur-3xl"
					></div>
				{/snippet}
			</BentoCard>

			<BentoCard
				icon={FileInputIcon}
				name="Full text search"
				description="Search through all your files in one place."
				href="/"
				cta="Learn more"
				class="lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3"
			>
				{#snippet background()}
					<div
						class="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 opacity-20 blur-3xl"
					></div>
				{/snippet}
			</BentoCard>

			<BentoCard
				icon={GlobeIcon}
				name="Multilingual"
				description="Supports 100+ languages and counting."
				href="/"
				cta="Learn more"
				class="lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4"
			>
				{#snippet background()}
					<div
						class="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 opacity-20 blur-3xl"
					></div>
				{/snippet}
			</BentoCard>

			<BentoCard
				icon={CalendarIcon}
				name="Calendar"
				description="Use the calendar to filter your files by date."
				href="/"
				cta="Learn more"
				class="lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2"
			>
				{#snippet background()}
					<div
						class="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gradient-to-br from-orange-500 to-red-500 opacity-20 blur-3xl"
					></div>
				{/snippet}
			</BentoCard>

			<BentoCard
				icon={BellIcon}
				name="Notifications"
				description="Get notified when someone shares a file or mentions you in a comment."
				href="/"
				cta="Learn more"
				class="lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4"
			>
				{#snippet background()}
					<div
						class="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gradient-to-br from-yellow-500 to-amber-500 opacity-20 blur-3xl"
					></div>
				{/snippet}
			</BentoCard>
		</BentoGrid>
	</div>
</div>
