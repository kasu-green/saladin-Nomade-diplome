export function CreateFormHTML(data){
  return `
    <header>
      <nav class="flex align-center just-between">
        <div class="flex">
          <img src="../src/img/salad.png" alt="logo Saladin">
          <h2 class="self-center">Créer / Modifier</h2>
        </div>
        <div class="flex">
          <div id="btnLinksList"></div>
          <button id="logout">logout</button>
        </div>
      </nav>
    </header>

    <section class="cover flex flex-column align-center just-center">
      <form id="searchForm" action="" class="flex flex-column align-stretch">
        <!-- <input type="text" placeholder="recherche"> -->
        <!-- Switch -->
        <div class="switch">
          <label class="flex just-between align-base">
            Créer un nouveau sujet ? <input id="newSubject" type="checkbox">
            <span class="lever"></span>
          </label>
        </div>
        <!-- Ajout autoCompleteComponent -->
      </form>

      <ul id="listSubjects"></ul>

    </section>
  `
}
