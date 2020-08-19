# AEM: Author Websites

## AEM: Use Basic Authoring Capabilities

### Create, Edit, Delete Pages

#### Roles

##### Author/Marketer

-   Use developer created templates to create pages

##### Super Authors

-   experts of the site
-   higher level control over development and authoring
-   designs the page

#### Layout Containers

A place that components can be dragged onto in the UI

### Tag a Page

Tags classify content, which can then be used for search, analytics, etc

Adobe Sensei can automatically tag images with smart tags

Custom smart tags can tag images automatically based on image information provided

under touch menu go to: tools => tagging (folders are namespaces)

Can add tags to pages by going to the page's properties

### Add an Asset to the DAM (Digital Asset Manager)

-   Assets with metadata
-   Can have multiple renditions of an asset to be used for different devices
-   Has features like Smart Cropping and Smart Tagging
-   Can upload multiple assets using WebDav access (needs to be setup) and treat it like a file structure (suggested not to leave live on site)

### Add a component to a page

-   Templates can restrict what components can be placed in the layout
-   Templates can be edited in Touch UI
-   Components can be dragged and dropped into templates
-   Suggested for developers to reuse/extend built-in components
-   Developer can lock certain features of the template, even from super user
-   Editor can apply style classes, there can be allowed styles from the stylesheet

### Author an Email

-   Can author the email using a specific template
-   Use Adobe Campaign to handle sending the emails

### Use AEM Launches

Able to maintain pages for a separate version of the site, then promote the launch to production. Works well for special promos like Black Friday or seasonal versions of the site.

-   Can specify a date this will automatically happen

Get to it in menu by: tool => sites => launches

-   Create a new launch by copying an existing site or launch
-   Can select to include sub pages, existing content, inherit source page live data
-   After making changes to launch files you can compare the pages to the current site version

### Use Versioning, Page Comparison Diff View, and Timewarp

#### Versioning

Creates a snapshot of a page at a specific point in time. Can be reverted to after making changes to the page.

#### Page Comparison Diff View

Can make a side-by-side comparison using a diff on the two versions of the page

-   detects differences in assets, html, links, etc

#### Timewarp

Can specify a date to see a state of the page at that time.

To see timewarp, go to the page and select the Timewarp view and select a date.

#### Timeline

Can see a log of all the actions made to the page, including versioning, which can be selected for diffing

#### Archiving

When deleting a page it can be archived

### Use Responsive Page Layout Editing

There is a device icon in Touch UI that will show a layout with options for viewing the page in different view port sizes.

### View and Edit Page Properties

Select the page and then select Open Properties

Basic properties include:

-   Name, tag, and other info about the page
-   on/off times
-   vanity urls

Advanced properties include:

-   language
-   redirects
-   designs associated with the page
-   aliases
-   cloud service configurations

Additional tabs:

-   thumbnail
-   social media
-   cloud services
-   personalizations
-   permissions
-   Live Copy (if/where the page inherits properties)

## Use Advanced Authoring Capabilities

### Create and Use Experience Fragments

Basically a grouping of components that behaves like a page template in authoring

-   A group of one or more components, including content and layout.
-   Can be reused, reordered, and resized
-   It can have variations and can share content and components
-   they're based on templates

### Use Building Blocks in Experience Fragments

#### Steps to create a building block

-   go to edit mode
-   select an element and click the "group" icon (looks like a frame with rectangles in it)
-   select any other elements to be grouped
-   then click the "building block" icon (looks like a package with an arrow)
-   in modal name and create the building block

#### Reusing

Can drag/drop building blocks from the sidebar like a component

### Publish Experience Fragments to Target

Need to make a connection to Adobe Target to share. Then you can select in the experience fragment to export to Adobe Target.

### Build a Content Fragment Model

Content fragments are just structured data.

Content Fragment Model is the schema for that data, which provides the structure.

Content Fragment Model Editor is a WYSIWYG for creating Content Fragment Models.

Content Fragment Models are stored in `/conf/project-name/dam/cfm/models`

Content Fragment data can be exported as JSON which is useful if you're trying to get the content outside of the AEM system.

### Use the Content Fragment Editor

More detail into why/how you'd export Content Fragment data to JSON to be accessed within or outside of AEM.

Editor was basically just authoring content into a Content Fragment

### Use Content Services

Add `.model.json` to the end of a page containing content fragments to get json export of the data.

### Bulk Activation and Workflows

At a high level of the site you can select "manage publication" to publish or schedule publishment.

Workflows allow you to customize what needs to happen each time a page is published.

Workflows are under tools => workflow

Workflow options are:

-   Models: Manage workflow definitions
-   Instances: View and manage running workflow instances
-   Launches: Manage how workflows are launched
-   Archive: View log of completed workflows
-   Failures: View log of workflow errors

In the editor you can apply different workflow steps. If a step you need isn't available a developer can create a custom workflow step.

### use Template Editor

Admin can define access rights for users. This helps prevent authors from editing templates that they should have access to.

#### Editable vs Static Templates

##### Static Templates

This is the classic style of template. Only configurable by developers.

##### Editable Templates

Can assign policies for components that can be added to the page.

Template Authors have access to create and edit. More dynamic contection between template and page.

#### Creating Templates

To access go: Tools => General => click Templates tile

Templates have to be enabled after creating to be available

The fewer templates needed for the site the better

### Use the Data Layer

Adobe Client Data Layer DTM

It's an Adobe Analytics JS file that's likely included on each page on site.

Can be accessed by other Adobe products

## Intro to Project Capabilities

### Collaborate with Inbox

Tasks are useful for getting approval from managers or collaboration in general

#### Creating and Curating Tasks

There are 3 types of Tasks in the Inbox:

1. Ad Hoc Tasks: created with the Create button in the Inbox; not assigned to a project
2. Project Tasks: Either created in the Inbox and added to a project or already part of the Project's task list
3. Work Items: Derived from workflows and executing in the system; optionally assigned to a user. The task dialog for these items includes a progress bar for the workflows

### Use Calendaring

Calendar is part of the Inbox. It shows tasks based on start/due dates. There are quick actions as well as search/filter capabilities.

### Create and Use Project Masters

#### Project Masters

Project Masters contain the info for which other AEM Projects can be created and defined. User Groups are one of the main pieces of information replicated between projects.

##### User Groups

-   Owner
-   Editor
-   Observer
