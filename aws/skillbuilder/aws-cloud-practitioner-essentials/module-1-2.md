# AWS Cloud Practitioner Essentials Module 1 and 2 - Intro

## Client-Server Model

## Cloud Computing

On Demand

Undifferiented heavy lifting of IT

Pay as you go pricing

## Amazon Elastic Compute Cloud (EC2)

A type of virtual server. It can scale up or down to meet your business needs compared to on prem which is fixed and slow to adjust.

### Multitenancy

Sharing underlying hardware between virtual machines. Instances are partitioned so as not to interact with each other.

### Vertical Scaling an Instance

Increasing / Decreasing hardware configurations like RAM

### Provisioning

#### Launch

* You can determine the OS, application server, applications, and other characteristics of the server
* You also specify the hardware configuration
* Set security settings to control network traffic

#### Connect

* Connect programs and applications to the instance
* Log in and access the computer desktop

#### Use

* Can now begin to use the instance
* Run commands to install software, add storage, copy files, etc

### Types of EC2 Instances

* Different types of EC2 instances are grouped under instance families
* Contain varying levels of hardware configuration

#### General purpose

* balanced resources
* diverse workloads
* web servers
* code repos

#### compute optimized

* compute intensive tasks like: gaming, high performance computing (HPC), and scientific modeling

#### memory optimized

* memory intensive tasks

#### accelerated computing

* good for floating point number calculations, graphics processing, data pattern matching, utilize hardware accelerators

#### storage optimized

* High performance for locally stored data

### Pricing

#### On-Demand

* No contract and can be used immediately. Good for testing things out

#### Savings Plan

* Requires contract, but lowers costs 1-3 year terms
* Save up to 72%

#### Reserved Instances

* Requires contract, but lowers costs 1-3 year terms
* Up to 75% savings
* all upfront, partial upfront, no upfront

#### Spot Instances

* No contract required
* Request spare computing
* Up to 90% savings
* Amazon can reclaim the instance at any time they need it
* Gives you a 2 minute warning to save state
* Good use case for this is batch workloads

#### Dedicated Hosts

* Used to meet compliance requirements of not sharing instances with other clients

### Scalability and Elasticity

* Can add capacity when workload increases or if instances fail
* Can reduce capacity when workload decreases

#### Amazon EC2 Auto Scaling

Automatically adds/removes EC2 instances in response to changing demand. There are two approaches which can be used independently or together

##### Dynamic Scaling

responds to changing demand

##### Predictive Scaling

Automatically schedules the right number of EC2 instances based on predicted demand

##### Auto Scaling Group

* Set a minimum and maximum number of instances
* Set a desired capcity

### Elastic Load Balancing

* Like the host at a coffee shop
* Determines which instance to route a user to
* Frontend and backend communicate through the ELB to reduce complexity of connections
* Regional

### Messaging and Queuing

Rather than directly sending orders from one application to another, sending it to a *messaging buffer* allows for error handling.

A loosely coupled architecture prevents a single failure from causing multiple failures.

#### Messaging Buffers

##### Amazon Simple Queue Service (Amazon SQS)

* Send messages
* Store messages
* Receive messages
* Between software components
* At any volume

Data contained within a message is called a payload. They are protected.

SQS Queues are where messages are placed until they are processed.

##### Amazon Simple Notification Service (Amazon SNS)

Can send notifications to end users using a PubSub model.

Amazon SNS topic - A channel for messages to be delivered.

Can be multiple end points, like lambdas, sqs queues, http web hosts.

Can send out messages to end users via email, sms, etc

#### Microservices vs Monolithic Applications

Loosely coupled vs tightly coupled

## Additional Compute Services

### Serverless

* You cannot see or access the underlying infrastructure
* No need to provision or maintain instances

#### Lambda

Lambda function

configure a trigger

service waits for the trigger (put object)

when the trigger is detected, the code is automatically run in a managed environment

automatically available, highly scalable, and all maintenance is handled by AWS

Designed to run code under 15 minutes

#### Container Services

Container orchestration tools. A container is a Docker container. A container is a package of code to be run on an instance.

There are two options, both of which can be run on EC2 or AWS Fargate.

##### Amazon Elastic Container Service (ECS)

Helps run containerized applications at scale without the hastle of maintaining instance software.

Use API calls to launch and stop Docker applications.

##### Amazon Elastic Kubernetes Service (EKS)

Similar to ECS, but uses different tooling.

Kubernetes open-source containerization platform (as opposed to Docker Swarm)

##### AWS Fargate

Serverless compute platform

If you want to run ECS or EKS, but don't want to maintain the EC2 instance, this is the option.

