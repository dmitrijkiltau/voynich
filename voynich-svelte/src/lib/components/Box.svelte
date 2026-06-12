<script>
	let { variant = '', title = '', class: extraClass = '', children } = $props();
</script>

<div class="box {variant} {extraClass}">
	{#if title}<div class="box-title">{title}</div>{/if}
	{@render children?.()}
</div>
