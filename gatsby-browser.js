/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react"
import { FirebaseContext } from "./src/utils/FirebaseContext"
import Firebase from "./src/utils/Firebase"

export const wrapRootElement = ({ element }) => (
  <FirebaseContext.Provider value={new Firebase()}>
    {element}
  </FirebaseContext.Provider>
)
