const c = document.getElementById("commands");
const searchBar = document.getElementById("searchCommand");
const horizonCommands = [
    {
        "name": "gstart",
        "aliases": ["g-start", "gs"],
        "accessibility": "Admin",
        "category": "Giveaway",
        "description": "Starts a giveaway in the mentioned channel.",
        "usage": "gstart <mentioned channel> &lt;time&gt; &lt;winners&gt; &lt;prize&gt;",
        "deprecated": [
            true, "Not reliable, might stop or self-terminate randomly. This might be caused because of unreliable database. Might be fixed later."
        ],
        "search": ["gstart", "gs", "g-start", "admin", "giveaway", "deprecated"]
    },
    {
        "name": "greroll",
        "aliases": ["g-reroll", "gr"],
        "accessibility": "Admin",
        "category": "Giveaway",
        "description": "Rerolls a giveaway with provided Giveaway message ID.",
        "usage": "greroll <Giveaway ID>",
        "deprecated": [
            true, "If the original gstart command is terminated or does not exist in the database, this won't work."
        ],
        "search": [
            "greroll", "g-reroll", "gr", "admin", "giveaway", "deprecated"
        ]
    },
    {
        "name": "greroll",
        "aliases": ["g-reroll", "gr"],
        "accessibility": "Admin",
        "category": "Giveaway",
        "description": "Rerolls a giveaway with provided Giveaway message ID.",
        "usage": "greroll <Giveaway ID>",
        "deprecated": [
            true, "If the original gstart command is terminated or does not exist in the database, this won't work."
        ],
        "search": [
            "greroll", "g-reroll", "gr", "admin", "giveaway", "deprecated"
        ]
    },
    {
        "name": "gend",
        "aliases": ["g-end", "ge"],
        "accessibility": "Admin",
        "category": "Giveaway",
        "description": "Picks a giveaway winner instantly, ending the giveaway.",
        "usage": "gend <Giveaway ID>",
        "deprecated": [
            true, "If the original gstart command is terminated or does not exist in the database, this won't work."
        ],
        "search": [
            "gend", "g-end", "ge", "admin", "giveaway", "deprecated"
        ]
    },
    {
        "name": "gend",
        "aliases": ["g-end", "ge"],
        "accessibility": "Admin",
        "category": "Giveaway",
        "description": "Picks a giveaway winner instantly, ending the giveaway.",
        "usage": "gend <Giveaway ID>",
        "deprecated": [
            true, "If the original gstart command is terminated or does not exist in the database, this won't work."
        ],
        "search": [
            "gend", "g-end", "ge", "admin", "giveaway", "deprecated"
        ]
    },
    {
        "name": "gend",
        "aliases": ["g-end", "ge"],
        "accessibility": "Admin",
        "category": "Giveaway",
        "description": "Picks a giveaway winner instantly, ending the giveaway.",
        "usage": "gend <Giveaway ID>",
        "deprecated": [
            true, "If the original gstart command is terminated or does not exist in the database, this won't work.", "If the original gstart command is terminated or does not exist in the database, this won't work."
        ],
        "search": [
            "gend", "g-end", "ge", "admin", "giveaway", "deprecated"
        ]
    },
    {
        "name": "gend",
        "aliases": ["g-end", "ge"],
        "accessibility": "Admin",
        "category": "Giveaway",
        "description": "Picks a giveaway winner instantly, ending the giveaway.",
        "usage": "gend <Giveaway ID>",
        "deprecated": [
            true, "If the original gstart command is terminated or does not exist in the database, this won't work."
        ],
        "search": [
            "gend", "g-end", "ge", "admin", "giveaway", "deprecated"
        ]
    },
]
searchBar.addEventListener('keyup', (e) => {
    const search = e.target.value.toLowerCase();
    const filtered = horizonCommands.filter((command) => {
        return command.search.join('').includes(search);
    })
    displayCommands(filtered);
    manyCommands(filtered);
})
const manyCommands = (commands) => document.getElementById("manyCommands").innerHTML = `<h6>${commands.length} commands were found.</h6>`
const displayCommands = (commands) => c.innerHTML = commands.map(x =>
    `<div class="p-2 bg-light rounded m-3 yem" style="display: block; position: relative;">
    <a href="https://adrieljs.xyz/horizon/commands/${x.name}"><i class="far fa-file" style="top: 8px; right: 8px; position: absolute; font-size: 25px;"></i></a>
    <h6>Name:</h6> <p class="euclid">${x.name}</p><br>
    <h6>Category:</h6> <p class="euclid">${x.category}</p><br>
    <h6>Aliases:</h6> <p class="euclid">${x.aliases.map(y => ` ${y}`)}</p><br>
    <h6>Accessibility:</h6> <p class="euclid">${x.accessibility}</p><br>
    <h6>Description:</h6> <p class="euclid">${x.description}</p><br>
    <h6>Usage:</h6> <p class="euclid">${x.usage.replace("<", "&lt;").replace(">", "&gt;")}</p><br>
    ${x.deprecated[0] ? `<div class="message message--error m-1"><b>DEPRECATED:</b> ${x.deprecated[1]}</div>` : ''}
    </div>`
).join('');
displayCommands(horizonCommands);