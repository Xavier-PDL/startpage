const sources = [
    { 
        title: " general", 
        links: [
            {
                title: "gmail", 
                href: "https://www.gmail.com"
            },
            {
                title: "youtube", 
                href: "https://www.youtube.com/"
            },
            {
                title: "drive", 
                href: "https://www.drive.google.com/"
            },
            {
                title: "canvas", 
                href: "https://fiu.instructure.com"
            },
        ]
    },
    { 
        title: " social", 
        links: [
            {
                title: "whatsapp", 
                href: "https://www.youtube.com/"
            },
            {
                title: "r/piracy", 
                href: "https://www.reddit.com/r/Piracy"
            },
            {
                title: "r/vimporn", 
                href: "https://www.reddit.com/r/vimporn/"
            },
            {
                title: "r/unixporn", 
                href: "https://www.reddit.com/r/unixporn"
            },
            {
                title: "r/startpages", 
                href: "https://www.reddit.com/r/startpages/"
            },
            {
                title: "r/battlestations", 
                href: "https://www.reddit.com/r/battlestations/"
            },
        ]
    },
    { 
        title: " freedom", 
        links: [
            {
                title: "1337x",
                href: "https://1337x.to/"
            },
            {
                title: "rarbg",
                href: "https://rarbg.to/torrents.php"
            },
            {
                title: "the-eye",
                href: "https://the-eye.eu/"
            },
            {
                title: "libgen",
                href: "http://libgen.li/"
            },
            {
                title: "zlib",
                href: "https://z-lib.org/"
            },
        ]
    },
    { 
        title: " tech", 
        links: [
            {
                title: "github", 
                href: "https://github.com/Xavier-PDL"
            },
            {
                title: "nerdfonts",
                href: "https://www.nerdfonts.com/cheat-sheet"
            },
            {
                title: "guidedhacking", 
                href: "https://guidedhacking.com/"
            },
            {
                title: "bleepingcomputer",
                href: "https://www.bleepingcomputer.com/"
            }
        ]
    },
];

function populate() {
    window.focus();
    const linkContainers = document.getElementsByClassName("links-container");
    for(let i = 0; i < linkContainers.length; i++) {
        const element = linkContainers.item(i);
        console.log(element);
        const title = element.firstElementChild;
        title.innerText = sources[i].title;
        const links = element.lastElementChild.firstElementChild;
        const linksArray = sources[i].links;
        for(let j = 0; j < linksArray.length; j++) {
            const newItem = createLink( linksArray[j].title, 
                                        linksArray[j].href );
        links.appendChild(newItem);
        }

    }
}

function createLink(linkText, linkHref) {
    const listItem = document.createElement('li');
    listItem.innerHTML = '<a href="' + linkHref + '">' + linkText + '</a>';
    return listItem;
}
