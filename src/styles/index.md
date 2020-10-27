---
title: "Styles Directory"
layout: page
---

> **We've reached 50 styles**! To celebrate, participate in the giveaway for the chance at one of two awesome prizes - [details here](https://dev.to/5t3ph/a-giveaway-to-celebrate-50-stylestage-dev-stylesheets-4220), entries due by Friday, October 30, at 12 midnight PST.

## All Styles

<ul class="features features__flexible">
{%- for style in collections.allStyles -%}
	<li style="background-image: url('/img/styles/{{ style.data.style.title | slug }}.jpg');">
		<span>
			<a href="/styles/{{ style.data.style.title | slug }}">{{ style.data.style.title }}<span aria-hidden="true"></span></a>
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
