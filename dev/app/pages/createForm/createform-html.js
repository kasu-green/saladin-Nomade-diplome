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

    <section id="createform" class="flex flex-column align-center just-center">

      <a id="navigate_back" class="waves-effect waves-light btn-flat self-start">
        <i class="material-icons left">navigate_before</i>
        Retour
      </a>

      <form id="searchForm" action="" class="flex flex-column align-stretch">
        <!-- Switch -->
        <div class="switch">
          <label class="flex just-between align-base">
            Créer un nouveau sujet ? <input id="newSubject" type="checkbox">
            <span class="lever"></span>
          </label>
        </div>

        <!-- Ajout autoCompleteComponent -->

        <!-- Ajout datePickerComponent -->

        <!-- Ajout jours de la selection -->

      </form>

    </section>
  `
}
