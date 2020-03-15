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
  - Accessibility
---

In this article: 

[Accessibility](#heading-accessibility)
[JAMStack](#heading-jamstack) 
[Progressive Enhancement](#heading-progressive-enhancement) 
[Email Subscription Service](#heading-email-subscription-service)

Now that I have the basic website up and running and I am ready to start posting regular articles, I thought it was time to add a subscription option to my site. The aim here is to not rely on LinkedIn and Twitter to connect to my audiences in the future. These are really valuable platforms, particularly LinkedIn for me, however, my preference is to connect directly with people who are interested in the content I am creating.
<img class="width-half" src="/images/flexion-email.svg" alt="flexion letter in envelope">


There are many options out there for adding forms to websites, but I wanted to ensure i am adhering the following:

* JAMStack principles
* loosely coupled architecture
* Avoid external dependencies where possible.
* progressive enhancement
* accessibility core

## Accessibility

So is Accessibility a strange place to start? Absolutely not! If you want your site to be accessible, starting here will make your decisions much easier. If you have accessibility as one of your core principles from the start, simple decisions now avoid inaccessibility issues later on. 

Lets take a quick example. what if you were building a retail store, and only designed the store for people who were able to walk. You may utilise steps, and your store layout may prevent people who are in wheelchairs from navigating the store easily. What if instead, you designed store with wheelchair access in mind. You avoided steps, and you utilised ramps where required.

Now, your store is a much better experience for people who cannot walk, and also those caring for people who cannot walk. If you think this is not you, think again. We are all born unable to walk, and for the first few years we are pushed around in prams, which are really just small wheelchairs.

There are many great resources on the web on the topic of accessibility on the web. [A11y Project](https://a11yproject.com/) is an amazing resource, and if you are into podcasts[a11yrules](https://a11yrules.com) is a great listen. 

One of the key takeaways for me was to start with [semantic markup](https://en.wikipedia.org/wiki/Semantic_HTML), which basically means, use standard HTML elements, like FORM and INPUT and BUTTON, rather than DIV and SPAN.

I am still new to this, but I will eventually start to test my site with a screen reader, to get a better understanding of how vision impaired people experience the web.

## JAMStack

As flexion.tech is already confirming to JAMStack principles, and I am hosting it on Netlify, the company that coined the term JAMStack, I was able to find a pretty simple solution for getting my semantic HTML processed  Luckily for me, Netlify comes with a pretty handy solution here. By adding a few attributes to the HTML markup, I was able to get a form up and running pretty easily. I did experience quite a few issues here on my site though, when working  For a great article on getting things setup, head over to CSS Tricks and read [this article by Matthew Strom.](https://css-tricks.com/using-netlify-forms-and-netlify-functions-to-build-an-email-sign-up-widget/)

### No localhost support

The forms do not work when developing locally. I am aware there may be a solution to run [Netlify locally](https://www.netlify.com/products/dev/), but I was not ready to go down this path just yet. An alternative solution I found was to simply deploy a second Netlify site, from a different Github branch of the same repo. I only resorted to this after many efforts to resolve a technical issue I was experiencing with the form after it was submitted. This will become a really valuable tool for testing the site.

## Progressive Enhancement

With the Netlify form processing, which utilises server side processing, is it enables the implementation of  progressive enhancement. I am still learning about this, but basically, what it means is that the form should work in the following situations:

* HTML loaded only (no JavaScript and no CSS). The form should still work, even if it is not that pretty. I am thinking this should also help with accessibility also in some way. 
* HTML + CSS. Form should work, be pretty, and function correctly. This is the case, but when the form is submitted, it redirects to a thank-you page.
* HTML + CSS + JavaScript.. The form is submitted, but rather than redirecting to thank-you page,  the form section is replaced with a thank-you message. 

## Headaches

In developing this way, I ran into a really difficult issue. When JavaScript was enabled, I was getting an error in the browser, even when the form was submitted. My struggles are documented in detail on the Netlify Community page [here.](https://community.netlify.com/t/form-submission-working-but-action-path-is-not-working/9902/11)

I reached out to [Andy Bell](https://twitter.com/hankchizljaw) who thankfully put me in contact with [Dave Beesley](https://twitter.com/davebeesley) who had experienced a similar issue Some changes to the Service-Worker cache settings look to have resolved this issue!  

All looking good now. The only concern I have remaining is a false positive test, which I have not been able to reproduce! Basically, someone subscribed, got the success message, but nothing made it to Netlify Forms. 

## Email Subscription Service

So, with the first half working, the next part was to integrate to an email marketing service. Here, I chose the path of least resistance, and decided to use Zapier, at least for now, to integrate Netlify Form data, with MailChimp.

This was really the easiest part. Zapier is a breeze to setup, and the UI is really intuitive, and quite fun to use. The developers there have managed to build quite a bit of personality into the platform, and most importantly, it just works! 

MailChimp on the other-hand was not really agreeing with me. 

### ConvertKit

![netlify, zapier and convertkit logo](/images/subscriber-list.png)

I recently subscribed to [Dan Abramov 's]([overreacted.io](mailto:dan@overreacted.io)) site, and received a series of emails about JavaScript. What I loved about these emails was, they were just emails. I could read them in the email client, and there was not strange formatting, click bait, or that sort of thing. It felt really personal. Something I really want to emulate with my email marketing.

So, I made the switch... And thanks to the loosely coupled architecture, it was pretty damn simple. Create an ConvertKit account, update my ZAP, and boom, away I went! 

## Next Steps

Now with all that setup, it is time for me to focus on creating new content for the site. I would ideally like to move away from Netlify Forms and Zapier, and build an custom API which takes the form input, and sends it to ConvertKit. The reasoning behind this is I want a better user experience.  As it stands today, if a user subscribes twice, the workflow exactly the same. Ideally, I want to tell the user if they have already subscribed, and give them the option to resend a confirmation email.  But for now, this setup seems to be meet my needs.

Another minor issue, is that the form continues to appear after someone has subscribed. I think they only way to resolve this is by using cookies, and I really think adding more complexity to the website just to hide the subscription form is not worth it. That is why the form is at the bottom of the page. I will see what the user feedback is. If anyone has advice on this, please let me know below in the comments section. 

And of course, please subscribe, if you want to receive content relating to the transport and logistics domain.