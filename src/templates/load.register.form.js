const LoadRegisterForm = () => {
  const template = `
    <div class="form-login-container">
      <div class="form-login">
        <div><img src="https://i.imgur.com/dFQdrud.png" /></div>
        <form>
          <input type="text" placeholder="Usuario" />
          <input type="password" placeholder="Contraseña" />
          <button>Iniciar Sesión</button>
        </form>
      </div>
    </div>
    <div class="notify-container"></div>
  `
  const section = document.getElementsByTagName('section')[0]
  section.innerHTML = template
}

export { LoadRegisterForm }
