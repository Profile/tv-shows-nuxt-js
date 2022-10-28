<template>
  <b-navbar toggleable="lg" type="dark" variant="secondary">
    <b-container>
      <b-navbar-brand href="/">
        <img
          width="150"
          src="https://static.tvmaze.com/images/tvm-header-logo.png"
          alt="tv-maze"
        />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form action="/search">
            <b-form-input
              name="q"
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>
<script>
export default {
  name: 'Header',
}
</script>
