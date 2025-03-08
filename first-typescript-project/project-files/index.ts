const greetingMessage: string = "Hello, TypeScript world!";
const heading = document.getElementById("greeting");

if (heading) {
    heading.innerText = greetingMessage;
}