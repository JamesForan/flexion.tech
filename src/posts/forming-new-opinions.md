---
layout: layouts/post.njk
title: Forming New Opinions
metaTitle: Forming New Opinions
metaDesc: 'HTML Forms, progressive enhancement'
socialImage: images/flexion-email.svg
date: 2020-03-14T10:41:28.190Z
author: James Foran
tags:
  - HTML-Forms
  - Progressive-Enhancement
  - Email-List
---
Now that I have the basic website up and running, and I am ready to start posting regular articles, I thought it was time to add a subscription option to my site. The aim here is to not rely on LinkedIn and Twitter to connect to my audiences in the future. These are really valuable platforms, particularly LinkedIn for me, however, my preference is to connect directly with people who are interested in the content I am creating.

There are many options out there for adding forms to websites, but I wanted to ensure I am keeping this in the JAMStack, and also ensuring a loosely coupled architecture.

So where to start? I have been finding out a bit more about accessibility on the web, again thanks to the an amazing podcast  [a11yrules](https://a11yrules.com) and the [A11y Project.](https://a11yproject.com/)

One of the key takeaways for me was to start with [semantic markup](https://en.wikipedia.org/wiki/Semantic_HTML), and also ensure there are no external dependencies being added to this website which might result in performance and/or security issues.

## Netlify Forms

Luckily for me, Netlify comes with a pretty handy solution here. By adding a few attributes to the HTML markup, I was able to get a form up and running pretty easily. There were a few issues here tough.  For a great article on getting things setup, head over to CSS Tricks and read [this article by Matthew Strom.](https://css-tricks.com/using-netlify-forms-and-netlify-functions-to-build-an-email-sign-up-widget/)

### No localhost support

The forms do not work when developing locally. I am aware there may be a solution to run Netlify locally, but I was not ready to go down this path just yet. An alternative solution I found was to simply deploy a second Netlify site, from a different Github branch. I only resorted to this after many efforts to resolve a technical issue I was experiencing with the form after it was submitted. More about that later.

## Progressive Enhancement

One of the other benefits of taking this approach is that I have been able to apply progressive enhancement principles to the form build. I am still learning about this, but basically, what it means is that the form should work in the following situations:

* HTML loaded only (no JavaScript and no CSS). The form should still work, even if it is not that pretty. I am thinking this should also help with screen readers in some way.
* HTML + CSS. Form should work, be pretty, and function correctly. This is the case, but when the form is submitted, it redirects to a thank-you page.
* HTML + CSS + JavaScript.. The form is submitted, but rather than redirecting to thank-you page,  the form section is replaced with a thank-you message.

## Headaches

In developing this way, I ran into a really difficult issue. When JavaScript was enabled, I was getting an error in the browser, even when the form was submitted. My struggles are documented in the Netlify Community page [here.](https://community.netlify.com/t/form-submission-working-but-action-path-is-not-working/9902/11)

I reached out to [Andy Bell](https://twitter.com/hankchizljaw) who thankfully put me in contact with [Dave Beesley](https://twitter.com/davebeesley) who had experienced a similar issue with they Hylia template site. Some changes to the ServiceWorker cache settings have seen this issue resolve itself. 

All looking good now. The only concern I have remaining is a false positive test, which I have not been able to reproduce! Basically, someone subscribed, got the success message, but nothing made it to Netlify Forms. 

# Email Marketing Service

So, with the first half working, the next part was to integrate to an email marketing service. Here, I chose the path of least resistance, and decided to use Zapier, at least for now, to integrate Netlify Form data, with MailChimp, at least initially.

This was really the easiest part. Zapier is a breeze to setup, and the UI is really intuitive, and quite fun to use. The developers there have managed to build in quite a bit of personality into the platform, and most importantly, it just works! 

MailChimp on the otherhand was not really agreeing with me. 

## ConvertKit

![netlify, zapier and convertkit logo](/images/subscriber-list.png)

I recently subscribed to [Dan Abramov 's]([overreacted.io](mailto:dan@overreacted.io)) site, and received a series of emails about JavaScript. What I loved about these emails was, they were just emails. I could read them in the email client, and there was not strange formatting, click bait, or that sort of thing. It felt really personal. Something I really want to emulate with my email marketing.

So, I made the switch... And thanks to the loosely coupled architecture, it was pretty damn simple. Create an ConvertKit account, update my ZAP, and boom, away I went! 

# Next Steps

Now with all that setup, it is time for me to focus on creating new content for the site. I would ideally like to move away from Netlify Forms and Zapier, and build an custom API which takes the form input, and sends it to ConvertKit. The reasoning behind this is I want a better user experience.  As it stands today, if a user subscribes twice, the workflow exactly the same. Ideally, I want to tell the user if they have already subscribed, and give them the option to resend a confirmation email.  But for now, this setup seems to be meet my needs.

Another minor issue, is that the form continues to appear after someone has subscribed. I think they only way to resolve this is by using cookies, and I am not really wanting to do that just yet. I will see what the user feedback is. If anyone has advice on this, please let me know below in the comments section. 

And of course, please subscribe.