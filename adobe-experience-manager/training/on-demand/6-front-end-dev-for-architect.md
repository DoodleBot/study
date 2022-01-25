# [AEM 6.5: Front-end Development for Architect](https://solutionpartners.adobe.com/training/learning_program/learningProgram52529.html)

## Deconstruct the Creative Design

### Deconstructing the Creative Design

- Explain hot to deconstruct a creative design
- Describe the basic structure of an AEM page
- Identify templates and components in a page

#### notes

An AEM Page is an instance of a template. Components render the content.

Templates define the basic structure of the page.

Templates specify the components used within the selected scope.

Components... we know what they are...

Different types of pages maybe use same template.

identify reusable components that are not out of the box components.

### Content Rendering

- Explain how content is rendered on an AEM page
- Define sling script resolution

#### Content Rendering (Sling resolution walk-through)

Can be described as a chain of Sling process

1. URL decomposition
2. Mapping requests to resources
3. scripts resolution
4. invoking rendering chain

Walks through how Sling resolves a url by looking through CRX/DE

If a selector is provided in the resource path (page-name.selector-name.html), then Sling will look for selector-name.html instead of page-name.html in the resource.

### Intro to CRX/DE

#### Key Concepts

- Use CRX/DE for dev
- Describe purpose of each folder in CRX/DE
- Create a basic project folder structure

Recommends to use AEM Dev Tools when working with Eclipse plugins and AEM HTL Brackets Extension during project dev.

**Apps**: contains components, scripts, and templates used for site

**Conf**: contains all configurations for site: (addy-table templates?) and policies

**Content**: contains all authored content

**Etc**: tools and utilities, clientlibs and page designs

**home**: info about users and groups

**libs**: library definitions, out-of-the-box components, templates, search, and application

**tmp**: temporary work area

**var**: files that change like audit logs, stats, and event handling.

#### Creating a project folder structure

- apps
  - project-name
    - components
      - content
      - structure
    - templates

## Create and Use Templates to Build a Page

### Intro to Templates

- Define Templates
- Identify Differences between static and editable templates

### Template overview

Defines basic structure of the page and provides component policy.

Templates can be restricted to certain locations

Can also control availability through allowedPath, allowedParents, allowedChildren, and allowedTemplates

pages created by templates will have cq:template property that references the template used

#### Template Types

##### Static 

- Defined and configured by developers
- Stored in Apps
- uses design mode to persist design props
- Later changes to template will not effect pages created from it

##### Editable

- Created and edited by authors
- Stored in Conf
- uses content policies to persist design props
- Changes to template will effect pages created from it

### Create Static Templates

- Create static template
- Create a page using a template

#### Directions

1. in apps/project-name/templates click "create" in menu and select create template
2. provide label, title, desc, resource type (page rendering component), ranking (order within other templates)
3. Allowed paths restricts paths where template is available (/content/*)
4. Allowed parents and Allowed children can further restrict where template is available

Suggested resource type would be apps/project-name/components/structure/name. This would be a component with a super type, like out-of-the-box libs/wcm/foundation/components/page

### Create Editable Templates

- Identify ways to create editable templates using author interface
- Explain how to add components and create a layout for a template
- Explain how to add initial content to a template

Basically go through authoring menus to create a editable template and edit from there.

### Configure content Policies in Editable Templates

- Explain how to configure Content Policies
- Define the design properties of a component

Have to unlock components in tempate structure if we want author to be able to edit them.

Set policies for each component in the template, which can be named and reused

### Use Template to Create a Page

- Enable editable templates
- use template to create a page

to allow templates that have been enabled to be available in a folder, select folder in author, select properties, under advanced: templates settings add path to template.

## Developer Tools

### Brackets IDE

You can download packages from AEM, open folder from Brackets to open the package

AEM extension can import/export package to the server

META-INF/value/filter.xml specifies the location of the package and filters out files not to import/export

Can setup to automatically sync files when changes are made

## Intro to HTML Template Language

### Intro to HTL

- define HTL
- describe benefits of HTL over JSP

separates markup from business logic

increases security by
- simpler to read/write
- automatic contextual XSS protection and URL externalization
- restricted feature set

### HTL Syntax and Expressions

- describe common HTL syntaxes
- access content using HTL global objects

#### Expressions

expressions are delimited by `${}`

expressions are only used in attribute values, element content, and comments

properties are accessible with dot and bracket notation

#### Block Statements

custom data attributes added to HTML

syntax: `data-sly-functionName.objectName`

example: `<div data-sly-repeat="${currentPage.listChildren}">`

#### Global Objects

Enumerable objects (properties, pageProperties, etc)

Java-backed objects (component, currentPage, currentDesign, etc)

### HTL Use-API with JS

- Add functionality to HTL component using JS functions

Create a js file with the following syntax:

`"use strict"; use(function () { return object});`

in HTL

`<div data-sly-use.objectName="script.js">`

you can then access objectName as an expression.

The JS file will have access to Global Objects like currentPage.

You can pass values to JS as follows:

`<div data-sly-use.objectName="${'script.js' @value1='foo' , value2='bar'}">`

these values can be accessed with this

`this.value1`

### HTL Use-API with Java

- Add functionality to a HTL component using Java
- Explain pros/cons of Java Use-API and JS Use-API

Allows access to helper methods in custom Java class.

Use-API with Java should only be used if something can't be done in HTL alone

`<div data-sly-use.objectName="javaClassName">`

object should then be available as an expression in the HTL

values can be passed in the same way as the JS Use-API

can use get methods to access the values

#### Local Java Class

- is recommended with the use-class is specific to the HTL component
- is placed in same location as the HTL file
- is automatically compiled with the component

#### Bundle Java Class

- is recommended when the Java code implements a service that is accessed by multiple HTL components
- must be compiled and deployed

#### Use-API, JS vs Java

Java is faster, can use debugger, unit-testing. JS is easier to use.

### HTL Template and Call

- describe functionality of HTL template and call statements

`data-sly-template` the host element and its content are not output by HTL

`data-sly-call` Calls a template defiend by data-sly-template, replacing the host element and its contents with that of the called template

**example**:

`<div data-sly-template.templateName></div>`

`<div data-sly-call="${templateName}"></div>`

to call a template used in an external htl file use Use-API

`<div data-sly-use.objectName="templateFileName.html" data-sly-call="${objectName.templateName}">`

Templates can have attributes that are passed in from the call statement.

`<div data-sly-template.templateName="${@ value1,value2}">`

They can be accessed in the template as expressions `${value1}`

`<div data-sly-use.objectName="templateFileName.html" data-sly-call="${objectName.templateName @value1='foo', value2='bar'}" />`

## Use Core Components & Style System

### Intro to Core Components

- Define core components
- Identify differences between core components and foundation components
- Identify versions in core components

#### Core Components

- meant to be extensible base components
- meant to use best practices, accessibility, and latest technology

- in /apps/core/wcm/components/
- uses Java POJOs with Sling model
- HTL syntax
- uses BEM class names
- Coral 3 dialogs
- licensed through Apache

#### Foundation Components

- in /libs/
- uses JSP for logic and markup
- custom CSS scheme
- Coral 2 and Classic dialogs
- Adobe proprietary license

#### [Core Components Updates on Github](https://github.com/Adobe-Marketing-Cloud/aem-core-wcm-components/releases)

First released with AEM 6.3

Designed to be compatable with all released versions

Site can contain multiple versions same component

#### List of Core Components

- breadcrumb
- commons
- form
- image
- languagenavigation
- list
- navigation
- page
- search
- sharing
- text
- title

There is also apps/core/wcm/extension/components which contains contentfragment

We Retail mostly uses core components

resourceSuperType for each weretail component uses proxy reference to a versioned core component.

Each component has a ReadMe file that has BEM documentation

### Extending a Core Component

- explain how to use and extend core components

1. copy path of core component
2. in project make a proxy component
   1. right click on components/content
   2. select create component
   3. paste path into super type (can remove /apps/)
   4. fill in the other fields
3. It generates a default jsp file which can be deleted

#### Styling a component

you can use the property 'categories' with type String[] and then the location of the core component version in dot notation (core.wcm.components.breadcrumb.v2)

1. go to /apps/project-name/clientlibs-components/
2. create a client library 
   1. right click and create node
   2. type cq:ClientLibraryFolder
   3. name same as component
3. add categories prop, type String[] with value project-name.components.component-name
4. Inside this add a css.txt file
   1. define the base folder as `#base=css`
   2. define name of css file as `style.less`
5. Then create that css folder with style.less within it
6. Copy category from component and add to project-name/clientlibs-site/
   1. add property embed, type String[], and paste in component category
 
### Intro to Style System

- define, explain benefits, and describe internal working of Style System

Allows template author to define style classes in content policy of a component so that a content author can select them when editing a page.

#### Style Policy

In edit mode, select paintbrush icon. In the example there are layout and display style groupings.

- Layout changes the layout of the component (radio button)
- display turns on/off different elements (checkboxes)

In the template editor, selecting the component you can see the style policy. Under the properties/styles

You can Add/remove allowed styles, name them, define if they can be combined, name the options within them, and define the BEM naming class for the style.

### Developing a Component with Style System

Style System is available with v2 of core components

need a cq:design_dialog or design_dialog in the component

## Creating Components

### Creating Custom Components

- create and add script to custom component

Put non-authorable components in structure folder. authorable components go in content folder.

### Creating Dialogs

- create a dialog box and use input for your component

cq: before dialog indicates that it is Touch UI

1. right click on component and select create dialog
2. label should always be dialog, title can match component name
3. this creates basic structure for a classic ui dialog

To add a field to a tab

1. create a node with type cq:WidgetCollection
2. if type is cq:WidgetCollection its name should always be items
3. within this node, create another node with type cq:Widget with name of field
4. add property xtype that matches input type
5. add property name that defines the property that will be used to provide value from dialog box (example: `./titleProperty`)
6. add property fieldLabel that names the input
7. add property fieldDescription which is prompt for what to enter into input

To access the input value is JS Use-API us the following:

`var myVar = granite.resource.properties["propertyName"]`

I believe you can also access the value through properties in HTL

To convert a classic dialog to touch

1. in package manager, click uplooad package
2. select cq-dialog-conversion package
3. install
4. In touch, search dialog conversion
5. browse to path of component and then convert it

### Design Dialogs

- explain how to create a design dialog

1. create node
   1. name cq:design_dialog (for touch)
   2. type nt:unstructured
2. add sling:resourceType of cq/gui/components/authoring/dialog
3. the rest of the dialog structure can be copied from cq:dialog/content

tip: can use data-sly-element with currentStyle.type to change an element in HTL to match style selected by author

design_dialog selections are stored in conf, not content, under the policies.

### Overlaying Existing Component

- define benefits of overlays
- explain how to overlay an existing component
- use sling resource merger to overlay a component

Overlays extend and customize existing components and consoles.

Basically it's whatever is in /apps/ **overlays** the matching resource in libs

Uses Sling Resource Merger which provides the following properties:

- sling:hideProperties
- sling:hideResource
- sling:hideChildren
- sling:orderBefore

Adding these properties to the overlay in apps component will allow us to hide things in the libs component or change the order.

We can also add or overwrite our own customizations in the apps component that will be added to the libs resource.

1. right click component from libs directory and select Overlay Node
2. can select Match Node Types
3. This will create similar node structure in /apps/

## Intro to Client Libraries (30 min)

### Client Libraries Overview

- list uses of clientlibs
- explain ways to create clientlibs
- how to use clientlibs in a component

cq:ClientLibraryFolder contains js.txt and css.txt as well as src files

HTML Library Manager (cs:includeClientLib) retrieves these js/css files

The js.txt and css.txt clientlib files should include the following:

- the base folder name in this format `#base=css` or `#base=js`
- list files, like this `style.less`

HTL page must contain the following:

`<sly data-sly-use.clientlib="/libs/granite/sightly/templates/clientlib.html" />`
`<sly data-sly-call="${clientlib.css @ categories='training.components.componentname'}" />`
`<sly data-sly-call="${clientlib.js @ categories='training.components.componentname'}" />`

### Client Library Properties

- indentify available clientlib properties
- describe benefits of each clientlib property

- categories (references and identifies component clientlib folder)
- dependencies (when clientlib depends on another)
- embed (merges requested clientlib into this one. dependencies just references it)
- allowProxy (prior to 6.3 clientlibs was stored in etc. now is located under apps. allowProxy true in clientlibs can continue to use etc)

### Creating a Page Design

- identify ways to create a page design
- explain how to add design to a page

1. create a clientlibs-site folder in the project folder in apps.
2. make categories value of project-name.site.design
3. to apply to pages, in page template editor. go to page policy and add the category to the Client-Side Libraries list

Alternatively, in customheaderlibs.html you can use data-sly-call to import the clientlib files into the page at the component level.

## Create Content Fragments and Content Fragment Models (40 min)

### Intro to Content Fragments

- define and describe benefits of content fragments

- page-independent assets
- channel-neutral content with optional channel-specific variations
- can be used when authoring content pages

To use a content fragment on a page you need a content fragment component

1. CF Model defines structure of CF (like a page template)
2. Structured CF is the actual CF
3. CF Component is where you place the CF
4. optionally, the CF can be converted to JSON to be used outside of AEM

in AEM GUI under assets/files/

### Create Content Fragments

- create, add variations, ways to add to page - CF

1. in CF folder properties, select Cloud Services
2. under cloud configuration select the location of CF Models (conf/projectName)
3. create a language folder (en)
4. create CF
5. select CF Model to use
6. enter info for CF

creating a variation clones the CF, which you can then edit

to see the json export replace the extension .html with .model.tidy.json and remove editor.html from the url

### Create Content Fragment Models

- define and create CF Model

- defines structure and data types of input content
- use CF Model Editor to create CF Model
- models are stored at /conf/project-name/dam/cfm/models

Enabling CF Models

1. go to tools/configuration browser/
2. select configuration for site
3. click properties
4. check the checkbox for CF Models

Creating CF Models

1. go to tools/content fragment models
2. project folder should be visible if it is enabled
3. click create, add title and description
4. use the CF Model Editor to configure the CF Model then click save

### Add Annotations and Comments in CF Editor

- explain CF support in AEM HTTP API
- describe how to add annotations and comments in CF Editor

To add an annotation:

1. select the copy in CF editor
2. click annotation icon
3. type annotation into field
4. once added the text will be highlighted
5. in CF list view the annotations will be visible

to access the json of the CF you can use the following sling resource url

`api/assets/path-to-resource/file-name.json

## Create Fluid Experiences Using AEM (40 min)

### Intro to Headless CMS

- stored in content repo
- provides access via REST API calls
- content can be exported in any developer neutral format (json, etc)

Hybrid CMS: AEM allows for traditional CMS combined with headless CMS

Basically, sling model allows for different asset types to be delivered for the same content.

for example, using model (file-name.model.json) selector in sling resource path gives limited json of the page that would be useful for a UI dev

using infinity selector (file-name.infinity.json) provides extensive output

### Overview of CF Models and Content Services

when creating a configuration project in AEM GUI you can select what to enable by default. (cloud configurations, contextHub segment, CF Models, Editable Templates)

### Intro to Structured CF

### Using Sling Model Exporter Framework

Can create a Java overlay that can modify the default sling output for JSON or any other format.

### Use Headless Principles in React

Can use headless output to supply content to React, or other framework, SPA site.
#### SPA Editor

Can use components to manage your SPA

Didn't go into a lot of detail on this yet

## Create and Export Experience Fragments (30 min)

### Create Experience Fragments (XF)

- An Experience Fragment is a group of one or more components, including content and layout
- It can be reused, reordered, and resized across pages
- It can have variations
- Are based on templates, which define the structure of the components

It's basically a page snippet that can be dropped into an XF Component

Remember that an XF Component is a container for dropping XF into

### Extracting Experience Fragments From an Existing Page

There is an XF icon when selecting a component in page editor that will allow you to convert to XF variation

specify the fragment path (where it will live), title, and template (I believe this will also generate a template that would be used for the XF generated)

### Develop an Experience Fragment Template

AEM GUI, go to tools/templates

I've done all this

### Use Building Blocks in Experience Fragments

- introduced in 6.4
- you can select a set of components in an XF to form a building block
- it can be reused in other XFs
- building blocks aren't limited to XFs of the same template type
- building blocks have to be converted back to regular components to make changes

1. In XF edit mode select the group icon
2. then select the convert to building block icon
3. provide a title and convert
4. now building block will have dotted outline and there will be an BB icon on left panel that lists all BB in the XF

The building block should be available in other XFs

You can select local, for BBs created in this XF, or all, to see all available BBs

### Export Experience Fragments in HTML and JSON Formats to Adobe Target

In XF properties under Cloud Services you can select Adobe Target export formats

## Perform Debugging and Testing (20 min)

### Developer Mode

- discover what pages are composed of
- debug applications
- test applications to see if they work as expected

#### Components tab

Components tab will list all the components used on the page

View details will show the component scripts and content path

Can edit the component in CRX/DE from this view

shows estimated load time of the component

#### Errors Tab

usually empty

will show errors from error log

### Hobbes Testing

JS based testing suite that can be used to test components

AEM GUI, tools/operations/testing

1. apps/project-name/test/
2. create a clientlibs file for the test file
3. create folder test-scripts in clientlibs with matching base in clientlibs js.txt
4. add test cases to the js files created
5. testing scripts should show up in AEM GUI

### Debugging Client Libraries

clientlibs get compiled to var/clientlibs/apps/project-name/components/content/component-name/clientlibs...

console for viewing all clientlibs `/libs/granite/ui/content/dumplibs.html`

to see all clientlibs add `?debugClientLibs=true` to end of url

#### Adobe Granite HTML Library Manager

`system/console/configMgr` has settings for minify, debug, gzip, and more
