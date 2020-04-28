---
layout: layouts/post.njk
title: Postal vs Parcel
metaTitle: Postal vs Parcel
socialImage: images/flexion-box.svg
date: 2020-04-22T11:01:29.145Z
author: James Foran
tags:
  - parcel
  - post
  - labels
  - ""
---
If your household is anything like mine, you have seen a huge increase in the number of parcels that have been delivered to your house in the last month. With seemingly the entire world in some form of lockdown, online shopping is one of the only "normal" things that we have left in our lives. But how do all these items make it to your house? It appears to be quite different from the postal network that delivers our 🐌mail. You cannot simply write an address on a box, and send it!

# The Post

<img class="width-half " src="/images/flexion-email.svg" alt="Package at front door" loading="lazy">

Before we go on, have you ever wondered why it is called POST? Apparently, back in the day, the mail used to be nailed to a POST in the center of town and eventually, the mail-bag was nailed to a post, and people used to go a "check the post". More details over at [Wikipedia](https://en.wikipedia.org/wiki/Mail#History). There were apparently posts between towns, and mail was transferred between POSTS, forming the first postal network. Things have changed a little now. Every single house now has its every own post(box), and the postal network extends across the entire globe! Pretty amazing really. You can even send a letter to the north pole!

To send a letter, all you have to do is write an address, preferably neatly, and ideally, at least in Australia, you will write the postcode in the 4 small boxes provided. Next, you affix a stamp, which is how you pay for the service, and drop the letter in a post box.

![blank envelope](/images/blank_envelope.png)

From there, the mail goes to a local sort facility, starting its multi-leg journey to its recipient. Automatic sortation systems can process over 50,000 letters an hour. For letters staying in-country, sortation is done based on the postcode (aka zip code). The systems that read the address have a pretty tough job. But, they do it quickly, and print a postal barcode on the envelope or postcard, which is then used to sort the mail automatically through the rest of the network.

![post-card barcode](/images/postcard.png)

Here is a postcard my son received recently. You can see the 4 state barcode faintly on the letter.

![letter 4 state barcode](/images/postal_barcode.png)

Another example of a 4 state barcode on a letter. These are printed on the letter by the sender, and are almost always BILLS! For more info on these, read [this article from Australia Post](https://auspost.com.au/content/dam/auspost_corp/media/documents/barcoding-fact-sheet-oct14.pdf).

# Parcel

Today, postal networks are now capable of handling small, non-flat parcels too. But for this discussion, we are going to focus on parcels that cannot go via regular post. So how do parcel networks vary from postal networks? The result is much the same. The items being delivered ends up at your address! Simple. But, several things make it more complex. Letters are generally flat and are a fairly standard size. There is only 1 place you can write an address too. a Parcel, on the other hand, will have 6 sides and will vary in shape, dimensions and weight! You can stick a freight label anywhere you want too.
Parcel networks have far fewer nodes. While most towns will have a post office, each major city may have only 1 parcel sortation facility per network.

There is no single parcel network. While national postal companies offer this service, they are not alone. Even within single logistics organisations, multiple parcel networks may, and do exist.
But to send a parcel, you do not write the address on the box. you have to stick a label on the box, that contains a whole lot more information than just an address, or so it seems at least!

# Freight Label

![Australia Post Label](/images/parcel_label2.png)

So the Freight label is quite a strange one... So why not just write the address on the box?

So what is all this additional information?

\- Item Barcode: Each [Consignment](https://flexion.tech/posts/the-life-of-a-con/) can be made up of multiple freight items. Each freight item must be uniquely identified so it can be tracked through the network. 

\- MEL  What is this for? It actually stands for Melbourne. This is a visual aid that will help this parcel get onto the correct linehaul truck, should automated sortation not be available.

\- Delivery Instructions: 
This is something unique to the parcel networks. We dont have delivery instructions for letters, except for registered post. A parcel can contain valuable items though, and having the latest iPhone delivered to your house, and left on the front door step is not idea. It can also not really be put in the letter box. These delivery instructions help drivers complete the delivery. 

\- Authority to Leave
This is set per delivery item, and is either set by the sender, or the receiver.

\- Alternative Delivery Point
If a delivery is not made, then the package may be sent to an alternative location. For Australia Post, this would be the local post office, or sortation facility. For other networks, this could be the News Agent, a pharmacy, or anywhere really that is part of the specific network. 

As we mentioned before, there is no single network, meaning there is also no single location where all parcels addressed to you go, before the last leg of the journey. Each parcel carrier will have their own set of hubs or nodes. Unlike the postal network, where the last leg will always start from the local post office, the last leg for parcels can originate from anywhere really.

![generic freight label](/images/parcel_label1.png)

Another consideration is that each network has a specific automated sortation system, if they have one at all. It is more complicated than mail not just due to 6 sides, but also the way logistics companies charge for these services.

## Dimensional Weight

In the largest networks nodes, the systems exist to automatically scan labels, and also weight and measure the freight items as they are sorted. Dimensional weight (DIM Weight), and is a critical part of revenue collection, as the dimensions and weight impact the cost to the customer. I will write a separate article dedicated to DIM weight! Also, in many cases, the freight charges are not pre-paid. Logistics companies will pickup freight prior invoicing a customer. The actual weight and dimensions are crucial inputs into the charge calculation.

## Scanning a Freight Label

![Scanning a freight label via mobile device](/images/scan_label.png)

You can do this at home, with your smart-phone! Yes, that's right. It really is ~~hours~~ minutes of fun. Try it for yourself. Here's how.

1. Open Google Chrome, or Microsoft Edge web browser ( I use an iPhone)
2. Select a New TAB.
3. Select the 📷 camera icon. This should open your camera within the app, providing you have given the right permissions.
4. There should be options at the bottom to select barcode. select this.
5. Point the camera at a freight barcode. Most 2 dimensional, or 1 dimensional barcodes will work.
6. The data from the label will then be entered into a google search.

The information returned will vary depending on the barcode type. In most cases, it will just be a string of numbers, however, with some QR codes, you should get your actual address returned directly from the scan!

## Label Formats

The data contained within the barcodes varies greatly. Often that data is just a reference, which on its own means nothing, and other times it will be a physical address! 

Take a look at these two freight labels:

![label comparison](/images/label_comp.png)

Both are from Australia Post. The one on the left is Star Track, and the one on the right is for the postal business.

These two formats are vastly different. I cannot work out how to read the StarTrack 2 dimensional code. If someone can give me more info on this, I would appreciate it! Please add your comments below.

So, labels even within a single organisation are not standard. I am sure Australia Post has different labels for international freight also. By why is there no standard?

The answer in this case is legacy systems. When Australia Post acquired StarTrack back in 2003, they also acquired all their technology, and label formats. These two divisions still primarily operate as separate networks.

One of the main reasons that these networks are not interoperable is label formats and scanning technology.

## Standard Labels

So surely the answer is standard Label formats. There is an organisation GS1 have done exactly that. They have developed standard label formats, which companies can. Unfortunately, these standards are open to interpretation. For example, both Australia Post and Toll have implemented GS1 compliant labels, however, they are using different 2-dimensional barcode formats.

## Why?

So why is this important? well, as our dependency on parcel networks continues to grow, our economy will become more and more reliant in reliable networks. These networks are under huge strain at the moment do parcel volumes being 4-5 times the average for this time of year due to COVID-19.

Earlier this year, we also saw the Toll parcel networks unable to operate automated systems, or even print labels, due to a systems outage that lasted weeks.

A nationwide standard label format would give more choice to the customer. It would also allow networks to flex, and provide real interoperability between parcel networks. We already see this interoperability working for international transport.

What does the future of parcel deliveries look like to you or your company? What are the major challenges you are facing, and do you think a standard freight label could help?