## :computer: About

The application is part of the test for junior front-end developer from Venturus.

## :construction_worker: My steps

The first step I configured the application with Typescript, after that with the layout I defined the variables for colors and the global style.
In the second step, I implement the design.
In the third step I configured the MirageJs to used real data instead of static data, com Miraje js I implemented the routes with API Fake to simulate the backend, implementing the create, edit and delete for the team.
in the four step, I studied the APISoccer to how to receive soccer players, with all players I implemented the search button to search soccer players by name.
The final step, I implemented the average for age by teams, and some simple tests.
The deadline is over and I haven't been able to complete all the steps

### Phase 1

**1. Implement Page Layout.**

- [x] 1.1Create placeholders for non implemented features.

**2. Implement "My teams" section.**

- [x] 2.1 There is no need to implement Share action
- [x] - 2.2 User must be able to sort by name and description.

**3. Ability to Create/Edit and Remove a team.**

- [x] 3.1Team information section only.
- [x] 3.1.1 All fields but description and tags are mandatory.
- [x] 3.1.2 Default value is empty for all fields.
- [x] 3.1.3 Team website must validate site URL.
- [x] 3.1.4 You must highlight fields/labels whenever user tries to create/update a team with invalid information.
- [ ] Current UI is displaying Team name as an example of an invalid field.
- [ ] 3.1.6 For tags field user must be able to enter a free text and tag will be created as soon as the user hits enter or semicolon.

**4.Ability to see what player was the most/less picked on.**

- [ ] 4.1 Replace images by player initials.

### Phase 2

- [x] 1.  Ability to search for a player name and see the list of players who matched the criteria.
- [ ] 2.  Ability to add a player to a field position through drag n drop.
- [ ] 3.  Save must store the team's players into application state.

### Phase 3

- [x] 1.  Implement "Top 5" section to the dashboard.
- [ ] 2- Ability to configure and display a given formation from the list (Soccer field must display the positions accordingly). Options:
- [ ] 3- Whenever a formation is changed all current players must be removed.
- [ ] 4.  Ability to see player information on hover (soccer field)

## How to execute the Project

### :rocket: Pre requisite to Execute

You must registered in https://dashboard.api-football.com/ and generate an API KEY.
With your key you have to replace it in _apiFootbal.ts_ on API_KEY.

```
	# Clone the project

	# Access folder
	cd venturus

	# Install dependencies
	$ yarn

	# Execute the aplication
	$ yarn start
```

## :blue_book: Main Libs used

- Axios
- formik
- mirage Js
- React Js
- React-icons
- Styled Components
- Typescript
- Testing-library
