# [Rich Text Editor](https://docs.adobe.com/docs/en/aem/6-2/administer/operations/page-authoring/rich-text-editor.html)

* Features are turned on/off with plugins.
    * edit
    * findreplace
    * format
    * image (classic only)
    * keys
    * justify
    * links
    * lists
    * misctools
    * paraformat
    * spellcheck
    * styles
    * supsuperscript
    * table (classic only)
    * undo
* Touch and Classic UI are implemented differently. Touch only works with inline editing, some features are only visible in full screen mode, and the image and table plug-in aren't available.

## Configuring Plugins

### Config Location

#### Inline (touch):
``.../text/cq:editConfig/cq:inplaceEditing/config/rtePlugins``

If `config` isn't present, look for the property `configPath` with the name of the node used for config definitions. In our setup this is the case and is defined as '../../dialog/items/tab1/items/text/'

#### Dialog (Classic):
``.../text/dialog/items/tab1/items/text/rtePlugins``

## Activating Plugins

Within /rtePlugins/, which should be at the end of the configPath, create an nt:unstructured node with the Name equal to the plugin ID. example `../../dialog/items/tab1/items/text/rtePlugins/links/`

## Configuring the feature Property

Within the plugin node, add a property named 'features'.

* If using all, set the type to String and Value to *.
* If using a subset, set the type to String[] and the Value as a list of features.
* If you want to explicitly remove a plugin, set the features type to String[] and the Value as an empty list.




