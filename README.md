# Skincare & Beauty Services

#### By _**Grace Kostanich**_    

#### A website made for providing skincare and cosmetic services to users. It will give users the ability to schedule & purchase a variety of treatments and services from a licensed esthetician. All bookings and financial processes will be done within the webpage.   
*`Project still in development`*

---

## Description

_This is a React application using styled-components and bootstrap CSS for styling. It uses JavaScript for all functionality, and a cloud-hosted Firestore database._

---

## Technologies Used

```
React
JavaScript
CSS
HTML
Firebase
```

## Setup and Installation Requirements
**⚠️ This Setup assumes you have GitBash pre-installed ⚠️**

If needed, please navigate to this link:  
https://git-scm.com/download/  
Download Git and follow the setup wizard. 

**NOTE**: _For security purposes, the actual .env file for this project will not be provided. If you'd like to run this project, see_ [Creating a Firestore Database](#skincare-&-beauty-services---setup)

---

# Skincare & Beauty Services - `Setup`

<details>
<summary><strong>Creating a Firestore Database</strong></summary>
<ol>
<li>Navigate to <a href="https://firebase.google.com/">Firebase</a>
<strong>bold text</strong>
<br>
</details>

 
<details>
<summary><strong>Running the Application in Your Browser</strong></summary>
<ol>
<li>Copy the git repository url: https://github.com/User8240/Skincare-and-Beauty-Services.git
<li>Open a GitBash terminal and navigate to your Desktop with <strong>cd</strong> command
<li>Run,  
<strong>$ git clone https://github.com/User8240/Skincare-and-Beauty-Services.git</strong>
<li>In the terminal, navigate into the <em>projects</em> root directory,"skincare-and-beauty-services".
<li>Run,  
<strong>$ npm install</strong>
<li>Once the installation is completed, run  
<strong>$ npm run start</strong>
<br>
</details>

---
## Paths

Note: [YOUR-PORT-#] will be automatically provided by your system when you run the application 

#### Home page URL
```
http://localhost:[YOUR-PORT-#]
```
#### Admin Portal URL
```
http://localhost:[YOUR-PORT-#]/sign-in
```

#### Example URL's
```
http://localhost:3000
http://localhost:3000/sign-in
```


## Project Component Diagram

![Image](component-diagram.png)

---
 
This program was built using [Create React App](https://github.com/facebook/create-react-app).
 
---

## Known Bugs

_While signed in, the admin portal will temporarily display the main homepage before checking if an authenticated user is signed in._


> ### Research & Planning Log
> 
> #### Friday, 09/16
> * 8:00: Work on Capstone Proposal
> * 9:00: Come up with possible designs for client
> * 10:00: Continue designing / drawing
> * 11:00: Review React CSS lesson
> * _LUNCH BREAK_
> * 1:00: Find resources on CSS in React
> * 3:00: Watch videos / explore resources found
> * 4:00: Work on README

> #### Friday, 09/23
> * 9:00: Plan necessary components
> * 10:00: Begin component diagram
> * 11:00: Create project | Clean up files
> * 11:30: Update Capstone Proposal with MVP correction
> * _LUNCH BREAK_
> * 1:00: Implement components 
> * 2:00: Update / fix component diagram
> * 4:00: Continue to build out basic component structure 

> #### Friday, 09/30
> * 9:11: Continue adding to basic component structure 
> * 10:11: WIP: Build out controller component
> * 11:04: WIP: Connect Home and Controller components
> * 11:57: WIP: Bugfixing components
> * _LUNCH BREAK_
> * 1:13: Begin adding necessary functions in controller
> * 3:00: Create toggle button
> * 4:04: Add navigation bar & necessary functionality  

> #### Tuesday, 10/4
> * 9:00: Begin to add firebase to project
> * 10:07: WIP: Continue to implement firebase
> * 11:03: WIP: Refactor code to use firebase
> * _LUNCH BREAK_
> * 1:03: BUGFIX: Get data to firebase
> * 2:06: Pull data from firebase
> * 3:20: Setup listener on appointment list
> * 4:11: Begin implementing Admin pages

> #### Wednesday, 10/5
> * 9:06: WIP: Build out Admin components 
> * 10:17: BUGFIX: Continue to build out and bugfix admin components
> * 11:08: Add necessary functionality for all admin components
> * _LUNCH BREAK_
> * 1:15: Continue adding necessary functions to controller
> * 2:12: WIP: Structure the admin components
> * 2:54: Restructure currently visible states if statement for authentication
> * 4:30: WIP: Implement authentication

## License

[MIT](https://opensource.org/osd)

Copyright (c) _9/16/2022_ _Grace Kostanich_
