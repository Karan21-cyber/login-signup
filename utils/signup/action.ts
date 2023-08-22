export function setCookie(name: string, value: any, days: number): void {
  const expires = new Date();
  expires.setDate(expires.getDate() + days);

  // Convert the object value to a JSON string
  const valueJSON = JSON.stringify(value);

  // Set the cookie with the appropriate attributes
  document.cookie = `${name}=${encodeURIComponent(
    valueJSON
  )};expires=${expires.toUTCString()};path=/`;
}

export function getCookie(name: string) {
  const cookieString = decodeURIComponent(document.cookie);
  const cookies = cookieString.split(";");
  
  for(const cookie of cookies){
    var arrayCookie = cookie.split("=");
    if(arrayCookie[0].trim() === name){
      return arrayCookie[1];
    }  
  }
  return null;
}
