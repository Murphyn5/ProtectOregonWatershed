const NewsList = [
    {
        id: 1,
        title: "Lincoln County residents, commissioners should oppose timber spraying",
        source: "Yachats News",
        date_posted: "10-21-2023",
        link: "https://yachatsnews.com/lincoln-county-residents-commissioners-should-oppose-timber-spraying/",
        details: "To the editor: Judging by the positive response from motorists to our protests along U.S. Highway 101 in Seal Rock in opposition to the spraying of Beaver Creek watershed, I would jump to the conclusion that the people of Lincoln County do not wish to live in a chemical stew. We are united in our … "
    },
    {
        id: 2,
        title: "Science is the focus, chemical to be sprayed causes cancer",
        source: "Newport NewsTimes",
        date_posted: "09-23-2023",
        link: "https://www.newportnewstimes.com/opinion/science-is-the-focus-chemical-to-be-sprayed-causes-cancer/article_15c8d06a-58c1-11ee-b080-8b1ef9a56407.html",
        details: "There is plenty of scientific research and court decisions proving glyphosate, the chemical planned to be sprayed in the Beaver Creek area, can cause cancer in humans and is harmful to the environment..."
    },
    {
        id: 3,
        title: "Legislative Action Causes Threat To Estuary",
        source: "Newport NewsTimes",
        date_posted: "09-27-2023",
        link: "https://www.newportnewstimes.com/opinion/column-legislative-action-causes-threat-to-estuary/article_936f554a-525c-11ee-b7d6-af3df7789d16.html",
        details: "A threat looms over the Coos Bay estuary. This threat could damage fisheries, put public safety at risk, distort the local economy, and reduce the estuary's capacity for storing carbon and thus helping to moderate climate change..."
    },
    {
        id: 4,
        title: "Lock Down For Old Growth",
        source: "Eugene Weekly",
        date_posted: "09-26-2023",
        link: "https://eugeneweekly.com/2023/07/06/locked-down-for-old-growth-forests/",
        details: "On the morning of July 5, dozens of community members and organizers from Cascadia Forest Defenders protested outside of Sierra Pacific Industries to stand in solidarity against timber sales..."
    },
    {
        id: 5,
        title: "Protestors Launch Tree Sit to Protect Old Growth",
        source: "Cascadia Forest Defenders",
        date_posted: "09-26-2023",
        link: "https://forestdefensenow.wordpress.com/2021/09/14/protestors-launch-tree-sit-to-protect-old-growth-forest-from-logging/",
        details: "Protestors Launch Tree Sit to Protect Old Growth Forest from Logging Cascadia Forest Defenders Occupy Trees in Willamette National Forest to Stop Proposed Flat Country Timber Sale Willamette National Forest - Members of Cascadia Forest Defenders have occupied trees in the Willamette National Forest's …"
    },
    {
        id: 6,
        title: "NASA Imagery Shows Impact of Logging in OR Coast Watersheds",
        source: "Oregon Capital Chronicle",
        date_posted: "09-19-2023",
        link: "https://oregoncapitalchronicle.com/2023/09/19/nasa-imagery-shows-scale-impacts-of-logging-in-drinking-watersheds-on-oregon-coast/",
        details: "Oregon's coastal communities that rely on drinking water from forested rivers and creeks have lost substantial tree cover during the last 20 years, a recent NASA analysis found. That's bad news for residents and the environment, the report indicates..."
    },
    {
        id: 7,
        title: "Timber company owner says it will not spray herbicides by helicopter in South Beaver Creek, but use ground crews instead",
        source: "Yachats News",
        date_posted: "09-12-2023",
        link: "https://yachatsnews.com/timber-company-owner-says-it-will-not-spray-herbicides-by-helicopter-in-south-beaver-creek-but-use-ground-crews-instead/",
        details: "There will be no aerial spraying of herbicides on 473-acres of clear-cut timberlands in the South Beaver Creek watershed northeast of Seal Rock. The 86-year-old landowner, Sorn Nymark, walked into Lincoln County commissioners' offices Monday to hand deliver a letter stating that his company — Ane Forests of Oregon - has heard the public outcry opposing spraying herbicides by helicopter and so will instead rely on crews using backpack sprayers..."
    },
    {
        id: 8,
        title: "Opposition to Herbicide Spraying Continues",
        source: "Newport NewsTimes",
        date_posted: "09-12-2023",
        link: "https://www.newportnewstimes.com/news/opposition-to-herbicide-spraying-continues/article_e56ebe82-4d9b-11ee-9535-0f38e4f36afa.html",
        details: "Aside from some local resident meetings and protests, there have been no developments this week regarding a property owner's intentions to spray herbicides by helicopter over his property east of Seal Rock..."
    }
]

const DocumentariesList = [
    {
        id: 1,
        title: "A Testimony: Beaver Creek Residents Unite!",
        source: "Willow Kasner",
        description: "A story about Beaver Creek residents",
        link: "https://www.youtube.com/watch?v=zyBP1BHMEAg",
    },
    {
        id: 2,
        title: "Siletz Gorge to the Valley of the Giants",
        source: "Lincoln County Community Rights",
        description: "15 minute tour through our beautiful Siletz Gorge",
        link: "https://www.youtube.com/watch?v=RtF1gMBVm94",
    },
    {
        id: 3,
        title: "Valley of the Giants: Coast Range's gift of intact Old Growth Forest",
        source: "Lincoln County Community Rights",
        description: "Tour through  the forest",
        link: "https://www.youtube.com/watch?v=e_ww0H0Xx10",
    },
    {
        id: 4,
        title: "Big Creek Tour: 3 minutes on aerial spraying",
        source: "Lincoln County Community Rights",
        description: "Newport water is from Big Creek- how much has been sprayed?",
        link: "https://www.youtube.com/watch?v=LQ3ccOwn054",
    },
    {
        id: 5,
        title: "My Experience With Pesticides: It effected my whole family",
        source: "Loren, A Farm Owner",
        description: "A heart felt story about a farmer, his wife and family",
        link: "https://www.youtube.com/watch?v=AbwqEOdAJQo&feature=youtu.be",
    },
    {
        id: 6,
        title: "Hot Spot for Birth Defects: Excerpt 1",
        source: "Renee Stringham, MD",
        description: "Lincoln County stories of medical practices & politics, research & activism",
        link: "https://www.youtube.com/watch?v=D9BURFN5P9k",
    },
    {
        id: 7,
        title: "Hot Spot for Birth Defects: Excerpt 2",
        source: "Renee Stringham, MD",
        description: "Lincoln County stories of medical practices & politics, research & activism",
        link: "https://www.youtube.com/watch?v=HRXCjXdUt2k",
    },
    {
        id: 8,
        title: "Citizens for a Healthy County: Harvard Economist talks Forest",
        source: "Ernie Niemi, Economist ",
        description: "Economic Picture of Forestry in Lincoln County",
        link: "https://www.youtube.com/watch?v=XXOlen9PQs0",
    },
    {
        id: 9,
        title: "Regulatory Whiplash: Federalist Society",
        source: "Will Trackman & Adam White",
        description: "Transferring power from one political party to the next",
        link: "https://www.youtube.com/watch?v=_UA7Msyk3cE",
    },
    {
        id: 10,
        title: "Water- Earth's Blood: The old and new water Paradigm",
        source: "Zachary Weiss",
        description: "Restoring our Planet's Health",
        link: "https://www.youtube.com/watch?v=Vik4vUN3SPI",
    }
]


const RecordedMeetingsList = [
    {
        id: 1,
        title: "Oregon Community Rights Network",
        description: "Kai Huschke, from Oregon Community Rights Network, spoke on grassroots organizing for local decision-making and how it relates to the legalized spraying of toxic chemicals over the Beaver Creek watershed. More information about ORCN- Oregon Community Rights Network’s mission is to support and empower communities to secure local self determination and self-governance rights, superior to corporate power, in order to protect fundamental rights, quality of life, the natural environment, public health, and safety. Visit orcrn.org to learn more",
        meeting_date: "09-24-2023",
        link: "https://www.youtube.com/watch?v=F0_zd35ZUBg",
        image: "/recorded_meetings_img1.jpeg"
    }
]


export {NewsList, DocumentariesList, RecordedMeetingsList};