# Case Study: UserVoice Sidebar

## Abstract
- [ ] … Become system of record for all product feedback.

#### Problem
A significant amount of customer feedback was coming through channels other than UserVoice.

- [ ] When product and support/sales would get together to discuss priorities, it would be difficult to determine how much recency bias played in to the feedback they were conveying.
	- “We’re losing sales because we don’t have X.”
	-  “The biggest problem customers have is X.”

1. What are the top issues Sales teams are encountering?
2. What

#### Desired Outcome

- [ ] …



#### Opportunity
Provide a method to capture important feedback from other sources (e.g., support tickets, sales opportunities) into UserVoice.

#### Solution
Create a browser plugin that would allow company employees to capture customer feedback from any webpage, attribute it to the person who gave the feedback, and make it available for other team members in UserVoice.

- [ ] required new license type and supporting user management



#### Role

Product Manager & Lead Designer



#### Timeline

2015 - 2016




## Challenge
#### Background

UserVoice is a platform for gathering user feedback and making sense of it. From 2008 to 2015, the primary way UserVoice gathered feedback was by allowing companies to set up forums and embed widgets that their end-users could use to submit feedback and vote on ideas.

The more feedback companies have in UserVoice, the easier it is for them to discover the top unmet needs of their customers.

However, *UserVoice wasn’t the only way users were submitting feedback.* A significant amount of feedback companies were receiving was coming from channels other than UserVoice – most often through support tickets and sales calls, but also through chat, social media, online reviews, blog comments, and more.

**Insight:** People are going to use whatever method is most accessible and convenient to them in the moment to give feedback.

#### Observations

When someone would request a feature or give feedback directly to a sales or support agent rather than submitting it through UserVoice, we observed two primary workarounds team members would use to get that feedback into UserVoice.

1. One method was to tell their customer to go to the UserVoice forum to post the same feedback they’d already given. However, telling customers that had already given feedback to give it again using the forum was frustrating to both the customer and the team member. Their customers felt like their feedback was just going to a black hole since the person they were trying to get help from was just redirecting them, and team members reported to us that their customers would often no end up giving the feedback again in UserVoice.
2. Another method we saw was for the team member to create an idea in UserVoice themselves with that customer’s feedback. Unfortunately, the current tools did not allow that feedback to be attributed to the customer who actually gave it (it was instead attributed to the team member who created it), making it difficult to differentiate between internal vs. customer feedback, reducing the value of other insights and segmentation tools.

#### Problem

UserVoice’s customers *wanted* their end-users’ feedback in UserVoice, but did not have effective ways to redirect feedback they were receiving into UserVoice.

How might we allow team members to continue using their existing tools and channels to communicate with customers, while giving them a quick way to add this feedback to UserVoice?

#### Hypothesis

We saw an opportunity to *become the system of record for all product feedback.*

We believed that if we could provide a method for team members capture important feedback from customers within the same tools they were already using to communicate with customers, we would see 1) an increase in the amount of product feedback coming into UserVoice, and 2) improved quality of that data. With these, we could provide better insights for product teams, and empower them to make data-driven decisions.

![alt](feedback-flows.png)

##### Business Goals

1. Increase revenue through new business by addressing the increasing number of sales blockers related to capturing customer feedback.
2. Increase UserVoice’s average selling price (ASP)
3. Reduce churn by expanding the value and usage of UserVoice beyond product teams.

##### Design Goals

1. Be invisible to the end-user. People can continue to give feedback using whatever channels are at their disposal, and not have to get redirected to UserVoice in order to make sure their feedback is recorded.
2. Feedback is always attributed to the person who gave it, allowing companies to leverage that data for greater insights.

##### Constraints

Constraints were not known at the beginning of the project, but we soon realized that our initial solution could not require us to rewrite our core data model (yet). This became a big challenge because it resulted in requiring additional steps for the team member capturing the customer’s feedback.




## Role
This project was unique experience for me because my role changed (due to product and engineering team restructuring) from product manager—where I performed generative research and opportunity assessment for this project—to lead designer as we began ideating, prototyping, and testing our solutions.

As we moved towards building and testing, we formed a team of three engineers, a new product manager, and myself as lead designer. We committed to weekly sprints.



## Process

1. Generative research
2. Opportunity assessment
3. Further discovery
4. User Story Mapping
5. Concept testing
6. Iterative design and development
7. MMP

![Illustration of process flow]()



### Generative Research

In the spring and summer of 2015, while testing a major overhaul of our admin tools, I spent a considerable amount of time conducting customer interviews to learn how they used the product, what their teams’ workflows were, how UserVoice helped them get their job done, and what challenges they had along the way. 

When a customer would bring up an issue or make a request, I’d follow up with the following questions:

- What is your suggested solution? 
- What goal does this help you achieve? 
- What are you doing today to achieve/overcome it? 



While customers’ suggested solutions were most often not how we’d address their problems, it did give us big insight into what *they* thought would be helpful. Additional *why* questions helped reveal the root of the issue – but ==the biggest eye openers were always *learning what their goals were,* and *what they were doing today to achieve their goals.*== If we could help them achieve their goals faster and more effectively, then there might be an opportunity for us.

Several themes emerged very quickly during this research. Our sales and support execs said they’d heard similar feedback from customers and prospects, and offered valuable insights about how additional customers and prospective buyers were trying to achieve similar results.



### Opportunity Assessment

> The purpose of a good product opportunity assessment is either to a) prevent the company from wasting time and money on poor opportunities; or b) for those that are good opportunities, to understand what will be required to succeed.

*[Assessing Product Opportunities](https://svpg.com/assessing-product-opportunities/), by Marty Cagan*

Once I had a general idea of the unmet needs our customers were having, we needed to decide if this was a problem we should tackle. I’m a huge Marty Cagan fan, and used his template for Product Opportunity Assessments.

Our assessment set out to answer these 10 questions:

1. Exactly what problem will this solve? (value proposition)
2. For whom do we solve that problem? (target market)
3. How big is the opportunity? (market size)
4. What alternatives are out there? (competitive landscape)
5. Why are we best suited to pursue this? (our differentiator)
6. Why now? (market window)
7. How will we get this product to market? (go-to-market strategy)
8. How will we measure success/make money from this product? (metrics/revenue strategy)
9. What factors are critical to success? (solution requirements)
10. Given the above, what’s the recommendation? (go or no-go)



After reviewing this assessment with the executive team, we decided the project was a go.



### What do we need to learn next?

Now that we had decided to tackle this opportunity, we had an endless stream of questions.

Using the feedback we already had in our own UserVoice account I was able to identify customers with related unmet needs, and used that list to set up customer calls and on-site interviews.

One of the initial questions we had was, **What tools are sales and support teams already using to communicate with customers?**

We learned that Zendesk and Salesforce were at the most common tools, but there were so many others (including UserVoice Tickets, Intercom, Gmail, and bespoke solutions) that we felt like creating an integration with a single product might limit the number of customers we could deliver a solution for.

We decided to build a basic solution that could work anywhere, and focus on tighter integrations later. Now we just needed to figure out what that experience would be.



### User Story Mapping

One exercise I use to help get PMs, designers, and engineers on the same page is User Story Mapping, a concept coined by Jeff Patton. [^1] ==I like user story mapping because it helps the team focus on the steps necessary for a person to achieve their desired outcome.==

[^1]: [User Story Mapping](https://www.jpattonassociates.com/user-story-mapping/) by Jeff Patton

We identified four primary personas/roles impacted by this project and created user story maps for each:

1. The Customer
2. The Support Agent
3. The Support Manager
4. The Product Manager



The primary one was to answer *How might a support agent log customer feedback?*

![User Story Map](user-story-map-v1.png)

*User Story Map – Support Agent*

(I prefer to create user story maps on a whiteboard or wall with sticky notes, but because some of our team members were remote we decided to use LucidChart so everyone could contribute and reference it.)

Once we got all the tasks, risks, and questions down, we “sliced” them into releasable/testable chunks, prioritized by what we needed to learn next.



### Concept Testing

Once we had the user story map, our engineers were able to start exploring a lot of the technical requirements needed to deliver a solution, and I set out to put together some quick wireframe concepts to test both internally and with select customers.



#### Concept 1: Simple form

The first concept focussed on only asking support agents for the most essential information needed: [^2]

[^2]: Behind the scenes, we also knew who was logging the feedback on behalf of the customer, but we didn’t need to ask for this information.

1. **Who** the feedback was from.
2. **What** their feedback was.
3. **Where** they feedback came from (optional).

![Simple Form Concept](concept-simple-form@2x.png)

*Concept 1: Simple form*

##### Pros

1. This experience required minimal interaction and could be delivered very quickly.
2. Support agents only had to provide information they already had.
3. In many cases we could automatically populate every field for them.

##### Cons

However, this direction would introduce some risk factors with the existing data model that would also require us to create new admin-facing tools. While we ultimately felt we needed to also simplify our data model, we weren’t confident this was the right time to do it. [^3]

[^3]: Up to this point, the primary object in UserVoice were aggregate *ideas,* which were essentially forum topics that could be voted and commented on by others. The kind of feedback support agents would be logging were private and would not be visible to other customers. And at the time, there wasn’t any UI for managing large sets of uncategorized bits of feedback.

In addition, two of our key customers wanted their support agents to link the feedback they were logging to existing ideas in their UserVoice accounts. Without other admin-facing tools to leverage feedback not linked to ideas This approach would require significant restructuring of our data model, and would also need new admin-facing tools to leverage this data. 

##### Takeaway

While we preferred the UX of this direction most, we would have to rework a lot of our infrastructure to deliver valuable insights for our customers. We ultimately wanted to do this work, but it wasn’t the right time.

We decided to require support agents to link feedback to a related idea, so we went back to our user story map and added some additional tasks.

![Revised User Story Map](user-story-map-v2.png)

*Revised User Story Map*



#### Concept 2: Multi-step form

For the next concept, we tried to keep the simplicity of the first one, but add a second step which would ask the support agent to link to a related idea, or create a new idea if an existing one didn’t exist.

This flow was somewhat similar to our end-user-facing widget, which would ask the person to enter their feedback, click next, and then display a list of related ideas (if any existed). If one did, they could vote for it instead of creating a new idea in the system.

![Multi-step form](concept-multi-step-form@2x.png)

*Concept 2: Multi-step form*

##### Pros

1. Similar experience to end-user-facing widget.
2. Less visual complexity than Concept 3 on each step of the form.

##### Cons

1. It wasn’t obvious to testers that there was a second step, or how many more steps there would be.
2. Initial engineering estimates were higher than we hoped.

##### Takeaway

…



#### Concept 3: Dynamic form

The third concept was created in tandem with the second, but focussed on providing a single-page form that displayed related ideas on the same screen as the feedback field.

![Dynamic form](concept-dynamic-form@2x.png)

*Concept 3: Dynamic form*

##### Pros

1. Agent could see all fields they needed to enter on a single screen.
2. In cases where the feedback field was auto-populated, we could immediately display related ideas rather than the support agent having advance the form (in Concept 2).

##### Cons

1. Would require a lot more fitness and conditional logic to get the interaction and experience just right.
2. Potentially confusing experience switching between linking an existing idea and creating a new one.

##### Takeaway

Based on positive tests both internally and with customers, we decided to give this direction a try despite the added complexity.



### Iterative Design & Development

#### Functional Prototype

Alongside the concept work, the engineering team starting working on a “walking skeleton” [^4] version of the support agent’s experience. It included only the functionality necessary for the support agent to successfully log their customer’s feedback, and gave us the basis to start testing our assumptions as quickly as possible, and highlight any risk areas.

[^4]: (Define walking skeleton…)

![Functional Prototype – Annotated Interactions](functional-prototype-annotations@2x.png)

*Annotated wireframes for functional prototype*



![Functional Prototype](functional-prototype@2x.png)

*Caption…*

![Functional Prototype – Validation](functional-prototype-validation@2x.png)

*Validation scenarios for functional prototype*



#### Interaction and Visual Design Iterations

While engineering team was building the functional prototype, I began working on iterations for capturing feedback from within existing websites.

1. Available on any website - settled on a “sidebar” experience.
2. Autofill as much data as possible:
   1. Email
   2. Source URL
   3. Feedback

![flowchart](flowchart.png)

![Feedback form visual design](mockup-form-states@2x.png)

#### 

![User Picker interaction design mockups](mockup-user-picker@2x.png)



#### Navigation

![Navigation Mockups](mockup-navigation@2x.png)

![Navigation Animation](menu-animation.gif)





### ~~MVP~~ MMP

Minimum Marketable Product



Needed to not only allow any employee at a company to capture customer feedback, but to also create value for our customers with this data.

#### Top Ideas

![Ranked Ideas Chart](idea-rank-chart@2x.png)

![Top Ideas - First Pass](top-ideas-v1@2x.png)

![Top Ideas - Second Pass](top-ideas-v2@2x.png)







#### User Management

…



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


## Appendix

*For each customer call, I’d summarize learnings and create ideas in UserVoice but, just like the problems our customers expressing, I wasn’t able to easily capture quotes and feedback from those calls in UserVoice in a way that would make it easy to attribute that feedback to the customer.*

*Internally, we were also running into our own issue for how to prioritize our product initiatives. When the leadership team would get together to discuss the top product improvements each team wanted, it was difficult to determine what was biased by recency. Sales would say they were losing deals because of “X”, and Support would say the biggest problem customers had was “Y”, but none of these could be backed up by the feedback we had in our system that customers had submitted directly.*


- [ ] Timeline, year

### Materials list
1. LucidChart - User Story Mapping [1] & User flows
2. Sketch - Wireframes & Mockups
3. InVision - Internal Feedback & Prototyping
4. Principle for Mac - Prototyping & Animation

### Footnotes
