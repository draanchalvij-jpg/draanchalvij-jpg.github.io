---
title: "How the internet works: what happens when you click a link"
date: 2026-11-13
tags: [computer networks, internet basics, IoT, students]
description: "A beginner-friendly, step-by-step guide to how the internet works: DNS, IP addresses, packets, TCP, HTTPS and routers, with a hands-on activity using ping and traceroute."
---
You click a link, and a page appears. It usually takes less than a second, so it feels like magic. It is not magic. It is a chain of small, well-defined steps, and each one is something you can learn and even try yourself.

This post is a beginner-friendly guide to **how the internet works**. It is simplified on purpose, so that a first-year student, or anyone curious, can follow it. I am also expanding my own work into computer networks and the Internet of Things (IoT), so think of this as notes shared by a learner who also teaches.

## Step 1: Finding the address (DNS)

Computers do not understand names like `example.com`. They use numbers called **IP addresses**, such as `93.184.216.34` (IPv4) or a longer one in the newer IPv6 format.

Your device first asks a **DNS (Domain Name System)** server to translate the name into a number. DNS is often called the phone book of the internet: you know the name, and it looks up the number. To save time, answers are remembered (cached) for a while, so repeat visits are faster.

## Step 2: Breaking the message into packets

Data does not travel as one big block. It is split into small pieces called **packets**. Each packet carries part of the data plus a label: where it came from, where it is going, and its order.

Why packets? Because many people share the same network at once. Small pieces can take turns, and if one is lost, only that piece needs to be sent again.

## Step 3: Agreeing to talk (TCP)

Before a web page is requested, your device and the server set up a reliable connection using **TCP (Transmission Control Protocol)**. They exchange a short greeting, often called the three-way handshake, to confirm that both sides are ready.

TCP then checks that packets arrive, in the right order, and asks for any missing ones again. Newer web technology, such as HTTP/3, builds a similar reliability on top of a different transport called QUIC, but the idea is the same: make an unreliable network feel dependable.

## Step 4: Making it private (HTTPS)

The small padlock in the browser means the connection uses **HTTPS**, which is HTTP protected by **TLS** encryption. The browser and the server agree on secret keys, so that other people on the network cannot easily read or change the data. This is why you should be careful about typing passwords on sites that do not use HTTPS.

## Step 5: Asking for the page (HTTP)

Now your browser sends an **HTTP request**, which says in effect, "Please send me this page." The server replies with the page's text, styles, images and scripts. The browser puts them together and shows you the result. A single page often needs many requests.

## Step 6: The journey across the world (routers)

Between you and the server sit many **routers**. A router looks at each packet's destination and forwards it to the next router that is closer, hop by hop. No single device knows the whole path, and different packets of the same page may even take different routes.

Much of this travel happens through fibre-optic cables, and most traffic between continents crosses the ocean through undersea cables. The internet is physical as well as digital.

## Where IoT fits in

The Internet of Things is the same story with smaller devices. A smart bulb, a temperature sensor or a fitness band also has an address, also sends data in packets, and also depends on routers. The differences are that these devices are often tiny, run on batteries and send short messages, so they commonly use lightweight protocols (MQTT is a popular one) and wireless links such as Wi-Fi, Bluetooth or Zigbee.

Understanding the web is therefore a good first step towards understanding IoT.

## Try it yourself

You need only a computer and a few minutes.

1. Open a terminal (Command Prompt on Windows).
2. Type `ping example.com` and press Enter. You will see how long each round trip takes, in milliseconds.
3. Type `traceroute example.com` (on Windows, `tracert example.com`). You will see the routers between you and the site, one line per hop.
4. Try a website hosted in another country and compare the results.

Some routers do not reply to these tests, so a few lines may show asterisks. That is normal, not an error.

## Questions to think about

- Why do you think the internet was designed with packets instead of dedicated connections?
- What could go wrong if there were no encryption?
- How might a tiny battery-powered sensor save energy when it communicates?

## Keywords for further reading

how the internet works, computer networks for beginners, DNS, IP address, packets, TCP/IP, HTTP and HTTPS, routers, ping and traceroute, Internet of Things for students.

If you are a student, teacher or professional and want to suggest what I should write about next, write to me at [aanchal.vij04@gmail.com](mailto:aanchal.vij04@gmail.com). You can also read about my [teaching approach](/#teaching).

Aanchal Vij
Assistant Professor, School of Computer Science and Engineering, IILM University, Greater Noida, India
