const messages = [
  "Acredite em si mesmo e siga em frente. Você é capaz de alcançar tudo o que deseja.",
  "A vida é uma jornada, aproveite cada passo e aprenda com cada obstáculo.",
  "Não tenha medo de tentar coisas novas. As melhores coisas da vida acontecem fora da sua zona de conforto.",
  "Você é o autor da sua própria história. Escreva um final feliz.",
  "You will have sex with your mother.",
  "O sucesso vem para aqueles que perseveram. Não desista facilmente.",
  "Um sorriso pode iluminar o dia de alguém. Espalhe alegria onde quer que vá.",
  "Mantenha sua mente aberta e sua curiosidade viva. Aprenda algo novo todos os dias.",
  "A sorte é o que acontece quando a preparação encontra a oportunidade. Esteja sempre pronto para o que o futuro reserva.",
  "Não se preocupe com o passado ou com o futuro. Viva o momento presente e desfrute de cada segundo.",
];

let randomNumber = Math.floor(Math.random() * 10);

const cookie = document.querySelector(".cookieImg");
const newCookieButton = document.querySelector(".newCookieButton");

function pageToggle() {
  const screen1 = document.querySelector(".screen1").classList.toggle("hide");
  const screen2 = document.querySelector(".screen2").classList.toggle("hide");
  const messageText = (document.querySelector("#cookieMessage").innerText =
    messages[randomNumber]);
  randomNumber = Math.floor(Math.random() * 10);
}

cookie.addEventListener("click", pageToggle);
newCookieButton.addEventListener("click", pageToggle);
