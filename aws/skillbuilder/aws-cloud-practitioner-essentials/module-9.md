# AWS Cloud Practitioner Essentials Module 9 - Migration and Innovation

## AWS Cloud Adoption Framework (AWS CAF)

Provides guidance for a smooth transition to AWS

Focuses on 6 perspectives:

* Business - owners, finance teams
* People - HR, managers
* Governance - CIO, enterprise architects, managers
* Platform - CTO, IT managers, architects
* Security - CISO, IT security
* Operations - DevOps, support

AWS CAF Action Plan

## Migration Strategies

After discovery phase, you decide which is the best approach based on the 6 R's.

* Rehosting (lift and shift)
* Replatforming (lift, tinker, and shift)
* Retire (no longer needed)
* Retain (not ready to migrate or retire)
* Repurchase (ending existing vendor agreement for another plan. traditional license to SaaS model)
* Refactoring (rewriting code, usually because of needed new features)

## AWS Snow Family

Network speeds can be too slow to move large amounts of data. Network speeds of 1Gbps would take 100 days to move 1 PB of data.

The Snow Family of devices provide a mailable device that data can be transfered to at a faster rate of speed.

All options are encrypted

### AWS Snowcone

* 2 CPUs, 4 GB of memory
* Up to 8 TB of data
* Contains Edge Computing (EC2 or IOT Green Grass?)

### AWS Snowball Edge

2 options

#### Storage Optimized

* 80 TB of HDD and 1 TB of SATA SSD
* 40 vCPUs, 80 GiB of memory

#### Compute Optimized

* 42 TB of HDD and 7.68 TB of NVMe SSD
* 52 vCPUs, 208 GiB of memory, and optional nvidia tesla V100 GPU

* Can be fitted into existing server racks
* Can run Lambdas, EC2 compatible AMIs, Green Grass

### AWS Snowmobile

* 45ft rigid shipping container
* 100 PB

## Innovation with AWS

### VMWare Cloud on AWS

Same VMWare on-prem, but on cloud

### Amazon SageMaker

machine learning models at scale

### Amazon Augmented AI (A2I)

#### Amazon Transcribe

Speach to text

#### Amazon Comprehend

patterns in text

#### Amazon Fraud Detector

identify potential fraud

#### Amazon Lex

Alexa - build interactive chat bots

### Amazon Textract

Text extraction from documents

### AWS DeepRacer

1/18 scale race car for testing reinforcement learning models in machine learning

### Internet of Things

### AWS Ground Station

Satellite time