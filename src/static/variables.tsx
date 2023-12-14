interface TypeVariables {
  //patch
  patchToHome: string;
  patchToPhones: string;
  patchToTablets: string;
  patchToAccessories: string;
}

//patch
const patchToHome = "/";
const patchToPhones = "/products?category=phones";
const patchToTablets = "/products?category=tablets";
const patchToAccessories = "/products?category=accessories";

const globalVariables: TypeVariables = {
  //patch
  patchToHome,
  patchToPhones,
  patchToTablets,
  patchToAccessories
};
export default globalVariables;
