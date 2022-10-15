# AWS Cloud Practitioner Essentials Module 3 - global infrustructure and reliability

## High Availability and Fault Tolerance

Basically having multiple data centers across regions

## AWS Regions

Select the region that you want your data to be stored.

It is isolated from every other region.

Data can be requested to move from region to region

### Selecting a Region

1 Compliance - Governance or regulations may decide which region to use.
2 Proximity - determines speed of service, or latency
3 Feature Availability - The region may not contain all the features you want
    * For example, Amazon Braket, a new quantum computing service, is only available in some regions
4 Pricing - costs or running a region vary

### Availability Zones (AZ)

Each region is made up of multiple data centers. Amazon calls a single, or multiple, data centers in an area an availability zone. A region will comprise of multiple availability zones.

10s of miles apart from each other to keep latency at a minimum, but far enough away to reduce risk.

Suggest running across at least two availability zones in a region.

Elastic Load Balanceing (ELB) is a regional level construct and will handle instances across AZs

Any service that is listed as a Regionally scoped service already takes care of spreading risk across zones

## Edge Locations

An Edge Location is a site that Amazon CloudFront uses to store cached copies of your content closer to customers for faster delivery.

### Amazon CloudFront

Amazon's CDN (content delivery network). Also known as caching across multiple locations

### Amazon Route 53

Amazon's DNS (domain name service) with low latency

### AWS Outposts

Installs a mini Region into your own data center

## How to Provision AWS Resources

Everything is handled through APIs

### AWS Management Console

Web dashboard used to:

    * Test Environments
    * View AWS bills
    * View monitoring
    * Work with non-technical resources

Allows for provisioning through manual configuration, but is prone to user error and is slow. Preferably this is handled by CLI

### AWS Command Line Interface (CLI)

Command line interface. Can easily run scripts as needed rather than handling them manually through the management console.

### AWS Software Development Kits (SDKs)

Allows developers to interact using various programming languages to interact with the APIs

### AWS Elastic Beanstalk

Service for easily provisioning EC2 environments.

* provide it with application code and desired configurations and it will automatically provision for you
* Also allows for saving environment configurations

* adjust capacity
* load balancing
* automatic scaling
* application health monitoring

### AWS CloudFormation

Infrustructure as code tool used to define a wide variety of AWS resources... in a declaritive way using JSON or YAML call CloudFormation Templates.

Requisitions the resources in parallel

