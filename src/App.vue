<template>
  <div id="app">
    <div class="top">
      <div class="mini-nmeSite">
        <h1>Mystery Box</h1>
      </div>
      <nav class="navigation">
        <ul class="JiiH">
          <router-link to="/">
            <li>Accueil</li>
          </router-link>
          <router-link to="/Tous">
            <li>Tous</li>
          </router-link>
          <router-link to="/Femmes">
            <li>Femmes</li>
          </router-link>
          <router-link to="/Homme">
            <li>Homme</li>
          </router-link>
          <router-link to="/Panier">
            <li class="entour">Panier</li>
          </router-link>
        </ul>
      </nav>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  width: 100vw;
  padding: 0;
  margin: 0;
}

.top {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  z-index: 1;
  background-color: #000;

  a {
    text-decoration: none;
  }

  .mini-nmeSite h1 {
    font-family: "Merienda", cursive;
    font-size: 14px;
    font-weight: 100;
    color: bisque;
    text-transform: uppercase;
  }

  .JiiH {
    display: flex;
    list-style: none;
    padding: 0;
  }

  .JiiH li {
    padding: 10px 40px;
    color: blanchedalmond;
    text-transform: uppercase;
    font-family: 'Julius Sans One', sans-serif;
    margin: 0 5px;
    transition: .5s;
    cursor: pointer;
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
