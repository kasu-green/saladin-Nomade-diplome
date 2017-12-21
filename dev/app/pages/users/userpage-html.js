export function UserPageHTML(data){
  return `
    <header>
      <nav class="flex align-center just-between">
        <div class="flex">
          <img src="../src/img/salad.png" alt="logo Saladin">
          <h2 class="self-center">Sujets</h2>
        </div>
        <div class="flex">
          <div id="btnLinksList"></div>
          <button id="logout">logout</button>
        </div>
      </nav>
    </header>

    <section class="flex flex-column align-center just-center">
      <form id="userSearchForm" action="" class="flex align-center">
        <!-- Recherche autocomplete -->
      </form>

      <ul id="listSubjects" class="collection"></ul>

      <div class="fixed-action-btn">
        <a id="addSubject" class="btn-floating btn-large waves-effect waves-light red">
          <i class="material-icons">add</i>
        </a>
      </div>

    </section>
  `
}
