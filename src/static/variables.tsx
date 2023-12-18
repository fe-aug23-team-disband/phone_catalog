interface TypeVariables {
  //patch
  patchToHome: string;
  patchToPhones: string;
  patchToTablets: string;
  patchToAccessories: string;
}

//patch
const patchToHome = "/";
const patchToPhones = "/phones?page=0&limit=16";
const patchToTablets = "/tablets?page=0&limit=16";
const patchToAccessories = "/accessories?page=0&limit=16";

const globalVariables: TypeVariables = {
  //patch
  patchToHome,
  patchToPhones,
  patchToTablets,
  patchToAccessories
};
export default globalVariables;
