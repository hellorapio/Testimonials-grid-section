type Testmonials = {
  name: string;
  src: string;
  title: string;
  body: string;
}[]

let titles = document.querySelectorAll(".title") as NodeListOf<HTMLParagraphElement>,
    srcs = document.querySelectorAll("img") as NodeListOf<HTMLImageElement>,
    names = document.querySelectorAll("h3") as NodeListOf<HTMLHeadingElement>,
    bodies = document.querySelectorAll(".description") as NodeListOf<HTMLParagraphElement>;

const data = async (url: string): Promise<Testmonials> => {
  const data2 = await fetch(url);
  return await data2.json();
}

(async function () {
  let response:Testmonials = await data(`./content.json`);

  for (let i = 0; i < response.length; i++) {
    titles[i].textContent = response[i].title;
    srcs[i].src = response[i].src;
    srcs[i].alt = response[i].name;
    names[i].textContent = response[i].name;
    bodies[i].textContent = response[i].body;
  }
})()