export function getLanguage() {
  let language = sessionStorage.getItem("lang");
  if (!language) {
    language = "pl";
  }
  return language;
}

export default function getLocale(page) {
  const language = getLanguage();
  return  require(`locale/${language}/${page}.json`);
}