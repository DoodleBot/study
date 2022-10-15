# AWS Introduction

[AWS Getting Started](https://aws.amazon.com/getting-started/cloud-essentials/)

## Developer Tools

### AWS Management Console

The website interface. Most basic controls.

### AWS CLI

Command-line shell. Can use several common shell programs.

[AWS CloudShell](https://aws.amazon.com/cloudshell) is a browser-based shell tool. It defaults to Unix, but can be customized to use a preferred shell script and can be configured to behave just like a local instance. This comes with the added benefit of not having to configure a local environment.

### IDE (Integrated Development Environments) and IDE Toolkits

Author, debug, and deploy code on AWS from within your preferred IDE.

#### AWS Cloud9

* A cloud based IDE that runs in the browser.
* Code collaboration is easy by sharing a dev env. 
* It comes preconfigured with all SDKs, libraries, and plug-ins needed for serverless development. It also provides an env for locally testing and debugging AWS Lambda functions.
* Direct terminal access to AWS includes sudo privileges to managed EC2 instances and a pre auth AWS CLI

### SDKs (Software Development Kits)

Tools that allow you to interact with AWS API programmatically. SDKs are available for:

Swift, Java, Python, Javascript, Ruby, .NET, Go, PHP, C++

Helpful when integrating your application source code with AWS services. For example, writing a script to store files in Amazon S3 instead of a local hard drive.

### Infrastructure as Code (IaC)

create, deploy, and maintain infrastructure with code.

#### AWS Cloud Development Kit (CDK)

Choose from multiple programming languages to defining cloud infrustructure. Then provision through AWS CloudFormation.

Typescript, Javascript, Python, Java, C#/.Net, Go

* Use pre-configured application components
* Model your application
* Provision your application with AWS CloudFormation

#### AWS CloudFormation

Specify templates of AWS resources that can be reused for setting up services. You don't have to worry about the dependencies.

### Six Pillars of AWS Well Architected Infrastructure

#### Operational Excellence

#### Security

#### Reliability

#### Performance Efficiency

#### Cost Optimization

#### Sustainability

