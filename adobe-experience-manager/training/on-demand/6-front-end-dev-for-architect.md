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
