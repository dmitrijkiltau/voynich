<script>
	let { variant = '', title = '', class: extraClass = '', children } = $props();
</script>

<div class="box {variant} {extraClass}">
	{#if title}<div class="lbl-xs box-title">{title}</div>{/if}
	{@render children?.()}
</div>
