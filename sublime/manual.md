# Sublime Text

## Package Control

[Package control](https://packagecontrol.io/installation) is needed to manage packages within Sublime. After installation, press Shift-Command-P to bring up its commands.

## Packages

### Important

* EditorConfig
* SublimeLinter
* SublimeLinter-jshint
* SublimeLinter-jscs (read install docs for additional software needed)
* JSHint Gutter
* SublimeLinter-contrib-scss-lint (read install docs for additional software needed)

### Recommended

* AdvancedNewFile
* SideBarEnhancements
* AutoFileName
* DocBlocker
* JSONLint
* Trailing Spaces
* JsFormat
* Emmet
* jQuery

### Cool

* Open Folder
* Pretty JSON

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