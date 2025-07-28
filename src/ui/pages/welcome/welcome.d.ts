declare module "welcome/Welcome" {
  import type { WelcomeProps } from "welcome";
  import React from "react";

  const Welcome: React.FC<WelcomeProps>;

  export default Welcome;
}
