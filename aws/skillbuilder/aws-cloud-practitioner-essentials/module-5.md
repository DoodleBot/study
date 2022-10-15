# AWS Cloud Practitioner Essentials Module 5 - storage and databases

## Instance Stores and Amazon Elastic Block Store (EBS)

EC2 local storage is Instance Store Volumes - block-level storage (like your hard drive)

The problem with block-level storage is that if/when an instance is removed that data is lost.

EBS allows you to maintain persistent data storage between instances.

Snapshots - incremental backups. This means that the first backup copies all the data and subsequent backups only saves the blocks of data that have changed since the most recent snapshot

16TiB max size

SSD by default. HDD optional

Attached to EC2 instances

Availability Zone level resource (needs to be in the same AZ to attach to EC2 instances)

Volumes do not automatically scale

## Amazon Simple Storage Service (S3)

* Store data as objects (similar to a file)
* Store objects in buckets (instead of a file directory)
* Upload a maximum object size of 5 TB
* Version objects
* Create multiple buckets
* Can set permissions
* Can stage data between different tiers
* Tiers can be for data that is accessed frequently for infrequently

### Object Storage

Each object consists of data, metadata, and a key (unique identifier)

Note, when a file within object storage is modified, the entire object is updated. Unlike in block storage where

### S3 Tiers

#### Amazon S3 Standard

* has 11 9's of durability (99.999999999% probability that it will remain intact after one year)
* can sustain a concurrent loss in up to 2 storage facilities (copies are stored in at least 3 facilities)

#### Amazon S3 static website hosting

* a collection of html files that each represent a page of the actual site
* Can simply check a box on a bucket and provide a url to host it as a static website

#### Amazon S3 Standard-Infrequent Access (S3 Standard-IA)

Access is needed less frequently, but requires rapid access when needed

Great for backups

#### S3 One Zone Infrequent Access (S3 One Zone-IA)

* Stores data in a single availability zone
* Has a lower storage price than standard IA

#### Amazon S3 Glacier

Archived data

Great for auditing data

Can create vaults and define policies like:

* Write once/read many (WORM)
* Lock policies so contents cannot be changed

3 options for retrieval that range from minutes to hours

Can upload directly or via S3 Lifecycle Policies

##### Instant Retrieval

archives that need immediate access

##### Flexible Retrieval

archives able to be retrieved within minutes to hours

##### Deep Archive

Able to retrieve within 12-48 hours

#### S3 Outposts

object storage for on-prem

#### S3 Intelligent-Tiering

* requires a monitoring fee
* Moves data to IA after 30 days with no access
* If accessed, moves it to standard again

### S3 Lifecycle Management

Move data automatically between tiers programatically

## Amazon Elastic File System (EFS)

* Multiple instances can access the data in EFS at the same time
* Linux file system (not just a HDD)
* Regional resource
* Automatically scales

## Relational Database Service (RDS)

data is stored in a way that relates it to other pieces of data


### AWS Supported DBs

* mySQL
* PostgreSQL
* Oracle
* Microsoft SQL Server
* MariaDB
* Amazon Aurora

### Benefits

* Automated patching
* Backups
* Redundancy
* Failover
* Disaster recovery

### Amazon Aurora

Relational DB compatible with mySQL or PostgreSQL with 1/10th the cost of commercial DB

Data is replicated 6 times across 3 availability zones

Up to 15 read replicas

continuous backup to S3

Point-in-time recovery

## Amazon DynamoDB

Serverless DB

You don't have to manage the scaling up or down of your system

You create tables that store items with attributes

Highly performant 1ms response time

Non-relational or noSQL DB

Less rigid data structure and accessed at a very high rate

Don't have to specify rigit schema that connect tables together

Can add or remove items or attributes at any time

Not every item in the DB needs to have the same attributes

It's a key based table.

It's a key-value DB service

May not be the right type for all cases

## Amazon Redshift

data warehousing service

Looks at historical data within databases, even just a week old

can handle big data analytics

can collect data across multiple sources

## AWS Database Migration Service (DMS)

The source DB remains fully operational during he migration

downtime is minimized for applications that rely on the DB

The source and target DBs don't have to be the same type

### Homogonous Databases

Migrating from like-to-like DB from either on prem or another Amazon DB (mySQL -> RDS mySQL)

### Heterogenous Databases

a 2 step process

1 convert the DB to the new format
2 migrate to the new DB

### Dev and test DB migrations

copy production DB to use in a dev or testing environment

### DB consolidation

want to consolidate multiple existing DBs into a single DB

### Continous DB replication

Sending ongoing copies of your DB to other target sources instead of doing a one-time migration

disaster recovery
geographic location

## Additional Database Services

### Amazon DocumentDB (with MongoDB compatability)

good for content management, catalogs, user profiles

### Amazon Neptune

Graph DB

good for social networking and recommendation engines
also good for fraud detection

### Amazon Managed Blockchain

### Amazon Quantum Ledger Database (QLDB)

immutable ledger - entries can never be removed from the audits

### Database Accelorators

#### Amazon ElastiCache

DB cache that speeds up response times

supports Redis and Memcached

#### Amazon DynamoDB Accelerator (DAX)

native cache layer (in-memory cache) for non-relational DB