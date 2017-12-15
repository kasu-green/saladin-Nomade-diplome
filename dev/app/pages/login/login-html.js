export function LoginHTML(data){
  return `
    <header>
      <nav class="flex align-center just-start">
          <img src="../src/img/salad.png" alt="logo Saladin">
          <h2 class="self-center">Se Connecter</h2>
      </nav>
    </header>

    <section class="cover flex flex-column align-center just-center">

      <h1>Bienvenu sur Saladin !</h1>
      <form id="loginForm" class="flex flex-column">
        <input class="email" type="email" placeholder="email">
        <input class="password" type="password" placeholder="password">
        <button class="submit" type="submit">Se connecter</button>
        <p id="switchForm">
          Si vous ne possédez pas de compte,<br>
          <span class="underline">cliquez-ici</span>
        </p>
      </form>

    </section>
  `
}
