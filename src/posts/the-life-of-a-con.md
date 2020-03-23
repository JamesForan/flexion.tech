---
layout: layouts/post.njk
title: The life of a CON
metaTitle: The life of a Con
metaDesc: The lifecycle of a consignment
socialImage: /images/box-con-zoom.png
date: 2020-03-22T13:35:04.376Z
author: James Foran
tags:
  - Consignments
  - transport
  - manifests
---
In our last post, we took a detailed look at [what a transport consignment is](./posts/confused-about-consignments/).  If you are not following this post, best read that one first. We compared a transport consignment to a sales consignment, and went into detail around what makes up a consignment.

<div class="zoom">
      <img class="zoom__img" src="/images/box-con.svg" alt="">
</div>

Now, we are going to take a look at the life of a consignment from creation, to settlement.

## Conception - Draft Consignment Creation

![empty box](/images/open-box.svg)

So where do consignments come from? It is a bit different to the reproductive systems we see in nature, where parents come together to create offspring. In the case of a consignment, we start with the offspring.  In the case of a consignment, the offspring, are our freight items (aka the goods).

Freight items that share certain attributes, can be grouped together into a consignment. Lets review some of the key attributes which must match for items to be grouped together into a consignment:

* Origin/Source - Where are the goods being shipped from. Seems simple, enough, and often it is. But lets take a quick look at 2 use cases, to make this really clear!

  1. Take the example of an online shopping cart. You have purchased 2 different items from a large online retailer, and paid for them in a single transaction. Those items however, are coming from two different source locations. These could be two warehouses, or, even 2 different suppliers. In this case, 2 consignments will be created.
* Destination - The delivery address. Freight items being dispatched from the same origin, but delivered to different locations, each get their own consignment. They will likely be picked up together, but these freight items will be grouped into a [manifest.](https://en.wikipedia.org/wiki/Manifest_(transportation)) We touch on manifests a bit latter in this article. 
* Pickup Date - The date the freight items/goods are actually picked up. This scenario is best highlighted with a few examples:

  * You have purchase 5 items from a speciality online retailer, and one of those items is not available for dispatch today.  the retailer contacts you, and asks if you want to wait until the other goods arrive in their warehouse, before dispatching. 

    1. You decide to wait and get the goods shipped together. This means the goods will all be dispatched together, on a single day. 1 consignment will be created. The goods may all travel in the same freight item (box, carton etc), or make up separate freight items. In this case, a single consignment is created. Good for the retailer, as they only have to pay for a single base charge, but you will have to wait a bit longer for all your items to be delivered.
    2. You want the items that are available delivered immediately. They are dispatched together, and a single consignment is created for those items. A week later, the other items arrive in the warehouse, and they are dispatched. A second consignment is created.
  * I have starting to see some complex examples, where a distribution centre is delivery items to stores, multiple times a day. In this case, the shipper wants to group freight items by pickup date, because this reduces their costs, ie, only a single base charge is applied for two different pickup activities. This can be at the expense of accurate tracking though. Make sure you are across the commercial agreements between the shipper and transport providers.
* Service Type - Different service types will attract different charges. A single consignment can have only **one** service type. Therefore, if some goods have an express service, and others are standard, but they share all other attributes, it may still cost less to ship these on separate consignments (think *air*, vs *road*).  However, in some cases, grouping all the goods on a single express consignment may be cheaper.
* Transport Provider - In the previous example, of air vs road, the shipper may have different agreements in place with different transport providers, depending on the service selected. When the transport provider is set, depends on who is making the decision on which transport provider to use. Delaying the assignment of a transport provider can cause operational issues in the warehouse, but it is possible.

So you may be wondering, *do I even need a draft consignment?* My favourite answer to these types of question is, **it depends**! You may need a draft consignment when:

* There are multiple carriers and services being utilised each day.
* You have orders trickling in throughout the day, for the same origin destination pair.
* You allow customers to make changes to their orders right up until the transport provider picks up the freight.

### Use case🔎Car Parts Warehouse

Let me illustrate with an example. A car parts warehouse (CPW) offers two services to customers. Their customers include mechanical repair shops. They allow the repair shops to order goods as they need them.  They also offer 3 delivery services: Next day afternoon. Next day before 9am, and same day.  The order cut-off for same day is 2pm. 

1. A mechanic is placing orders throughout the day. As they need parts, they go to the CPW website and add items to their order as needed. The service selected is next day by 9am.
2. The mechanic needs to place an urgent order, for a same day delivery for a single customer. they place the order for urgent parts @1:45pm, and agree to pay the premium price. They also decide to get all the parts delivered same day, as this will save them money for the extra delivery.

## Naming ceremony - Making things official(ish)

> two boxes, one closed, another slightly open, both with labels.

We now have a draft consignment, we have a  box containing the goods and we want to close the box. At this point, we have to label the box, so we know where to send it to. What do we need to do to allow this to happen?

>🏷Label it! If we close the box, with the picking list inside, without first putting a label on the box, things might get a little confusing when the driver comes to pickup the freight!

To generate a label, we first need to know who the Transport Provider is. Consignment Numbers are generally specific to a carrier, and each carrier will have a specific label layout. These labels allow goods to be automatically **and** manually sorted, and of course delivered.  I could write all day about consignment numbers.... but I wont go down that 🐰🕳 today.

So, we have now stuck a label on a box! Our consignment is ready to be picked up. The label will tell us:

* Destination
* Service type
* Consignment Number & bar-code (1D and/or 2D)
* Item Number & bar-code (1D and/or 2D)
* Optional:
  * delivery instructions
  * 🧨Dangerous Goods (DG) information.

At this point, you are still able to print new labels as you need, and create new freight items (boxes etc) to be added to the consignment, as long as they align to the rules we discussed above.

*Note, for* pre-paid consignments such as satchels, this is generally not possible. 

### Use Case🔎Car Parts Warehouse

In our example, we would have to re-label the freight items, if they had already been labelled previously. At this point, as the transport provider has not picked up the goods, Car Parts Warehouse will not be charged at all by the original carrier. 

## Tying the knot - Goods pickup

![A knot in a rope](/images/knot.svg)

The Transport provider has arrived, and is ready to pick up the freight items. Transport companies like to know what you are transporting, so they can send the appropriate vehicle. In our example, we have been talking about a single consignment, which is made up of a few boxes, or freight items.

But, in reality, for many businesses, a single pickup with be for multiple consignments, all going to different destination locations.  While the consignment is an critical for the final delivery of the freight, at the time of pickup, a manifest is required.

### Manifest

![boxes on hand trolley](/images/trolley.svg)

A manifest is a list of all freight items on a vehicle.  For each pickup a vehicle does, a manifest is required for all the freight being loaded onto the vehicle. Note, if Dangerous Goods are being loaded onto the vehicle, a separate manifest is required, which includes all the required hazardous goods information. 

In most cases, a manifest will be all the freight items, that are loaded onto a vehicle. Ideally, each freight item will be scanned by the driver, to confirm the pickup, though this is not always possible. 

It is critical that the Manifest accurately reflects all the freight items that are being loaded onto the vehicle. These documents may be used by the authorities when a vehicle is intercepted to validate the freight on board. It is also used as a record that the transport company has picked up the freight. 

![A timer, target and check list](/images/timer-target.svg)

This is also a critical milestone, as this is generally when the timer starts for the delivery of the freight. The consignment pickup date will be used to measure the transport providers performance, and set estimated time of delivery (ETD).

## In Transit 🚚

The mysterious *"in transit".* What really happens between when the goods are picked up, and when the arrive at their destination? Traditionally, this really has been a mystery, not just to shippers, but to transport companies also. The only mechanism we have today for knowing where freight is, is a scan of a bar-code, with a corresponding location. This will occur at automated sort, and sometimes freight will be scanned by the driver performing the final delivery. But what if the transport company that picked up the goods, is not the company that delivers the goods?

We are starting to see more and more transport companies provide more accurate *"in transit"* events, and improve visibility. We are now even starting to see real time tracking, via GPS, where the vehicle is tracked, and we know the freight is on a specific vehicle. This is pretty easy for point-to-point deliveries, however, when moving freight through complex networks, and utilising on-forwarders, and sub-contractors, things get pretty difficult.

### Dimension and weight
Accurate dimension and weight information are critical for transport companies. Shippers may not provide accurate information, if they provide any at all. More often than not the rates are based on weight and dimensions of the freight items. Transport companies will either have automated processes for capturing this information. This information will be updated against the consignment, to ensure the correct rates are applied.

## Delivery us from evil 😈

For the transport company, this is by far the most important step, for the simple reason, that this is where they collect the proof that they have delivered the freight, and at which point they can accurately charge the customer.  This proof comes in the form of a *"proof of delivery"* document, or, a **POD**. 

This POD should be recorded for each freight item, not simply just the consignment. There are many circumstances where freight items that belong to a single consignment will be delivered on different days. The more complex the transport networks, the more likely this is to happen. 

## Payment 💰 & Settlement
This is where everything has to come together to ensure customers receive an accurate invoice, and the transport providers are appropriately compensated for the services they have provided. Providing POD is accurate, and there are no disputes around the dimension and weight, the shipper will pay for the transport services provided. 

In other cases, payment is made up-front, or, freight may be pre-paid, in the case of satchels for example. In these cases, updates to dimension and weight information can result in additional charges being applied.  

## Take Away 🥡
As you can see, the humble consignment is quite a complex beast. 

Having the right systems and processes in place to support all the use cases that you will experience when transporting freight is critical, and with today's digitisation, this is becoming more important than ever.

Are you struggling with consignments too? Let us know in the comments below! We would love to help! If you think  


