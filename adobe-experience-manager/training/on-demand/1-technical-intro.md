# [AEM: Technical Intro](https://solutionpartners.adobe.com/training/courses/course1411189.html)

from [On-Demand Training](https://solutionpartners.adobe.com/training/aem_training/aem_ondemand.html)

## Author and Publish Tiers

-   Authoring Tier (environment) => Adobe Pipeline =>
    Publish Tier (environment)
-   Not everything is sent through pipeline. Large assets are stored in Shared Binary Storage stores (images, assets, videos)
-   CDN/Load Balancer

## Architecture Stack

-   Apache Felix (OSGi Java Container)
-   Apache Jackrabbit Oak (JCR Repo / Storage Layer)
-   Apache Sling (Web App Framework)
-   AEM (App Layer)

### AEM Platform

#### Services

There are standardized interfaces to interact with these services.

-   Content Repo
-   Security
-   UI
-   Logging
-   Business Process Management
-   Topology Management

#### Capabilities

-   Sites
-   Assets
-   Forms

## Java Content Repo (JCR)

A database that looks like a file system. Nodes (folders or files) which provide structure for data.

-   Implemented by Apache Jackrabbit Oak

### Node Types (nt)

-   nt:folder
-   nt:file
-   nt:unstructured (often used in projects)
-   rep:User
-   rep:ACL
-   nt:nodeType

### Mixin Types

-   mix:versionable
-   mix:lockable
-   sling:VanityPath
-   cq:Taggable

### Single Value Properties: value

-   string
-   long
-   date
-   path
-   binary

### Multi-value properties: values[](arrays)

-   string
-   long
-   date
-   path
-   binary

## Apache Sling

A RESTful (Representational State Transfer) web API for JCR-based applications. How your application accesses the data in the JCR.

### How it Processes JCR Data

Sling decomposes a URL, determines the resource to be rendered, then gets a rendering script or servlet to process the resource.

1. Decomposes URL
2. Gets resource from the URL info
3. Determines what resource type it is
4. Goes to directory for that script type (first apps, then libs directory)
5. Based on the selector, method, and extension in the URL, it will determine script to use
6. Execute the script
7. If there are includes, get another resource to include

![understanding apache sling script resolution](https://4.bp.blogspot.com/-emamqkW4jHI/V1Le2LgbUtI/AAAAAAAANIo/f6NrgMvFSCg8lzC0cfTwHNA-oXt4H5rVwCLcB/s1600/image.img%2B%25281%2529.png")

![Using the SlingPostServlet](https://4.bp.blogspot.com/-ZmpBRgLpNno/V1LfH7a4FrI/AAAAAAAANIw/9qoO-6G3XfkefpLlxJy5piWK8XLv8HZDACLcB/s1600/image_0.img.png)

## Intro to OSGi (Open Service Gateway Initiative)

A Java framework for developing and deploying components as bundles. Bundles can be installed, started, or stopped individually. A bundle is technically a JAR file with additional metadata in the manifest, which may include:

-   bundle name(s)
-   bundle version
-   imported/exported services
-   optional info: java version requirement, vendor, copyright, contact, etc

A component is a Java object created and managed by an OSGi container. The component can provide services and implement interfaces as services.

Bundles can register services with the OSGi service registry.

## Intro to Dispatcher

Dispatcher is AEM's caching and load-balancing tool.

-   Converts dynamically published content to static HTML, served by a static web server
-   caches static assets
-   When publishing the AEM replication agent will flush the cache for new content

Request => Dispatcher => check if cacheable => check if cached => check if up-to-date => if all yes use cache, else render from publisher and cache if cacheable.
