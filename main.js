console.log("talking");

      fetch('https://randomuser.me/api/?results=1')

        .then(
          function(response) {
            if (response.status !== 200) {
              console.log('Looks like there was a problem. Status Code: ' +
                response.status);
              return;
            }

            // Examine the text in the response
            response.json().then(function(data) {
              //console.log(data.results[0].name.first);
              let name = data.results[0].name.first+" "+data.results[0].name.last;
              let body = document.getElementById('body');
              let header = document.createElement("header");
              let h1 = document.createElement("h1");
              let headerContent = document.createTextNode(name);
              // Create header
              body.appendChild(header);
              header.appendChild(h1);
              h1.appendChild(headerContent);
              // Create content
              let content = document.createElement("div");
              content.setAttribute("id","content");
              body.appendChild(content);
              // Create basics
              let basics = document.createElement("div");
              basics.setAttribute("id","basics");
              content.appendChild(basics);
              let url = data.results[0].picture.large;
              let email = data.results[0].email;
              let company = data.results[0].login.username;
              let website = data.results[0].picture.medium;

              let basicsContent = `
                <h2>The Basics</h2>
                <ul>
                  <li><div class="label">Name: </div>
                      <div> ${name}</div>
                  </li>
                  <li><div class="label">Github URL </div>
                      <a href="${url}"> GithubUserName</a></div>
                  </li>
                  <li><div class="label">Email: </div>
                      <div> ${email}</div>
                  </li>
                  <li><div class="label">Company:</div>
                      <div> ${company}</div>
                  </li>
                  <li><div class="label">Website: </div>
                      <a href="${website}"> ThisIsTheWebsite</a></div>
                  </li>
                </ul>
              `
              basics.innerHTML = basicsContent;

              // Create Story and Photo section
              let story = document.createElement("div");
              story.setAttribute("id","story");
              content.appendChild(story);
              // Using object properties for lorem ipsum
              let bio = Object.getOwnPropertyNames(data.results[0]).join(' ');
              let img = data.results[0].picture.large;
              let storyContent = `
              <h2>The Story</h2>
              <div id="storyWrap">
              <p>${bio} ${bio} ${bio} ${bio} ${bio} ${bio} </p>
              <div id="photo">
              <img src="${img}" />
              </div>
              </div>
              `
              story.innerHTML = storyContent;

            });
          }
        )
