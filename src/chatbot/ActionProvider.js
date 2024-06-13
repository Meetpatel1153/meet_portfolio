class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage
    this.setState = setStateFunc
  }

  handleGreeting = () => {
    const greetingMessage = this.createChatBotMessage(
      "How can I assist you today?"
    )
    this.addMessageToState(greetingMessage)
    const optionsMessage = this.createChatBotMessage(
      "You can ask about my skills, projects, or how to contact me.",
      {
        widget: "options",
      }
    )
    this.addMessageToState(optionsMessage)
  }

  handleSkills = () => {
    const message = this.createChatBotMessage(
      <div>
        <p>Here are some of my skills:</p>
        <ul>
          <li>Javascript</li>
          <li>React</li>
          <li>Material-UI</li>
          <li>Next.js</li>
          <li>Redux</li>
          <li>Tailwind CSS</li>
        </ul>
      </div>
    )
    this.addMessageToState(message)
  }

  handleProjects = () => {
    const message = this.createChatBotMessage(
      <div>
        <p>Here are some of my project:</p>
        <ul>
          <li>Hotel Management System</li>
          <li>Product management</li>
          <li>Weather app</li>
          <li>E-shop</li>
          <li>Post management system</li>
        </ul>
      </div>
    )
    this.addMessageToState(message)
  }

  handleContact = () => {
    const message = this.createChatBotMessage(
      <div>
        <p>You can contact me via:</p>
        <ul>
          <li>
            <a
              href='https://wa.me/9173378175'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500 hover:text-green-600   mx-2'
            >
              WhatsApp
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/meet-patel-644ba923a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500 hover:text-green-600   mx-2'
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    )

    this.addMessageToState(message)
  }

  handleUnknown = () => {
    const message = this.createChatBotMessage(
      "I'm sorry, I didn't understand that. Please ask about my skills, projects, or how to contact me."
    )
    this.addMessageToState(message)
  }

  handleOk = () => {
    const message = this.createChatBotMessage(
      "Thank you for your kind interaction."
    )
    this.addMessageToState(message)
  }

  handleThank = () => {
    const message = this.createChatBotMessage("Your Welcome.Visit Again.")
    this.addMessageToState(message)
  }
  handleAge = () => {
    const message = this.createChatBotMessage("21")
    this.addMessageToState(message)
  }

  handleAvailable = () => {
    const message = this.createChatBotMessage(
      "Feel free to leave a message, and I'll get back to you as soon as possible."
    )
    this.addMessageToState(message)
  }

  handleAbout = () => {
    const message = this.createChatBotMessage(
      "I am a software developer passionate about creating innovative solutions."
    )
    this.addMessageToState(message)
  }

  addMessageToState = (message) => {
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }))
  }
}

export default ActionProvider