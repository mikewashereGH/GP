let jsonData = `[
    {
        "Name": "Infectio",
        "Difficulty": "5",
        "Type": "Puzzle",
        "Preview": "https://i.ibb.co/NSY2k1c/e.png",
        "Play": "../TR_Gamevity/Pages/Games/Infectio/index.html",
        "Open": "index.html",
        "Date": "02/18/23",
        "Time": "05:40 PM",
        "Status": "Available",
	    "ID": "1"
    },
    {
        "Name": "Infectio",
        "Difficulty": "5",
        "Type": "Puzzle",
        "Preview": "https://i.ibb.co/NSY2k1c/e.png",
        "Play": "../TR_Gamevity/Pages/Games/Infectio/index.html",
        "Open": "index.html",
        "Date": "02/18/23",
        "Time": "05:40 PM",
        "Status": "Available",
	    "ID": "1"
    },
    {
        "Name": "Infectio",
        "Difficulty": "5",
        "Type": "Puzzle",
        "Preview": "https://i.ibb.co/NSY2k1c/e.png",
        "Play": "../TR_Gamevity/Pages/Games/Infectio/index.html",
        "Open": "index.html",
        "Date": "02/18/23",
        "Time": "05:40 PM",
        "Status": "Available",
	    "ID": "1"
    },
    {
        "Name": "Infectio",
        "Difficulty": "5",
        "Type": "Puzzle",
        "Preview": "https://i.ibb.co/NSY2k1c/e.png",
        "Play": "../TR_Gamevity/Pages/Games/Infectio/index.html",
        "Open": "index.html",
        "Date": "02/18/23",
        "Time": "05:40 PM",
        "Status": "Available",
	    "ID": "2"
    },
    {
        "Name": "Infectio",
        "Difficulty": "5",
        "Type": "Puzzle",
        "Preview": "https://i.ibb.co/NSY2k1c/e.png",
        "Play": "../TR_Gamevity/Pages/Games/Infectio/index.html",
        "Open": "index.html",
        "Date": "02/18/23",
        "Time": "05:40 PM",
        "Status": "Available",
	    "ID": "1"
    },
    {
        "Name": "Infectio",
        "Difficulty": "5",
        "Type": "r",
        "Preview": "https://i.ibb.co/NSY2k1c/e.png",
        "Play": "../TR_Gamevity/Pages/Games/Infectio/index.html",
        "Open": "index.html",
        "Date": "02/18/23",
        "Time": "05:40 PM",
        "Status": "zzz",
	    "ID": "2"
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
            const counts = {};

            for (const num of obj.Name) {
                counts[num] = counts[num] ? counts[num] + 1 : 1;
            }

            console.log(counts);
            document.getElementById("A_Contents").innerHTML = counts[obj.length];

            const elem = document.createElement("p")

            elem.innerHTML = `
            <div class="project-box-wrapper">
            <div class="project-box" style="background-color: #fee4cb;">
                <div class="project-box-header">
                    <span>December 10, 2020</span>
                    <div class="more-wrapper">
                        <button class="project-btn-more">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-more-vertical">
                                <circle cx="12" cy="12" r="1" />
                                <circle cx="12" cy="5" r="1" />
                                <circle cx="12" cy="19" r="1" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="project-box-content-header">
                    <p class="box-content-header">${obj.Name}</p>
                    <p class="box-content-subheader">${obj.Type}</p>
                </div>
                <div class="box-progress-wrapper">
                    <p class="box-progress-header">Difficulty</p>
                    <div class="box-progress-bar">
                        <span class="box-progress" style="width: ${obj.Difficulty}%; background-color: #ff942e"></span>
                    </div>
                    <p class="box-progress-percentage">${obj.Difficulty}%</p>
                </div>
                <div class="project-box-footer">
                    <div class="participants">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                            alt="participant">
                        <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                            alt="participant">
                        <button class="add-participant" style="color: #ff942e;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-plus">
                                <path d="M12 5v14M5 12h14" />
                            </svg>
                        </button>
                    </div>
                    <div class="days-left" style="color: #ff942e;">
                        ${obj.Status}
                    </div>
                </div>
            </div>
        </div>
                `
            x.appendChild(elem)
        }
    }
}