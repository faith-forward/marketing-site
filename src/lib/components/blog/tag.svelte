<script lang="ts">
	export let tag: string;
	export let color: string;
</script>

<button
	class="py-1 px-4 rounded-full border-width-2 border-2"
	style={`border-color: ${color === 'white' ? 'white' : '#323438'}`}
>
	<p class={`text-sm font-sans-semi text-${color}`}>{tag}</p>
</button>
