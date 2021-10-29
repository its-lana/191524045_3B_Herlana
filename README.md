<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Soherlana/191524045_3B_Herlana">
    <img src="server/images/logo.jpg" alt="Logo" width="80" height="80">
  </a>


<h3 align="center">Customer</h3>

  <p align="center">
    Customer management web is a web that is used to manage one of the tables from the dvdrental database, precisely the Customer table. This website was created for UTS assignments. 
    <br />
    <a href="https://github.com/Soherlana/191524045_3B_Herlana"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Soherlana/191524045_3B_Herlana">View Demo</a>
    ·
    <a href="https://github.com/Soherlana/191524045_3B_Herlana/issues">Report Bug</a>
    ·
    <a href="https://github.com/Soherlana/191524045_3B_Herlana/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT width="900" height="450"-->
## About The Project
<h3 align="left">Home</h3>
<div align="center">
<a href="https://github.com/Soherlana/191524045_3B_Herlana/tree/main/server/images">
    <img src="server/images/ss_home.png" alt="Logo">
</a>
</div>
<h3 align="left">List Customer</h3>
<div align="center">
<a href="https://github.com/Soherlana/191524045_3B_Herlana/tree/main/server/images">
    <img src="server/images/ss_list.png" alt="Logo">
</a>
</div>
<h3 align="left">Search Customer</h3>
<div align="center">
<a href="https://github.com/Soherlana/191524045_3B_Herlana/tree/main/server/images">
    <img src="server/images/ss_search.png" alt="Logo">
</a>
</div>
<h3 align="left">Edit Customer</h3>
<div align="center">
<a href="https://github.com/Soherlana/191524045_3B_Herlana/tree/main/server/images">
    <img src="server/images/ss_edit.png" alt="Logo">
</a>
</div>
<h3 align="left">Add Customer</h3>
<div align="center">
<a href="https://github.com/Soherlana/191524045_3B_Herlana/tree/main/server/images">
    <img src="server/images/ss_add.png" alt="Logo">
</a>
</div>

<!-- [![Product Name Screenshot][product-screenshot]](https://example.com) -->

###### Mini Project Web Development Course

This website was created for UTS assignments for the Web Development course. In this application, I implemented using Node JS and Postgre SQL for Backend and using Vue JS and Vuetify for Frontend.
Features on this website:

- Already using RestFull API
- Search feature by name (can be First Name or Last Name)
- CRUD operations that already use Vue as FrontEnd are:
1. Adding new customers,
2. View all customer lists
3. Editing specific customer data
4. Deleting certain customers
5. Delete all customers 


<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* Node JS
* Express
* PostgreSQL
* Vue JS
* Vuetify

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This will give instructions on setting up your project locally. To get a local copy up and running follow these simple example steps.

### Installation

1. Clone the repo
   ```sh
   https://github.com/Soherlana/191524045_3B_Herlana.git
   ```
2. Create .env file in server directory and put this
   ```sh
   DATABASE_URL=postgres://{username}:{password}@{db_host}:{db_port}/{database_name}
   ``` 
   example :
   ```sh
    DATABASE_URL=postgres://postgres:pg123@localhost:5432/dvdrental
   ```
   
4. Open two terminals to the project folder, then:
    ```sh
    cd server
    nodemon server
   ```
   ```sh
   cd client
   npm install vue
   npm run serve
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

To use this application, there are some features, those are:

1. Use the Add Customer button to add new Customer.
2. Use the Search button to search by First name or Last Name.
3. Use the Edit button (pencil symbol in the Actions column) to update specific customer data
4. Use the Delete button (the trash can symbol in the Actions column) to delete specific customer
5. Use the Remove All button to remove all customer
<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [] Analysis
- [] Collect and define requirement
- [] Development Backend Customer Web use Node js, Express, and Postgre database
- [] Development Frontend Customer Web use Vue js


See the [open issues](https://github.com/Soherlana/191524045_3B_Herlana/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Project Link: [https://github.com/Soherlana/191524045_3B_Herlana)

Project Created By: 


* [Herlana - 191524045](https://github.com/Soherlana)



<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Readme Template](https://github.com/othneildrew/Best-README-Template)
* []()
* []()

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/3BD4-Webdev-Kelompok8/NodeJS-Postgre-Stopwatch.svg?style=for-the-badge
[contributors-url]: https://github.com/Soherlana/191524045_3B_Herlana/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/3BD4-Webdev-Kelompok8/NodeJS-Postgre-Stopwatch.svg?style=for-the-badge
[forks-url]: https://github.com/Soherlana/191524045_3B_Herlana/network/members
[stars-shield]: https://img.shields.io/github/stars/3BD4-Webdev-Kelompok8/NodeJS-Postgre-Stopwatch.svg?style=for-the-badge
[stars-url]: https://github.com/Soherlana/191524045_3B_Herlana/stargazers
[issues-shield]: https://img.shields.io/github/issues/3BD4-Webdev-Kelompok8/NodeJS-Postgre-Stopwatch.svg?style=for-the-badge
[issues-url]: https://github.com/Soherlana/191524045_3B_Herlana/issues
[license-shield]: https://img.shields.io/github/license/3BD4-Webdev-Kelompok8/NodeJS-Postgre-Stopwatch.svg?style=for-the-badge
[license-url]: https://github.com/Soherlana/191524045_3B_Herlana/blob/master/LICENSE.txt

[product-screenshot]: images/screenshot.png
