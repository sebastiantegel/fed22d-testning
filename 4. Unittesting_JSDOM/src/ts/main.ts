export function init() {
  document.getElementById("search")?.addEventListener("click", () => {
    let textFromUser = (
      document.getElementById("searchword") as HTMLInputElement
    ).value;

    exports.handleClick(textFromUser);
  });
}

export function handleClick(text: string) {
  if (text !== "") {
    let result = document.getElementById("result");
    if (result) {
      result.innerHTML = text;
    }
  }
}
