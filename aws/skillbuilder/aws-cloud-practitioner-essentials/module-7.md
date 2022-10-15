# AWS Cloud Practitioner Essentials Module 7 - monitoring and analytics

## Monitoring

Observing systems, collecting metrics, and then using data to make decisions

Example: Scaling event that could launch another EC2 instance

Example: high amount of errors could alert someone to investigate

### Amazon CloudWatch

Metrics: Variables tied to your resources

Dashboard for accessing metrics and gaining visibility into applications, infrastructure, and services

Reduce Mean Time to Resolution (MTTR) and improve Total Cost of Ownership (TCO)

#### Amazon CloudWatch Alarm

Set a threshold for a metric which triggers an alarm

### Amazon CloudTrail

Comprehensive API auditing tool

Every request gets logged in the CloudTrail engine

* Which user sent the request
* What time
* There IP address
* What was the response

Logs can be saved to S3 for long term audits

#### CloudTrail Insights

Allows CloudTrail to automatically detect unusual API activies

example: it might detect that a high number of EC2 instances have recently been launched in your account

### AWS Trusted Advisor

Automated service that checks your AWS account for best practices against 5 pillars:

* Cost optimization
* Performance
* Security
* Fault tolerance
* Service limits

addresses 40 common issues

Kind of like Lighthouse, but for AWS

Compiles categorized items that you can review in your AWS console

Some are free and some are extra paid services

example: will let you know if Root user doesn't have MFA turned on