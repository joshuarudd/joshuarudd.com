# Case Study: UserVoice Sidebar

## Abstract

**Problem:** A significant amount of customer feedback was coming through channels other than UserVoice.

**Opportunity:** Provide a method to capture important feedback from other sources (e.g., support tickets, sales opportunities) into UserVoice.

**Solution:** Create a browser plugin that would allow company employees to capture customer feedback from any webpage, attribute it to the person who gave the feedback, and make it available for other team members in UserVoice.

// required new license type and supporting user management

## Challenge
UserVoice is a platform for gathering user feedback and making sense of it. From 2008 to 2015, the primary way UserVoice gathered feedback was by allowing companies to set up forums and embed widgets that their end-users could use to submit feedback and vote on ideas. The more feedback is in UserVoice, the easier it is for teams to discover the top unmet needs of their customers.

However, *UserVoice wasn’t the only way users were submitting feedback.* A significant amount of feedback companies were receiving was coming from channels other than UserVoice – most often through support tickets, chat, sales calls, as well as social media, online reviews, blog comments, etc.

**Insight:** People are going to use whatever method is most accessible and convenient to them in the moment to give feedback.

#### Observations

When a person would give feedback to a sales or support agent, we observed two primary workarounds team members would use to get that feedback into UserVoice:

One method was to tell their customer to go to the UserVoice forum to post the same feedback they’d already given. However, telling customers that had already given feedback to give it again using the forum was frustrating to both the customer and the team member. Their customers felt like their feedback was just going to a black hole since the person they were trying to get help from was just redirecting them, and team members reported to us that their customers would often no end up giving the feedback again in UserVoice.

Another method we saw was for the team member to create an idea in UserVoice themselves with that customer’s feedback. Unfortunately, the current tools did not allow that feedback to be attributed to the customer who actually gave it (it was instead attributed to the team member who created it), making it difficult to differentiate between internal vs. customer feedback, reducing the value of other insights and segmentation tools.

#### Problem
UserVoice’s customers *wanted* their end-users’ feedback in UserVoice, but did not have effective ways to redirect feedback they were receiving into UserVoice.

#### Hypothesis
Rather than

#### Business Goals
1. Increase revenue through new business by addressing sales blockers.
2. Increase renewals by expanding value of UserVoice beyond product teams and into sales and support teams.

#### UX Goals
1. Customers can continue to give feedback using whatever channels are at their disposal.
2. Feedback is always attributed to the person who gave it.
3. Become of system of record of all feedback.

#### Constraints
(Emerged) Cannot rewrite core data model (yet) - still needed to require linking feedback to a related idea. This became a big challenge because it required additional steps for the person capturing the feedback.

## Role & Team

My role changed during this project. First I was the product manager. We then went through a company restructuring and I transitioned to the lead designer.
Single development team…

## Process

### Overview
1. User Story Mapping
2. Wireflows
3. Weekly sprints

### Research
1. Quantitative
2. Generative
3. Used UserVoice to identify customers with related problems, and used that list to set up customer calls.
4. What channels were people primarily using?
  1. Zendesk, Salesforce, UserVoice Tickets, Intercom,

### Materials list
1. LucidChart - User Story Mapping [fn] & User flows
2. Sketch - Wireframes & Mockups
3. InVision - Internal Feedback & Prototyping
4. Principle for Mac - Prototyping & Animation

### Experimental Procedure

#### Simple form
	* This approach would require significant restructuring of our data model, and would also need new admin-facing tools to leverage this data. We decided we’d need to require customers to link related idea. **Challenge:** this adds a significant step for team members capturing feedback.
	* While this approach seemed ideal (and we would later come back to this)…
		2. Determine interaction flow - 2 approaches:
			1. Multi-screen: User submits data each step of the way, drilling into each step
			2. Form Builder: Single page form that includes all necessary steps
		3. Autofill as much data as possible
			1. Email
			2. Source URL
			3. Feedback
		4.
		5. Defensive Design
			1. Validation, server-side errors
## Outcomes
#### New functionality
1. Bookmarklet
2. Improved user management & invitation flow
3. New license type
#### New source of revenue
UserVoice was losing lots of sales opportunities where prospective customers wanted a tools for sales teams to capture feedback rather than providing a customer-facing feedback tool.
	1. Doubled size of new deals. Rather than a handful of user licenses for new business, we started getting deals for hundreds of licenses.
	2. Expansion/revenue model. Lead to new deals and expansion.
#### Foundation for new features
New channel that opened up opportunities for UserVoice to provide additional value to customers - internal status, roadmap, etc.
## Learnings and insights
1. Employees didn’t have time to figure out how to organize the feedback. Only ask for what the team member knows.
2. MVP bookmarklet was not enough. Difficulty installing. Users didn’t remember to open it.
3. Ideas for next time
	1. Opportunities to push information to team members - such as status of feedback they captured.
	2. Find ways to reduce time for entry - not require idea linking.
	3. Rethink data model - not requiring ideas, ability to attribute feedback to organizations rather than just individuals…
	4. Standalone UI - capturing feedback from phone calls didn’t originate from a webpage, so invoking a bookmarklet didn’t make sense.
	5. SSO - sales and support teammates were already signed in to tools like Zendesk and Salesforce. Requiring them to also sign in to UserVoice with separate credentials seemed like an unnecessary step and a barrier for entry for some.
## Acknowledgements / Footnotes
1. User Story Mapping - Jeff Patton
