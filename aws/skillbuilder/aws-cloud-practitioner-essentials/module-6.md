# AWS Cloud Practitioner Essentials Module 6 - security

## Security

### Shared Responsibility Model

* AWS responsible for security *of* the cloud
    * Physical infrastructure
    * Network
    * Hypervisor
* Customer responsible for security *in* the cloud
    * OS (AWS does not have keys or login) Must handle patches
    * Application
    * Data

AWS can provide security documentation for compliance needs.

### User Permissions and Access

Root user has full permissions

Suggested to immediately turn on Multi-factor Authentication (MFA) after creating a root user account

Best practice is to immediately create a first user account for yourself and use that instead of Root.

Use Root user for only tasks that require root access.

#### AWS Identity and Access Management (AWS IAM)

* New users have no permissions by default (Least Priveledged Principle)
* Associate an IAM policy to an IAM user
* IAM policies are JSON documents that specify what API calls a user can/cannot make
* Statements have Effect, Action, and Resource
    * Effect: are they allowed? (Allow or Deny)
    * Action: what is the API? (any API call)
    * Resource: what resource does the API apply to? (which AWS resource the API call is for)

##### IAM Users

* Represents a person or application that interacts with AWS services and resources
* Consists of a name and credentials

##### IAM Groups

Groupings of users.

Can attach a policy to a group so that all users in the group have those permissions.

##### Roles

* Used for temporary amounts of time
* No username or password
* Has associated permissions

When an identity takes on a role, it ignores all previous permissions.

##### Identify Federation

If you already have a corporate identity store, you can federate that to AWS using role based access.

### AWS Organizations

* Centralized management of all AWS accounts
* Consolidated billing

Allows you to consolidate multiple AWS accounts under a single organization account

#### Organizational Units (OU)

Hierarchical groupings of accounts

Applying policies to an OU makes all accounts under it inherit those policy permissions

#### Service Control Policies (SCPs)

AWS service and API actions access control

Centrally control permissions for accounts in your organization

Can be applied to organization root, an individual member account, or an OU

SCPs affects all IAM users, groups, and roles within an account, including the AWS account root

## Compliance

AWS has complience programs that it adheres to and can provide direction on how to manage it in the areas under your control.

### AWS Artifact

a service that provides on-demand access to AWS security and compliance reports.

Review, accept, and manage agreements with AWS

### AWS Compliance

#### Customer Comliance Center

Center that provides resources and documentation for compliance

## Denial of Service Attacks (DDoS)

### UDP Flood

Send simple requests to a service that returns a large amount of data and routing it by a fake address to a targeted victom application

#### Solution - Security Groups

Only allow proper request traffic

require that only the correct protocols are allowed in

Security Groups act at the AWS network level, so bad actors don't even make it to your EC2 instance 

### HTTP Level Attacks

Multiple requests coming from an army of zombie bot machines

#### Solution - AWS Shield with AWS WAF (web application firewall)

Application firewall

Uses web Access Control Lists (ACL) to determine what can get through

Has a list of potential bad actors to filter

Uses machine learning

##### AWS Shield Standard

automatically protects all AWS customers at no cost.

protects from most common types of DDoS attacks.

##### AWS Shield Advanced

A paid service that provides detailed attack diagnostics and the ability to detect and mitigate sophisticated DDoS attacks

It can integrate with other services like CloudFront, Route 53, and Elastic Load Balancing

Right custom rules with AWS WAF

### Slowloris Attack

Actor pretends to have a very slow connection, effectively tying up server responses

#### Solution - Elastic Load Balancer (ELB)

ELB waits for the entire request to come in before sending it to the EC2 instance

ELB works at the Region level, so would be difficult to overwhelm

## Additional Security Services

### Ecryption

at rest, like in a DynamoDB table
in transit, like SSL

#### AWS Key Management Service (AWS KMS)

Used to decrypt data

You choose the specific levels of access control for keys. For example, you can specify which IAM users and roles can manage keys. Keys can also be temporarily disabled.

Keys don't leave KMS

#### Amazon Inspector

* Network configuration reachability piece
* Amazon agent
* Security assessment service

Identifies potential security risks that you can then review

#### Amazon GuardDuty

Investigates streams of meta data generated from your account and network activity

Works independently of your application loads, so it won't slow your resources down 