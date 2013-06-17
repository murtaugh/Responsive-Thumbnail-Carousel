Responsive-Thumbnail-Carousel
=============================

<p>This is a basic jQuery-powered carousel. There are many like it, but this is mine.</p>

<p>I know there are plenty of existing solutions for this sort of thing, but using someone else’s code is, for me, like wearing someone else’s clothes — it just doesn’t fit right.</p>

<p>It’s not a jQuery plugin, just a set of functions, which (IMHO) makes it more accessible and easier to customize. That said, there’s plenty of work that could still be done to make it more elegant; please feel free to make suggestions!</p>

<p>Some things I like about it:</p>

<ul>
<li>Minimal HTML
<li>Graceful <code>overflow: auto</code> fallback for non-JS users
<li>CSS transitions for animations (uses Modernizr to serve jQuery animation fallback to non-transitioning browsers)
<li>Supports multiple carousels
<li>Supports carousels of any width, percentage or fixed
<li>Supports any number of items within the carousel
<li>Recalculates controls on window resize
<li>Makes the controls visible at all times for touch devices (again using Modernizr)
<li>If the controls aren't needed they don't appear at all
</ul>

<p>Things I don't like about it:</p>

<ul>
<li>Thumbnails within a carousel must be consistent widths
<li>The JS is pretty unsophisticated — it could be made more elegant
<li>It fails in IE8, but I haven't looked into why yet
<li>There seems to be a minor error in the control logic when resizing the window, but I haven't been able to nail it down
<li>I'm using pointer events to disable the nav controls in some circumstances — because I'm lazy I haven't put in fallbacks for non-supporting browsers yet
</ul>

<p>Other stuff to know:</p>

<ul>
<li>I haven't done any optimizing for smaller screens
<li>I've included <a href="https://github.com/mathiasbynens">@mathias</a>' <a href="https://github.com/mathiasbynens/jquery-noselect">noSelect</a> jQuery plugin to prevent annoying cursor/selection behavior while interacting with the controls; you might want to remove this depending on the content of your thumbnails
</ul>
