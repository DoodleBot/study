# Experience Fragment Templates

located in **conf**. They derive their resourceType from **apps** and those get their resourceSuperType from **libs**.

Each template can have its own set of declarations that define how the template behaves.

## How to Create

1) In the AEM Touch menu, go to templates
2) Create a folder if one doesn't exist
3) Within the folder select the correct type, enter title/desc
4) Set the policies layout and add any components that should be there by default
5) Once done, Enable it (it will be in draft mode until it's enabled and won't be available)
6) Make sure the layout root is unlocked so that components can be added to the iparsys

## How to Access

1) In the AEM Touch menu, go to experience fragments
2) Make sure the folder has the template location as part of the rules for available XF templates. Click the gear icon in the upper right corner to see this
3) If it's not in the rules, add the location. Ideally use `experience-fragment(*.)?` at the end to require that as a prefix for valid templates
4) Create a new experience fragment. You should see teh template as an option

## Further steps

Need to create template type that allows master variation to show up as an option

Need to look at the We Retail version and copy the xf props

## Structure

* initial (defines resourceType and maybe cq:template)
* policies (defines what is allowed in the template)
* structure (defines breakpoints)
* thumbnail.png (thumbnail to be seen in GUI)

## Templates Types

The type is like a template for a template. Changing a template type will not change the template based off of it.

Template Types can only be created in CRX/DE, where as Templates are created in the GUI.

[what's the point of using a template type](https://aemhq.com/posts/what-s-the-point-of-using-a-template-type/)

## Locating Templates

### Location of BSRO templates and types

* conf/bsro/templates/settings/wcm/templates/
* conf/bsro/templates/settings/wcm/template-types/

### Location of enterprise-shared templates and types

* conf/enterprise-shared/settings/wcm/templates/
* conf/enterprise-shared/settings/wcm/template-types/

### Location of core component example templates and types

* conf/core-components-examples/settings/wcm/templates/
* conf/core-components-examples/settings/wcm/template-types/

### Location of XFs

* content/experience-fragments/bsro/content/[folder-name]

### Plan to Create XF Template Type

## We Retail

### We Retail Structure Components

From **conf**, The empty-experience-fragment uses the xfpage, from **apps**, as it's sling:resourceType

apps/weretail/components/structure/

This folder has all the larger, layout centric components as well as the experience fragments.

the xfpage uses this resource super type

libs/cq/experience-fragments/components/xfpage

## Added structure

* /apps/bsro/global/components/structure
* /conf/bsro/templates/settings/wcm/template-types/empty-experience-fragment