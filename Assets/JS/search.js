let jsonData = `[
    {
        "Name": "Crossy Road",
        "Type": "Arcade",
        "Preview": "https://play-lh.googleusercontent.com/V31nfvzNcu_47lr8y2L7m3uw9azrpGyox88gpzhQxwfZSXliFJmIRVSlYJL1eOo_X2U",
        "Play": "../TR_Gamevity/Pages/Games/Crossy_Road/index.html",
        "Open": "index.html",
        "Date": "02/18/23",
        "Time": "01:43 PM",
        "Status": "I0",
	    "ID": "NA"
    },
    {
        "Name": "Tower Blocks",
        "Type": "Strategy",
        "Preview": "https://androidcommunity.com/wp-content/uploads/2016/02/featured-stack.jpg",
        "Play": "../TR_Gamevity/Pages/Games/Tower_Blocks/index.html",
        "Open": "index.html",
        "Date": "02/18/23",
        "Time": "05:22 PM",
        "Status": "I0",
	    "ID": "NA"
    },
    {
        "Name": "Infectio",
        "Type": "Puzzle",
        "Preview": "https://i.ibb.co/NSY2k1c/e.png",
        "Play": "../TR_Gamevity/Pages/Games/Infectio/index.html",
        "Open": "index.html",
        "Date": "02/18/23",
        "Time": "05:40 PM",
        "Status": "A0",
	    "ID": "NA"
    },
    {
        "Name": "Path Finder",
        "Type": "Strategy",
        "Preview": "https://i.ibb.co/tQySgz9/Screenshot-2023-02-22-19-08-07.png",
        "Play": "../TR_Gamevity/Pages/Games/Path_Finder/index.html",
        "Open": "index.html",
        "Date": "02/22/23",
        "Time": "07:09 PM",
        "Status": "I1",
	    "ID": "NA"
    }
]`

let data = JSON.parse(jsonData)

function search_jsonData() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.querySelector('#list-holder');
    x.innerHTML = ""

    for (i = 0; i < data.length; i++) {
        let obj = data[i];

        if (
            obj.Name.toLowerCase().includes(input) ||
            obj.Type.toLowerCase().includes(input) ||
            obj.Status.toLowerCase().includes(input)
        ) {
            const elem = document.createElement("p")

            elem.innerHTML = `
	    <br>
                <div class='bg-white p-8 rounded-lg shadow-md flex max-w-lg'>
                    <div class='w-1/2'>
                        <h1 class='text-gray-900 text-xl font-black '>${obj.Name}</h1>
                    <div class='flex my-6'>
                        <p class='text-gray-600 text-center mr-8'>${obj.Type} <span class='text-gray-400 block text-xs'>Type</span></p>
                        <p class='text-gray-600 text-center'>${obj.Status} <span class='text-gray-400 block text-xs'>Status</span></p>
                    </div>
                    <a href="${obj.Play}"><button class='py-1 text-sm px-6 bg-green-500 text-white rounded'>Play</button></a>
                    <a href="${obj.Open}"><button class='py-1 text-sm px-6 bg-blue-500 text-white rounded'>Open</button></a>
                    </div>
                        <img class='w-1/2 h-auto rounded' src='${obj.Preview}' alt='Game Preview Unavailable'>
                    </div>
                `
            x.appendChild(elem)
        }
    }
}