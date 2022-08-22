import jwt_decode from "jwt-decode";
import { RefObject } from "react";
import { GOOGLE_AUTH_URL } from "../OAuth";

export interface Composable {
  init(): void;
  render(): void;
  handleCallbackResponse(response: object | any): void;
}

export default class GoogleOauth implements Composable {
  constructor(
    private width: string,
    private shape: string,
    private btn: HTMLElement | null
  ) {}

  handleCallbackResponse(response: object | any): void {
    console.log("Encoded JWT ID token : " + response.credential);
    let userObj: JSON = jwt_decode(response.credential);
    console.log(userObj);

    if (userObj) {
      window.location.href = GOOGLE_AUTH_URL;
    }
  }

  init(): void {
    window.google.accounts.id.initialize({
      client_id:
        "207947649222-dg6cnt4v9mgfh094d28t2a0544s50uk1.apps.googleusercontent.com",
      callback: this.handleCallbackResponse,
    });
  }

  render(): void {
    window.google.accounts.id.renderButton(this.btn, {
      width: this.width,
      shap: this.shape,
    });
    window.google.accounts.id.prompt();
  }
}
