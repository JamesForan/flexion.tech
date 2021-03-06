---
layout: layouts/post.njk
title: Confused about Consignments?
metaTitle: Confused about Consignments?
metaDesc: Consignments in the transport domain
socialImage: images/flexion-box.svg
date: 2020-03-06T02:54:37.446Z
author: James Foran
tags:
  - Consignments
  - Transport
  - TMS
---


Consignments are a critical part of the transport industry. But over the years I have found that they have been the source of much confusion also, often on my part! In this post, I will detail my understanding of consignment, and some of the challenges that they can bring when doing a TMS.

In this article:

- [What is a Consignment](#heading-what-is-a-consignment)
- [Why do we need Consignments](#heading-why-do-we-need-consignments)
- [Structure of a consignment](#heading-structure-of-a-consignment)
- [Next up](#heading-next-up)


# What is a Consignment
It might seem a simple question. Before I got into logistics, consignment to me meant selling goods "on Consignment", which basically meant that goods could be placed on sale in a store, without the store having to ever take ownership of the goods. Once the goods have been sold, then the retailer pays the seller for the goods. 

Ths same term also applies to the transportation of goods via any mode (road/rail/sea or air). The company responsible for the transport of the goods does not have to purchase the goods in order to transport them. Similar to when goods are "on Consignment", they are acting as an intermediate party between the seller and the buyer.

Lets say you make hand knitted blankets, and you sell them at a local retailer. The retailer they display your beautify blankets in the window. When the retailer sells some of your blankets, they pay you for the sold items, and they may order new ones from you. 

Now you have a new retailer wanting to stock your goods on consignment. But they are in Sydney, while you live in Adelaide (about a 14 hour drive!). You now must engage with a transport company to take the goods from Adelaide to Sydney. You now need to consign the goods to the transport company, who will transport the goods to the Sydney retailer.

## Consignor
The Consignor is the person who consigns the goods, or, sends the goods. They may also be called the shipper. In the above example of the knitted blankets, the maker is the consignor in both cases. 

## Consignee
That leaves us with the consignee. So who in the above example is the consignee? For the first example, where we are dealing with a sales consignment , the retailer is the consignee. However, in when talking about a transport consignment, the receiver of the items is the consignee. Now as it happens, in the above example, this is also the retailer. But note, it is not the transport company. 

To further illustrate, lets take another example, where you have purchased something from the [#buyfromthebush](https://www.buyfromthebush.com.au/artandcollectables) site, to support communities devastated by bush fires. When you purchase the goods, the consignor is the seller of the goods, and the consignee is you. The importance of this will become apparent when we look at the lifecycle of a consignment later on.

## Also Known As
A Consignment may not actually be called a consignment, for various reasons. It may often be referred to as a shipment, or job. 

## Similar Too
I have also been on projects where it is called a Connote, which is short for Consignment Note. Note, this is not a consignment, in the truest sense of the word. A consignment note is actually a document which travels with the goods being shipped,and provides proof that the carrier has received the goods. In many cases today, this is actually a sticky label that is attached to the goods being shipped. 

A consignment is similar to a way-bill, or a house bill. While these are very similar to a consignment, they contain additional information including terms and conditions, and potentially route information also. A [bill of lading](https://en.wikipedia.org/wiki/Bill_of_lading) is another similar term, however, this is a legal document confirming the receipt of goods by the carrier. International trade is a topic for another post though.

# Why do we need Consignments

Before getting into the structure of a consignment, and the life cycle of a consignment, i think it is best to understand what a consignment is used for in the transport industry. This will help with understanding why a consignment is different to a shipment, transport request or item (we will cover all of these soon!).

A transport consignment is required to store relevant information against it, to ensure that the transport provide is able to accurately calculate rates, and provide evidence to the consignor, that the goods have been delivered to the consignee. 

# Structure of a consignment

For a consignment to be useful, it must contain information that ensures we can:
* calculates rates - Quote and Final!
* Details of the goods being shipped
* Details that will enable the transport provider to pick-up, and deliver the goods.

Each consignment, must each of the following:
* **Consignor**
* **Consignee**
* **Origin** - Where are the goods being picked up?
* **Destination** - Where are the goods being delivered?
* **goods** - Details of the things being delivered. 
* **Transport Provider** - Who is going to be responsible for the delivery of the goods to the destination.
* **Consignment Number**
   
Additional information that may be provided:
* **Service Type**. For example,  express, or standard. This will impact the delivery date, and also the cost.

* **Mode of Transport** - Is a specific mode being selected? For example, rail or road. Again, this will impact the delivery date, and the costs.
* **Pick-up date and time** - When will the goods be available for pick-up at the destination. WE don't want the transport provider arriving at the pick-up location before the goods are ready for despatch. 
* **Delivery date and time** - When do the goods need to be at the destination. Different delivery dates may drive the selection of service, and transport mode.
* **Pick-up/Delivery Instructions** used to help the driver complete their task. May be as simple as an Authority to leave, to a mud-map for a construction site, or mine site. 
* **Hazardous information** - Can effect the cost, selection of service, and also what other goods can travel with this consignment. 

All this information is used by the transport provider, to enable them to provide a service that is efficient and safe.

# Next up

In our next article, we will look at the life cycle of a consignment, and take a look at some more complex use cases, which might impact how you implement consignments. Things vary greatly depending who you are: shipper, transport provider, operating as a 2PL, 3PL, 4PL or a combination of them all!  

If you have anything you think should be added to this article, please comment below, and if you want to get our latest content delivered via email, please subscribe to our [newsletter below](./#subscribe).






