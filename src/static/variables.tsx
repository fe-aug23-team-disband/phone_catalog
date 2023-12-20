interface TypeVariables {
  //patch
  patchToHome: string;
  patchToPhones: string;
  patchToTablets: string;
  patchToAccessories: string;
  //page themes
  themeDark: string;
  themeLight: string;
}

//patch
const patchToHome = "/";
const patchToPhones = "/phones?page=0&limit=16";
const patchToTablets = "/tablets?page=0&limit=16";
const patchToAccessories = "/accessories?page=0&limit=16";
//page themes
const themeDark = "dark";
const themeLight = "light";

const globalVariables: TypeVariables = {
  //patch
  patchToHome,
  patchToPhones,
  patchToTablets,
  patchToAccessories,
  //page themes
  themeDark,
  themeLight
};
export default globalVariables;
