---
title: "Styles Directory"
layout: page
---

<style>
	#sponsor-promo {
		max-width: 80ch;
		margin: 5vh auto;
	}
	#sponsor-promo img {
		flex-shrink: 0;
		height: 80px;
		width: auto;
		display: block;
	}
	@media (min-width: 80ch) {
		#sponsor-promo p {
			display: flex;
			align-items: center;
			gap: 1rem;
		}
	}
</style>
<aside id="sponsor-promo" role="note" aria-label="Our Sponsor">
<p><img src="{{ '/img/sponsor.jpeg' | url }}" alt="WDII Fall 2022"> <span><strong>Sponsored by:</strong> IDMX268 is a college-level, second semester web development course. The emphasis in our course reflects the skills needed for modern web development: Advanced CSS techniques, Building web sites using modern optimization techniques, and Principles of modern web design, using web design software, and developing sites from design specifications. We are very pleased that Style Stage offers us the challenge to apply our new skills.</span></p>
</aside>

## All Styles

<ul class="features features__flexible">
{%- for style in collections.allStyles -%}
	<li style="background-image: url('/style-img/{{ style.data.style.title | slug }}');">
		<span>
			<a href="/styles/{{ style.data.style.title | slug }}/">{{ style.data.style.title }}<span aria-hidden="true"></span></a>
			<span>by {{ style.data.style.author}}</span>
		</span>
	</li>
{%- else -%}
	<li class="empty">
		<span>
			Awaiting your contribution!
		</span>
	</li> 
{%- endfor -%}
</ul>
