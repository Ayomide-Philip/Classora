import { codeList } from "./codeList";

export default async function generateJoinCode(shortName) {
  const codeLength = 6;
  let code = "";

  for (let i = 0; i < codeLength; i++) {
    code += codeList[Math.floor(Math.random() * codeList.length)];
  }

  return `${shortName}-${code}`;
}
