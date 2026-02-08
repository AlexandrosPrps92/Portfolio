import React, { useState, useEffect } from 'react';
import {
    ArrowUpRight, Mail, Github, Linkedin, Figma,
    Layers, Layout, Smartphone, Code, MoveRight,
    Palette, X, CheckCircle2, Image as ImageIcon, Play,
    ChevronLeft, ChevronRight, Instagram, Menu, ExternalLink,
    FileText
} from 'lucide-react';

// --- DATA ---
const PROJECTS = [
    {
        id: 1,
        title: "Kariera Group",
        category: "Digital Designer",
        type: "Professional",
        year: "2024-2026",
        role: "Digital Designer",
        description: "Spearheaded the modernization of legacy advertising assets and established data-validated creative guidelines.",
        challenge: "The company relied on legacy visual assets that were performing poorly in generic brand awareness campaigns. There was no standardized system for creating new ads, leading to inconsistent branding and unmeasured effectiveness.",
        solution: "I introduced a 'Data-First' creative workflow. Instead of guessing, I executed structured A/B testing across three pillars: Text Hierarchy, Composition, and Aesthetics. I also pioneered in the group's first AI video production tool for B2B and B2C social media, enhancing content quality and minimizing production time to 40% of previous levels.",
        results: [
            "Redesigned all legacy brand creatives and expanded assets for audience segmentation.",
            "Part of the success of Google Case study and best practice for 2025, +155% conversion rates for jobseekers, -49% cost per application (CPA).",
            "Our team won Gold & Silver at Peak Awards 2025: Best Performance in Employment (AI-Driven Lead Gen) & Best Use of Data."
        ],
        tags: ["Figma", "Adobe CC", "Zoho Analytics", "Wordpress", "Heygen","Canva"],
        image: "/images/award_ceremony.jpg",
        color: "from-blue-600 to-cyan-400",
        bentoData: {
            hero: "/images/case_study.jpg",
            metric: "+155%",
            metricLabel: "Increase in Conversions",
            subMetric: "Google Case Study 2025",
            variations: [
                "/images/AI_Sqaure_noAI.jpg",
                "/images/kar_mo.jpg",

                "/images/HKT25.jpg",
                "/images/dashboard.jpg",
                "/images/dashboard2.jpg",
                "/images/kar_mo2.jpg",
                "/images/dashboard3.jpg",
                "/images/generic1.jpg",
                "/images/generic2.jpg",
                "/images/generic3.jpg",
                "/images/skg1.jpg",
                "/images/skg2.jpg",
                "/images/skg3.jpg",
                "/images/square.png",
                "/images/square2.png",
                "/images/kar_mo3.jpg",
                "/images/square3.png",
                "/images/square4.png",

                {
                    id: "v13",
                    title: "LinkedIn Feature",
                    category: "Embedded Post",
                    embed: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7384532942305390592?compact=1" height="100%" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`,
                    className: "md:col-span-1 md:row-span-2"
                },
                {
                    id: "v18_li",
                    title: "LinkedIn Feature",
                    category: "Embedded Post",
                    embed: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7341393050612432896?collapsed=1" height="100%" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`,
                    className: "md:col-span-1 md:row-span-2"
                },
                {
                    id: "v17",
                    title: "LinkedIn Feature",
                    category: "Embedded Post",
                    embed: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7423026631017119744?compact=1" height="100%" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`,
                    className: "md:col-span-1 md:row-span-2"
                },
                {
                    id: "v10_b",
                    title: "LinkedIn Feature",
                    category: "Embedded Post",
                    embed: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7419691159813390337?collapsed=1" height="100%" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`,
                    className: "md:col-span-1 md:row-span-2"
                },
                { type: "header", title: "Social Media banners for Energyjobsearch.com" },
                "/images/EJS_FIG.jpg",
                "/images/ejs_1.jpg",
                "/images/ejs2.jpg",
                "/images/ejs3.jpg",
                "/images/ejs4.jpg",
                "/images/ejs5.jpg",
                "/images/ejs6.jpg",
                "/images/ejs7.jpg",
                "/images/ejs8.jpg",
                "/images/ejs9.jpg",
                "/images/EJS_dashboard_square.jpg",
                "/images/AI_Square_1.jpg",

            ]
        },

        // --- ARTICLES SECTION ---
        // --- ARTICLES SECTION ---
        articles: [
            {
                id: "art1",
                title: "Energyjobsearch.com Blog",
                description: "Introduced the blog for Energyjobsearch.com and took part in the build of the articles visually and navigating experience.",
                url: "https://blog.energyjobsearch.com/",
                domain: "energyjobsearch.com",
                image: "/images/hero_ejs_blog.jpg"
            }
        ],

        videos: [
            {
                id: "v1",
                title: "Energyjobsearch ltd. Ai career coach",
                category: "Generated with HeyGen",
                src: "/videos/Alex__Update your profile__vertical.mp4",
                className: "md:col-span-2 md:row-span-2"
            },
            {
                id: "v2",
                title: "Animated creative for Product feature launch",
                category: "Meta and Google ads",
                src: "/videos/1920x1080_idea1.mp4",
                className: "md:col-span-1 md:row-span-1"
            },
            {
                id: "v3",
                title: "Energyjobsearch ltd. Ai career coach",
                category: "Instagram,TikTok",
                src: "/videos/Alex__For you page__Vertical.mp4",
                className: "md:col-span-2 md:row-span-1"
            },
            {
                id: "v4",
                title: "Creative assets for new product launches and special offers",
                category: "Kinetic typography for Meta and Google ads",
                src: "/videos/1080x1080_video_generic.mp4",
                className: "md:col-span-1 md:row-span-1"
            },
            {
                id: "v5",
                title: "Creative assets for new product launches and special offers",
                category: "Kinetic typography for Meta and Google ads",
                src: "/videos/1080x1080_video_premium.mp4",
                className: "md:col-span-1 md:row-span-1"
            },
            {
                id: "v6",
                title: "Creative assets for new product launches and special offers.",
                category: "Kinetic typography for Meta and Google ads",
                src: "/videos/1080x1080_video_standard.mp4",
                className: "md:col-span-2 md:row-span-1"
            },
            {
                id: "v21",
                title: "Developed new creative assets to enhance audience segmentation.",
                category: "Meta and Google ads",
                src: "/videos/1080x1080_IN_ENGI.mp4",
                className: "md:col-span-1 md:row-span-1"
            },
            {
                id: "v22",
                title: "Developed new creative assets to enhance audience segmentation.",
                category: "Meta and Google ads",
                src: "/videos/1080x1080_Proj_Man.mp4",
                className: "md:col-span-2 md:row-span-1"
            },

            {
                id: "v7",
                title: "After Effects Kinetic Typography for Webinar Promos",
                category: "Linkedin Post",
                embed: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7265340802833203200?collapsed=1" height="100%" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`,
                className: "md:col-span-2 md:row-span-2"
            },
            {
                id: "v8",
                title: "After Effects Kinetic Typography for Webinar Promos",
                category: "Linkedin Post",
                embed: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7257001356798955520?compact=1" height="100%" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`,
                className: "md:col-span-1 md:row-span-2"
            },
            {
                id: "v12",
                title: "Kinetic Typography for Events Promos in Canva",
                category: "Linkedin Post",
                embed: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7421886115663515648?collapsed=1" height="100%" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`,
                className: "md:col-span-1 md:row-span-2"
            },
            {
                id: "v14",
                title: "After Effects Kinetic Typography for Webinar Promos",
                category: "Linkedin Post",
                embed: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7254503009626324993?compact=1" height="100%" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`,
                className: "md:col-span-2 md:row-span-2"
            },

            // --- TIKTOK UPDATES ---
            {
                id: "v15",
                title: "TikTok post created with Heygen",
                category: "Energy Job Search Tik Tok",
                src: "https://www.tiktok.com/@energyjobsearch_ltd/video/7554335956447399201",
                type: "tiktok",
                className: "md:col-span-1 md:row-span-2"
            },
            {
                id: "v18",
                title: "TikTok post created with Heygen",
                category: "Energy Job Search Tik Tok",
                src: "https://www.tiktok.com/@energyjobsearch_ltd/video/7542789142111915296",
                type: "tiktok",
                className: "md:col-span-1 md:row-span-2"
            },
            {
                id: "v19",
                title: "TikTok post created with Heygen",
                category: "Energy Job Search Tik Tok",
                src: "https://www.tiktok.com/@energyjobsearch_ltd/video/7527290399510023456",
                type: "tiktok",
                className: "md:col-span-2 md:row-span-2"
            },
        ]
    },
    {
        id: 2,
        title: "AEGEAN",
        category: "Digital Designer",
        type: "Professional",
        year: "2019-2024",
        role: "Digital Designer",
        description: "Managed the end-to-end creative production for AEGEAN, Olympic Air, and Hertz. My daily scope involved designing high-volume assets for email marketing (offers, news, product launches) and adapting them for social media, native ads, and performance campaigns (Google/Meta) in static, video, or animated formats based on budget allocations.",
        challenge: "The role required maintaining strict brand consistency across a massive ecosystem of digital and physical touchpoints. This included coordinating with external partners for co-branded offers and updating digital signage for airport offices across Greece and international destinations.",
        solution: "I integrated into the core product teams, participating in focus groups for the new AEGEAN App, In-flight Wi-Fi, and the company-wide Rebrand. I expanded my role by joining backstage photoshoots and filming events to gain holistic content insight. Additionally, I designed and launched the very first Social Media Sticker packs for both airlines to boost organic engagement.",
        results: [
            "Updated most of AEGEAN'S digital and physical touchpoints with the new rebranded logo and tagline.",
            "Designed creatives for new product launches and promotional offers.",
            "Designed the first animated stickers for social media use.",
            "Contributed to multiple company profit records via sales email campaigns."
        ],
        tags: ["Email Marketing", "Social Media", "UI Design", "Branding"],
        image: "/images/gallery11.jpg",
        color: "from-purple-600 to-pink-400",
        bentoData: {
            hero: "/images/template_NL_3.jpg",
            metric: "Rebrand",
            metricLabel: "Updated Digital Touchpoints",
            subMetric: "Internal Tool",
            variations: [
                "/images/Story_ATH_nl.jpg",
                "/images/Story_SKG_nl.jpg",
                "/images/AEGEAN IN FLIGHT.jpg",
                "/images/Aegean_IBM_Linkedin.jpg",
                "/images/chania_aegean.jpg",
                "/images/clothes_recycle_aegean2.jpg",
                { type: "header", title: "Newsletter banners for AEGEAN Airlines and Olympic Airlines" },
                "/images/Aegean_your_way_main_desktop_EN.jpg",
                "/images/Aegean_your_way_main_mobile_EN.jpg",
                "/images/Aegean_main_WithLogo_mobile_EN.jpg",
                "/images/NL_second_subject_wifi_280122.jpg",
                "/images/NL_second_subject_grid_wifi_DE_280122.jpg",
                "/images/NL_OA_GR.png",
                "/images/NL_gr.jpg",
                "/images/NL_b2b.jpg",

                "/images/NL.jpg",
                "/images/MB_activation_NL_2_EN_A3.jpg",
                { type: "header", title: "Google and Perfomance banners for AEGEAN Airlines" },
                "/images/120x600_DE.jpg",
                "/images/120x600_EN.jpg",
                "/images/160x600_DE.jpg",
                "/images/160x600_EN.jpg",
                "/images/200x600_EN.jpg",
                "/images/200x600_DE.jpg",
                "/images/300x250_DE.jpg",
                "/images/300x250_EN.jpg",
                "/images/728x90_DE.jpg",
                "/images/728x90_EN.jpg",
                "/images/970x90_DE.jpg",
                "/images/970x90_EN.jpg",
                "/images/970x250_DE.jpg",
                "/images/970x250_EN.jpg",
                "/images/NL_640x500_EN.jpg",
                "/images/NL_600x500_GR.jpg",
                "/images/NL_600x500_EN.jpg",
                "/images/NL_600x400_GR.jpg",
                "/images/NL_600x150_EN.jpg",
                "/images/NL_600x150_GR.jpg",
                "/images/prev.jpg",
                "/images/prev2.jpg",
                "/images/prev3.jpg",
                "/images/prev4.jpg",
                "/images/prev5.jpg",
                "/images/prev6.jpg",
                "/images/prev7.jpg",
                "/images/prev9.jpg",
                "/images/prev10.jpg",
                "/images/prev12.jpg",
                { type: "header", title: "Social Media banners for AEGEAN Your way product" },
                "/images/a3_mock.jpg",
                "/images/a3_mock2.jpg",
                "/images/carousel_aegeanyourway_frame1.jpg",
                "/images/carousel_aegeanyourway_frame2.jpg",
                "/images/carousel_aegeanyourway_frame3.jpg",
                "/images/carousel_aegeanyourway_frame4.jpg",
                "/images/carousel_aegeanyourway_frame4.jpg",
                "/images/carsousel_post_aegeanyourway_last.jpg",
                "/images/story_aegeanayourway_frame1.jpg",
                "/images/story_aegeanayourway_frame2.jpg",
                "/images/story_aegeanayourway_frame3.png",
                "/images/story_aegeanayourway_frame4.jpg",
                "/images/story_aegeanayourway_frames_last.jpg",
                // --- ADDED BREAK/SEPARATOR HERE ---
                { type: "header", title: "Social Media Animations for AEGEAN Airlines" },
                "/images/Sleep Sticker by Aegean Airlines.gif",
                "/images/Pride Sticker by Aegean Airlines.gif",
                "/images/Sticker by Aegean Airlines.gif",
                "/images/Sticker by Aegean Airlines (1).gif",
                "/images/Sticker by Aegean Airlines (2).gif",
                "/images/Sticker by Aegean Airlines (3).gif",
                "/images/Sticker by Aegean Airlines (4).gif",
                "/images/Sticker by Aegean Airlines (5).gif",
                "/images/Sticker by Aegean Airlines (6).gif",
                "/images/Sticker by Aegean Airlines (7).gif",
                "/images/Sticker by Aegean Airlines (8).gif",
                "/images/Sticker by Aegean Airlines (9).gif",
                "/images/Sticker by Aegean Airlines (10).gif",
                "/images/Sticker by Aegean Airlines (11).gif",
                "/images/Sticker by Aegean Airlines (12).gif",
                "/images/Sticker by Aegean Airlines (13).gif",
                "/images/Sticker by Aegean Airlines (14).gif",
                "/images/Wifionboard Sticker by Aegean Airlines.gif",
                "/images/Wifionboard Sticker by Aegean Airlines (2).gif",

                {
                    id: "v12_b",
                    title: "Instagram Post",
                    category: "Pride month social media post with After Effects",
                    embed: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/tv/CeTEnUKFicC/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/tv/CeTEnUKFicC/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/CmlVvBxoVde/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Aegean Airlines (@aegeanairlines)</a></p></div></blockquote>
<script async src="//www.instagram.com/embed.js"></script>`,
                    className: "md:col-span-1 md:row-span-2"
                },

                {
                    id: "v15_b",
                    title: "Instagram Festive Post",
                    category: "Instagram festive post created with After Effects",
                    embed: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/C1RS1R_NW4s/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/C1RS1R_NW4s/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/C1RS1R_NW4s/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Aegean Airlines (@aegeanairlines)</a></p></div></blockquote>
<script async src="//www.instagram.com/embed.js"></script>`,
                    className: "md:col-span-2 md:row-span-2"
                },
                {
                    id: "v16_b",
                    title: "Instagram Festive Post",
                    category: "Instagram festive post created with After Effects",
                    embed: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/CmlVvBxoVde/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/CmlVvBxoVde/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/CmlVvBxoVde/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Aegean Airlines (@aegeanairlines)</a></p></div></blockquote>
<script async src="//www.instagram.com/embed.js"></script>`,
                    className: "md:col-span-2 md:row-span-2"
                },
                {
                    id: "v14_b",
                    title: "Instagram Post",
                    category: "Adjustment of the Brand campaign to create awareness about Covid-19 measures",
                    embed: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/CIQrIx0HRWc/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/CIQrIx0HRWc/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/CIQrIx0HRWc/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Aegean Airlines (@aegeanairlines)</a></p></div></blockquote>
<script async src="//www.instagram.com/embed.js"></script>`,
                    className: "md:col-span-1 md:row-span-2"
                },

                { type: "header", title: "Social Media Stickers for Olympic Airlines" },

                "/images/Οpa.gif",
                "/images/ΟΑ_Logo.gif",
                "/images/where_to_next_res.gif",
                "/images/OA_Plane_test.gif",
                "/images/kalimera2.gif",
                "/images/kalinyhta.gif",
                "/images/I_love_Greece.gif",
                "/images/Greek_Moments.gif",
                "/images/Discovering_Gree.gif",


            ]
        },
        videos: [
            {
                id: "a1",
                title: "Performance Ads",
                category: "Social Media",
                src: "/videos/all_dom_EN.mp4",
                className: "md:col-span-2 md:row-span-2"
            },
            {
                id: "a2",
                title: "International Ads",
                category: "Social Media",
                src: "/videos/all_int_GR.mp4",
                className: "md:col-span-1 md:row-span-1"
            },
            {
                id: "a3",
                title: "Dubai awareness campaign",
                category: "Google perfomance ads",
                src: "/videos/DXB_Square.mp4",
                className: "md:col-span-2 md:row-span-1"
            },
            {
                id: "a4",
                title: "GR Destinations",
                category: "Social Media",
                src: "/videos/GR_Destinations_DE_audience_Horizontal.mp4",
                className: "md:col-span-1 md:row-span-1"
            },
            {
                id: "a5",
                title: "INT Destinations",
                category: "Social Media",
                src: "/videos/INT_Destinations_GR_audience.mp4",
                className: "md:col-span-2 md:row-span-1"
            },
            {
                id: "a6",
                title: "Main Story",
                category: "Social Media",
                src: "/videos/main_Story_A3_EN.mp4",
                className: "md:col-span-1 md:row-span-1"
            },
            {
                id: "a7",
                title: "Covid-19 awareness campaign for OA",
                category: "Social Media Channels",
                src: "/videos/mainYT_OA.mp4",
                className: "md:col-span-2 md:row-span-1"
            },
            {
                id: "a8",
                title: "New Year A3 post",
                category: "Social Media post",
                src: "/videos/NewYear_A3.mp4",
                className: "md:col-span-1 md:row-span-1"
            },
            {
                id: "a9",
                title: "New Year OA post",
                category: "Social Media post",
                src: "/videos/NewYear_OA.mp4",
                className: "md:col-span-2 md:row-span-1"
            },
            {
                id: "a10",
                title: "TikTok Offer",
                category: "Social Media",
                src: "/videos/Tik_Tok.mp4",
                className: "md:col-span-1 md:row-span-1"
            },
            {
                id: "a11",
                title: "Family Promo",
                category: "Social Media",
                src: "/videos/tik_tok_family_promo.mp4",
                className: "md:col-span-2 md:row-span-1"
            },
            {
                id: "a12",
                title: "Genairation",
                category: "Social Media post ad",
                src: "/videos/TikTok_Gen.mp4",
                className: "md:col-span-1 md:row-span-1"
            },
            {
                id: "a13",
                title: "TikTok Video 1",
                category: "Social Media post ad",
                src: "/videos/Video_Tik_tok_250822.mp4",
                className: "md:col-span-2 md:row-span-1"
            },
            {
                id: "a14",
                title: "TikTok Video 2 offer ad",
                category: "Social Media post ad",
                src: "/videos/Tik_Tok_080922.mp4",
                className: "md:col-span-1 md:row-span-1"
            },

        ]
    },
    {
        id: 3,
        title: "University of Edinburgh",
        category: "MSc Digital Media Design",
        type: "Academic",
        year: "2022-2025",
        role: "Student",
        description: "A comprehensive exploration of digital media, specifically focusing on immersive 3D world-building and backend web architecture.",
        challenge: "The primary challenge was the steep learning curve required to master professional 3D pipelines. I had to rapidly gain proficiency in 3D modeling (Blender, Autodesk Maya) and then breathe life into those assets using C# scripting in the Unity Game Engine—effectively bridging the gap between artistic asset creation and functional game logic.",
        solution: "My studies centered on constructing distinct, interactive 3D worlds tailored to specific academic briefs. Parallel to game design, I established a solid technical foundation in server-side coding and database management, developing applications using PHP and the Fat-Free Framework within JetBrains PhpStorm.",
        results: [
            "Graded (B) with Merit",
            "Extensive learning of 3d building and implementing interactivity",
            "Learned PHP coding, Database use and collaboration within a team group project",
            "Extensive research in Media ethics in Youth and employment bridging the skill gap needed"
        ],
        tags: ["3D Design", "Web Design", "Game Design", "Media Ethics"],
        image: "/images/edin_home.jpg",
        color: "from-green-500 to-emerald-400",
        courses: [
            {
                id: "c1",
                title: "Final Project: Remediation of a Youtube podcast into an arcade style racing game",
                description: "Explored media remediation by transforming a humorous F1 YouTube podcast into an arcade kart racer inspired by 'Crash Team Racing' and 'Mario Kart'. I handled the full development pipeline: from 3D modeling in Autodesk Maya to programming complex vehicle physics, enemy AI, and UI systems using C#. The project successfully gamified the podcast's conversational energy through boosters, interactive feedback, and strategic mechanics, delivering a polished playable prototype within strict academic deadlines.",
                bentoData: {
                    hero: "/images/final1.jpg",
                    metric: "B",
                    metricLabel: "Grade",
                    subMetric: "Maya & Unity",
                    variations: [
                        "/images/final16.jpg",
                        "/images/final15.jpg",
                        "/images/final14.jpg",
                        "/images/final2.jpg",
                        "/images/final3.jpg",
                        "/images/final4.jpg",
                        "/images/final5.jpg",
                        "/images/final6.jpg",
                        "/images/final7.jpg",
                        "/images/final8.jpg",
                        "/images/final9.jpg",
                        "/images/final10.jpg",
                        "/images/final11.jpg",
                        "/images/final12.jpg",
                        "/images/final13.jpg"
                    ]
                },
                videos: [
                    {
                        id: "v_int1",
                        title: "Game Walkthrough",
                        category: "Unity Gameplay",
                        src: "/videos/final_game.mp4",
                        className: "md:col-span-2 md:row-span-2"
                    }
                ]
            },
            {
                id: "c2",
                title: "Course 1: Design for Interactive Media",
                description: "Designed an interactive imaginary film and audio projector with a Steampunk/Victorian aesthetic as requested by the course brief, translating an AI-generated concept into a functional 3D asset. The workflow involved precise modeling in Autodesk Maya (extruding, cutting, and joining primary shapes), texturing, and animating mechanical elements. These assets were exported to Unity, where I programmed the user interactions, camera movements, and a period-accurate Victorian UI menu.",
                bentoData: {
                    hero: "/images/in_game.jpg",
                    metric: "B",
                    metricLabel: "Grade",
                    subMetric: "Interaction Design",
                    variations: [
                        "/images/last_render.jpg",
                        "/images/2last_render.jpg",
                        "/images/3last_render.jpg",
                        "/images/first_render.jpg",
                        "/images/2first_render.jpg",
                        "/images/3first_render.jpg",
                        "/images/4first_render.jpg",
                        "/images/5first_render.jpg",
                        "/images/6first_render.jpg",
                        "/images/7first_render.jpg",
                        "/images/8first_render.jpg",
                        "/images/9first_render.jpg",
                        "/images/10first_render.jpg"
                    ]
                },
                videos: [
                    {
                        id: "v_int1_demo",
                        title: "Build Walkthrough",
                        category: "Process",
                        src: "/videos/design_for_interactive_media_before.mp4",
                        className: "md:col-span-2 md:row-span-2"
                    },
                    {
                        id: "v_int2_demo",
                        title: "Interaction Walkthrough",
                        category: "Unity",
                        src: "/videos/S2464169_D4IM_SUB2.mp4",
                        className: "md:col-span-2 md:row-span-2"
                    }
                ]
            },
            {
                id: "c3",
                title: "Course 2: Game Design Studio",
                description: "Visualized the Native American Chippewa fairytale 'The White Stone Canoe' as an atmospheric 3D game. The narrative follows a protagonist's journey from a harsh snowy landscape through dense forests to the land of the dead to save his bride. Players solve environmental puzzles to locate a shaman's cabin, leading to an ambiguous ending questioning the reality of the quest. I researched and modeled botanically accurate North American flora in Autodesk Maya and implemented the environment interactions and game logic using C# in Unity.",
                bentoData: {
                    hero: "/images/game_design.jpg",
                    metric: "B",
                    metricLabel: "Grade",
                    subMetric: "3D Design",
                    variations: [
                        "/images/game4.jpg",
                        "/images/game5.jpg",
                        "/images/game6.jpg",
                        "/images/game7.jpg",
                        "/images/game2.jpg",
                        "/images/game3.jpg"
                    ]
                },
                videos: [
                    {
                        id: "v_3d1",
                        title: "Game Walkthrough",
                        category: "Unity Engine",
                        src: "/videos/game_design_studio.mp4",
                        className: "md:col-span-2 md:row-span-2"
                    }
                ]
            },
            {
                id: "c4",
                title: "Course 3: Digital Playgrounds for the online audience",
                description: "Reimagined my hometown of Athens as a layered cyberpunk dystopia, visually bridging Ancient Greece and the Industrial Revolution with a high-tech future. This project marked my initiation into 3D modeling (Blender) and the Unity engine, where I integrated personal photography to texture the architectural assets. As a first foray into C#, the interaction was scoped to an atmospheric narrative walkthrough, establishing the environmental storytelling skills I developed further in later courses.",
                bentoData: {
                    hero: "/images/play_hero.jpg",
                    metric: "B-",
                    metricLabel: "Grade",
                    subMetric: "Game Dev",
                    variations: [
                        "/images/play2.jpg",
                        "/images/play3.jpg",
                        "/images/play4.jpg"
                    ]
                },
                videos: [
                    {
                        id: "v_game1",
                        title: "Gameplay Demo",
                        category: "Unity",
                        src: "/videos/Digital_playgrounds.mp4",
                        className: "md:col-span-2 md:row-span-1"
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        title: "Freelance",
        category: "Digital Designer",
        type: "Freelance",
        year: "2016-2019",
        role: "Graphic Designer",
        description: "Engaged with a diverse client base ranging from the tourism sector to the music industry. I crafted visual identities and logos for multiple businesses and music groups, extending these identities into motion through static and animated album covers and video editing.",
        // UPDATED CHALLENGE:
        challenge: "To adapt to distinct industry needs—from the corporate requirements of tourism businesses to the artistic expression demanded by music groups—while establishing my professional foundation in brand identity and motion graphics.",
        // UPDATED SOLUTION:
        solution: "Delivered tailored logo designs for three tourism businesses and two music collectives. For the musical acts, I expanded the scope to include video editing and animated cover art, marking my first professional steps in combining graphic design with animation.",
        results: [
            "5 logo designs for clients",
            "Video Animation and editing for two music groups",
            "Positive user feedback on visual identity"
        ],
        tags: ["Branding", "Identity", "Video Editing"],
        image: "/images/FREE_HOME.jpg",
        color: "from-orange-500 to-red-500",
        courses: [
            {
                id: "f_khora",
                title: "Client: Khora",
                description: "Brand identity and logo design for Khora Mykonos.",
                bentoData: {
                    hero: "/images/khora.jpg",
                    metric: "Brand",
                    metricLabel: "Identity System",
                    subMetric: "Logo Design",
                    variations: [
                        "/images/finalizing.jpg",
                        "/images/khora_blue.png",
                        "/images/khora_col.png",
                        "/images/khora_idea.png",
                    ]
                },
            },
            {
                id: "f_aya",
                title: "Client: Aya Sofia",
                description: "Visual identity and signage design",
                bentoData: {
                    hero: "/images/AYA_SOFIA.jpg",
                    metric: "Brand",
                    metricLabel: "Identity system",
                    subMetric: "Graphic Design",
                    variations: [
                        "/images/preview_aya_sofia-01.jpg",
                        "/images/preview_aya_sofia_color-01.jpg",

                    ]
                },
            },
            {
                id: "f_GST",
                title: "Client: GST",
                description: "Visual identity and social media assets.",
                bentoData: {
                    hero:  "/images/GST_social.jpg",
                    metric: "Brand",
                    metricLabel: "Visual Assets",
                    subMetric: "Graphic Design",
                    variations: [
                        "/images/GST.jpg",
                        "/images/GST_social.jpg",
                        "/images/GST_VAR.jpg",
                    ]
                },
            },
            {
                id: "f_Chicken",
                title: "Client: Chicken bar and More",
                description: "Social media assets.",
                bentoData: {
                    hero:  "/images/CHICKEN.jpg",
                    metric: "Social",
                    metricLabel: "Visual Assets",
                    subMetric: "Graphic Design",
                    variations: [
                        "/images/CHICKEN.jpg",
                        "/images/chicken2.jpg",
                        "/images/chicken3.jpg",
                        "/images/chicken_menu.jpg",

                    ]
                },
            },
            {
                id: "f_music",
                title: "Music & Cover Art",
                description: "Album covers and promotional video content for music artists.",
                bentoData: {
                    hero: "/images/neegold3000.jpg",
                    metric: "Cover Art",
                    metricLabel: "Album Design",
                    subMetric: "Music Industry",
                    variations: [

                        "/images/spotify3000.jpg",
                        "/images/music1.jpg",
                        "/images/music2.jpg",
                        "/images/music3.jpg",
                        "/images/music4.jpg",
                        "/images/music5.jpg",
                        "/images/music6.jpg",
                        "/images/logo_INF.jpg",
                        "/images/logo_INF2.jpg",
                        "/images/logo_lad.jpg",
                    ]
                },
                videos: [
                    {
                        id: "f1",
                        title: "Album & Video Covers",
                        category: "Music Videos",
                        src: "/videos/quaresma.mp4",
                        className: "md:col-span-1 md:row-span-2"
                    },
                    {
                        id: "f2",
                        title: "Youtube covers",
                        category: "Embedded Post",
                        embed: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/videoseries?si=WyYGssk8WaSLG1ul&amp;list=PLKlubVxCs3I5UdoJRvUzh2elMD1kR80iP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
                        className: "md:col-span-2 md:row-span-2"
                    },
                    {
                        id: "f3", // Renamed from f1 to avoid duplicate key
                        title: "Album & Video Covers",
                        category: "Music Videos",
                        src: "/videos/panselinos.mp4",
                        className: "md:col-span-3 md:row-span-2"
                    },

                ]
            }
        ]
    },
    {
        id: 5,
        title: "AKTO in partnership with University of Middlesex",
        category: "BA(Hons) in Graphic Design",
        type: "Academic",
        year: "2015-2018",
        role: "Student",
        // UPDATED DESCRIPTION:
        description: "A comprehensive study of graphic design fundamentals, spanning typography, composition, color theory, and art history. The curriculum extended into digital media, introducing animation, HTML/CSS, and collaborative project workflows.",
        // UPDATED CHALLENGE:
        challenge: "To transition from static design foundations to dynamic media. My dissertation focused on Brand Building, requiring me to conceptualize and execute a cohesive advertising strategy for a major entity—Tesla—across diverse media formats.",
        // UPDATED SOLUTION:
        solution: "I designed three distinct brand campaigns for Tesla, producing both high-fidelity print advertisements and video commercials. The 'Black and Red' campaign was highly praised for its visual impact. This capstone project was pivotal, as it solidified my passion for advertising, motion graphics, and video editing.",
        results: [
            "BA(Hons) Award in graphic design",
            "Highly praised 'Black & Red' aesthetic campaign",
            "Discovered core passion for Motion Design & Video Editing"
        ],
        tags: ["Typography", "Animation", "Brand Building", "Video Editing"],
        image: "/images/Hero_akto.jpg",
        color: "from-green-500 to-emerald-400",
        courses: [
            {
                id: "c1",
                title: "Final Project: Tesla Brand Building & Campaign Strategy",
                description: "Challenging Tesla's 'no-advertising' strategy, I developed three distinct multi-media campaigns to highlight their competitive edge. 1) 'High Contrast': Utilized the logo's red against a black-and-white palette to semiologically emphasize EV benefits like acceleration, zero emissions, and HEPA air filtration. 2) 'Space Exploration': Inspired by the SpaceX Mars launch, I created a 'Tesla Universe' narrative with a Star Trek-esque sci-fi aesthetic. 3) 'Arcade Mode': Used retro gaming visuals to contrast technological eras, featuring the Tesla logo as a playable character defeating obsolete petrol technology.",
                bentoData: {
                    hero: "/images/black2.jpg",
                    metric: "80",
                    metricLabel: "Grade B",
                    subMetric: "Adobe CC ",
                    variations: [
                        "/images/black4.jpg",
                        "/images/black2.jpg",
                        "/images/black5.jpg",
                        "/images/black6.jpg",
                        "/images/space1.jpg",
                        "/images/space2.jpg",
                        "/images/space3.jpg",
                        "/images/arcade1.jpg",
                        "/images/arcade2.jpg",
                        "/images/arcade3.jpg",
                    ]
                },
                videos: [
                    {
                        id: "v_int1",
                        title: "Black and red campaign",
                        category: "Adobe CC",
                        src: "/videos/black.mp4",
                        className: "md:col-span-3 md:row-span-2"
                    },
                    {
                        id: "v_int2",
                        title: "Space campaign",
                        category: "Adobe CC",
                        src: "/videos/space.mp4",
                        className: "md:col-span-2 md:row-span-2"
                    },
                    {
                        id: "v_int3",
                        title: "Arcade campaign",
                        category: "Adobe CC",
                        src: "/videos/arcade.mp4",
                        className: "md:col-span-1 md:row-span-2"
                    },
                ]
            },

            {
                id: "c2",
                title: "Course 1: Editorial Design & Magazine Identity",
                description: "Tasked with creating a magazine brand from scratch, I focused on the Hip Hop industry featuring the group Migos. I designed a custom logo in Adobe Illustrator and developed a bold visual identity by stylizing photography with vibrant, single-color overlays against a stark black background. The project was highly praised by the faculty and selected for feature on the college's official social media channels.",
                bentoData: {
                    hero: "/images/reference.jpg",
                    metric: "82",
                    metricLabel: "Grade",
                    subMetric: "Composition and Editorial Design",
                    variations: [
                        "/images/print.jpg",
                        "/images/print2.jpg",

                    ]
                },

            },


            {
                id: "c4",
                title: "Course 3: Visualizing Calvino's 'Invisible Cities'",
                description: "Collaborated on a multimedia group project interpreting Italo Calvino's 'Invisible Cities'. We selected the city of Ersilia—a settlement defined by threads representing human relationships that get dismantled and moved once the connections become too dense. The deliverables included a comprehensive brand identity (logo, poster), a motion graphic visualization, and a physical installation showcased at the college exhibition to represent the city's ephemeral, string-based architecture.",
                bentoData: {
                    hero: "/images/Ersilia.jpg",
                    metric: "85",
                    metricLabel: "Grade",
                    subMetric: "Story visualizing",
                    variations: [
                        "/images/ersilialogo.jpg",
                        "/images/ersilialogo1.jpg",
                        "/images/gallery3.jpg",
                    ]
                },
                videos: [
                    {
                        id: "v_game1",
                        title: "Storytelling visualize",
                        category: "Unity",
                        src: "/videos/ersilia1.mp4",
                        className: "md:col-span-2 md:row-span-1"
                    }
                ]
            },
            {
                id: "c3",
                title: "Course 2: Sports Branding Re-imagined",
                description: "Selected my hometown's football club for a comprehensive rebrand exercise. The goal was to modernize a legacy logo that had remained stagnant for decades while retaining its heritage. I developed a contemporary visual identity system and applied it across various physical touchpoints, including corporate stationery and a full redesign of the official football kit.",
                bentoData: {
                    hero: "/images/branding.jpg",
                    metric: "78",
                    metricLabel: "Grade",
                    subMetric: "Branding Design",
                    variations: [
                        "/images/branding2.jpg",
                        "/images/branding3.jpg",
                    ]
                },

            },
            {
                id: "c3",
                title: "Voluntary Work & Composition Studies",
                description: "A curated selection of miscellaneous coursework exploring advanced composition theories and visual hierarchy. A standout project in this collection is a promotional video campaign developed pro-bono for 'Akoustirixi', a non-profit organization supporting the hearing-impaired community, where I applied motion design principles to drive social impact.",
                bentoData: {
                    hero: "/images/fiat.jpg",
                    metric: "Stylistic exploration",
                    metricLabel: "Theory applications",
                    subMetric: "Composition Design",
                    variations: [
                        "/images/fear.jpg",
                        "/images/trata.jpg",
                    ]
                },
                videos: [
                    {
                        id: "v_game1",
                        title: "Support campaign ",
                        category: "After Effects",
                        src: "/videos/akoustirixi.mp4",
                        className: "md:col-span-2 md:row-span-1"
                    }
                ]


            },

        ]
    },
];

// --- GALLERY DATA ---
const GALLERY_ITEMS = [
    {
        id: 1,
        title: "Took part in filming for a festive promo",
        description: "Filming",
        // The Instagram embed provided
        embed: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/tv/CX5vwxClCVg/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/tv/CX5vwxClCVg/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/tv/CX5vwxClCVg/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Aegean Airlines (@aegeanairlines)</a></p></div></blockquote>
<script async src="//www.instagram.com/embed.js"></script>`,
        className: "md:col-span-2 md:row-span-2"
    },
    {
        id: 7,
        title: "Typography Layout",
        description: "Editorial Design System",
        image: "/images/reference.jpg",
        className: "md:col-span-1 md:row-span-1"
    },
    {
        id: 11,
        title: "Behind the scenes",
        description: "Filming for an festive promo",
        image: "/images/gallery2.jpeg",
        className: "md:col-span-1 md:row-span-1"
    },
    {
        id: 12,
        title: "Favourite team",
        description: "My 2 favourite colleagues",
        image: "/images/gallery3.jpeg",
        className: "md:col-span-1 md:row-span-1"
    },
    {
        id: 17,
        title: "Behind the scenes",
        description: "Filming for an festive promo",
        image: "/videos/gallery13.mp4",
        className: "md:col-span-1 md:row-span-1"
    },
    {
        id: 15,
        title: "Took part in art exhibition",
        description: "Sketch with Charcoal",
        image: "/images/gallery14.jpg",
        className: "md:col-span-1 md:row-span-1"
    },

    {
        id: 10,
        title: "Typography Layout",
        description: "Editorial Design for Grande Magazine",
        image: "/images/gallery4.jpg",
        className: "md:col-span-1 md:row-span-1"
    },
    {
        id: 11,
        title: "Poster Design",
        description: "Poster sketch with charcoal",
        image: "/images/gallery5.jpg",
        className: "md:col-span-1 md:row-span-1"
    },
    {
        id: 12,
        title: "GS Media team",
        description: "Team photo of GS Media",
        image: "/images/gallery6.jpg",
        className: "md:col-span-1 md:row-span-1"
    },
    {
        id: 13,
        title: "Behind the scenes",
        description: "Shooting for a basketball commercial",
        image: "/images/gallery7.jpg",
        className: "md:col-span-1 md:row-span-1"
    },
    {
        id: 14,
        title: "Behind the scenes",
        description: "Shooting for a basketball commercial",
        image: "/images/gallery8.jpg",
        className: "md:col-span-1 md:row-span-1"
    },
    {
        id: 15,
        title: "Behind the scenes",
        description: "Shooting for a basketball commercial",
        image: "/images/gallery9.jpg",
        className: "md:col-span-1 md:row-span-1"
    },
    {
        id: 16,
        title: "AFW Event",
        description: "AFW Event with AEGEAN",
        image: "/images/gallery10.jpg",
        className: "md:col-span-1 md:row-span-1"
    },
    {
        id: 17,
        title: "AEGEAN Neo Era Event",
        description: "Neo Era Event in AEGEAN",
        image: "/images/gallery11.jpg",
        className: "md:col-span-1 md:row-span-1"
    },
    {
        id: 18,
        title: "Photography as my hobby",
        description: "Scenery photoshooting is my hobby",
        image: "/images/gallery12.jpg",
        className: "md:col-span-1 md:row-span-1"
    },
    {
        id: 9,
        title: "Peak Awards supported by Google award",
        description: "Gold and Silver winners",
        image: "/images/ceremony.jpg",
        className: "md:col-span-1 md:row-span-1"
    },
    {
        id: 2,
        title: "Sketching in my free time",
        description: "During 2019-2020 i was doing some drawing lessons in my free time",
        image: "/images/sketch.jpg",
        className: "md:col-span-1 md:row-span-1"
    },
    {
        id: 10,
        title: "Photography",
        description: "I enjoy taking photographs of scenery",
        image: "/images/gallery1.jpg",
        className: "md:col-span-1 md:row-span-1"
    },
    {
        id: 3,
        title: "Stylizing course",
        description: "Stylizing by hand a photograph",
        image: "/images/sketch2.jpg",
        className: "md:col-span-1 md:row-span-1"
    },
    {
        id: 4,
        title: "Subwoofer composition sketch with charcoal",
        description: "Took part in an exhibition with this composition",
        image: "/images/sketch3.jpg",
        className: "md:col-span-1 md:row-span-1"
    },
    {
        id: 5,
        title: "The myth of Narcissus by Salvador Dalli",
        description: "Handpainted with colored oil pastels",
        image: "/images/sketch4.jpg",
        className: "md:col-span-1 md:row-span-1"
    },
    {
        id: 6,
        title: "Class photo",
        description: "Class photo in AKTO 2017",
        image: "/images/Hero_akto.jpg",
        className: "md:col-span-1 md:row-span-1"
    },
    {
        id: 15,
        title: "Redesign and applying the STAR & MR GS hellas logo ",
        description: "Logo redesign",
        image: "/images/gallery15.jpg",
        className: "md:col-span-1 md:row-span-1"
    },
    {
        id: 16,
        title: "Poster Series",
        description: "Handrawn with charcoal poster of Darth Vader",
        image: "/images/gallery16.jpg",
        className: "md:col-span-1 md:row-span-1"
    },
    {
        id: 17,
        title: "Behind the scenes",
        description: "Took part in the filming of RISE(2022)",
        image: "/images/gallery17.jpg",
        className: "md:col-span-1 md:row-span-1"
    },
    {
        id: 18,
        title: "The Van Gogh experience",
        description: "Quote from the exhibition",
        image: "/images/gallery18.jpg",
        className: "md:col-span-1 md:row-span-1"
    },
];

const SERVICES = [
    {
        icon: <Layout className="w-6 h-6" />,
        title: "Product Design",
        desc: "End-to-end product design from initial research and wireframing to high-fidelity prototyping."
    },
    {
        icon: <Code className="w-6 h-6" />,
        title: "Frontend Dev",
        desc: "Bridging the gap between design and code with React, Tailwind CSS, and interaction design."
    },
    {
        icon: <Palette className="w-6 h-6" />,
        title: "Design Systems",
        desc: "Creating scalable design languages and component libraries for consistent user experiences."
    },
    {
        icon: <Smartphone className="w-6 h-6" />,
        title: "Mobile Apps",
        desc: "Native-feeling iOS and Android app designs that follow the latest human interface guidelines."
    }
];

// --- UPDATED NAV WITH HAMBURGER MENU ---
const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 w-full p-6 z-50 flex justify-between items-center text-white mix-blend-difference">
                <div className="font-bold text-xl tracking-tighter z-50">ALEXANDROS_PREPIS.DESIGN</div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6 text-sm font-medium">
                    <a href="#work" className="hover:opacity-50 transition-opacity">WORK</a>
                    <a href="#playground" className="hover:opacity-50 transition-opacity">PLAYGROUND</a>
                    <a href="#contact" className="hover:opacity-50 transition-opacity">CONTACT</a>
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    className="md:hidden z-50"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </nav>

            {/* Mobile Full Screen Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-black z-40 flex flex-col justify-center items-center gap-8 text-2xl font-bold text-white animate-fade-in">
                    <a href="#work" onClick={() => setIsMenuOpen(false)}>WORK</a>
                    <a href="#playground" onClick={() => setIsMenuOpen(false)}>PLAYGROUND</a>
                    <a href="#contact" onClick={() => setIsMenuOpen(false)}>CONTACT</a>
                </div>
            )}
        </>
    );
};

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-12 bg-black text-white relative overflow-hidden">
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
            <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px] opacity-20 animate-pulse delay-700"></div>

            <div className="container mx-auto relative z-10">
                <div className="max-w-4xl">
                    <p className="text-blue-400 font-mono mb-4 tracking-wider text-sm animate-fade-in">
                        HELLO, I'M ALEX
                    </p>
                    <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter mb-8">
                        DIGITAL <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              EXPERIENCES
            </span> <br />
                        THAT MATTER.
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-12">
                        A multidisciplinary designer merging video editing, UI, and AI creation to build engaging digital touchpoints. I contribute to evolving products and campaigns, bridging the gap between creative vision and technical development.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a href="#work" className="group flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-all">
                            View Projects
                            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
                        </a>
                        <a href="#contact" className="flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-all">
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full border-t border-white/10 py-6 overflow-hidden bg-black/50 backdrop-blur-sm">
                <div className="flex gap-12 animate-scroll whitespace-nowrap text-gray-500 font-mono text-sm uppercase tracking-widest">
                    {[...Array(2)].map((_, i) => (
                        <React.Fragment key={i}>
                            <span>UI Design</span>
                            <span>•</span>
                            <span>UX Research</span>
                            <span>•</span>
                            <span>Prototyping</span>
                            <span>•</span>
                            <span>React</span>
                            <span>•</span>
                            <span>Design Systems</span>
                            <span>•</span>
                            <span>Motion Graphics</span>
                            <span>•</span>
                            <span>Figma</span>
                            <span>•</span>
                            <span>Strategy</span>
                            <span>•</span>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- UPDATED WORK COMPONENT WITH SCROLLABLE FILTERS ---
const Work = ({ onProjectClick }) => {
    const [activeTab, setActiveTab] = useState("All");
    const tabs = ["All", "Professional", "Freelance", "Academic"];

    const filteredProjects = activeTab === "All"
        ? PROJECTS
        : PROJECTS.filter(project => project.type === activeTab);

    return (
        <section id="work" className="py-24 bg-zinc-950 text-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Selected Work</h2>
                        <p className="text-gray-400 max-w-md">A collection of projects exploring the intersection of design and technology.</p>
                    </div>

                    {/* Scrollable Filter Container */}
                    <div className="flex gap-2 mt-6 md:mt-0 bg-zinc-900 p-1 rounded-full border border-white/10 overflow-x-auto w-full md:w-auto scrollbar-hide">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                                    activeTab === tab
                                        ? "bg-white text-black shadow-lg"
                                        : "text-gray-400 hover:text-white hover:bg-white/5"
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[500px]">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            onClick={() => onProjectClick(project)}
                            className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 hover:border-white/20 transition-all duration-500 animate-fade-in cursor-pointer"
                        >
                            <div className="aspect-[4/3] overflow-hidden relative">
                                <div className={`absolute inset-0 bg-gradient-to-tr ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10`}></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-20">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs font-medium border border-white/10">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <span className="text-sm text-gray-400 font-mono mb-2 block">{project.category}</span>
                                        <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">{project.title}</h3>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>
                                </div>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- PLAYGROUND COMPONENT WITH INSTAGRAM EMBED SUPPORT ---
const Playground = () => {
    // 1. Script Loading for Instagram
    useEffect(() => {
        if (!document.getElementById('instagram-embed-script')) {
            const script = document.createElement('script');
            script.id = 'instagram-embed-script';
            script.src = '//www.instagram.com/embed.js';
            script.async = true;
            document.body.appendChild(script);
        }
        // Force reprocessing if script already loaded
        if (window.instgrm) {
            window.instgrm.Embeds.process();
        }
    }, []);

    return (
        <section id="playground" className="py-24 bg-black text-white border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Playground</h2>
                    <p className="text-gray-400 max-w-md">Experiments, backstage, and miscellaneous creative explorations.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
                    {GALLERY_ITEMS.map((item) => (
                        <div
                            key={item.id}
                            className={`relative rounded-2xl overflow-hidden group border border-white/10 bg-zinc-900 ${item.className}`}
                        >
                            {/* RENDER LOGIC: Check for Embed */}
                            {item.embed ? (
                                <div className="w-full h-full flex items-center justify-center bg-white overflow-y-auto">
                                    <div dangerouslySetInnerHTML={{ __html: item.embed }} />
                                </div>
                            ) : (
                                <>
                                    {item.image.endsWith('.mp4') ? (
                                        <video
                                            src={item.image}
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    ) : (
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    )}

                                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                                            <p className="text-sm text-gray-400">{item.description}</p>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Services = () => {
    return (
        <section className="py-24 bg-zinc-950 text-white border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {SERVICES.map((service, index) => (
                        <div key={index} className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:bg-zinc-900 transition-colors">
                            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                {service.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const About = () => {
    return (
        <section id="about" className="py-24 bg-black text-white relative overflow-hidden">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
                <div className="md:w-1/2">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                        More than just <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">pixels on a screen.</span>
                    </h2>
                    <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                        <p>
                            I believe that great design is invisible. It's about removing friction and creating pathways that users intuitively follow.
                        </p>
                        <p>
                            With a background in both graphic and digital design, I speak the language of both fields. I don't just hand over static mockups; I consider the responsiveness, interaction states, and feasibility of every element.
                        </p>
                    </div>

                    <div className="mt-12 flex gap-8">
                        <div>
                            <div className="text-3xl font-bold text-white mb-1">5+</div>
                            <div className="text-sm text-gray-500 font-mono">YEARS</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white mb-1">50+</div>
                            <div className="text-sm text-gray-500 font-mono">PROJECTS</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white mb-1">100%</div>
                            <div className="text-sm text-gray-500 font-mono">COMMITMENT</div>
                        </div>
                    </div>
                </div>

                <div className="md:w-1/2 relative">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-zinc-900 p-6 rounded-2xl h-64 flex flex-col justify-between border border-white/5 hover:-translate-y-2 transition-transform duration-300">
                            <Figma className="w-8 h-8 text-pink-500" />
                            <div>
                                <div className="font-bold text-xl">Figma</div>
                                <div className="text-sm text-gray-500">Mastery</div>
                            </div>
                        </div>
                        <div className="bg-zinc-900 p-6 rounded-2xl h-64 flex flex-col justify-between border border-white/5 mt-12 hover:-translate-y-2 transition-transform duration-300">
                            <Code className="w-8 h-8 text-blue-500" />
                            <div>
                                <div className="font-bold text-xl">React</div>
                                <div className="text-sm text-gray-500">Development</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- UPDATED CONTACT (INSTAGRAM ICON) ---
const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-black text-white border-t border-white/10">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">Ready to create?</h2>
                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                    I'm currently available for freelance projects and open to full-time opportunities.
                </p>

                <a
                    href="mailto:prepis92@hotmail.com"
                    className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300"
                >
                    <Mail className="w-5 h-5" />
                    prepis92@hotmail.com
                </a>

                <div className="mt-16 flex justify-center gap-8">
                    {/* INSTAGRAM ICON SWAP */}
                    <a href="https://www.instagram.com/alex_prps_photos?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="p-4 rounded-full bg-zinc-900 hover:bg-zinc-800 transition-colors">
                        <Instagram className="w-6 h-6 text-pink-500" />
                    </a>
                    <a href="https://www.linkedin.com/in/alexandros-prepis-792796163" className="p-4 rounded-full bg-zinc-900 hover:bg-zinc-800 transition-colors">
                        <Linkedin className="w-6 h-6 text-blue-500" />
                    </a>
                    <a href="https://github.com/AlexandrosPrps92" className="p-4 rounded-full bg-zinc-900 hover:bg-zinc-800 transition-colors">
                        <Github className="w-6 h-6 text-white" />
                    </a>
                </div>
            </div>
        </section>
    );
};

// --- NEW COMPONENT: PROJECT ARTICLE GRID (FOR BLOGS) ---
const ProjectArticleGrid = ({ articles }) => {
    return (
        <div className="mt-16 border-t border-white/10 pt-12">
            <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-6">Articles & Publications</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {articles.map((article) => (
                    <a
                        key={article.id}
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-zinc-900 border border-white/10 hover:bg-zinc-800 hover:border-white/20 transition-all duration-300"
                    >
                        {/* Article Image */}
                        <div className="w-full md:w-48 h-32 rounded-lg overflow-hidden flex-shrink-0">
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        {/* Article Content - Added min-w-0 to prevent overflow */}
                        <div className="flex-grow flex flex-col justify-center min-w-0">
                            <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-2">
                                <FileText className="w-3 h-3 flex-shrink-0" />
                                <span className="uppercase tracking-wider truncate">{article.domain}</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors truncate">
                                {article.title}
                            </h3>
                            {/* Added break-words to ensure wrapping */}
                            <p className="text-sm text-gray-400 line-clamp-3 md:line-clamp-2 break-words">
                                {article.description}
                            </p>
                            <div className="mt-4 flex items-center gap-2 text-xs font-bold text-white group-hover:translate-x-2 transition-transform">
                                Read Article <ExternalLink className="w-3 h-3 flex-shrink-0" />
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};
// --- BENTO GRID (IMAGES + HEADERS) ---
const BentoGrid = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState(null);

    // Filter out only viewable images (strings) for the Lightbox
    // We include hero first, then filter variations
    const lightboxImages = [
        data.hero,
        ...data.variations.filter(item => typeof item === 'string')
    ];

    const openLightbox = (imageSrc) => {
        const index = lightboxImages.indexOf(imageSrc);
        if (index !== -1) {
            setCurrentIndex(index);
        }
    };

    const closeLightbox = () => setCurrentIndex(null);

    const showNext = (e) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % lightboxImages.length);
    };

    const showPrev = (e) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length);
    };

    // Keyboard navigation
    useEffect(() => {
        if (currentIndex === null) return;
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') showNext();
            if (e.key === 'ArrowLeft') showPrev();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentIndex]);

    return (
        <div className="flex flex-col gap-4 mb-12">

            {/* TOP SECTION: Hero & Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-[400px]">

                {/* Hero Box */}
                <div
                    onClick={() => openLightbox(data.hero)}
                    className="md:col-span-2 relative rounded-3xl overflow-hidden border border-white/10 group cursor-zoom-in"
                >
                    <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono border border-white/10 text-white pointer-events-none">
                        HIGHLIGHT
                    </div>
                    <img
                        src={data.hero}
                        alt="Final Design"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                </div>

                {/* Metric Box */}
                <div className="bg-zinc-900 rounded-3xl p-8 flex flex-col justify-center items-center border border-white/10 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-[50px] group-hover:bg-blue-500/30 transition-all"></div>
                    <h3 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 tracking-tighter text-center">
                        {data.metric}
                    </h3>
                    <p className="text-gray-400 mt-2 font-medium text-center text-sm">{data.metricLabel}</p>
                    <div className="mt-6 px-4 py-2 bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 rounded-full text-xs font-bold uppercase tracking-wider text-center">
                        {data.subMetric}
                    </div>
                </div>
            </div>

            {/* BOTTOM SECTION: Gallery Grid */}
            <div>
                <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-4 mt-4">Project Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {data.variations.map((item, i) => {
                        // 1. Header Logic
                        if (item.type === 'header') {
                            return (
                                <div key={i} className="md:col-span-3 py-8 flex items-center gap-4">
                                    <div className="h-px bg-white/20 flex-grow"></div>
                                    <span className="text-white/50 font-mono text-sm uppercase tracking-widest">{item.title}</span>
                                    <div className="h-px bg-white/20 flex-grow"></div>
                                </div>
                            );
                        }

                        // 2. Image/Embed Logic
                        return (
                            <div
                                key={i}
                                onClick={() => typeof item === 'string' && openLightbox(item)}
                                className={`relative rounded-2xl overflow-hidden border border-white/10 group ${typeof item === 'string' ? 'cursor-zoom-in' : ''} h-64 ${
                                    (i % 4 === 0 || i % 4 === 3) ? 'md:col-span-2' : 'md:col-span-1'
                                }`}
                            >
                                {typeof item === 'string' ? (
                                    <>
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                                        <img
                                            src={item}
                                            alt={`Gallery item ${i}`}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </>
                                ) : (
                                    <div
                                        className="w-full h-full [&>iframe]:w-full [&>iframe]:h-full"
                                        dangerouslySetInnerHTML={{ __html: item.embed }}
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* LIGHTBOX OVERLAY */}
            {currentIndex !== null && (
                <div
                    className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
                    onClick={closeLightbox}
                >
                    {/* Close Button */}
                    <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[210]">
                        <X className="w-8 h-8" />
                    </button>

                    {/* Navigation Arrows */}
                    <button
                        onClick={showPrev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-[210] hidden md:block"
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </button>

                    <button
                        onClick={showNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-[210] hidden md:block"
                    >
                        <ChevronRight className="w-8 h-8" />
                    </button>

                    {/* Image */}
                    {typeof lightboxImages[currentIndex] === 'string' && (
                        <img
                            src={lightboxImages[currentIndex]}
                            alt="Full Screen"
                            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    )}

                    {/* Mobile Tip */}
                    <div className="absolute bottom-4 left-0 w-full text-center text-white/40 text-xs md:hidden">
                        Swipe or tap sides to navigate
                    </div>
                </div>
            )}
        </div>
    );
};

// --- UPDATED PROJECT VIDEO GRID (Supports Local Video, Iframes & TikTok) ---
const ProjectVideoGrid = ({ videos }) => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    // Load TikTok Script automatically if a TikTok embed is present
    useEffect(() => {
        const hasTikTok = videos.some(v => v.embed && v.embed.includes('tiktok-embed'));
        if (hasTikTok && !document.getElementById('tiktok-embed-script')) {
            const script = document.createElement('script');
            script.id = 'tiktok-embed-script';
            script.src = 'https://www.tiktok.com/embed.js';
            script.async = true;
            document.body.appendChild(script);
        }
    }, [videos]);

    return (
        <div className="mt-16 border-t border-white/10 pt-12">
            <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-6">Motion & Video Assets</h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
                {videos.map((video) => (
                    <div
                        key={video.id}
                        onClick={() => {
                            if (video.type === "tiktok") {
                                window.open(video.src, "_blank");
                            } else if (!video.embed) {
                                setSelectedVideo(video);
                            }
                        }}
                        className={`relative rounded-2xl overflow-hidden group border border-white/10 bg-zinc-900 ${
                            video.type === "tiktok" || !video.embed ? "cursor-pointer" : ""
                        } ${video.className}`}
                    >
                        {/* CASE 1: TikTok External Link */}
                        {video.type === "tiktok" ? (
                            <div className="w-full h-full flex flex-col items-center justify-center bg-[#000000] relative group hover:bg-[#111] transition-colors">
                                {/* TikTok-style decorative background elements */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#25F4EE]/10 to-[#FE2C55]/10 opacity-50"></div>

                                <div className="z-10 flex flex-col items-center gap-3">
                                    <div className="w-14 h-14 bg-black border border-white/20 rounded-full flex items-center justify-center shadow-2xl relative">
                                        <ExternalLink className="w-6 h-6 text-white" />
                                        {/* Glitch effect dots */}
                                        <div className="absolute -left-1 -top-1 w-2 h-2 bg-[#25F4EE] rounded-full blur-[1px]"></div>
                                        <div className="absolute -right-1 -bottom-1 w-2 h-2 bg-[#FE2C55] rounded-full blur-[1px]"></div>
                                    </div>
                                    <span className="font-bold text-white tracking-wide uppercase text-sm">Watch on TikTok</span>
                                </div>

                                <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
                                    <p className="text-xs text-gray-400 font-mono text-center truncate px-2">{video.title}</p>
                                </div>
                            </div>
                        ) : video.embed ? (
                            /* CASE 2: Iframe Embed (LinkedIn, etc) */
                            <div
                                className="w-full h-full [&>iframe]:w-full [&>iframe]:h-full [&>blockquote]:m-0 [&>blockquote]:h-full"
                                dangerouslySetInnerHTML={{ __html: video.embed }}
                            />
                        ) : (
                            /* CASE 3: Local Video File */
                            <>
                                <video
                                    src={video.src}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                                        <Play className="w-6 h-6 text-white fill-current" />
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <h3 className="text-xl font-bold">{video.title}</h3>
                                    <p className="text-sm text-gray-400 font-mono">{video.category}</p>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>

            {selectedVideo && (
                <div
                    className="fixed inset-0 z-[250] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
                    onClick={() => setSelectedVideo(null)}
                >
                    <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50">
                        <X className="w-8 h-8" />
                    </button>
                    <div className="w-full max-w-6xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10 relative" onClick={e => e.stopPropagation()}>
                        <video
                            src={selectedVideo.src}
                            controls
                            autoPlay
                            className="w-full h-full"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

// 2. PROJECT MODAL COMPONENT (UPDATED FOR COURSES)
const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div className="fixed inset-0 z-[100] overflow-y-auto bg-zinc-950 animate-fade-in">
            <button
                onClick={onClose}
                className="fixed top-6 right-6 z-50 p-3 bg-white text-black rounded-full hover:scale-110 transition-transform shadow-lg"
            >
                <X className="w-6 h-6" />
            </button>

            {/* Hero Section */}
            <div className="relative h-[60vh] w-full">
                <div className={`absolute inset-0 bg-gradient-to-b ${project.color} opacity-20`}></div>
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 bg-gradient-to-t from-zinc-950 to-transparent">
                    <div className="container mx-auto">
                        <span className="inline-block px-3 py-1 mb-4 text-xs font-mono border border-white/30 rounded-full text-white/80">
                            {project.category} • {project.year}
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 tracking-tighter">
                            {project.title}
                        </h1>
                    </div>
                </div>
            </div>

            {/* Content Container */}
            <div className="container mx-auto px-6 py-16 text-white">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Sidebar Info */}
                    <div className="lg:col-span-4 space-y-8">
                        <div>
                            <h3 className="text-gray-400 font-mono text-sm mb-2">MY ROLE</h3>
                            <p className="text-xl font-medium">{project.role}</p>
                        </div>
                        <div>
                            <h3 className="text-gray-400 font-mono text-sm mb-2">TOOLS & TECH</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="p-6 bg-zinc-900 rounded-2xl border border-white/5">
                            <h3 className="text-blue-400 font-bold mb-4 flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5" /> Key Results
                            </h3>
                            <ul className="space-y-3">
                                {project.results?.map((result, i) => (
                                    <li key={i} className="text-sm text-gray-300 leading-relaxed border-l-2 border-white/10 pl-4">
                                        {result}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Main Story */}
                    <div className="lg:col-span-8 space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-white">The Challenge</h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                {project.challenge || project.description}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-white">The Solution</h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                {project.solution}
                            </p>
                        </section>

                        {/* --- DYNAMIC RENDER LOGIC --- */}

                        {/* SCENARIO A: Project has Multiple Courses (University or Freelance) */}
                        {project.courses ? (
                            project.courses.map((course) => (
                                <div key={course.id} className="mt-24 pt-12 border-t border-white/10">
                                    <div className="mb-8">
                                        <h2 className="text-3xl font-bold text-white mb-2">{course.title}</h2>
                                        <p className="text-gray-400">{course.description}</p>
                                    </div>
                                    {/* Render Bento Grid for this Course */}
                                    {course.bentoData && <BentoGrid data={course.bentoData} />}

                                    {/* Render Article Grid for this Course (if any) */}
                                    {course.articles && <ProjectArticleGrid articles={course.articles} />}

                                    {/* Render Video Grid for this Course */}
                                    {course.videos && <ProjectVideoGrid videos={course.videos} />}
                                </div>
                            ))
                        ) : (
                            /* SCENARIO B: Standard Project (Kariera, Aegean) */
                            <>
                                <div className="space-y-6 mt-12">
                                    {project.bentoData && <BentoGrid data={project.bentoData} />}
                                </div>
                                {/* NEW: Render Article Grid if articles exist */}
                                {project.articles && <ProjectArticleGrid articles={project.articles} />}

                                {project.videos && <ProjectVideoGrid videos={project.videos} />}
                            </>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

// 3. MAIN APP COMPONENT
export default function App() {
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedProject]);

    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-scroll {
        animation: scroll 20s linear infinite;
      }
      .animate-fade-in {
        animation: fadeIn 1s ease-out;
      }
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      /* Hide scrollbar utility */
      .scrollbar-hide::-webkit-scrollbar {
          display: none;
      }
      .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
      }
    `;
        document.head.appendChild(style);
        return () => document.head.removeChild(style);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white selection:bg-blue-500 selection:text-white font-sans">
            <Nav />
            <Hero />
            <Work onProjectClick={setSelectedProject} />
            <Playground />

            <Services />
            <About />
            <Contact />

            <footer className="py-8 bg-black text-center text-gray-600 text-sm border-t border-zinc-900">
                © {new Date().getFullYear()} Alexandros Prepis. Crafted with React & Tailwind.
            </footer>

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </div>
    );
}