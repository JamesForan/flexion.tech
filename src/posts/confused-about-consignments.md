---
layout: layouts/post.njk
title: Confused about Consignments?
metaTitle: Confused about Consignments?
metaDesc: Consignments in the transport domain
socialImage: /images/flexion-box.svg
date: 2020-03-16T23:34:00.000Z
author: James Foran
tags:
  - Consignments
  - Transport
  - data-model
---
Consignments are a critical part of the transport industry. But over the years I have found that they have been the source of much confusion, often on my part! In this post, I will detail my understanding of consignments, and why they are critical to the logistics industry. 

In this article:

* [What is a Consignment](#heading-what-is-a-consignment)
* [Why do we need Consignments](#heading-why-do-we-need-consignments)
* [Structure of a consignment](#heading-structure-of-a-consignment)
* [Up Next](#heading-up-next)

## What is a Consignment

<img class="width-third pad-top-800" src="/images/flexion-box.svg" alt="Flexion delivery box" loading="lazy">

It might seem a simple question. Before I got into logistics, consignment to me meant selling goods "on Consignment", which basically meant that goods could be placed on sale in a store, without the store having to ever take ownership of the goods. Once the goods have been sold, then the retailer pays the seller for the goods. 

The term consignment is also used when transportation of goods using a third party. The company responsible for the transport of the goods does not have to purchase the goods in order to transport them. Similar to when goods are "on Consignment", they are acting as an intermediate party between the seller and the buyer.

### Confusing use case

Lets say you make hand knitted blankets, and you sell them at a local retailer. The retailer they display your beautify blankets in the window. When the retailer sells some of your blankets, they pay you for the sold items, and they may order new stock from you. 

Now you have a new retailer wanting to stock your goods on consignment. But they are in Sydney, while you live in Adelaide (about a 14 hour drive!). You now need to engage with a transport company to transport the goods to Sydney. You now need to consign the goods to the transport company, who will transport the goods to the Sydney retailer.

### Consignor

The Consignor is the person who consigns the goods, or, sends the goods. They may also be called the shipper. In the above example of the knitted blankets, the maker is the consignor in both cases. 

### Consignee

That leaves us with the consignee. So who in the above example is the consignee? For the first example, where we are dealing with a sales consignment , the retailer is the consignee. However, when talking about a transport consignment, the receiver of the goods is the consignee. Now as it happens, in the above example, this is also the retailer and not the transport company. 

To further illustrate, lets take another example, where you have purchased something from the [\#buyfromthebush](https://www.buyfromthebush.com.au/artandcollectables) site, to support communities devastated by bush fires. When you purchase the goods, the consignor is the seller of the goods, and the consignee is you, the customer. The importance of this will become apparent when we look at the lifecycle of a consignment later on.

### Also Known As

A Consignment may not actually be referred to as a consignment, for various reasons. It may often be referred to as a shipment, or job, depending on the transport company you are dealing with. When it boils down to it though, they are pretty much all the same thing.

### Similar Too

I have also been on projects where it is called a Connote, which is short for Consignment Note. Note, this is not a consignment. A consignment note is actually a document which travels with the goods being shipped,and provides proof that the carrier has received the goods.

A consignment is also similar to a way-bill, or a house bill. While these are very similar to a consignment, they contain additional information including terms and conditions, and potentially route information also.

A [bill of lading](https://en.wikipedia.org/wiki/Bill_of_lading) is another similar term, however, this is a legal document confirming the receipt of goods by the carrier, particularly in global logistics. This is a topic for another post though.

## Why do we need Consignments

Before getting into the structure of a consignment, and the life cycle of a consignment, I think it is best to understand what a consignment is used for in the transport industry. This will help with understanding why a consignment is different to a shipment, transport request or item (both will be covered in future articles).

![parcel goes from origin to destination](/images/origin-dest.svg)

A transport consignment is required to store relevant information against it, to ensure that the transport provide is able to accurately calculate rates, and provide evidence to the consignor, that the goods have been delivered to the consignee. 

## Structure of a Consignment

For a consignment to be useful, it must contain information that ensures we can:

* calculates rates - Quote and Final
* Details of the goods being shipped
* Details that will enable the transport provider to pick-up, and deliver the goods.
* Enable financial settlement

### Base Information

![Consignment and related information](/images/consignment-structure.svg)

Each consignment, must have one of each of the following, with the exception of goods.

* **Consignor** - The shipper.
* **Consignee** - The receiver.
* **Origin** - Where are the goods being picked up? May or may not be the consignor.
* **Destination** - Where are the goods being delivered? May or may not be the consignee. 
* **Goods** - Details of the things being delivered. 1 or more of these will generally be attached or lined to a consignment. Moving forward, we will refer to this as **freight item**, to try to avoid confusion. *Note*, this does not talk about the products, rather, what the products are being carried in or on. In other words, what is being physically handled by the transport operators. Each freight item must be individually labelled.
* **Transport Provider** - The organisation responsible for the pickup and delivery of the freight items.  The transport provider may utilise other 3rd party providers for part or all of the tasks associated with the movement of the freight items. 
* **Consignment Number** - A number used to help identify the consignment, and the associated freight items. Often, these numbers are specific to the transport provider, but in some cases, large shippers will insist on using their own identifiers.
* **Pickup date** - When *were* the freight items actually picked up. All of the freight items should be picked up on the same day, to form a consignment. This date is used for applying the correct rates and determining billing periods. If freight items are picked up on separate days, then this should result in two consignments.  *Note*, freight items can be delivered on different days, and still be part of the same consignment.

### Additional information

* **Service Type** - For example,  express, or standard. This will impact the transit time, and also the cost of the consignment.
* **Mode of Transport** - Is a specific mode being selected? For example, rail or road. Again, this will impact the delivery date, and the cost.
* **Requested Pick-up date and time** - When will the freight items be available for pick-up at the origin location. Shippers don't want the transport provider arriving at the pick-up location before the goods are ready for dispatch.  
* **Delivery date and time** - When do the freight items need to be delivered to the destination. Different delivery dates may drive the selection of service and/or transport mode.
* **Pick-up/Delivery Instructions** used to help the driver complete their task. May be as simple as an *authority to leave*, to a [mud-map](https://en.wiktionary.org/wiki/mud_map "A rough drawing") for a construction or mine site. 

<img class="width-half right" src="/images/package-front-door.svg" alt="Package at front door" loading="lazy">

* **Hazardous information⚠** - Can effect the cost, selection of service, and also what other freight items can travel with this consignment. 

All this information is used by the transport provider, to enable them to provide a service that is efficient and safe.

## Up Next

In our next article, we will look at the life cycle of a consignment, and some more complex use cases, which might impact how you need to work with consignments. Things vary greatly depending who you are. A shipper will have different requirements to a transport provider, and transport providers may be operating as a 2PL, 3PL, 4PL or a combination of all, which makes for some really challenging scenarios.

If you have anything you think should be added to, or corrected in this article, please comment below, and if you want to get our latest content delivered via email, please subscribe to our [newsletter below](./#subscribe).