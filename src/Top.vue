<template>
<div> 
  <b-navbar toggleable="md" type="dark" variant="dark">
    
  <b-container>

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="#"> <img src="./assets/img/book.png" height="23px"> Book a Seat </b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
    <b-nav-item href="./Home.vue" active>Home</b-nav-item>
    <b-nav-item href="#">About</b-nav-item>
    <b-nav-item href="#">Sponsors</b-nav-item>
    <b-nav-item href="./Contact.vue">Contact</b-nav-item>
    </b-navbar-nav>

  </b-collapse>
  </b-container>
</b-navbar>
</div>
</template>

<style>
.navbar{
  padding-top: 20px;
  background-color: #000 !important;
}
.navbar-expand-md .navbar-nav .nav-link{
  padding-right: 2rem;
}
.navbar-brand{
  font-size: 1rem;
  border: 1px solid #fff;
  padding: 7px 18px;
}
.navbar-brand img{
  padding-right: 5px;
}
</style>





