# Handlebars JS

## [Block Helpers](http://handlebarsjs.com/block_helpers.html)

``{{#custom}}{{/custom}}``

* Receives an options hash
* the options hash contains a function ``options.fn`` that behaves like a normal compiled Handlebars template (take a context and return a String)
* Handlebars invokes helpers with the current context with ``this``, which can be used to evaluate the block.
* return ``options.fn(this)`` to display the markup nested within the helper tags
* return ``options.inverse(this)`` to handle an else case.
* parameters can be passed to the helper like this``{{#custom param}}{{/custom}}`` and will be available before the options parameter.
* If a block helper name conflicts with a field, the helper takes precidence. To access the field instead use ``{{./fieldname}}``
* Use ``new Handlebars.SafeString()`` to return added markup.

<pre><code>Handlebars.registerHelper('custom', function(options) {
	return options.fn(this);
});</code></pre>




