export function getLanguage() {
  let language = sessionStorage.getItem("lang");
  return language ? language : "pl" ;
}

export function getLocale(page) {
  const language = getLanguage();
  return  require(`locale/${language}/${page}.json`);
}
export default getLocale;