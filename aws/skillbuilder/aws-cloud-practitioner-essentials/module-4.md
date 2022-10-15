# AWS Cloud Practitioner Essentials Module 4 - networking

## Amazon Virtual Private Cloud (VPC)

Lets you provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define.

These resources can be public facing so they have access to the internet or private with no internet access.

The public and private grouping of resources are called *subnets*. They are ranges of IP addresses within your VPC.

* Public Subnet
* Private Subnet

VPC is a virtual private network in AWS

You define the IP ranges

You run things like EC2 instances and ELBs on it

### Internet Gateway

For public traffic to enter a VPC you need an Internet Gateway.

### Virtual Private Gateway

Requires an approved network to access VPC. Allows you to connect via a VPN

### AWS Direct Connect

Dedicated private connection between your data center and a VPC.

Completely private connection that doesn't use the public network.

### Subnets and network access control lists

#### Network Access Control Lists (Network ACL)

Read packets permissions to determine if they can gain access to or leave a subnet.

Has a list of of what is allowed access

* By default, all traffic is allows in and out

Network ACL is stateless, or checks every single packet regardless of circumstances

#### Security Groups

Each EC2 instance needs it's own permissions.

* By default, every EC2 instance comes with a security group
* By default, each security group doesn't let any traffic
* By default, all traffic is allowed out

Security groups are stateful, or remembers packets that come and go

## Global Networking

### Amazon Rout 53 Routing Policies

* Latency-based routing
* Geolocation DNS
* Geoproximity routing
* Weighted round robin

