# Sublime Text

## Package Control

[Package control](https://packagecontrol.io/installation) is needed to manage packages within Sublime. After installation, press Shift-Command-P to bring up its commands.

## Packages

### Important

* [EditorConfig](https://packagecontrol.io/packages/EditorConfig) - Helps developers maintain consistent coding styles between different editors
* [SublimeLinter](https://packagecontrol.io/packages/SublimeLinter) - Interactive code linting framework for Sublime Text 3
* [SublimeLinter-jshint](https://packagecontrol.io/packages/SublimeLinter-jshint) - SublimeLinter plugin for JavaScript, using jshint (jshint must be installed globally on system first ``npm install -g jshint``)
* [SublimeLinter-jscs](https://packagecontrol.io/packages/SublimeLinter-jscs) - (DEPRICATED: use eslint instead) SublimeLinter 3 plugin for jscs (read install docs for additional software needed)
* [SublimeLinter-contrib-eslint](https://packagecontrol.io/packages/SublimeLinter-contrib-eslint) - This linter plugin for SublimeLinter provides an interface to ESLint (requires eslint to be installed globally ``npm install -g eslint``)
* [JSHint Gutter](https://packagecontrol.io/packages/JSHint%20Gutter) - JSHint Gutter for Sublime Text 2 and 3 via node.js
* [SublimeLinter-contrib-scss-lint](https://packagecontrol.io/packages/SublimeLinter-contrib-scss-lint) - SublimeLinter plugin for Sass scss syntax, using scss-lint (requires scss-lint to be installed ``gem install scss_lint``. If file permissions fail, probably need to install rvm with local user)

### Recommended

* [AdvancedNewFile](https://packagecontrol.io/packages/AdvancedNewFile) - File creation plugin for Sublime Text 2 and Sublime Text 3.
* [SideBarEnhancements](https://packagecontrol.io/packages/SideBarEnhancements) - Enhancements to Sublime Text sidebar. Files and folders.
* [AutoFileName](https://packagecontrol.io/packages/AutoFileName) - Sublime Text plugin that autocompletes filenames
* [DocBlockr](https://packagecontrol.io/packages/DocBlockr) - Simplifies writing DocBlock comments in Javascript, PHP, CoffeeScript, Actionscript, C & C++
* [JSONLint](https://packagecontrol.io/packages/JSONLint) - Sublime Text 2 and 3 plugin to mark issues in JSON files.
* [Trailing Spaces](https://packagecontrol.io/packages/TrailingSpaces) - Highlight trailing spaces and delete them in a flash.
* [JsFormat](https://packagecontrol.io/packages/JsFormat) - Javascript formatting for Sublime Text 2 & 3
* [Emmet](https://packagecontrol.io/packages/Emmet) - Emmet for Sublime Text
* [jQuery](https://packagecontrol.io/packages/jQuery) - Sublime Text package bundle for jQuery

### Syntax Highlighting
* [Markdown Extended](https://packagecontrol.io/packages/Markdown%20Extended) - Markdown syntax highlighter for Sublime Text. (must set it as the language default)
* [Monokai Extended](https://packagecontrol.io/packages/Monokai%20Extended) - Extends Monokai from Soda with additional syntax highlighting for Markdown, LESS, HTML, Handlebars and more. (Must set scheme by going to Preferences -> Color Scheme -> User -> Monokai Extended)
* [Monokai JSON+](https://packagecontrol.io/packages/Monokai%20JSON%2B) - Sublime's Monokai Theme with Beautiful Colored JSON
* [Markdown Preview](https://packagecontrol.io/packages/Markdown%20Preview) - markdown preview and build plugin for sublime text 2/3

### Cool

* [Open Folder](https://packagecontrol.io/packages/Open%20Folder) - SublimeText plugin to add a Side Bar context menu option to open folders
* [Pretty JSON](https://packagecontrol.io/packages/Pretty%20JSON) - plugin for Sublime Text 2 & 3 editor to pretty json

## Settings

Sublime Text stores settings in .sublime-settings files which are in json format. They can be accessed by using the preferences menu.

When modifying settings it's best to do so in User Settings and leave the default ones alone.

### User Settings

<pre><code>
{
    "bold_folder_labels": true,
    "caret_extra_bottom": 2,
    "caret_extra_top": 2,
    "caret_extra_width": 2,
    "draw_white_space": "all",
    "translate_tabs_to_spaces": true,
    "trim_trailing_white_space_on_save": true,
    "highlight_line": true,
    "highlight_modified_tabs": true,
    "indent_guide_options":
    [
        "draw_normal",
        "draw_active"
    ],
    "line_padding_bottom": 1,
    "line_padding_top": 1,
    "match_brackets": true,
    "match_brackets_angle": true,
    "match_brackets_braces": true,
    "match_brackets_content": true,
    "match_brackets_square": true,
    "rulers":
    [
        80, 120
    ],
    "wide_caret": true
}
</code></pre>