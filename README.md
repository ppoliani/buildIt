**Prerequisites**

- NodeJS v4.x
- Typings

**Install**

In the root directory

- `npm install -g typings`
- `npm i`
- `typings i`

**Run**

`npm start`

Open browser at http://localhost:3000

**Test**

`npm test`


**What could be done with more time**

- First of all, I would use a containerisation technology to run develop the app in an isolated environment. Although it might look  
an overkill to wrap the project within a docker image and then run in in a container, it is worth it as we can make that all our dependencies, configurations etc. are the same across different members of the team.

- I would also refrain from using stateful components and move the logic of dealing with the state to a centralised data store. There are  
plenty advantages of using a uni-directional data flow that resembles the awesome Elm architecture :). The advantages are more obvious when you come from a more OO approach such as Angular 1.x. The cognitive burden significantly increases when we have to deal with shared state across several pieces of our code base and it become very frustrating  when you have to maintain and debug the cause of several bugs. 
On that note, I would introduce Redux to the project or replicate the same logic in RxJS. 

- On a security note, I would refrain from hardcoding the openweathermap API key in our source code. Currently it's been added to the the webpack config but ideally this sort of data should leave on the back end. To make that happen I would use a thin middleware service that which the Client will use a contact point
to fetch the data from the third party API.

- Also currently, there is no logic that can help us avoid hitting the API limit (if there is any). We could probably introduce some sort of caching infrastructure.

- I would also add the option to select the Location, as well as, the date range.

- The data we fetch from the API is quite extensive; so I could probably display more information on the page.

- Persisting the URL state might also be a good option. We could probably store the selected day in the url state.

- I used flexbox extensively but I haven't fully tested how responsive the design is.

- I would introduce live updates with the help of a Websocket and the middleware that I mentioned earlier. If the app runs on a mobile phone, the last thing you want to do is to use polling to fetch the latest data.

- I would add mote tests. More specifically I would use the `enzyme` testing utitlities to test against the virtual DOM as well as the real DOM. 

- I could also use `react-native` to turn it to a native app that could use the current location to automatically show the weather forecast.

- Finally I tried to use the Functional paradigm across the app; so most of the function are stateless, with zero side effects and they basically perform data transformations.
