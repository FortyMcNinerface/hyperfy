import React from 'react'

import { questgiver } from './Erika'

/**
 * To create your own emotive NPCs with dialog and quests, follow along
 * with the code below.
 *
 * `Erika.js` contains code unique to the NPC, including the dialog flow,
 * quest item placement and behaviours.
 *
 * `Dialog.js` is the entire logic for dialog boxes. You dont have to edit
 * this but its there if you need to change the background image or add additional
 * features.
 */

export default function Environment() {
  return (
    <environment>
      <Erica position={[0, 0, 0]} teddyPosition={[0, 0, 3]} />

    </environment>
  )
}
