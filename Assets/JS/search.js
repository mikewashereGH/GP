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
                    <p class="box-content-header">Web Designing</p>
                    <p class="box-content-subheader">Prototyping</p>
                </div>
                <div class="box-progress-wrapper">
                    <p class="box-progress-header">Progress</p>
                    <div class="box-progress-bar">
                        <span class="box-progress" style="width: 60%; background-color: #ff942e"></span>
                    </div>
                    <p class="box-progress-percentage">60%</p>
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
                        2 Days Left
                    </div>
                </div>
            </div>
        </div>j
                `
            x.appendChild(elem)
        }
    }
}