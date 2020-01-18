import Fire from "../Fire";

export const loginWithFacebook = async () => {
  Fire.shared.createUserWithFacebook();
};

export const emailSignUp = ({ email, password, username }) => {
  Fire.shared.createUserWithEmail({ email, password, username });
};
