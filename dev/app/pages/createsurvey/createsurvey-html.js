export function CreateSurveyHTML(data){
  return `
    <header>
      <nav class="flex align-center just-between">
        <div class="flex">
          <img src="../src/img/salad.png" alt="logo Saladin">
          <h2 class="self-center">Calculateur</h2>
        </div>
        <div class="flex">
          <div id="btnLinksList"></div>
          <button id="logout">logout</button>
        </div>
      </nav>
      <aside>
        <h3>Jour Selectionné</h3>
        <p>Moyenne des kcals et autres nutriments</p>
      </aside>
    </header>

    <section id="createsurvey" class="flex flex-column align-center just-center">

      <a id="navigate_back" class="waves-effect waves-light btn-flat self-start">
        <i class="material-icons left">navigate_before</i>
        Retour
      </a>

      <form id="searchForm" action="" class="flex flex-column align-stretch">

        <!-- Ajout autoCompleteComponent -->

        <!-- Ajout datePickerComponent -->

        <!-- Ajout jours de la selection -->

      </form>

    </section>
  `
}
