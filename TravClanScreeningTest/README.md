# Features Added:

### Custom Pagination
### For clean coding: propTypes, ESLint
### For SPA working: Routes (react-router-dom)
### For better UI/UX: Material UI, flexbox, and Styled components, Pie-chart
### For better data management: Context API, Axios

Tasks Accompalished:
## Task
Develop a Single page application with following mentioned features but not necessarily limited to it.

### Must: **(All Done)**
1. Display a list of customers (with pagination).
2. Each customer bas several bids, by default only the maximum bid
should be displayed. Also add a toggle button so that on switching
toggle only the minimum bid is displayed.
3. Enable sorting of customer list by bid amount.
4. Front-end part should be developed as SPA with ES6, React(Hooks).


### Good to have: **(All Done)**
1. Using Context Api or Custom Hooks will be a big plus.
2. Clicking on any row should redirect to a separate url where all the
selected customer's bids should be displayed. (use your creativity on how to display the data).
3. Styling is not a priority but using Material Ui(https://material-ui.com) entirely will be a plus.




## Flow of the program =>
We start from Index.js =>
__=>__ Fetches ContextProvider and Link BrowserRouter

__=>__ App.js => Routes.js (Links Routes to '/')
---(dispatches the data to the reducer from async function)---

__=>__ MainPage.js (Creates a new object which will have everything we'll be needing)

__=>__ CustomerTable.js (Table outlet Creation)
--- (Row Sort Toggle and Min/Max toggle were built are)---

__=>__ Pagination.js (**THE WHOLE CUSTOMER TABLE UI**)

__=>__ CustomerComponent.js

__=>__ CustomerRow.js (Every Singular customer's row was built from here.)
---(Hitting the route of another component)
__=>__  CustomerCard.js (Fetched Data from ContextAPI and showed here)


PS: I've added the __Social Links__ to the customer's personal profile. So, this way you'll have flexibility to either call or email her/him.
## Available Scripts

In the project directory, you can run:

### `npm start`
### `npm run build`
### `npm run eslint`